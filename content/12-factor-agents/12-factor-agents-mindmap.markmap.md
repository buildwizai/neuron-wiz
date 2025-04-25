---
title: 12 Factor Agents - Principles for building reliable LLM applications
description: Mind map of 12 Factor Agents - Principles for building reliable LLM applications
tags: [AI, LLM, Agents, Software Engineering]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 12 Factor Agents - Principles for building reliable LLM applications
## How We Got Here: A Brief History of Software
* Software as Directed Graphs (DGs) and DAGs
  - Flow charts, program structure
* Rise of DAG Orchestrators
  - Airflow, Prefect, Dagster, Inngest, Windmill
  - Observability, modularity, retries
* ML in DAGs
  - ML steps in deterministic workflows
* The Promise of Agents
  - Throw away the DAG, let LLMs decide path
  - Less code, error recovery, novel solutions
* Agents as Loops
  - LLM determines next step (tool call)
  - Deterministic code executes tool
  - Result appended to context, repeat until done
  - Problems: context window limits, agents get lost
* Micro Agents
  - Small, focused agentic steps in larger DAGs
  - Human-in-the-loop, error recovery
  - Example: deployment workflow with agent and human approvals
* What is an Agent?
  - Prompt (instructions, tools)
  - Switch statement (control flow)
  - Accumulated context (history)
  - For loop (repeat until terminal step)

## The 12 Factors
### 1. Natural Language to Tool Calls
* Convert user language to structured tool calls
* Example: payment link creation
* Deterministic code executes structured output

### 2. Own Your Prompts
* Don't rely on framework black boxes
* Treat prompts as first-class code
* Benefits: control, testing, iteration, transparency

### 3. Own Your Context Window
* Everything is context engineering
* Structure context for LLM efficiency
* Standard vs custom context formats
* Benefits: information density, error handling, safety, flexibility, token efficiency

### 4. Tools Are Just Structured Outputs
* Tools = structured LLM output triggering code
* LLM outputs JSON, code decides what to do
* Clean separation of decision and execution

### 5. Unify Execution State and Business State
* Minimize separation between execution and business state
* Infer execution state from context window
* Benefits: simplicity, serialization, debugging, flexibility, recovery, forking, observability

### 6. Launch/Pause/Resume with Simple APIs
* Agents should be pausable and resumable
* Simple APIs for launching, pausing, resuming
* External triggers (webhooks) for resuming

### 7. Contact Humans with Tool Calls
* LLM can request human input as a tool call
* Structured events for human interaction
* Benefits: clear instructions, outer loop agents, multiple human access, multi-agent, durability

### 8. Own Your Control Flow
* Build custom control structures for your use case
* Interrupt/resume agent flow as needed
* Example: break loop for human input or long-running tasks
* Benefits: resumability, review/approve before execution

### 9. Compact Errors into Context Window
* Add errors to context for self-healing
* Limit retries, escalate to human if needed
* Benefits: self-healing, durability

### 10. Small, Focused Agents
* Prefer small agents with clear responsibilities
* Manageable context, better reliability, easier testing/debugging
* Expand agent scope as LLMs improve

### 11. Trigger from Anywhere
* Allow agents to be triggered from any channel (slack, email, events)
* Meet users where they are
* Enable outer loop agents and high-stakes tools

### 12. Make Your Agent a Stateless Reducer
* Agents as stateless reducers (fold over events)
* Simplicity and composability

## Honorable Mention
### 13. Pre-fetch All the Context You Might Need
* Deterministically fetch likely-needed context before LLM asks
* Reduces token round trips, improves efficiency

## Recurring Themes
* Flexibility: try everything, experiment with structure
* Context Engineering: optimize what and how you pass to LLMs
* Deterministic code + LLM reasoning: best of both worlds
* Human-in-the-loop: for high-stakes or error recovery
* Serialization and observability: easy to debug, resume, and audit
