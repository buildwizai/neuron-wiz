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

- Definition: Delicate art and science of filling context window with just the right information
- Challenge: Context Explosion
  - LLM calls tools autonomously in a loop
  - Tool observations append to the chat list
  - Messages grow unbounded (e.g., 50+ tool calls per task)
- Result: Context Rot
  - Performance drops as context grows
  - Degradation starts early (e.g., 200K tokens before a 1M limit)
- Why Context Engineering?
  - Trust general models over early specialized fine-tuning
  - Avoid model re-training and re-optimization effort
  - Treat context engineering as the practical boundary between application and model

## Core Themes of Context Engineering

- Context Offloading
  - Move context from message history to external state (e.g., file system)
  - Prevent token-heavy tool outputs from spamming context
  - Manis Layered Action Space uses tool offloading
- Context Reduction
  - Summarize or compress information
  - Compaction (Reversible Reduction)
    - Strip information reconstructible from file system/external state (e.g., file path instead of content)
    - Crucial for chain predictions; preserves reversibility
    - Compact oldest tool calls (e.g., 50%) while keeping newer ones in full detail
  - Summarization (Irreversible Reduction)
    - Trigger when context hits pre-rot threshold (128K-200K) or compaction gain is tiny
    - Offload context to files (logs) before summarizing
    - Use structured schemas (forms) rather than free-form prompts for stable output
    - Keep the last few tool calls/results in full detail
- Context Retrieval
  - Access offloaded context on demand
  - Methods: Indexing/Semantic Search vs. file system/simple search tools (glob/grep)
  - Manis approach uses glob and grep due to new sandbox per session (avoids indexing overhead)
- Context Isolation (Multi-Agent Setup)
  - Split context across sub-agents; separation of concerns
  - Communicate via clear prompts; sub-agent context stays minimal when only final output matters
  - Share full history when tasks require previous tool usage history
  - Manis structure uses functional division (Planner, Executor, Knowledge Manager)
- Caching
  - Central to efficiency; distributed KV cache is important for cost at Manis scale

## Manis Specific Architectural Lessons

- Layered Action Space (Tool Offloading)
  - Prevent tool confusion; improve cache efficiency with minimal atomic functions
  - Level 1: Function Calling with a fixed, small set of atomic functions (e.g., file R/W, shell execution, search)
  - Level 2: Sandbox Utilities accessed via shell commands in a customized Linux VM
  - Allows new capabilities (format converters, MCP CLI) without altering the function calling space
  - Ideal for large outputs
  - Level 3: Packages and APIs where the agent writes scripts to call external APIs/libraries and returns summaries
  - Interface: All three layers route through standard function calls (shell, file R/W)
- Agent Communication
  - Share context via the same sandbox (file system)
  - Main agent defines output schema; sub-agents submit results using constraint decoding
- Long-Term Memory (Knowledge System)
  - Explicit Memory requires user confirmation ("Here's what I learned")
  - Future direction: Self-improving agents via parameter-free online learning from collective user feedback
- Planning
  - Structured planning via a dedicated Planner Agent (agent-as-tool)
  - Provides an external perspective for reviews; saves tokens compared to the to-do.md approach
- Evaluation Strategy
  - User Feedback is the gold standard (1-5 star ratings for completed sessions)
  - Automated Tests focus on execution tasks with verifiable results
  - Human Interns assess subjective quality (e.g., visualization polish, website generation)
- Philosophy
  - Trust the model and simplify the architecture
  - Avoid context over-engineering; the goal is to make the model's job simpler
