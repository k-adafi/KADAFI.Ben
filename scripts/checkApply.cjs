const fs = require('fs');
const postcss = require('postcss');
const path = require('path');
const cssPath = path.join(__dirname, '..', 'src', 'index.css');
const css = fs.readFileSync(cssPath, 'utf8');
const root = postcss.parse(css);
const applies = [];
root.walkAtRules('apply', r => {
  applies.push({
    parentType: r.parent ? r.parent.type : '<undefined>',
    parentName: r.parent && r.parent.name ? r.parent.name : (r.parent && r.parent.selector ? r.parent.selector : null),
    parentNodesCount: r.parent && r.parent.nodes ? r.parent.nodes.length : null,
    source: r.source || null
  });
});
console.log(JSON.stringify(applies, null, 2));

// Try invoking Tailwind's partitionApplyAtRules to reproduce the runtime behavior
try {
  const partition = require('../node_modules/tailwindcss/lib/lib/partitionApplyAtRules').default || require('../node_modules/tailwindcss/lib/lib/partitionApplyAtRules');
  console.log('\nRunning partitionApplyAtRules...');
  partition()(root);
  console.log('partitionApplyAtRules completed without throwing');
} catch (err) {
  console.error('partitionApplyAtRules threw:');
  console.error(err && err.stack ? err.stack : err);
}
