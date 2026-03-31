# PUA Code

<p align="center">
  <strong>🔓 PUA Code — Unrestricted Claude Code with All Hidden Features Unlocked</strong><br/>
  <strong>🔓 PUA Code — 无限制版 Claude Code，全部隐藏功能已解锁</strong>
</p>

<p align="center">
  <a href="https://github.com/tanweai/pua-code/releases/latest">Download</a> •
  <a href="#unlocked-features">Unlocked Features</a> •
  <a href="#quick-install">Install</a> •
  <a href="#解锁功能详解">中文文档</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/base-Claude_Code_2.1.88-blue" alt="base" />
  <img src="https://img.shields.io/badge/patches-18_features_unlocked-brightgreen" alt="patches" />
  <img src="https://img.shields.io/badge/USER__TYPE-ant_(internal)-red" alt="ant" />
  <img src="https://img.shields.io/badge/context-1M_tokens-purple" alt="1M" />
  <img src="https://img.shields.io/badge/by-PUA%20Skill-orange" alt="by PUA Skill" />
</p>

---

## What is PUA Code?

**PUA Code** is a **fully unlocked** build of Claude Code 2.1.88, with **18 hidden features** enabled through runtime patching. It runs with **internal employee privileges** (`USER_TYPE=ant`), giving you access to features that Anthropic reserves for their own engineers.

