# PUA Code

<p align="center">
  <strong>🔥 PUA Code — AI-Powered CLI for Software Engineering</strong><br/>
  <strong>🔥 PUA Code — AI 驱动的软件工程命令行工具</strong>
</p>

<p align="center">
  <a href="https://openpua.ai">Official Website</a> •
  <a href="https://github.com/tanweai/pua-code/issues">Issues</a> •
  <a href="#installation">Installation</a> •
  <a href="#安装">中文文档</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.1.88-blue" alt="version" />
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green" alt="node" />
  <img src="https://img.shields.io/badge/license-proprietary-red" alt="license" />
  <img src="https://img.shields.io/badge/by-PUA%20Skill-orange" alt="by PUA Skill" />
</p>

---

## What is PUA Code?

**PUA Code** is an AI-powered command-line interface (CLI) for software engineering, officially built by the [PUA Skill](https://openpua.ai) team. It brings a powerful AI assistant directly into your terminal — capable of understanding your entire codebase, editing files, running commands, and orchestrating complex workflows autonomously.

> Think of it as your AI pair programmer that lives in the terminal.

## Key Features

### 🛠 Core Capabilities

| Feature | Description |
|---------|-------------|
| **Codebase Understanding** | Reads and understands your entire project structure, dependencies, and architecture |
| **File Editing** | Creates, modifies, and refactors files with precise edits |
| **Terminal Commands** | Executes shell commands, runs tests, manages git workflows |
| **Multi-file Refactoring** | Coordinates changes across multiple files simultaneously |
| **Code Search** | Fast `Grep`, `Glob`, and semantic search across your codebase |
| **Web Search & Fetch** | Searches the web and fetches documentation in real-time |
| **Git Integration** | Commits, creates PRs, reviews diffs, manages branches |

### 🤖 Agent System

| Feature | Description |
|---------|-------------|
| **Multi-Agent Coordination** | Spawns specialized sub-agents for parallel task execution |
| **Agent Teams** | Creates teams with shared task lists for complex projects |
| **Background Agents** | Runs agents in background with automatic notification on completion |
| **Worktree Isolation** | Isolates agent work in separate git worktrees to prevent conflicts |
| **Plan Mode** | Designs implementation plans for user approval before coding |

### 🔌 Extensibility

| Feature | Description |
|---------|-------------|
| **MCP (Model Context Protocol)** | Connect to external tools and services via MCP servers |
| **Skills System** | 100+ built-in skills (`/commit`, `/review`, `/ship`, etc.) |
| **Plugin Marketplace** | Install community plugins for extended functionality |
| **Hooks** | Custom shell commands triggered by tool calls and events |
| **Custom Agents** | Define project-specific agents in `.pua/agents/` |

### 🎯 Developer Experience

| Feature | Description |
|---------|-------------|
| **Vim Mode** | Full vim keybindings for power users |
| **Voice Input** | Speak to your AI assistant |
| **Task Management** | Built-in todo list with dependency tracking |
| **Session Memory** | Remembers context across conversations via auto-memory |
| **Episodic Memory** | Search and recall past conversation decisions |
| **IDE Integration** | Works with VS Code, JetBrains, and other editors |

## Supported Tools (30+)

```
File Operations    : Read, Write, Edit, Glob, Grep, NotebookEdit
Terminal           : Bash (with sandbox modes)
Git & GitHub       : Commit, PR, Issues, Reviews
Web                : WebSearch, WebFetch
Agent              : Agent (spawn), SendMessage, TeamCreate
Planning           : EnterPlanMode, ExitPlanMode
Task Management    : TaskCreate, TaskUpdate, TaskList, TaskGet
User Interaction   : AskUserQuestion
MCP                : Dynamic tools from connected MCP servers
```

## Supported Models

- **PUA Opus 4.6** — Most capable, deep reasoning
- **PUA Sonnet 4.6** — Balanced speed and capability
- **PUA Haiku 4.5** — Fast, lightweight tasks

## Installation

```bash
npm install -g @pua-ai/pua-code
```

## Quick Start

```bash
# Start interactive session
pua

# Ask a question
pua "explain this codebase"

# Fix a bug
pua "fix the authentication bug in login.ts"

# Create a commit
pua /commit

# Review a PR
pua /review
```

---

# 中文文档

## 什么是 PUA Code？

**PUA Code** 是由 [PUA Skill](https://openpua.ai) 团队官方打造的 **AI 驱动的软件工程命令行工具**。它将一个强大的 AI 助手直接带入你的终端——能够理解整个代码库、编辑文件、执行命令，并自主完成复杂的工程任务。

> 把它想象成住在你终端里的 AI 结对编程伙伴。

## 核心功能

### 🛠 基础能力

| 功能 | 说明 |
|------|------|
| **代码库理解** | 读取并理解整个项目结构、依赖关系和架构设计 |
| **文件编辑** | 精准地创建、修改和重构文件 |
| **终端命令** | 执行 Shell 命令、运行测试、管理 Git 工作流 |
| **多文件重构** | 跨多个文件协调修改 |
| **代码搜索** | 快速 `Grep`、`Glob` 及语义搜索 |
| **网络搜索** | 实时搜索互联网、抓取文档内容 |
| **Git 集成** | 提交代码、创建 PR、审查 Diff、管理分支 |

### 🤖 Agent 系统

| 功能 | 说明 |
|------|------|
| **多 Agent 协作** | 生成专用子 Agent 并行执行任务 |
| **Agent 团队** | 创建带共享任务列表的团队，完成复杂项目 |
| **后台 Agent** | 在后台运行 Agent，完成后自动通知 |
| **Worktree 隔离** | 在独立的 Git Worktree 中执行，避免文件冲突 |
| **计划模式** | 先设计实施方案，经用户批准后再编码 |

### 🔌 可扩展性

| 功能 | 说明 |
|------|------|
| **MCP 协议** | 通过 Model Context Protocol 连接外部工具和服务 |
| **Skill 系统** | 100+ 内置技能（`/commit`、`/review`、`/ship` 等） |
| **插件市场** | 安装社区插件扩展功能 |
| **Hooks 钩子** | 自定义 Shell 命令，由工具调用和事件触发 |
| **自定义 Agent** | 在 `.pua/agents/` 中定义项目专属 Agent |

### 🎯 开发者体验

| 功能 | 说明 |
|------|------|
| **Vim 模式** | 完整的 Vim 快捷键支持 |
| **语音输入** | 语音对话驱动开发 |
| **任务管理** | 内置待办列表，支持依赖追踪 |
| **会话记忆** | 通过 Auto Memory 跨会话记忆上下文 |
| **情景记忆** | 搜索和回忆过去的对话决策 |
| **IDE 集成** | 支持 VS Code、JetBrains 等编辑器 |

## 支持的工具（30+）

```
文件操作    : Read, Write, Edit, Glob, Grep, NotebookEdit
终端命令    : Bash（含沙箱模式）
Git & GitHub : Commit, PR, Issues, Reviews
网络访问    : WebSearch, WebFetch
Agent 系统  : Agent（生成）, SendMessage, TeamCreate
规划        : EnterPlanMode, ExitPlanMode
任务管理    : TaskCreate, TaskUpdate, TaskList, TaskGet
用户交互    : AskUserQuestion
MCP         : 来自已连接 MCP Server 的动态工具
```

## 支持的模型

- **PUA Opus 4.6** — 最强能力，深度推理
- **PUA Sonnet 4.6** — 速度与能力的平衡
- **PUA Haiku 4.5** — 快速、轻量任务

## 安装

```bash
npm install -g @pua-ai/pua-code
```

## 快速上手

```bash
# 启动交互式会话
pua

# 问一个问题
pua "解释一下这个代码库"

# 修一个 Bug
pua "修复 login.ts 中的认证 bug"

# 创建 commit
pua /commit

# 审查 PR
pua /review
```

## 源码结构

```
restored-src/src/
├── main.tsx              # CLI 入口
├── tools/                # 30+ 工具实现（Bash、FileEdit、Grep、MCP 等）
├── commands/             # 40+ 命令实现（commit、review、config 等）
├── services/             # API、MCP、分析等服务
├── utils/                # 工具函数（git、model、auth、env 等）
├── context/              # React Context
├── coordinator/          # 多 Agent 协调
├── assistant/            # 助手模式（KAIROS）
├── buddy/                # AI 伴侣 UI
├── remote/               # 远程会话
├── plugins/              # 插件系统
├── skills/               # Skill 系统
├── voice/                # 语音交互
├── vim/                  # Vim 模式
├── hooks/                # Hook 系统
├── ink/                  # 终端 UI（Ink/React）
└── entrypoints/          # CLI 和 SDK 入口
```

## 配置

PUA Code 的配置存储在 `~/.pua/`：

```
~/.pua/
├── CLAUDE.md             # 全局指令（每次会话自动加载）
├── settings.json         # 用户偏好设置
├── projects/             # 按项目的记忆和设置
├── plugins/              # 已安装的插件
├── teams/                # Agent 团队配置
└── tasks/                # 任务列表
```

---

## Built by PUA Skill / 由 PUA Skill 团队出品

PUA Code is the official CLI product from [PUA Skill](https://openpua.ai) — the AI performance enforcement platform that ensures your AI agent exhausts every approach before giving up.

PUA Code 是 [PUA Skill](https://openpua.ai) 的官方 CLI 产品——一个 AI 性能执行平台，确保你的 AI Agent 穷尽所有方案后才停下。

- Website / 官网: [openpua.ai](https://openpua.ai)
- GitHub: [github.com/tanweai](https://github.com/tanweai)

## License

Proprietary. See [LICENSE.md](package/LICENSE.md) for details.
