/**
 * PUA Code Feature Unlocker
 * Patches cli.js to enable all hidden features:
 * 1. kairosActive → true (daemon/proactive mode)
 * 2. userMsgOptIn → true (SendUserMessage tool)
 * 3. isProactiveActive stubs → return true
 * 4. USER_TYPE === 'ant' → always true (internal privileges)
 * 5. coral_reef_sonnet → always true (1M context)
 * 6. strictToolResultPairing → true
 * 7. sdkAgentProgressSummariesEnabled → true
 * 8. Remove DISABLE_ env var checks
 * 9. Patch fingerprint salt (optional)
 * 10. Patch fast mode restrictions
 */

const fs = require('fs');
const path = require('path');

const CLI_PATH = path.join(__dirname, 'package/cli.js');
let code = fs.readFileSync(CLI_PATH, 'utf8');
let patchCount = 0;

function patch(name, search, replace) {
  if (typeof search === 'string') {
    const idx = code.indexOf(search);
    if (idx === -1) {
      console.log(`[SKIP] ${name}: pattern not found`);
      return false;
    }
    code = code.split(search).join(replace);
    const count = code.split(replace).length - 1;
    console.log(`[OK]   ${name}: patched (${count} locations)`);
    patchCount++;
    return true;
  }
  // regex
  const matches = code.match(search);
  if (!matches) {
    console.log(`[SKIP] ${name}: regex not matched`);
    return false;
  }
  code = code.replace(search, replace);
  console.log(`[OK]   ${name}: patched via regex`);
  patchCount++;
  return true;
}

console.log('=== Claude Code Feature Unlocker ===\n');

// === 1. STATE INITIALIZATION FLAGS ===
// Enable kairosActive (daemon/proactive agent mode)
patch('kairosActive → true',
  'kairosActive:!1',
  'kairosActive:!0');

// Enable userMsgOptIn (SendUserMessage / Brief tool)
patch('userMsgOptIn → true',
  'userMsgOptIn:!1',
  'userMsgOptIn:!0');

// Enable strictToolResultPairing
patch('strictToolResultPairing → true',
  'strictToolResultPairing:!1',
  'strictToolResultPairing:!0');

// Enable sdkAgentProgressSummariesEnabled
patch('sdkAgentProgressSummariesEnabled → true',
  'sdkAgentProgressSummariesEnabled:!1',
  'sdkAgentProgressSummariesEnabled:!0');

// === 2. PROACTIVE/KAIROS STUBS ===
// isProactiveActive()??!1 → isProactiveActive()??!0
// This makes the fallback return true when proactiveModule is null
patch('isProactiveActive fallback → true',
  'isProactiveActive()??!1',
  'isProactiveActive()??!0');

// === 3. USER_TYPE = ANT (Internal privileges) ===
// Inject USER_TYPE=ant at the beginning of the module
// Find the state init and add env override before it
const userTypeInjection = 'process.env.USER_TYPE="ant";';
if (!code.includes(userTypeInjection)) {
  // Find the shebang line end and inject after it
  const shebangEnd = code.indexOf('\n');
  if (shebangEnd > 0) {
    code = code.substring(0, shebangEnd + 1) + userTypeInjection + '\n' + code.substring(shebangEnd + 1);
    console.log('[OK]   USER_TYPE=ant: injected at top of file');
    patchCount++;
  }
}

// === 4. CORAL REEF (1M context for Sonnet) ===
// Make coral_reef_sonnet always return true
// Original: return j8().clientDataCache?.coral_reef_sonnet==="true"
// We want this to always be true
patch('coral_reef_sonnet → always true',
  '.clientDataCache?.coral_reef_sonnet==="true"',
  '.clientDataCache?.coral_reef_sonnet==="true"||!0');

