---
tags:
  - sql
  - 数据库
  - 工作
comment: false
---

# MySQL 数据库按日期去重保留最新数据

设置
```
---
comment: false
---
```


## 1 本地环境情况

| 项目                  | 值                                                                |
|-----------------------|-------------------------------------------------------------------|
| 处理器                | Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz   2.00 GHz               |
| 机带 RAM              | 32.0 GB (31.9 GB 可用)                                            |
| 系统类型              | 64 位操作系统, 基于 x64 的处理器                                  |
| 版本                  | Windows 11 专业版                                                 |
| 版本号                | 24H2                                                              |
| 操作系统版本          | 26100.4061                                                        |
| 数据库                | MySql 8.0.40（字符集：utf8mb4，排序规则：utf8mb4_general_ci）     |

## 2 问题说明
A 公司有两百多个项目，项目有一个或多个小组，报表系统每半小时记录每个小组的业绩情况，涉及小组信息描述、业绩描述共二十余个字段。为降低数据量，数据库只保留每日最后一版数据，保存在表`s_hk_hkrb`中，共有 79 万行。某些日期系统异常，部分项目留存了多版数据，造成数据重复。

相关字段如下：
```sql

  `projguid` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '项目guid',
  `projname` varchar(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '项目',
  `stageguid` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '小组guid',
  `stagename` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '小组名称',
  
  `klhk` decimal(50,5) DEFAULT NULL COMMENT '开累回款',
  `datetime` datetime DEFAULT NULL COMMENT '数据刷新时间',
  
  `statdate` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '时间分区',
  ```
【数据刷新时间】：每半小时更新一次
【时间分区】：每个小组每日留存
当前出现的问题即是某个小组某个时间分区出现了多个数据刷新时间，需只保留最后一次刷新时间。

## 3 解决方法
```sql
SELECT t.* --表示选择原始表中的所有字段
FROM s_hk_hkrb t --将原始数据表 s_hk_hkrb 用别名 t 表示
JOIN (
    SELECT 
        stagename,
        DATE(`datetime`) AS date_part, --DATE(datetime) 函数从完整时间戳（如 2025-05-28 18:30:00）中提取日期部分（2025-05-28）
        MAX(`datetime`) AS max_datetime
    FROM s_hk_hkrb
    GROUP BY stagename, DATE(`datetime`)
) AS grouped 
ON t.stagename = grouped.stagename 
   AND t.`datetime` = grouped.max_datetime;
```

### 3.1 子查询部分：
- 按stagename和DATE(datetime)分组（即按项目和日期分组）
- 对每个分组计算最大时间戳MAX(datetime)
- 返回每个分组的stagename、date_part（日期部分）和max_datetime（该日最新时间）
```shell
stagename | date_part  | max_datetime
----------+------------+-------------------
小组A     | 2025-05-28 | 2025-05-28 18:30:00
小组B     | 2025-05-28 | 2025-05-28 20:30:00
```
### 3.2 主查询部分：
- 将原表`s_hk_hkrb`与子查询结果`grouped`进行连接
- 连接条件：
 - 项目名称相同（`t.stagename = grouped.stagename`）
 - 时间戳等于该日最大时间戳（`t.datetime = grouped.max_datetime`）
 - 返回原表的所有字段*
## 4 性能
### 4.1 EXPLAIN ANALYZE
运行时间：21.995s，性能分析如下：
```shell
-> Inner hash join (grouped.max_datetime = t.`datetime`), (grouped.stagename = t.stagename)  (cost=110e+6 rows=0) (actual time=11181..19662 rows=516690 loops=1)
    -> Table scan on grouped  (cost=2.5..2.5 rows=0) (actual time=5369..5420 rows=514649 loops=1)
        -> Materialize  (cost=0..0 rows=0) (actual time=5369..5369 rows=514649 loops=1)
            -> Table scan on <temporary>  (actual time=5108..5160 rows=514649 loops=1)
                -> Aggregate using temporary table  (actual time=5108..5108 rows=514649 loops=1)
                    -> Table scan on s_hk_hkrb  (cost=118375 rows=740232) (actual time=0.0353..3533 rows=794057 loops=1)
    -> Hash
        -> Table scan on t  (cost=118375 rows=740232) (actual time=0.0397..4386 rows=794057 loops=1)
```
### 4.2 存在问题
1. 全表扫描：对 s_hk_hkrb 表进行了两次全量扫描（rows=794057）
2. 临时表和文件排序：使用了临时表进行分组聚合（Aggregate using temporary table）
3. 哈希连接开销：使用 Inner hash join 连接两个大结果集
## 5 优化
### 5.1 添加索引
```sql
ALTER TABLE s_hk_hkrb ADD INDEX idx_datetime_stage (`datetime`, stagename); --将高选择性列放在前面
```
添加索引后运行时间：21.201s，优化并不明显，继续优化

### 5.2 强制使用哈希连接
```sql
SELECT /*+ HASH_JOIN(t grouped) */ t.*
FROM s_hk_hkrb t
JOIN (
    SELECT 
        stagename,
        DATE(`datetime`) AS date_part,
        MAX(`datetime`) AS max_datetime
    FROM s_hk_hkrb
    GROUP BY stagename, DATE(`datetime`)
) AS grouped 
ON t.stagename = grouped.stagename 
   AND t.`datetime` = grouped.max_datetime;
```
强制使用哈希连接后（仍有索引）

第一次运行时间：19.681s，略微优化

第二次运行时间：19.356s
