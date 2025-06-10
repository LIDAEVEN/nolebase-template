const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const notesDir = path.resolve(__dirname, '../笔记');
const output = path.resolve(__dirname, '../.vitepress/latest.json');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push({ filePath, mtime: stat.mtime });
    }
  });
  return results;
}

const files = getAllMarkdownFiles(notesDir);
const posts = files.map(({ filePath, mtime }) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, excerpt } = matter(content, { excerpt: true });
  return {
    title: data.title || path.basename(filePath, '.md'),
    mtime: mtime.toISOString(),
    url: filePath.replace(notesDir, '/笔记').replace(/\\/g, '/').replace('.md', ''),
    tags: data.tags || [],
    category: data.category || '',
    excerpt: excerpt || ''
  };
}).sort((a, b) => new Date(b.mtime) - new Date(a.mtime))
  .reverse()
  .slice(0, 5);

fs.writeFileSync(output, JSON.stringify(posts, null, 2));
console.log('最新文章已生成（按最后编辑时间）'); 