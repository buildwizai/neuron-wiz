---
title: 1. Natural Language to Tool Calls
description: converting natural language to tool calls in agent workflows.
tags: [12-factor-agents, tool-calls, agents, LLM, workflow]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 1. Natural Language to Tool Calls
## Pattern
- Convert natural language to structured tool calls
- Enables agents to reason and execute tasks
## Example
- User request: create payment link
- Structured object for Stripe API
- Deterministic code executes output
## Notes
- Real agents may require more context (ids, etc.)
- Deterministic code handles structured output
- Looping and result handling covered in other factors