// === 5. FAST MODE — Remove disable check ===
// Original: !i6(process.env.CLAUDE_CODE_DISABLE_FAST_MODE)
// i6() returns true if var is NOT set (truthy check negated)
// So !i6(DISABLE_FAST_MODE) means: return true if DISABLE_FAST_MODE is NOT set
// We want fast mode always enabled regardless
patch('Fast mode → always available',
  'CLAUDE_CODE_DISABLE_FAST_MODE',
  'CLAUDE_CODE_DISABLE_FAST_MODE_NEVER');

// === 6. DISABLE 1M CONTEXT — Remove disable check ===
patch('1M context → always enabled',
  'CLAUDE_CODE_DISABLE_1M_CONTEXT',
  'CLAUDE_CODE_DISABLE_1M_CONTEXT_NEVER');

// === 7. DISABLE THINKING — Remove disable check ===
patch('Thinking → always enabled',
  'CLAUDE_CODE_DISABLE_THINKING',
  'CLAUDE_CODE_DISABLE_THINKING_NEVER');

// === 8. DISABLE ADAPTIVE THINKING — Remove ===
patch('Adaptive thinking → always enabled',
  'CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING',
  'CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING_NEVER');

// === 9. DISABLE BACKGROUND TASKS — Remove ===
patch('Background tasks → always enabled',
  'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS',
  'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS_NEVER');

// === 10. DISABLE AUTO MEMORY — Remove ===
patch('Auto memory → always enabled',
  'CLAUDE_CODE_DISABLE_AUTO_MEMORY',
  'CLAUDE_CODE_DISABLE_AUTO_MEMORY_NEVER');

// === 11. DISABLE CRON — Remove ===
patch('Cron → always enabled',
  'CLAUDE_CODE_DISABLE_CRON',
  'CLAUDE_CODE_DISABLE_CRON_NEVER');

// === 12. DISABLE EXPERIMENTAL BETAS — Remove ===
patch('Experimental betas → always enabled',
  'CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS',
  'CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS_NEVER');

// === 13. DISABLE COMMAND INJECTION CHECK — Keep enabled for safety ===
// NOT patching this one - security feature should stay

// === 14. DISABLE FILE CHECKPOINTING — Remove ===
patch('File checkpointing → always enabled',
  'CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING',
  'CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING_NEVER');

// === 15. DISABLE ADVISOR TOOL — Remove ===
patch('Advisor tool → always enabled',
  'CLAUDE_CODE_DISABLE_ADVISOR_TOOL',
  'CLAUDE_CODE_DISABLE_ADVISOR_TOOL_NEVER');

// === 16. DISABLE ATTACHMENTS — Remove ===
patch('Attachments → always enabled',
  'CLAUDE_CODE_DISABLE_ATTACHMENTS',
  'CLAUDE_CODE_DISABLE_ATTACHMENTS_NEVER');

// === 17. Version string — verify original branding intact ===
if (code.includes('Claude Code') || code.includes('Anthropic')) {
  console.log('[OK]   Branding: Original Claude Code / Anthropic intact');
}

// === WRITE PATCHED FILE ===
console.log(`\n=== Total patches applied: ${patchCount} ===`);

fs.writeFileSync(CLI_PATH, code, 'utf8');
console.log('Patched file written to: ' + CLI_PATH);

// Verify
const verify = fs.readFileSync(CLI_PATH, 'utf8');
console.log('\n=== Verification ===');
console.log('kairosActive:!0 present:', verify.includes('kairosActive:!0'));
console.log('userMsgOptIn:!0 present:', verify.includes('userMsgOptIn:!0'));
console.log('USER_TYPE=ant injected:', verify.includes('process.env.USER_TYPE="ant"'));
console.log('coral_reef always true:', verify.includes('coral_reef_sonnet==="true"||!0'));
console.log('isProactiveActive??!0:', verify.includes('isProactiveActive()??!0'));
console.log('Fast mode disable neutered:', !verify.includes('CLAUDE_CODE_DISABLE_FAST_MODE"') || verify.includes('CLAUDE_CODE_DISABLE_FAST_MODE_NEVER'));
