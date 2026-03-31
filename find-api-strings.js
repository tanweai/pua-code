const code = require('fs').readFileSync('package/cli.js','utf8');

// Find all *.pua.com domains
const domainRegex = /[a-z0-9-]+\.pua\.com/g;
let match;
const domains = new Set();
while((match = domainRegex.exec(code)) !== null) {
  domains.add(match[0]);
}
console.log('Domains found:');
[...domains].sort().forEach(d => console.log(' ', d));

// Find all pua- model name patterns
const modelRegex = /pua-(?:sonnet|opus|haiku|3-[0-9])[a-z0-9@._-]*/g;
const models = new Set();
while((match = modelRegex.exec(code)) !== null) {
  models.add(match[0]);
}
console.log('\nModel name patterns:');
[...models].sort().forEach(m => console.log(' ', m));

// Find pua_cli API paths
const cliRegex = /pua_cli[a-z_]*/g;
const cliPaths = new Set();
while((match = cliRegex.exec(code)) !== null) {
  cliPaths.add(match[0]);
}
console.log('\npua_cli patterns:');
[...cliPaths].sort().forEach(p => console.log(' ', p));

// Find pua-version, pua-beta headers
console.log('\nHeader patterns:');
['pua-version', 'pua-beta', 'x-pua-'].forEach(h => {
  let count = code.split(h).length - 1;
  console.log(`  ${h}: ${count} occurrences`);
});
