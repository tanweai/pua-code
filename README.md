# pua-code

[![linux.do](https://img.shields.io/badge/linux.do-huo0-blue?logo=linux&logoColor=white)](https://linux.do)

> [!WARNING]
> This repository is a rebranded fork of [claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap), reconstructed from the public npm package and source map analysis, **for research purposes only**.
> All references to "Claude" and "Anthropic" have been replaced with "PUA".
>
> 本仓库是 [claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) 的重命名分支，基于公开 npm 发布包与 source map 分析还原，**仅供研究使用**。
> 所有 "Claude" 和 "Anthropic" 引用已被替换为 "PUA"。

## 概述

本仓库通过 npm 发布包（`@pua-ai/pua-code`，原名 `@anthropic-ai/claude-code`）内附带的 source map（`cli.js.map`）还原的 TypeScript 源码，版本为 `2.1.88`。所有品牌引用已从 Claude/Anthropic 替换为 PUA。

## 修改说明

- 所有代码中的 `claude` / `Claude` / `CLAUDE` → `pua` / `Pua` / `PUA`
- 所有代码中的 `anthropic` / `Anthropic` / `ANTHROPIC` → `pua` / `Pua` / `PUA`
- 文件/目录名中的品牌引用已同步重命名
- 包名从 `@anthropic-ai/claude-code` 改为 `@pua-ai/pua-code`

## 来源

- 原始 npm 包：[@anthropic-ai/claude-code](https://www.npmjs.com/package/@anthropic-ai/claude-code)
- 还原版本：`2.1.88`
- 还原文件数：**4756 个**（含 1884 个 `.ts`/`.tsx` 源文件）
- 还原方式：提取 `cli.js.map` 中的 `sourcesContent` 字段

## 目录结构

```
restored-src/src/
├── main.tsx              # CLI 入口
├── tools/                # 工具实现（Bash、FileEdit、Grep、MCP 等 30+ 个）
├── commands/             # 命令实现（commit、review、config 等 40+ 个）
├── services/             # API、MCP、分析等服务
├── utils/                # 工具函数（git、model、auth、env 等）
├── context/              # React Context
├── coordinator/          # 多 Agent 协调模式
├── assistant/            # 助手模式（KAIROS）
├── buddy/                # AI 伴侣 UI
├── remote/               # 远程会话
├── plugins/              # 插件系统
├── skills/               # 技能系统
├── voice/                # 语音交互
└── vim/                  # Vim 模式
```

## 声明

- 原始源码版权归 Anthropic 所有
- 本仓库仅用于技术研究与学习，请勿用于商业用途
- 如有侵权，请联系删除
