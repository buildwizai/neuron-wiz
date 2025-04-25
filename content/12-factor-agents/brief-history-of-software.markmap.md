---
title: A Brief History of Software
description: the evolution of software and the rise of agentic patterns.
tags: [12-factor-agents, software-history, agents, LLM, workflow]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# A Brief History of Software
## 60 Years Ago
- Software as Directed Graphs (DGs), DAGs
- Flow charts
## 20 Years Ago
- DAG orchestrators: Airflow, Prefect, Dagster, Inngest, Windmill
- Observability, modularity, retries
## 10-15 Years Ago
- ML in DAGs: summarize, classify
- Still deterministic software
## The Promise of Agents
- Throw away the DAG
- LLMs decide path in real time
- Less code, error recovery, novel solutions
## Agents as Loops
- LLM determines next step (tool call)
- Deterministic code executes tool
- Result appended to context
- Repeat until done
- Problem: context window limits, agents get lost
## Micro Agents
- Small, focused agentic steps in larger DAGs
- Human-in-the-loop, error recovery
- Example: deployment workflow with agent and human approvals
## What is an Agent?
- Prompt (instructions, tools)
- Switch statement (control flow)
- Accumulated context (history)
- For loop (repeat until terminal step)
- Benefits: pause for human input, serialize context, optimize prompts