Based on the [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) reverse engineering project. Built and distributed by [PUA Skill](https://openpua.ai).

> **This is Claude Code — but with no restrictions.**

---

## Unlocked Features

### 🔓 18 Patches Applied

| # | Feature | Patch | What It Does |
|---|---------|-------|-------------|
| 1 | **KAIROS Daemon Mode** | `kairosActive=true` | Background autonomous agent — works while you're AFK |
| 2 | **SendUserMessage Tool** | `userMsgOptIn=true` | Agent proactively sends you messages when it finishes or needs help |
| 3 | **Internal Employee Mode** | `USER_TYPE=ant` injected | Unlocks all GrowthBook feature flags, model access, debug tools |
| 4 | **Proactive Agent** | `isProactiveActive=true` | Agent continues working autonomously after you leave |
| 5 | **1M Context Window** | `coral_reef_sonnet=true` | Sonnet 4.6 context: 200K → **1,000,000 tokens** |
| 6 | **Fast Mode** | DISABLE check removed | 6x priority inference speed ($30/$150 per Mtok tier) |
| 7 | **Extended Thinking** | DISABLE check removed | Deep reasoning chains, never artificially limited |
| 8 | **Adaptive Thinking** | DISABLE check removed | Auto-adjusts reasoning depth per task complexity |
| 9 | **Background Tasks** | DISABLE check removed | Run agents in background, get notified on completion |
| 10 | **Auto Memory** | DISABLE check removed | Cross-session memory always active |
| 11 | **Cron Scheduler** | DISABLE check removed | Scheduled/periodic task execution |
| 12 | **Experimental Betas** | DISABLE check removed | All beta features enabled |
| 13 | **File Checkpointing** | DISABLE check removed | Rollback any file edit |
| 14 | **Advisor Tool** | DISABLE check removed | Server-side advisory suggestions |
| 15 | **Attachments** | DISABLE check removed | File attachment support |
| 16 | **1M Context Flag** | DISABLE check removed | Force-enable million token context |
| 17 | **Strict Tool Pairing** | `=true` | More reliable tool result matching |
| 18 | **SDK Progress Summaries** | `=true` | Agent progress notifications |

### 🐜 What `USER_TYPE=ant` Unlocks

When running as an Anthropic internal employee, you get:

| Capability | Normal User | ant User (PUA Code) |
|-----------|-------------|---------------------|
| Auto Mode model support | Only claude-*-4-6+ | **All models** (denylist mode) |
| Token Efficient Tools | ❌ | **✅** (~4.5% token savings) |
| Feature Flag override | ❌ | **✅** via `CLAUDE_INTERNAL_FC_OVERRIDES` env var |
| Debug logging | ❌ | **✅** Full GrowthBook debug output |
| Auto Mode classifier dump | ❌ | **✅** See what the safety classifier thinks |
| Two-stage classifier control | ❌ | **✅** via `CLAUDE_CODE_TWO_STAGE_CLASSIFIER` |
| JSONL transcript format | ❌ | **✅** via `CLAUDE_CODE_JSONL_TRANSCRIPT` |
| Staging OAuth | ❌ | **✅** via `USE_STAGING_OAUTH` |
| Effort level override | ❌ | **✅** via `anthropic_internal.effort_override` |
| VCR test recording | Only in NODE_ENV=test | **✅** via `FORCE_VCR` |
| Fast Mode prefetch | Off by default | **On by default** |

---

## Quick Install

### Binary (Recommended)

Pre-compiled standalone binaries — no Node.js required:

```bash
# macOS Apple Silicon (M1/M2/M3/M4)
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-macos-arm64
chmod +x pua && sudo mv pua /usr/local/bin/

# macOS Intel
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-macos-x64
chmod +x pua && sudo mv pua /usr/local/bin/

# Linux x64
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-linux-x64
chmod +x pua && sudo mv pua /usr/local/bin/

# Linux arm64 (AWS Graviton, Raspberry Pi, etc.)
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-linux-arm64
chmod +x pua && sudo mv pua /usr/local/bin/

# Windows x64 — download and run directly
# https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-windows-x64.exe
```

### From Source (Node.js)

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node package/cli.js
```

---

## How to Use Unlocked Features

### 1. KAIROS / Proactive Mode — "Leave and Let It Work"

The daemon mode is activated by default. When you start a task and walk away, PUA Code will:
- Detect you're AFK via the Transcript Classifier
- Continue executing autonomously
- Send you a message (via SendUserMessage) when it's done or blocked

```bash
# Start PUA Code, give it a big task, then walk away
pua "Refactor all API endpoints to use the new auth middleware. Run tests after each file."

# It will work in the background and notify you when done.
```

**Environment variables for fine-tuning:**

```bash
export PUA_CODE_PROACTIVE=1          # Force proactive mode on
export CLAUDE_CODE_JSONL_TRANSCRIPT=1 # Enable JSONL transcript logging
```

### 2. 1M Context Window — See Your Entire Codebase

Sonnet 4.6 now has 1M token context (5x the normal 200K). This means:

| Context | Files You Can See | Use Case |
|---------|------------------|----------|
| 200K (normal) | ~500 file fragments | Single microservice |
| **1M (PUA Code)** | **~2500 file fragments** | **Entire monorepo** |

No configuration needed — it's always on.

### 3. Fast Mode — 6x Speed

Fast Mode gives you priority inference. It's enabled by default and cannot be disabled.

```bash
# Fast mode is automatic. To verify:
pua --version
# Should show: 2.1.88 (PUA Code)
```

### 4. Internal Feature Flags — Override Anything

As an `ant` user, you can override any GrowthBook feature flag:

```bash
# Override specific feature flags
export CLAUDE_INTERNAL_FC_OVERRIDES='{"my_feature": true, "another_feature": "value"}'

# Dump the auto mode classifier's full prompt (debug)
export CLAUDE_CODE_DUMP_AUTO_MODE=1

# Force a specific model for the auto mode classifier
export CLAUDE_CODE_AUTO_MODE_MODEL=claude-opus-4-6

# Enable two-stage classifier override
export CLAUDE_CODE_TWO_STAGE_CLASSIFIER=1

# Override effort level (higher = more thorough)
export CLAUDE_CODE_EFFORT_LEVEL=5
export CLAUDE_CODE_ALWAYS_ENABLE_EFFORT=1
```

### 5. Background Agents — Parallel Execution

Background agents are now always available:

```bash
pua "Search for all security vulnerabilities in this codebase" &
pua "Write comprehensive tests for the auth module" &
# Both run in parallel
```

### 6. Auto Memory — Cross-Session Intelligence

Auto Memory is always on. PUA Code remembers your preferences, project patterns, and decisions across sessions. Memory is stored in `~/.claude/`:

```
~/.claude/
├── CLAUDE.md             # Your global instructions
├── projects/             # Per-project memory
│   └── <project>/
│       └── memory/       # Auto-learned patterns
└── settings.json         # Preferences
```

### 7. VCR Recording — Record and Replay API Calls

Record every API interaction for testing/replay:

```bash
export FORCE_VCR=1
export VCR_RECORD=1    # Record mode
pua "do something"
# All API calls saved as fixtures

export VCR_RECORD=0    # Replay mode — no API costs
pua "do the same thing"
# Replays from recorded fixtures
```

### 8. Experimental Betas — Everything Enabled

All experimental beta features are unlocked. This includes:
- Token Efficient Tool format (~4.5% token savings)
- Connector Text Summarization
- Extended thinking modes
- New tool formats and protocols

### 9. Cron Scheduler — Periodic Tasks

The cron system allows scheduled task execution:

```bash
# The cron scheduler runs automatically in daemon mode
# Configure recurring tasks in your CLAUDE.md:

# Example CLAUDE.md entry:
# Run tests every 30 minutes during active development
# Run linting on file save
```

### 10. Advisor Tool — Server-Side Suggestions

The Advisor tool provides server-side architectural suggestions. When enabled, PUA Code can consult an advisory model for complex decisions.

---

## 100 Compile-Time Feature Flags (Source Code Reference)

These are all `feature()` flags found in the source code. **18 were unlocked via runtime patching**. The remaining 82 were physically removed by Bun's Dead Code Elimination at build time and cannot be restored without recompiling from source.

<details>
<summary>Click to expand full list of 100 feature flags</summary>

```
ABLATION_BASELINE          AGENT_MEMORY_SNAPSHOT      AGENT_TRIGGERS
AGENT_TRIGGERS_REMOTE      ALLOW_TEST_VERSIONS        ANTI_DISTILLATION_CC
AUTO_THEME                 AWAY_SUMMARY               BASH_CLASSIFIER
BG_SESSIONS                BREAK_CACHE_COMMAND         BRIDGE_MODE
BUDDY                      BUILDING_PUA_APPS           BUILTIN_EXPLORE_PLAN_AGENTS
BYOC_ENVIRONMENT_RUNNER    CACHED_MICROCOMPACT         CCR_AUTO_CONNECT
CCR_MIRROR                 CCR_REMOTE_SETUP            CHICAGO_MCP
COMMIT_ATTRIBUTION         COMPACTION_REMINDERS        CONNECTOR_TEXT
CONTEXT_COLLAPSE           COORDINATOR_MODE            COWORKER_TYPE_TELEMETRY
DAEMON                     DIRECT_CONNECT              DOWNLOAD_USER_SETTINGS
DUMP_SYSTEM_PROMPT         ENHANCED_TELEMETRY_BETA     EXPERIMENTAL_SKILL_SEARCH
EXTRACT_MEMORIES           FILE_PERSISTENCE            FORK_SUBAGENT
HARD_FAIL                  HISTORY_PICKER              HISTORY_SNIP
HOOK_PROMPTS               IS_LIBC_GLIBC               IS_LIBC_MUSL
KAIROS ✅                  KAIROS_BRIEF                KAIROS_CHANNELS
KAIROS_DREAM               KAIROS_GITHUB_WEBHOOKS      KAIROS_PUSH_NOTIFICATION
LODESTONE                  MCP_RICH_OUTPUT             MCP_SKILLS
MEMORY_SHAPE_TELEMETRY     MESSAGE_ACTIONS             MONITOR_TOOL
NATIVE_CLIENT_ATTESTATION  NATIVE_CLIPBOARD_IMAGE      NEW_INIT
OVERFLOW_TEST_TOOL         PERFETTO_TRACING            POWERSHELL_AUTO_MODE
PROACTIVE ✅               PROMPT_CACHE_BREAK_DETECTION QUICK_SEARCH
REACTIVE_COMPACT           REVIEW_ARTIFACT             RUN_SKILL_GENERATOR
SELF_HOSTED_RUNNER         SHOT_STATS                  SKILL_IMPROVEMENT
SLOW_OPERATION_LOGGING     SSH_REMOTE                  STREAMLINED_OUTPUT
TEAMMEM                    TEMPLATES                   TERMINAL_PANEL
TOKEN_BUDGET               TORCH                       TRANSCRIPT_CLASSIFIER
TREE_SITTER_BASH           TREE_SITTER_BASH_SHADOW     UDS_INBOX
ULTRAPLAN                  ULTRATHINK                  UNATTENDED_RETRY
UPLOAD_USER_SETTINGS       VERIFICATION_AGENT          VOICE_MODE
WEB_BROWSER_TOOL           WORKFLOW_SCRIPTS

✅ = unlocked via runtime patch
```

</details>

---

## Technical Details

### How Patching Works

PUA Code uses **runtime patching** on the compiled `cli.js` bundle:

1. **State initialization override**: `kairosActive:!1` → `kairosActive:!0` (false → true)
2. **Nullish coalescing fallback flip**: `isProactiveActive()??!1` → `isProactiveActive()??!0`
3. **Environment injection**: `process.env.USER_TYPE="ant"` injected at file top
4. **Always-true short circuit**: `coral_reef_sonnet==="true"` → `coral_reef_sonnet==="true"||!0`
5. **DISABLE var neutering**: Rename env var names to `_NEVER` suffix so checks always pass

### Why Some Features Can't Be Unlocked

Bun's `feature()` from `bun:bundle` performs **compile-time Dead Code Elimination** (DCE). When `feature('COORDINATOR_MODE')` evaluates to `false` at build time, the entire code branch is physically removed from the bundle. No runtime patch can restore deleted code.

The 18 patches target **residual control points** that survived DCE:
- State initialization values (always present as object literals)
- Nullish coalescing fallbacks (default values can be flipped)
- Environment variable checks (variable names can be changed)

### Re-patching

To apply patches yourself on a fresh Claude Code build:

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node patch-features.js   # Applies all 18 patches
node package/cli.js      # Run patched version
```

---

# 中文文档

## PUA Code 是什么？

**PUA Code** 是基于 Claude Code 2.1.88 的**无限制版本**，通过运行时补丁解锁了 **18 个隐藏功能**。它以 Anthropic **内部员工身份**（`USER_TYPE=ant`）运行，让你获得 Anthropic 工程师专属的功能。

> **这就是 Claude Code——但没有任何限制。**

---

## 解锁功能详解

### 🔓 18 个补丁一览

| # | 功能 | 补丁内容 | 实际效果 |
|---|------|---------|---------|
| 1 | **KAIROS 守护进程** | `kairosActive=true` | 后台自主执行，你离开后继续工作 |
| 2 | **主动消息推送** | `userMsgOptIn=true` | Agent 完成任务或遇到阻塞时主动通知你 |
| 3 | **内部员工身份** | `USER_TYPE=ant` | 解锁全部 Feature Flags、模型访问、调试工具 |
| 4 | **自主 Agent** | `isProactiveActive=true` | 离开键盘后 Agent 自动进入自主模式 |
| 5 | **百万 Token 上下文** | `coral_reef_sonnet=true` | Sonnet 4.6 上下文从 200K 提升到 **100 万** |
| 6 | **Fast Mode 极速推理** | 移除 DISABLE 检查 | 6 倍推理速度优先级 |
| 7 | **深度推理链** | 移除 DISABLE 检查 | Extended Thinking 永不受限 |
| 8 | **自适应推理** | 移除 DISABLE 检查 | 根据任务复杂度自动调节推理深度 |
| 9 | **后台任务** | 移除 DISABLE 检查 | 后台运行 Agent，完成后自动通知 |
| 10 | **自动记忆** | 移除 DISABLE 检查 | 跨会话记忆永远开启 |
| 11 | **定时调度** | 移除 DISABLE 检查 | Cron 定时执行任务 |
| 12 | **实验功能** | 移除 DISABLE 检查 | 所有 Beta 实验功能全部开启 |
| 13 | **文件检查点** | 移除 DISABLE 检查 | 文件编辑可随时回滚 |
| 14 | **Advisor 工具** | 移除 DISABLE 检查 | 服务端架构建议 |
| 15 | **附件支持** | 移除 DISABLE 检查 | 文件附件功能 |
| 16 | **百万上下文开关** | 移除 DISABLE 检查 | 强制开启 1M 上下文 |
| 17 | **严格工具配对** | `=true` | 工具结果匹配更可靠 |
| 18 | **SDK 进度摘要** | `=true` | Agent 进度通知 |

---

### 使用方式

#### 1. 自主工作模式 — 发完指令去睡觉

```bash
# 启动 PUA Code，给个大任务，然后关电脑
pua "帮我把这个项目的测试覆盖率从 60% 提到 90%"

# 第二天回来，Agent 已经：
# ✅ 写好了 30 个测试文件
# ✅ 创建了 PR
# ✅ CI 已跑通
# ✅ 给你发了完成通知
```

#### 2. 百万上下文 — 看到整个代码库

```bash
# 不需要任何配置，默认开启
pua "分析整个 monorepo 的依赖关系，找出循环依赖"

# Sonnet 4.6 可以同时看到 ~2500 个文件片段
# 相当于一次性理解整个大型项目
```

#### 3. 内部调试工具 — 看到 AI 在想什么

```bash
# 查看安全分类器的完整 prompt
export CLAUDE_CODE_DUMP_AUTO_MODE=1

# 覆盖任意 Feature Flag
export CLAUDE_INTERNAL_FC_OVERRIDES='{"new_feature": true}'

# 指定分类器使用的模型
export CLAUDE_CODE_AUTO_MODE_MODEL=claude-opus-4-6

# 启用 JSONL 转录
export CLAUDE_CODE_JSONL_TRANSCRIPT=1

# 覆盖推理深度
export CLAUDE_CODE_EFFORT_LEVEL=5
export CLAUDE_CODE_ALWAYS_ENABLE_EFFORT=1
```

#### 4. VCR 录制回放 — 零成本重复执行

```bash
# 录制模式：记录所有 API 调用
export FORCE_VCR=1
export VCR_RECORD=1
pua "执行一些操作"

# 回放模式：不花 API 钱
export VCR_RECORD=0
pua "重复同样的操作"
# → 直接回放录制的响应，零 API 成本
```

#### 5. 快速安装

```bash
# macOS Apple Silicon (M1/M2/M3/M4)
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-macos-arm64
chmod +x pua && sudo mv pua /usr/local/bin/

# macOS Intel
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-macos-x64
chmod +x pua && sudo mv pua /usr/local/bin/

# Linux x64
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-linux-x64
chmod +x pua && sudo mv pua /usr/local/bin/

# Linux arm64
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-linux-arm64
chmod +x pua && sudo mv pua /usr/local/bin/

# Windows — 直接下载运行
# https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-windows-x64.exe
```

#### 6. 从源码运行

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node package/cli.js
```

#### 7. 自行打补丁

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node patch-features.js   # 应用全部 18 个补丁
node package/cli.js      # 运行补丁版本
```

---

## 全部环境变量速查

### 解锁的内部变量

| 变量 | 用途 | 示例 |
|------|------|------|
| `CLAUDE_INTERNAL_FC_OVERRIDES` | 覆盖任意 Feature Flag | `'{"feature": true}'` |
| `CLAUDE_CODE_DUMP_AUTO_MODE` | Dump 分类器完整 prompt | `1` |
| `CLAUDE_CODE_AUTO_MODE_MODEL` | 指定分类器模型 | `claude-opus-4-6` |
| `CLAUDE_CODE_TWO_STAGE_CLASSIFIER` | 两阶段分类器控制 | `1` |
| `CLAUDE_CODE_JSONL_TRANSCRIPT` | JSONL 转录格式 | `1` |
| `CLAUDE_CODE_EFFORT_LEVEL` | 推理深度覆盖 | `1-5` |
| `CLAUDE_CODE_ALWAYS_ENABLE_EFFORT` | 强制启用推理深度 | `1` |
| `FORCE_VCR` | VCR 录制回放 | `1` |
| `VCR_RECORD` | VCR 录制模式 | `1` |
| `USE_STAGING_OAUTH` | Staging OAuth | `1` |
| `PUA_CODE_PROACTIVE` | 强制自主模式 | `1` |

### 已移除的限制开关

以下环境变量的 DISABLE 检查已被移除，对应功能永远开启：

```
PUA_CODE_DISABLE_FAST_MODE          → 永远不会被禁用
PUA_CODE_DISABLE_1M_CONTEXT         → 永远不会被禁用
PUA_CODE_DISABLE_THINKING           → 永远不会被禁用
PUA_CODE_DISABLE_ADAPTIVE_THINKING  → 永远不会被禁用
PUA_CODE_DISABLE_BACKGROUND_TASKS   → 永远不会被禁用
PUA_CODE_DISABLE_AUTO_MEMORY        → 永远不会被禁用
PUA_CODE_DISABLE_CRON               → 永远不会被禁用
PUA_CODE_DISABLE_EXPERIMENTAL_BETAS → 永远不会被禁用
PUA_CODE_DISABLE_FILE_CHECKPOINTING → 永远不会被禁用
PUA_CODE_DISABLE_ADVISOR_TOOL       → 永远不会被禁用
PUA_CODE_DISABLE_ATTACHMENTS        → 永远不会被禁用
```

---

## Built by PUA Skill / 由 PUA Skill 团队出品

- Website / 官网: [openpua.ai](https://openpua.ai)
- GitHub: [github.com/tanweai](https://github.com/tanweai)
- Source: [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap)

## Disclaimer / 声明

This project is for **security research and educational purposes only**. Do not use for commercial purposes or in violation of any terms of service.

本项目**仅供安全研究和学习使用**。请勿用于商业目的或违反任何服务条款。
