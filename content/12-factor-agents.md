---
title: Building Robust AI Agents
description: A mind map of factors for building production-ready AI agents, drawing on software engineering principles.
tags: [AI, Agents, SoftwareEngineering, 12Factor, Markmap]
markmap:
  colorFreezeLevel: 2
  maxWidth: 700
---
# Building Robust AI Agents / 12 Factor Agents
## The Problem with Traditional Agents (Loop until you solve it)
* History: Software traditionally Directed Graphs (DGs), Acyclic Directed Graphs (DAGs); Agents seen as different, throwing DAG away
* Loop: LLM determines next step (tool calling), deterministic code executes, result appended to context, repeat until done
* Initial context is starting event (message, cron, etc.); LLM chooses tool or 'done'
* Biggest Problem: Agents get lost when context window gets too long
  * Spin out trying same broken approach
  * Happens with agentic coding tools too
  * Anything more than 10-20 turns becomes a big mess the LLM can't recover from
  * Not reliable enough for production/customers
## What Actually Works: Micro Agents
* Taking agent pattern and sprinkling into broader mostly deterministic DAGs
* Agents manage well-scoped sets of tasks
* Allows incorporating live human feedback into workflow steps without context error loops
* Example: Production deployment agent
  * Deterministic code handles deployment steps, tests, approvals
  * Agent's value is parsing human plaintext feedback for updated action
  * Tasks and contexts are isolated
  * LLM is kept focused on small, 5-10 step workflows
## Factors for Building Robust Agents
* Factor 1: Natural Language to Tool Calls
  * Convert natural language (e.g., "create a payment link for $750")
  * To a structured object (e.g., JSON for an API call)
  * Deterministic code picks up payload and executes
* Factor 2: Own Your Prompts
  * Don't outsource prompt engineering to frameworks
  * Treat prompts as first-class code
  * Benefits: Full Control, Testing and Evals, Iteration, Transparency, Role Hacking
  * Prompts are primary interface with LLM
* Factor 3: Own Your Context Window
  * AI engineering is Context Engineering
  * LLMs are stateless functions, need best inputs
  * Context includes: prompts, instructions, RAG data, past state/history (calls, results, memory), structured output instructions
  * Standard message-based format vs Custom optimized formats
    * Experiment with different structures (e.g., XML-style)
  * Benefits: Information Density, Error Handling, Safety, Flexibility, Token Efficiency
  * Need flexibility to try everything for context
* Factor 4: Tools Are Just Structured Outputs
  * Tools are structured output (JSON) from LLM
  * Pattern: LLM outputs JSON -> Deterministic code executes action -> Results fed back
  * Separation: LLM decides what, code controls how
  * Unlock flexibility by viewing "tool calls" as JSON describing code actions
* Factor 5: Unify Execution State and Business State
  * Avoid complex separation of state if possible
  * Infer execution state from the context window (metadata about history)
  * Minimize state outside context window
  * Benefits: Simplicity, Serialization, Debugging, Flexibility, Recovery, Forking, Human Interfaces/Observability
* Factor 6: Launch/Pause/Resume with Simple APIs
  * Agents should have standard program lifecycle APIs
  * Easy launch, query, resume, stop for users, apps, pipelines, agents
  * Pause for long-running operations, resume via external triggers (webhooks)
* Factor 7: Contact Humans With Tool Calls
  * Use structured output/tools (e.g., `request_human_input`, `done_for_now`) for human interaction
  * Receive human input/events via webhooks (slack, email, sms)
  * Benefits: Clear Instructions, Enables Inner vs Outer Loop workflows (Agent->Human), Multiple Human Access, Multi-Agent capable, Durable (with Factor 6)
  * Works great with Factor 11
* Factor 8: Own Your Control Flow
  * Build custom control structures for use case
  * Interrupt/resume agent flow (e.g., for human input, long tasks, approvals)
  * Need to interrupt between tool selection and invocation for review/approval of high-stakes calls
  * Custom features: summarization, LLM-as-judge, context compaction, logging, rate limiting, durable pause
* Factor 9: Compact Errors into Context Window
  * Enables agent "self-healing"
  * LLM reads error/stack trace to fix subsequent calls
  * Can limit attempts per tool call
  * Escalate to human after consecutive errors
  * Benefits: Self-Healing, Durable
  * Restructuring error representation or removing past events from context helps prevent spin-outs
  * Best prevention is Factor 10 (small, focused agents)
* Factor 10: Small, Focused Agents
  * Build agents that do one thing well, not monolithic
  * Agents are building blocks in deterministic system
  * Keeps context windows manageable (3-10, max 20 steps)
  * Benefits: Manageable Context, Clear Responsibilities, Better Reliability, Easier Testing/Debugging
  * Allows gradual expansion of agent scope as LLMs improve context handling
* Factor 11: Trigger From Anywhere, Meet Users Where They Are
  * Enable triggering agents from various channels (slack, email, sms)
  * Enable agents to respond via same channels
  * Benefits: Meet users where they are (digital coworkers), Outer Loop Agents (triggered by events), High Stakes Tools possible with human loop
* Factor 12: Make Your Agent a Stateless Reducer
  * (Briefly mentioned as "mostly just for fun")
* Factor 13: Pre-fetch all the context you might need
  * If a tool is likely, fetch needed context beforehand
  * Include context directly or via parameters/thread
  * Saves token round trips
  * AI engineering is all about Context Engineering