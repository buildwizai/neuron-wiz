---
title: Context Engineering for AI Agents
tags: [AI, Agents, Context, LLM]
description: Core concepts, challenges, and architectural lessons learned from building AI agents at Manis and LangChain.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---
# Context Engineering for AI Agents

## Fundamentals and Challenges

- Definition
  - Delicate art and science of filling context window with just the right information
- Challenge: Context Explosion
  - LLM calls tools autonomously in a loop
  - Tool observations append to the chat list
  - Messages grow unbounded (e.g., 50+ tool calls per task)
- Result: Context Rot
  - Performance drops as context grows
  - Degradation starts early (e.g., 200K tokens before a 1M limit)
- Why Context Engineering
  - Trust general models over early specialized fine-tuning
  - Avoid model re-training and re-optimization effort
  - Treat context engineering as the practical boundary between application and model

## Core Themes of Context Engineering

- Context Offloading
  - Move context from message history to external state (e.g., file system)
  - Prevent token-heavy tool outputs from spamming context
  - Apply layered action space to offload heavy tool traces
- Context Reduction
  - Summarize or compress information
  - Compaction (reversible)
    - Strip information reconstructible from external state (e.g., file path instead of content)
    - Preserve reversibility to keep chain predictions accurate
    - Compact the oldest tool calls (e.g., 50%) while keeping newer ones detailed
  - Summarization (irreversible)
    - Trigger when context hits the pre-rot threshold (128K-200K) or compaction gain is small
    - Offload context to files (logs) before summarizing
    - Use structured schemas (forms) rather than free-form prompts for stability
    - Keep the last few tool calls/results in full detail
- Context Retrieval
  - Access offloaded context on demand
  - Choose between indexing/semantic search and file system commands (glob/grep)
  - Favor simple search utilities when each session uses a fresh sandbox
- Context Isolation (Multi-Agent Setup)
  - Split context across sub-agents to enforce separation of concerns
  - Communicate via clear prompts so sub-agent context stays minimal
  - Share full history only when tasks need prior tool usage
  - Structure teams functionally (Planner, Executor, Knowledge Manager)
- Caching
  - Treat distributed KV cache as core infrastructure for efficiency and cost control

## Manis Specific Architectural Lessons

- Layered Action Space (Tool Offloading)
  - Prevent tool confusion and improve cache efficiency with minimal atomic functions
  - Level 1: Function Calling with a fixed, small set of atomic functions (e.g., file R/W, shell execution, search)
  - Level 2: Sandbox Utilities accessed via shell commands in a customized Linux VM
    - Extend capabilities (format converters, MCP CLI) without changing the function calling space
    - Handle large outputs without bloating the context window
  - Level 3: Packages and APIs where the agent writes scripts to call external APIs/libraries and returns summaries
  - Interface: Route all layers through standard function calls (shell, file R/W)
- Agent Communication
  - Share context through the same sandbox (file system)
  - Define an output schema so sub-agents submit results via constraint decoding
- Long-Term Memory (Knowledge System)
  - Capture explicit memory only after user confirmation ("Here's what I learned")
  - Explore parameter-free online learning for self-improving agents
- Planning
  - Use a dedicated Planner Agent (agent-as-tool) for structured planning
  - Gain an external review perspective while saving tokens versus the to-do.md workflow
- Evaluation Strategy
  - User feedback (1-5 star ratings) is the primary quality signal
  - Automated tests cover execution tasks with verifiable outcomes
  - Human interns review subjective qualities (e.g., visualization polish, website generation)
- Philosophy
  - Trust the model and simplify the architecture
  - Avoid context over-engineering so the model's job stays simple
