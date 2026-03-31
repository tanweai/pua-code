# PUA Code

<p align="center">
  <strong>🔥 PUA Code — AI-Powered CLI for Software Engineering</strong>
</p>

<p align="center">
  <a href="https://openpua.ai">Official Website</a> •
  <a href="https://github.com/tanweai/pua-code/issues">Issues</a> •
  <a href="#installation">Installation</a>
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

## Project Structure (Source)

```
restored-src/src/
├── main.tsx              # CLI entry point
├── tools/                # 30+ tool implementations (Bash, FileEdit, Grep, MCP, etc.)
├── commands/             # 40+ commands (commit, review, config, etc.)
├── services/             # API, MCP, analytics services
├── utils/                # Utilities (git, model, auth, env, etc.)
├── context/              # React Context providers
├── coordinator/          # Multi-agent coordination
├── assistant/            # Assistant mode (KAIROS)
├── buddy/                # AI companion UI
├── remote/               # Remote sessions
├── plugins/              # Plugin system
├── skills/               # Skills system
├── voice/                # Voice interaction
├── vim/                  # Vim mode
├── hooks/                # Hook system
├── ink/                  # Terminal UI (Ink/React)
└── entrypoints/          # CLI & SDK entry points
```

## Configuration

PUA Code stores configuration in `~/.pua/`:

```
~/.pua/
├── CLAUDE.md             # Global instructions (loaded every session)
├── settings.json         # User preferences
├── projects/             # Per-project memory and settings
├── plugins/              # Installed plugins
├── teams/                # Agent team configurations
└── tasks/                # Task lists
```

## Built by PUA Skill

PUA Code is the official CLI product from [PUA Skill](https://openpua.ai) — the AI performance enforcement platform that ensures your AI agent exhausts every approach before giving up.

- Website: [openpua.ai](https://openpua.ai)
- GitHub: [github.com/tanweai](https://github.com/tanweai)

## License

Proprietary. See [LICENSE.md](package/LICENSE.md) for details.
