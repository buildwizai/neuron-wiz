---
title: Claude Code Mind Map
description: A mind map summarizing key features and usage tips for Claude Code from the Anthropic YouTube video.
tags: [Claude Code, AI Assistant, Coding, Anthropic, Developer Tools, Mind Map]
markmap:
  colorFreezeLevel: 2
  maxWidth: 500
---
# Claude Code
## What is it
- New AI Assistant
- Agentic (Builds features, Writes functions/files, Fixes bugs)
- Works with all tools/IDEs/Terminals
- General Purpose
- Not line completion (vs. line-at-a-time)
## Getting Started
- Installation (Requires NodeJS, use npm install)
- `slash terminal setup` (Enables Shift+Enter for new lines)
- `slash theme` (Set light/dark/dotonize modes)
- `slash install github app` (Enable at-mentioning on issues/PRs)
- Customize allowed tools (Avoid prompts)
- Dictation (Mac OS accessibility feature to speak prompts)
## Recommended First Use: Codebase Q&A
- Start by asking questions about your codebase
    - How is piece of code used?
    - How do I instantiate this?
- Explores codebase (Not just text search)
- Finds examples, provides deeper answers (Like wiki/docs)
- Ask about Git history
    - Why a function has many/weird args
    - Who introduced changes
    - Linked issues
- Fetch GitHub issue context (Uses web fetch)
- Example: Asking "What did I ship this week?"
- Teaches prompting & tool boundaries
- Reduces technical onboarding time (From weeks to days at Anthropic)
- **Key principles**: Code stays local, No indexing, No training on code
## Core Capabilities & Workflows
- **Editing Code** (Next step after Q&A comfort)
    - Uses tools to explore, brainstorm, make edits
    - Doesn't require specific tool prompts
- **Brainstorming & Planning**
    - Highly recommended before writing large features
    - Ask it to "make a plan" first
- **Git Integration**
    - Understands Git history and log
    - Interprets "commit push" to commit, push, branch, create PR
- **Tool Integration**
    - Use Batch tools (CLIs)
    - Use MCP tools
    - Tell it about tools (e.g., use d-help)
    - Extremely powerful for new codebases
- **Iteration**
    - Most powerful when Claude can check its work
    - Needs a tool for feedback (Unit tests, Screenshotting, etc.)
    - Gives better results after iterating
- **Multimodal Functionality**
    - Fully multimodal from the start
    - Can use images (Drag/drop, File path, Copy/paste)
    - Example: Use mockups to build UI
- **Bash Command Safety** (Tricky Implementation Challenge)
    - Navigating inherent dangers of Bash
    - Avoiding constant manual approval
    - Tiered permission system (Allow/block lists)
    - Static analysis for safe command combinations
    - Read-only commands
## Context Management
- Giving more context leads to smarter decisions
- **`claude.md`** (Special file name, automatically read)
    - Project root (Simplest, shared with team)
    - Local (Personal, not checked in)
    - Nested directories (Pulled in on demand when working there)
    - Enterprise route (Shared across codebases)
    - **Contents**: Common tools (Bash, MCP), Architectural decisions, Important files, Style guides
    - **Tip**: Keep it short to save context
- **`/commands`** (Slash commands file)
    - In home directory or project repo
    - Define custom slash commands
    - Example: Label GitHub issues workflow
- At-mention files/folders (`@` symbol)
- **Context Hierarchy** (Project, Global, Enterprise)
    - Applies to configs, permissions, MCP servers
    - Use for auto-approving or blocking commands/URLs
- **Tuning context** dramatically improves performance
## Configuration & Sharing
- Configure `claude.md`, MCP servers, etc., once and share with team
- Creates a network effect
- **`memory` command**: See all loaded memory files
- **`slash memory`**: Edit specific memory files
- **`#`**: Remember something to a specific memory file
- Example: Shared Puppeteer MCP server in Anthropic's apps repo
## Pro Tips / Key Bindings
- **`Shift + Tab`**: Accept edits / Toggle auto-accept edits mode (Bash commands still need approval)
- **`#`**: Remember something (Adds to claude.md)
- **`!`**: Drop to bash mode / Run local command (Output goes into context)
- **`@`**: At-mention files/folders
- **`Escape`**: Stop current action (Safe, doesn't corrupt session)
- **`Escape twice`**: Jump back in history
- **`quad with resume`** / **`d-continue`**: Resume a previous session
- **`Control + R`**: Show full output (Context window)
## Claude Code SDK (`claude-p`)
- CLI SDK (`claude-p` flag)
- Allows building on top of Claude Code
- Same SDK Claude Code uses internally
- Pass prompt, allowed tools, format (json, streaming json)
- Used in CI, Pipelines, Incident response
- Acts like a Unix utility (Can pipe in/out - git status, logs, Sentry data)
## Advanced Usage / Parallelism
- Run multiple Claude Code sessions
- Power users utilize SSH, Tmux tunnels, multiple checkouts/Git worktrees
- Actively working on making parallelism easier
## Why CLI over IDE?
- **Common denominator**: Works across diverse IDEs used at Anthropic (VS Code, Zed, Xcode, Vim, Emacs)
- **Anticipating future**: Models are improving fast, potential future where traditional IDEs change/less needed, avoids over-investing in UI layer
## Usage at Anthropic
- Used by Engineers & Researchers daily (~80% of technical staff)
- Dogfooding is visible in the product
- Used for ML/Modeling (Includes using the notebook tool)