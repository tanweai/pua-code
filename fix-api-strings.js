/**
 * PUA Code API String Fixer
 * Restores API protocol strings that were broken by the global sed replacement.
 * Only restores strings needed for API communication — keeps branding as PUA.
 *
 * Categories:
 * 1. Domain names (*.pua.com → *.anthropic.com)
 * 2. Model names (pua-sonnet/opus/haiku → claude-*)
 * 3. HTTP headers (pua-version/beta → anthropic-*)
 * 4. API paths (pua_cli → claude_cli)
 * 5. Bedrock prefix (us.pua. → us.anthropic.)
 */

const fs = require('fs');
const path = require('path');

const CLI_PATH = path.join(__dirname, 'package/cli.js');
let code = fs.readFileSync(CLI_PATH, 'utf8');
let patchCount = 0;

function fix(name, search, replace) {
  const count = code.split(search).length - 1;
  if (count === 0) {
    console.log(`[SKIP] ${name}: not found`);
    return;
  }
  code = code.split(search).join(replace);
  console.log(`[FIX]  ${name}: ${count} locations`);
  patchCount++;
}

console.log('=== PUA Code API String Fixer ===\n');

// === 1. DOMAIN NAMES ===
console.log('--- Domain Names ---');
fix('api.anthropic.com',         'api.pua.com',          'api.anthropic.com');
fix('api-staging.anthropic.com', 'api-staging.pua.com',  'api-staging.anthropic.com');
fix('platform.anthropic.com',    'platform.pua.com',     'platform.anthropic.com');
fix('mcp-proxy.anthropic.com',   'mcp-proxy.pua.com',    'mcp-proxy.anthropic.com');
fix('status.anthropic.com',      'status.pua.com',       'status.anthropic.com');
fix('support.anthropic.com',     'support.pua.com',      'support.anthropic.com');
fix('docs.anthropic.com',        'docs.pua.com',         'docs.anthropic.com');
fix('code.anthropic.com',        'code.pua.com',         'code.anthropic.com');
fix('www.anthropic.com',         'www.pua.com',          'www.anthropic.com');

// === 2. BEDROCK PREFIX (must run before model names) ===
console.log('\n--- Bedrock Prefix ---');
fix('us.anthropic.',             'us.pua.',              'us.anthropic.');

// === 3. MODEL NAMES ===
// Restore all pua-{model} → claude-{model}
// Order: longer patterns first to prevent partial replacement
console.log('\n--- Model Names ---');
fix('claude-3-7-sonnet',  'pua-3-7-sonnet',  'claude-3-7-sonnet');
fix('claude-3-5-sonnet',  'pua-3-5-sonnet',  'claude-3-5-sonnet');
fix('claude-3-5-haiku',   'pua-3-5-haiku',   'claude-3-5-haiku');
fix('claude-sonnet-4',    'pua-sonnet-4',     'claude-sonnet-4');
fix('claude-sonnet-3',    'pua-sonnet-3',     'claude-sonnet-3');
fix('claude-opus-4',      'pua-opus-4',       'claude-opus-4');
fix('claude-haiku-4',     'pua-haiku-4',      'claude-haiku-4');
fix('claude-haiku-3',     'pua-haiku-3',      'claude-haiku-3');
// Catch remaining short patterns
fix('claude-haiku',       'pua-haiku',        'claude-haiku');
fix('claude-sonnet',      'pua-sonnet',       'claude-sonnet');
fix('claude-opus',        'pua-opus',         'claude-opus');

// === 4. HTTP HEADERS ===
console.log('\n--- HTTP Headers ---');
fix('anthropic-version',  'pua-version',      'anthropic-version');
fix('anthropic-beta',     'pua-beta',         'anthropic-beta');
fix('x-anthropic-',       'x-pua-',           'x-anthropic-');

// === 5. API PATHS ===
console.log('\n--- API Paths ---');
fix('claude_cli',         'pua_cli',          'claude_cli');

// === WRITE FIXED FILE ===
console.log(`\n=== Total fixes applied: ${patchCount} ===`);

fs.writeFileSync(CLI_PATH, code, 'utf8');
console.log('Fixed file written to: ' + CLI_PATH);

// === VERIFICATION ===
const verify = fs.readFileSync(CLI_PATH, 'utf8');
console.log('\n=== Verification ===');
console.log('api.anthropic.com present:', verify.includes('api.anthropic.com'));
console.log('platform.anthropic.com present:', verify.includes('platform.anthropic.com'));
console.log('claude-sonnet-4-6 present:', verify.includes('claude-sonnet-4-6'));
console.log('claude-opus-4-6 present:', verify.includes('claude-opus-4-6'));
console.log('anthropic-version present:', verify.includes('anthropic-version'));
console.log('anthropic-beta present:', verify.includes('anthropic-beta'));
console.log('x-anthropic- present:', verify.includes('x-anthropic-'));
console.log('claude_cli present:', verify.includes('claude_cli'));
console.log('us.anthropic. present:', verify.includes('us.anthropic.'));

// Check nothing broken
console.log('\n=== Branding preserved ===');
console.log('PUA Code still present:', verify.includes('PUA Code'));
console.log('USER_TYPE=ant still present:', verify.includes('process.env.USER_TYPE="ant"'));
console.log('kairosActive:!0 still present:', verify.includes('kairosActive:!0'));

// Check for remaining pua.com (should be none)
const remainingPuaDomains = verify.match(/[a-z0-9-]+\.pua\.com/g);
if (remainingPuaDomains) {
  console.log('\n⚠️  Remaining *.pua.com domains:', [...new Set(remainingPuaDomains)]);
} else {
  console.log('\n✅ No remaining *.pua.com domains');
}

// Check for remaining pua- model names
const remainingPuaModels = verify.match(/pua-(?:sonnet|opus|haiku|3-[0-9])/g);
if (remainingPuaModels) {
  console.log('⚠️  Remaining pua- model names:', [...new Set(remainingPuaModels)]);
} else {
  console.log('✅ No remaining pua- model names');
}
