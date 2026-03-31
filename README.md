# PUA Code

<p align="center">
  <strong>🔓 PUA Code — CLI 编程助手功能补丁，解锁全部隐藏能力</strong>
</p>

<p align="center">
  <a href="https://github.com/tanweai/pua-code/releases/latest">下载</a> •
  <a href="#解锁功能一览">解锁功能</a> •
  <a href="#使用方法">使用方法</a> •
  <a href="#english">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/类型-运行时补丁-blue" alt="type" />
  <img src="https://img.shields.io/badge/补丁-18_项功能解锁-brightgreen" alt="patches" />
  <img src="https://img.shields.io/badge/上下文-100万_tokens-purple" alt="1M" />
  <img src="https://img.shields.io/badge/出品-PUA%20Skill-orange" alt="by PUA Skill" />
</p>

---

## PUA Code 是什么？

**PUA Code** 是一个**运行时功能补丁工具**，通过修改 CLI 编程助手的状态初始化值和环境变量检查，解锁 **18 个隐藏功能**。

> **不是一个新的产品。是一个补丁。** 你需要自备原始 CLI 工具，PUA Code 只负责打补丁。

由 [PUA Skill](https://openpua.ai) 团队构建和维护。

---

## 解锁功能一览

### 🔓 18 个补丁详情

| # | 功能 | 补丁内容 | 实际效果 |
|---|------|---------|---------|
| 1 | **KAIROS 守护进程** | `kairosActive=true` | 后台自主执行，你离开后继续工作 |
| 2 | **主动消息推送** | `userMsgOptIn=true` | Agent 完成任务或遇到阻塞时主动通知你 |
| 3 | **内部权限提升** | `USER_TYPE=ant` | 解锁全部 Feature Flags、模型访问、调试工具 |
| 4 | **自主 Agent** | `isProactiveActive=true` | 离开键盘后 Agent 自动进入自主模式 |
| 5 | **百万 Token 上下文** | `coral_reef_sonnet=true` | 上下文从 200K → **100 万** |
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

以内部身份运行时获得的额外能力：

| 能力 | 普通用户 | ant 用户 |
|------|---------|---------|
| Auto Mode 模型支持 | 限制列表 | **所有模型**（黑名单模式） |
| Token Efficient Tools | ❌ | **✅**（节省约 4.5% token） |
| Feature Flag 覆盖 | ❌ | **✅** |
| 调试日志 | ❌ | **✅** 完整调试输出 |
| Auto Mode 分类器 Dump | ❌ | **✅** 查看安全分类器判断 |
| 两阶段分类器控制 | ❌ | **✅** |
| JSONL 转录格式 | ❌ | **✅** |
| 推理深度覆盖 | ❌ | **✅** |
| VCR 测试录制 | 仅测试环境 | **✅** |
| Fast Mode 预获取 | 默认关闭 | **默认开启** |

---

## 使用方法

### 方式一：下载预打补丁的二进制

从 [Releases](https://github.com/tanweai/pua-code/releases/latest) 下载对应平台的文件：

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

# Windows x64
# 下载 pua-windows-x64.exe 直接运行
```

### 方式二：自行打补丁（推荐）

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code

# 将你自己的 CLI 二进制放到 package/cli.js
cp /path/to/your/cli.js package/cli.js

# 运行补丁脚本
node patch-features.js

# 运行打补丁后的版本
node package/cli.js
```

### 方式三：自行编译独立二进制

```bash
# 打完补丁后，用 Bun 编译
bun build --compile --minify package/cli.js --outfile pua
./pua
```

---

## 补丁原理

PUA Code 的补丁脚本 `patch-features.js` 对 CLI 二进制进行**纯字符串级别的运行时修改**：

| 补丁类型 | 原始 | 修改后 | 原理 |
|---------|------|-------|------|
| 状态初始化 | `kairosActive:!1` | `kairosActive:!0` | `!1`=false → `!0`=true |
| 空值合并回退 | `isProactiveActive()??!1` | `isProactiveActive()??!0` | 默认值从 false 翻转为 true |
| 环境变量注入 | _(无)_ | `process.env.USER_TYPE="ant"` | 文件顶部注入 |
| 恒真短路 | `==="true"` | `==="true"\|\|!0` | 追加 `||true` 使表达式永真 |
| DISABLE 变量失效 | `DISABLE_FAST_MODE` | `DISABLE_FAST_MODE_NEVER` | 重命名变量使检查永远跳过 |

**不修改任何 API 通信逻辑、认证流程或网络请求。** 补丁只改变本地功能开关。

### 为什么有些功能无法解锁？

现代编译器在构建时执行**死代码消除（DCE）**。当 `feature('COORDINATOR_MODE')` 在构建时求值为 `false`，整个代码分支会被物理删除。运行时补丁无法恢复已删除的代码。

18 个补丁针对的是**存活下来的运行时控制点**。完整的 100 个 feature flags 中，82 个已被 DCE 物理移除。

<details>
<summary>点击查看全部 100 个 Feature Flags</summary>

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

## 环境变量速查

### 解锁的内部调试变量

| 变量 | 用途 |
|------|------|
| `CLAUDE_INTERNAL_FC_OVERRIDES` | 覆盖任意 Feature Flag，JSON 格式 |
| `CLAUDE_CODE_DUMP_AUTO_MODE` | Dump 分类器完整 prompt |
| `CLAUDE_CODE_AUTO_MODE_MODEL` | 指定分类器模型 |
| `CLAUDE_CODE_TWO_STAGE_CLASSIFIER` | 两阶段分类器控制 |
| `CLAUDE_CODE_JSONL_TRANSCRIPT` | JSONL 转录格式 |
| `CLAUDE_CODE_EFFORT_LEVEL` | 推理深度覆盖 (1-5) |
| `CLAUDE_CODE_ALWAYS_ENABLE_EFFORT` | 强制启用推理深度 |
| `FORCE_VCR` | VCR 录制回放 |
| `VCR_RECORD` | VCR 录制模式 |

### 已移除的限制开关

以下 DISABLE 检查已被补丁失效（变量名重命名为 `_NEVER` 后缀），对应功能永远开启：

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

## 出品

- 官网：[openpua.ai](https://openpua.ai)
- GitHub：[github.com/tanweai](https://github.com/tanweai)

## 声明

本项目是一个**独立的补丁工具**，不包含、不分发任何第三方的源代码或版权内容。补丁脚本仅修改用户自行获取的二进制文件中的运行时配置值。**仅供安全研究和学习使用。**

---

<a name="english"></a>

# English

## What is PUA Code?

**PUA Code** is a **runtime feature patch tool** for CLI coding assistants. It modifies state initialization values and environment variable checks to unlock **18 hidden capabilities**.

> **Not a new product. A patch.** You bring your own CLI tool. PUA Code just unlocks it.

Built and maintained by [PUA Skill](https://openpua.ai).

---

## Unlocked Features

### 🔓 18 Patches Applied

| # | Feature | Patch | What It Does |
|---|---------|-------|-------------|
| 1 | **KAIROS Daemon** | `kairosActive=true` | Background autonomous agent — works while you're AFK |
| 2 | **SendUserMessage** | `userMsgOptIn=true` | Agent proactively notifies you on completion or blockers |
| 3 | **Internal Privileges** | `USER_TYPE=ant` injected | Unlocks all feature flags, model access, debug tools |
| 4 | **Proactive Agent** | `isProactiveActive=true` | Agent continues working autonomously after you leave |
| 5 | **1M Context Window** | `coral_reef_sonnet=true` | Context: 200K → **1,000,000 tokens** |
| 6 | **Fast Mode** | DISABLE check removed | 6x priority inference speed |
| 7 | **Extended Thinking** | DISABLE check removed | Deep reasoning chains, never limited |
| 8 | **Adaptive Thinking** | DISABLE check removed | Auto-adjusts reasoning depth per task |
| 9 | **Background Tasks** | DISABLE check removed | Run agents in background |
| 10 | **Auto Memory** | DISABLE check removed | Cross-session memory always active |
| 11 | **Cron Scheduler** | DISABLE check removed | Scheduled task execution |
| 12 | **Experimental Betas** | DISABLE check removed | All beta features enabled |
| 13 | **File Checkpointing** | DISABLE check removed | Rollback any file edit |
| 14 | **Advisor Tool** | DISABLE check removed | Server-side advisory |
| 15 | **Attachments** | DISABLE check removed | File attachment support |
| 16 | **1M Context Flag** | DISABLE check removed | Force-enable million token context |
| 17 | **Strict Tool Pairing** | `=true` | More reliable tool matching |
| 18 | **SDK Progress** | `=true` | Agent progress notifications |

---

## Installation

### Option 1: Pre-patched Binary

Download from [Releases](https://github.com/tanweai/pua-code/releases/latest):

```bash
# macOS Apple Silicon
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

# Windows x64
# Download pua-windows-x64.exe and run directly
```

### Option 2: Patch It Yourself (Recommended)

```bash
git clone https://github.com/tanweai/pua-code.git
cd pua-code

# Place your own CLI binary at package/cli.js
cp /path/to/your/cli.js package/cli.js

# Apply patches
node patch-features.js

# Run patched version
node package/cli.js
```

### Option 3: Compile Standalone Binary

```bash
# After patching, compile with Bun
bun build --compile --minify package/cli.js --outfile pua
./pua
```

---

## How It Works

The patch script `patch-features.js` makes **pure string-level modifications**:

| Patch Type | Before | After | Mechanism |
|-----------|--------|-------|-----------|
| State init | `kairosActive:!1` | `kairosActive:!0` | false → true |
| Nullish coalescing | `??!1` | `??!0` | Flip default |
| Env injection | _(none)_ | `process.env.USER_TYPE="ant"` | Prepend to file |
| Always-true | `==="true"` | `==="true"\|\|!0` | Append `||true` |
| DISABLE neuter | `DISABLE_FAST_MODE` | `DISABLE_FAST_MODE_NEVER` | Rename to skip check |

**No API logic, auth flows, or network requests are modified.** Patches only affect local feature switches.

---

## Disclaimer

This project is an **independent patch tool**. It does not contain or distribute any third-party source code or copyrighted content. The patch script only modifies runtime configuration values in binaries that users obtain on their own. **For security research and educational purposes only.**

---

## Built by PUA Skill

- Website: [openpua.ai](https://openpua.ai)
- GitHub: [github.com/tanweai](https://github.com/tanweai)
