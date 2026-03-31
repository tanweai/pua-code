const fs = require('fs');
const code = fs.readFileSync('package/cli.js', 'utf8');

// 1. Find kairosActive:!1 (false) → change to !0 (true)
console.log('=== kairosActive state init ===');
let ki = code.indexOf('kairosActive:!1');
if (ki >= 0) console.log('Found at char ' + ki + ': ...' + code.substring(ki-40, ki+40) + '...');
ki = code.indexOf('kairosActive:!0');
if (ki >= 0) console.log('Already true at char ' + ki);

// 2. Find userMsgOptIn:!1
console.log('\n=== userMsgOptIn state init ===');
let umi = code.indexOf('userMsgOptIn:!1');
if (umi >= 0) console.log('Found at char ' + umi + ': ...' + code.substring(umi-20, umi+40) + '...');

// 3. Find isProactiveActive patterns
console.log('\n=== isProactiveActive patterns ===');
let idx = 0;
while (true) {
  idx = code.indexOf('isProactiveActive', idx);
  if (idx === -1) break;
  console.log('At ' + idx + ': ...' + code.substring(idx-40, idx+60) + '...');
  idx += 20;
}

// 4. Find USER_TYPE checks
console.log('\n=== USER_TYPE checks ===');
idx = 0;
while (true) {
  idx = code.indexOf('USER_TYPE', idx);
  if (idx === -1) break;
  let start = Math.max(0, idx - 60);
  let end = Math.min(code.length, idx + 80);
  let snippet = code.substring(start, end);
  if (snippet.includes('process.env') || snippet.includes('ant')) {
    console.log('At ' + idx + ': ...' + snippet + '...');
  }
  idx += 10;
}

// 5. Find coral_reef
console.log('\n=== coral_reef ===');
idx = code.indexOf('coral_reef');
if (idx >= 0) console.log('At ' + idx + ': ...' + code.substring(idx-60, idx+80) + '...');

// 6. Find DISABLE_ env vars
console.log('\n=== PUA_CODE_DISABLE_ flags ===');
const disableRegex = /PUA_CODE_DISABLE_[A-Z_]+/g;
let match;
const disables = new Set();
while ((match = disableRegex.exec(code)) !== null) {
  disables.add(match[0]);
}
console.log([...disables].sort().join('\n'));

// 7. Find FINGERPRINT_SALT or fingerprint salt value
console.log('\n=== fingerprint salt ===');
idx = code.indexOf('59cf53e54c78');
if (idx >= 0) console.log('Salt found at ' + idx + ': ...' + code.substring(idx-40, idx+60) + '...');
else console.log('Salt 59cf53e54c78 NOT FOUND');

idx = code.indexOf('computeFingerprint');
if (idx >= 0) console.log('computeFingerprint at ' + idx + ': ...' + code.substring(idx-20, idx+80) + '...');

// 8. Find afkModeHeaderLatched
console.log('\n=== afk mode ===');
idx = code.indexOf('afkModeHeaderLatched');
if (idx >= 0) console.log('At ' + idx + ': ...' + code.substring(idx-20, idx+60) + '...');

// 9. Find strictToolResultPairing
console.log('\n=== strictToolResultPairing ===');
idx = code.indexOf('strictToolResultPairing:!1');
if (idx >= 0) console.log('Found false at ' + idx);

// 10. Count all !1 and !0 in state initialization block
console.log('\n=== State init block ===');
let stateStart = code.indexOf('kairosActive:');
if (stateStart >= 0) {
  let blockStart = code.lastIndexOf('{', stateStart);
  let depth = 1;
  let pos = blockStart + 1;
  while (depth > 0 && pos < code.length) {
    if (code[pos] === '{') depth++;
    if (code[pos] === '}') depth--;
    pos++;
  }
  let stateBlock = code.substring(blockStart, pos);
  console.log('State block (' + stateBlock.length + ' chars):');
  console.log(stateBlock.substring(0, 800) + '...');
}
