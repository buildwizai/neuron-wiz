---
title: 4. Tools Are Just Structured Outputs
description: structuring outputs as tools for agentic workflows.
tags: [12-factor-agents, structured-outputs, tools, agents, LLM]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 4. Tools Are Just Structured Outputs
## Principle
- Tools = structured output from LLM
- Triggers deterministic code
## Example
- LLM outputs JSON for tool (e.g., CreateIssue, SearchIssues)
- Code parses and executes action
## Pattern
- LLM decides what to do
- Code controls how it's done
- Not always a 1:1 mapping to functions
## Benefits
- Clean separation of decision and execution
- Flexibility in tool handling
- Can combine with custom control flow
