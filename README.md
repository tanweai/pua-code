# PUA Code

<p align="center">
  <strong>🔓 PUA Code — 无限制版 Claude Code，全部隐藏功能已解锁</strong>
</p>

<p align="center">
  <a href="https://github.com/tanweai/pua-code/releases/latest">下载安装</a> •
  <a href="#解锁功能一览">解锁功能</a> •
  <a href="#快速安装">安装指南</a> •
  <a href="#english">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/基于-Claude_Code_2.1.88-blue" alt="base" />
  <img src="https://img.shields.io/badge/补丁-18_项功能解锁-brightgreen" alt="patches" />
  <img src="https://img.shields.io/badge/USER__TYPE-ant_(内部员工)-red" alt="ant" />
  <img src="https://img.shields.io/badge/上下文-100万_tokens-purple" alt="1M" />
  <img src="https://img.shields.io/badge/出品-PUA%20Skill-orange" alt="by PUA Skill" />
</p>

---

## PUA Code 是什么？

**PUA Code** 是基于 Claude Code 2.1.88 的**完全解锁版**，通过运行时补丁开启了 **18 个隐藏功能**。它以 Anthropic **内部员工身份**（`USER_TYPE=ant`）运行，让你获得 Anthropic 工程师专属的全部能力。

基于 [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) 逆向工程项目。由 [PUA Skill](https://openpua.ai) 团队构建和发布。

> **这就是 Claude Code——但没有任何限制。**

---

## 解锁功能一览

### 🔓 18 个补丁详情

| # | 功能 | 补丁内容 | 实际效果 |
|---|------|---------|---------|
| 1 | **KAIROS 守护进程** | `kairosActive=true` | 后台自主执行，你离开后继续工作 |
| 2 | **主动消息推送** | `userMsgOptIn=true` | Agent 完成任务或遇到阻塞时主动通知你 |
| 3 | **内部员工身份** | `USER_TYPE=ant` | 解锁全部 Feature Flags、模型访问、调试工具 |
| 4 | **自主 Agent** | `isProactiveActive=true` | 离开键盘后 Agent 自动进入自主模式 |
| 5 | **百万 Token 上下文** | `coral_reef_sonnet=true` | Sonnet 4.6 上下文从 200K → **100 万** |
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

### 🐜 `USER_TYPE=ant` 解锁了什么？

以内部员工身份运行时，你将获得：

| 能力 | 普通用户 | ant 用户 (PUA Code) |
|------|---------|---------------------|
| Auto Mode 模型支持 | 仅 claude-*-4-6+ | **所有模型**（黑名单模式） |
| Token Efficient Tools | ❌ | **✅**（节省约 4.5% token） |
| Feature Flag 覆盖 | ❌ | **✅** 通过 `CLAUDE_INTERNAL_FC_OVERRIDES` |
| 调试日志 | ❌ | **✅** 完整 GrowthBook 调试输出 |
| Auto Mode 分类器 Dump | ❌ | **✅** 查看安全分类器判断 |
| 两阶段分类器控制 | ❌ | **✅** 通过 `CLAUDE_CODE_TWO_STAGE_CLASSIFIER` |
| JSONL 转录格式 | ❌ | **✅** 通过 `CLAUDE_CODE_JSONL_TRANSCRIPT` |
| Staging OAuth | ❌ | **✅** 通过 `USE_STAGING_OAUTH` |
| 推理深度覆盖 | ❌ | **✅** 通过 `anthropic_internal.effort_override` |
| VCR 测试录制 | 仅 NODE_ENV=test | **✅** 通过 `FORCE_VCR` |
| Fast Mode 预获取 | 默认关闭 | **默认开启** |

---

## 快速安装

### 二进制安装（推荐）

预编译独立二进制，无需 Node.js：

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

# Linux arm64 (AWS Graviton, Raspberry Pi 等)
curl -L -o pua https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-linux-arm64
chmod +x pua && sudo mv pua /usr/local/bin/

# Windows x64 — 直接下载运行
# https://github.com/tanweai/pua-code/releases/download/v2.1.88-unlocked/pua-windows-x64.exe
```

### 从源码运行

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node package/cli.js
```

---

## 功能使用指南

### 1. 自主工作模式 — 发完指令去睡觉

守护进程模式默认开启。启动任务后离开，PUA Code 会：
- 通过 Transcript Classifier 检测你已离开
- 自主继续执行任务
- 完成或遇到阻塞时通过 SendUserMessage 通知你

```bash
# 启动 PUA Code，给个大任务，然后关电脑
pua "帮我把这个项目的测试覆盖率从 60% 提到 90%"

# 第二天回来，Agent 已经：
# ✅ 写好了 30 个测试文件
# ✅ 创建了 PR
# ✅ CI 已跑通
# ✅ 给你发了完成通知
```

**环境变量微调：**

```bash
export CLAUDE_CODE_PROACTIVE=1          # 强制自主模式
export CLAUDE_CODE_JSONL_TRANSCRIPT=1 # 启用 JSONL 转录日志
```

### 2. 百万上下文 — 看到整个代码库

Sonnet 4.6 现在拥有 1M token 上下文（普通版 200K 的 5 倍）：

| 上下文 | 可见文件数 | 适用场景 |
|--------|-----------|---------|
| 200K（普通版） | ~500 个文件片段 | 单个微服务 |
| **1M（PUA Code）** | **~2500 个文件片段** | **整个 monorepo** |

无需任何配置，默认开启。

```bash
pua "分析整个 monorepo 的依赖关系，找出循环依赖"
# Sonnet 4.6 可以同时看到 ~2500 个文件片段
```

### 3. Fast Mode — 6 倍极速推理

Fast Mode 默认开启且无法被禁用，享受优先推理队列。

### 4. 内部调试工具 — 看到 AI 在想什么

```bash
# 查看安全分类器的完整 prompt
export CLAUDE_CODE_DUMP_AUTO_MODE=1

# 覆盖任意 Feature Flag
export CLAUDE_INTERNAL_FC_OVERRIDES='{"new_feature": true}'

# 指定分类器使用的模型
export CLAUDE_CODE_AUTO_MODE_MODEL=claude-opus-4-6

# 启用两阶段分类器控制
export CLAUDE_CODE_TWO_STAGE_CLASSIFIER=1

# 启用 JSONL 转录
export CLAUDE_CODE_JSONL_TRANSCRIPT=1

# 覆盖推理深度
export CLAUDE_CODE_EFFORT_LEVEL=5
export CLAUDE_CODE_ALWAYS_ENABLE_EFFORT=1
```

### 5. VCR 录制回放 — 零成本重复执行

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

### 6. 自行打补丁

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node patch-features.js   # 应用全部 18 个补丁
node package/cli.js      # 运行补丁版本
```

---

## 环境变量速查

### 解锁的内部变量

| 变量 | 用途 | 示例值 |
|------|------|-------|
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
| `CLAUDE_CODE_PROACTIVE` | 强制自主模式 | `1` |

### 已移除的限制开关

以下 DISABLE 检查已被移除，对应功能永远开启：

```
CLAUDE_CODE_DISABLE_FAST_MODE          → 永远不会被禁用
CLAUDE_CODE_DISABLE_1M_CONTEXT         → 永远不会被禁用
CLAUDE_CODE_DISABLE_THINKING           → 永远不会被禁用
CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING  → 永远不会被禁用
CLAUDE_CODE_DISABLE_BACKGROUND_TASKS   → 永远不会被禁用
CLAUDE_CODE_DISABLE_AUTO_MEMORY        → 永远不会被禁用
CLAUDE_CODE_DISABLE_CRON               → 永远不会被禁用
CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS → 永远不会被禁用
CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING → 永远不会被禁用
CLAUDE_CODE_DISABLE_ADVISOR_TOOL       → 永远不会被禁用
CLAUDE_CODE_DISABLE_ATTACHMENTS        → 永远不会被禁用
```

---

## 100 个编译时 Feature Flags（源码参考）

这些是源码中全部 `feature()` 标志。**18 个通过运行时补丁解锁**，其余 82 个被 Bun 的编译时死代码消除（DCE）物理移除，无法通过补丁恢复。

<details>
<summary>点击展开 100 个 Feature Flags 完整列表</summary>

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

✅ = 通过运行时补丁解锁
```

</details>

---

## 技术细节

### 补丁原理

PUA Code 在编译后的 `cli.js` 上进行**运行时补丁**：

1. **状态初始化覆盖**：`kairosActive:!1` → `kairosActive:!0`（false → true）
2. **空值合并回退翻转**：`isProactiveActive()??!1` → `isProactiveActive()??!0`
3. **环境变量注入**：文件顶部注入 `process.env.USER_TYPE="ant"`
4. **恒真短路**：`coral_reef_sonnet==="true"` → `coral_reef_sonnet==="true"||!0`
5. **DISABLE 变量失效**：将环境变量名重命名为 `_NEVER` 后缀，使检查永远通过

### 为什么有些功能无法解锁？

Bun 的 `feature()`（来自 `bun:bundle`）在编译时执行**死代码消除（DCE）**。当 `feature('COORDINATOR_MODE')` 在构建时求值为 `false`，整个代码分支会被物理删除。运行时补丁无法恢复已删除的代码。

18 个补丁针对的是**存活下来的运行时控制点**：
- 状态初始化值（始终以对象字面量形式存在）
- 空值合并回退（默认值可以翻转）
- 环境变量检查（变量名可以修改）

---

## 出品

- 官网：[openpua.ai](https://openpua.ai)
- GitHub：[github.com/tanweai](https://github.com/tanweai)
- 源码：[ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap)

## 声明

本项目**仅供安全研究和学习使用**。请勿用于商业目的或违反任何服务条款。

---

<a name="english"></a>

# English

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
| 6 | **Fast Mode** | DISABLE check removed | 6x priority inference speed |
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

| Capability | Normal User | ant User (PUA Code) |
|-----------|-------------|---------------------|
| Auto Mode model support | Only claude-*-4-6+ | **All models** (denylist mode) |
| Token Efficient Tools | ❌ | **✅** (~4.5% token savings) |
| Feature Flag override | ❌ | **✅** via `CLAUDE_INTERNAL_FC_OVERRIDES` |
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

### From Source

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node package/cli.js
```

---

## How to Use

### Autonomous Mode — Start a Task and Walk Away

```bash
pua "Refactor all API endpoints to use the new auth middleware. Run tests after each file."
# It will work in the background and notify you when done.
```

### 1M Context — See Your Entire Codebase

Sonnet 4.6 now has 1M token context (5x normal). No configuration needed — always on.

### Internal Debug Tools

```bash
export CLAUDE_CODE_DUMP_AUTO_MODE=1                          # Dump classifier prompt
export CLAUDE_INTERNAL_FC_OVERRIDES='{"my_feature": true}'   # Override feature flags
export CLAUDE_CODE_AUTO_MODE_MODEL=claude-opus-4-6           # Classifier model
export CLAUDE_CODE_TWO_STAGE_CLASSIFIER=1                    # Two-stage classifier
export CLAUDE_CODE_JSONL_TRANSCRIPT=1                        # JSONL transcript
export CLAUDE_CODE_EFFORT_LEVEL=5                            # Effort level override
```

### VCR Record & Replay

```bash
export FORCE_VCR=1 VCR_RECORD=1    # Record mode
pua "do something"

export VCR_RECORD=0                # Replay mode — zero API cost
pua "do the same thing"
```

### Re-patching

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code
node patch-features.js   # Apply all 18 patches
node package/cli.js      # Run patched version
```

---

## Technical Details

PUA Code uses **runtime patching** on the compiled `cli.js` bundle:

1. **State init override**: `kairosActive:!1` → `kairosActive:!0` (false → true)
2. **Nullish coalescing flip**: `isProactiveActive()??!1` → `isProactiveActive()??!0`
3. **Env injection**: `process.env.USER_TYPE="ant"` injected at file top
4. **Always-true short circuit**: `coral_reef_sonnet==="true"` → `coral_reef_sonnet==="true"||!0`
5. **DISABLE var neutering**: Rename env var names to `_NEVER` suffix so checks always pass

82 of 100 feature flags were physically removed by Bun's compile-time Dead Code Elimination (DCE) and cannot be restored without recompiling from Anthropic's internal build system.

---

## Built by PUA Skill

- Website: [openpua.ai](https://openpua.ai)
- GitHub: [github.com/tanweai](https://github.com/tanweai)
- Source: [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap)

## Disclaimer

This project is for **security research and educational purposes only**. Do not use for commercial purposes or in violation of any terms of service.
