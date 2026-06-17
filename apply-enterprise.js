const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== 'dist') walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

let fileCount = 0;
walkDir(path.join(__dirname, 'src'), (p) => {
  if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.jsx') || p.endsWith('.js')) {
    let content = fs.readFileSync(p, 'utf8');
    let original = content;

    // Radius replacements
    content = content.replace(/\brounded-(sm|md|lg|xl|2xl|3xl|full)\b/g, 'rounded-[1px]');
    content = content.replace(/\brounded-[trblxy]-(sm|md|lg|xl|2xl|3xl|full)\b/g, 'rounded-[1px]');
    content = content.replace(/\brounded\b(?!\-\[)/g, 'rounded-[1px]');
    content = content.replace(/rounded-\[1px\]-\[1px\]/g, 'rounded-[1px]');

    // Excessive shadows to none or sm
    content = content.replace(/\bshadow-(md|lg|xl|2xl|inner)\b/g, 'shadow-sm');
    
    // Convert large translate Y to 1px
    content = content.replace(/\b(hover|group-hover):-translate-y-[1234]\b/g, '$1:-translate-y-[1px]');
    
    // Remove scale bounce
    content = content.replace(/\b(hover|group-hover):scale-1[0-9]{2}\b/g, '');
    
    // Enhance borders if needed: Many items were relying on shadows. If they have shadow-sm they should probably have a faint border.
    // Rather than indiscriminately adding borders to all shadow-sm items, we trust existing borders or the enterprise standard.

    if (content !== original) {
      fs.writeFileSync(p, content, 'utf8');
      fileCount++;
    }
  }
});

console.log(`Updated ${fileCount} files.`);
