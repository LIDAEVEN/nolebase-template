=IFERROR(
    INDEX(
        Sheet2!$A$2:$F$100,
        SMALL(
            IF(
                (Sheet2!$B$2:$B$100=$A$1) * (Sheet2!$C$2:$C$100=$B$1),
                ROW(Sheet2!$A$2:$A$100) - ROW(Sheet2!$A$2) + 1,
                ""
            ),
            ROW(A1)
        ),
        COLUMN(A1)
    ),
    ""
)


=IFERROR(
    INDEX(
        Sheet2!$A$2:$F$100,
        SMALL(
            IF(
                ($A$1="" OR Sheet2!$B$2:$B$100=$A$1) *
                ($B$1="" OR Sheet2!$C$2:$C$100=$B$1),
                ROW(Sheet2!$A$2:$A$100) - ROW(Sheet2!$A$2) + 1,
                ""
            ),
            ROW(A1)
        ),
        COLUMN(A1)
    ),
    ""
)


=IFERROR(
    INDEX(
        Sheet2!$A$2:$F$100,
        SMALL(
            IF(
                ($A$1="" OR Sheet2!$B$2:$B$100=$A$1) *
                ($B$1="" OR Sheet2!$C$2:$C$100=$B$1) *
                ($C$1="" OR Sheet2!$D$2:$D$100=$C$1),
                ROW(Sheet2!$A$2:$A$100) - ROW(Sheet2!$A$2) + 1,
                ""
            ), 
            ROW(A1)
        ), 
        COLUMN(A1)
    ), 
    ""
)

=IFERROR(
    INDEX(
        Sheet2!$A:$F,
        SMALL(
            IF(
                (TRIM($A$1)="" OR TRIM(Sheet2!$B:$B)=TRIM($A$1)) * 
                (TRIM($B$1)="" OR TRIM(Sheet2!$C:$C)=TRIM($B$1)) * 
                (TRIM($C$1)="" OR TRIM(Sheet2!$D:$D)=TRIM($C$1)), 
                ROW(Sheet2!$A:$A) - ROW(Sheet2!$A$2) + 1, 
                9^9
            ), 
            ROW(A1)
        ), 
        COLUMN(A1)
    ), 
    ""
)

=IFERROR(
    INDEX(
        Sheet2!$A$2:$F$1000,
        SMALL(
            IF(
                (TRIM($A$1)="" OR TRIM(Sheet2!$B$2:$B$1000)=TRIM($A$1)) * 
                (TRIM($B$1)="" OR TRIM(Sheet2!$C$2:$C$1000)=TRIM($B$1)) * 
                (TRIM($C$1)="" OR TRIM(Sheet2!$D$2:$D$1000)=TRIM($C$1)), 
                ROW(Sheet2!$A$2:$A$1000) - ROW(Sheet2!$A$2) + 1, 
                1000000
            ), 
            ROW()-ROW($A$1)+1
        ), 
        COLUMN()-COLUMN($A$1)+1
    ), 
    ""
)