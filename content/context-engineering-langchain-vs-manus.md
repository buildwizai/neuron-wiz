---
title: Context Engineering for AI Agents
description: Core concepts, challenges, and architectural lessons learned from building AI agents at Manis and LangChain.
tags: [AI, Agents, ContextManagement, LLM]
created_at: 2023-10-27
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Context Engineering for AI Agents
## Fundamentals and Challenges
* Definition: Delicate art and science of filling context window with just the right information
* Challenge: Context Explosion
 - LLM calls tools autonomously in a loop
 - Tool observations append to chat list
 - Unbounded growth of messages (e.g., 50+ tool calls per task)
* Result: Context Rot
 - Performance drops as context grows
 - Degradation starts early (e.g., 200K tokens before 1M limit)
* Why Context Engineering?
 - Trust general models over early specialized fine-tuning
 - Avoid model re-training and re-optimization effort
 - CE is the practical boundary between application and model

## Core Themes of Context Engineering
* Context Offloading
 - Idea: Move context from message history to external state (e.g., file system)
 - Purpose: Prevent token-heavy tool outputs from spamming context
 - Manis Layered Action Space uses tool offloading
* Context Reduction
 - Goal: Summarize or compress information
 - Compaction (Reversible Reduction)
  - Strips information reconstructible from file system/external state (e.g., file path instead of content)
  - Crucial for chain predictions; preserves reversibility
  - Compacting oldest tool calls (e.g., 50%) while keeping newer ones in full detail
 - Summarization (Irreversible Reduction)
  - Triggered when context hits pre-rot threshold (128K-200K) or compaction gain is tiny
  - Offload context to files (logs) before summarizing
  - Use structured schemas (forms) rather than free-form prompts for stable output
  - Keep the last few tool calls/results in full detail
* Context Retrieval
 - Accessing offloaded context on demand
 - Methods: Indexing/Semantic Search vs. File system/Simple search tools (glob/grep)
 - Manis approach uses glob and grep due to new sandbox per session (avoids indexing overhead)
* Context Isolation (Multi-Agent Setup)
 - Method: Split context across sub-agents; separation of concerns
 - By Communicating: Main agent sends clear prompt/instruction; sub-agent's context is only the instruction; only final output matters
 - By Sharing Context (Memory): Sub-agent sees entire previous history (tool usage history); suitable for complex tasks requiring full context history
 - Manis Structure: Uses functional division (Planner, Executor, Knowledge Manager) rather than role-based (Designer, Manager)
* Caching
 - Central to efficiency; distributed KV cache is important for cost at Manis scale

## Manis Specific Architectural Lessons
* Layered Action Space (Tool Offloading)
 - Goal: Prevent tool confusion; improve cache efficiency (minimal atomic functions)
 - Level 1: Function Calling
  - Fixed, small number of atomic functions (e.g., file R/W, shell execution, search)
 - Level 2: Sandbox Utilities
  - Accessed via shell commands in customized Linux VM
  - Allows adding new capabilities (format converters, MCP CLI) without altering function calling space
  - Good for large outputs
 - Level 3: Packages and APIs
  - Agent writes Python scripts to call external APIs/libraries
  - Perfect for heavy computation; script provides summary back to context
 - Interface: All three layers funnel through standard, simple function calls (shell, file R/W)
* Agent Communication
 - Passing context: Sharing the same sandbox (file system)
 - Output Control: Main agent defines the output schema; sub-agents submit results using constraint decoding (schema acts as a contract)
* Long-Term Memory (Knowledge System)
 - Explicit Memory: Requires user confirmation ("Here's what I learned")
 - Future Direction: Self-improving agents via parameter-free online learning from collective user feedback
* Planning
 - Current: Structuralized planning using a dedicated Planner Agent (Agent as Tool)
 - Benefit: Separate agent perspective for external reviews; saves tokens compared to older to-do.md approach
* Evaluation Strategy
 - 1. User Feedback: Gold standard (1-5 star ratings for completed sessions)
 - 2. Automated Tests: Internal datasets focused on execution/transactional tasks with verifiable results
 - 3. Human Interns: Used for subjective quality (e.g., visual appeal of visualization, website generation)
* Philosophy
 - Trust the model and simplify the architecture
 - Avoid context over-engineering; goal is to make the model's job simpler