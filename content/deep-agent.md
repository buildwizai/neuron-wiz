---
title: Deep Agents Overview
description: A mind map detailing the concept, characteristics, applications, and architecture of deep agents.
tags: [AI, LLM, Agents, Architecture]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Deep Agents
## Introduction
* Definition
- LLM-based agents
- Capable of planning and executing complex tasks over longer time horizons
- Overcome limitations of "shallow" agents
* Comparison to "Shallow" Agents
- Shallow agents fail to plan/act over longer, complex tasks
- Naive LLM looping with tools is simplest but can be shallow
## Characteristics of Deep Agents
* Core algorithm is same as shallow agents (LLM in a loop calling tools)
* Four key components that make them "deep"
- Detailed System Prompt
- Contains detailed instructions and few-shot examples
- Crucial for agent depth
- Example: Claude Code's long, detailed prompts
- Planning Tool
- Strategy for context engineering to keep agent on track
- Can be a no-op tool
- Example: Claude Code uses a Todo list tool
- Important for executing complex tasks over longer time horizons
- Sub Agents
- Allow splitting up tasks
- Enable context management and prompt shortcuts
- Specifically focused on individual tasks to go deep
- Example: Claude Code can spawn sub-agents
- File System
- Access to modify files and jot down notes
- Acts as a shared workspace for all agents (and sub-agents)
- Helpful for managing accumulated context over long periods
- Examples: Claude Code, Manus
## Deep Agents in the Wild
* Applications where deep agents buck the "shallow" trend
- Deep Research
- Complex Coding Tasks (e.g., "async" coding)
* Examples
- Claude Code
- Manus
- Deep Research agents
* Many startups and customers creating vertical-specific versions
## Building Your Deep Agent
* `deepagents` open-source package
- Purpose: Create a general-purpose deep agent
- Installation: `pip install deepagents`
- Built-in components
- System prompt (inspired by Claude Code, generalized)
- No-op Todo list planning tool (same as Claude Code)
- Ability to spawn sub-agents
- Mocked out "virtual file system" (uses LangGraph state)
- Customization
- Pass in custom prompt (inserted into system prompt)
- Add custom tools
- Define custom subagents
- Example: Simple "deep research" agent built on `deepagents`