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
      results.push(filePath);
    }
  });
  return results;
}

const files = getAllMarkdownFiles(notesDir);
const posts = files.map(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const { data, excerpt } = matter(content, { excerpt: true });
  return {
    title: data.title || path.basename(file, '.md'),
    date: data.date || '',
    url: file.replace(notesDir, '/笔记').replace(/\\/g, '/').replace('.md', ''),
    tags: data.tags || [],
    category: data.category || '',
    excerpt: excerpt || ''
  };
}).filter(post => post.date)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 5);

fs.writeFileSync(output, JSON.stringify(posts, null, 2));
console.log('最新文章已生成'); 