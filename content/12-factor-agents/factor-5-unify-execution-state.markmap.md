---
title: 5. Unify Execution State and Business State
description: unifying execution and business state for agent reliability and simplicity.
tags: [12-factor-agents, state-management, agents, LLM, workflow]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 5. Unify Execution State and Business State
## Principle
- Minimize separation between execution and business state
- Infer execution state from context window
## Definitions
- Execution state: current step, waiting status, retry counts
- Business state: workflow history, tool calls, results
## Benefits
- Simplicity: one source of truth
- Serialization/deserialization
- Debugging: full history in one place
- Flexibility: add new state easily
- Recovery: resume from any point
- Forking: copy thread for new context
- Observability: easy to convert to UI/markdown
## Note
- Minimize what can't go in context window (e.g., secrets)
- Embrace context control for LLM
