---
title: 9. Compact Errors into Context Window
description: how to handle errors in agent workflows for self-healing and robustness.
tags: [12-factor-agents, error-handling, agents, LLM, workflow]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 9. Compact Errors into Context Window
## Principle
- Add errors to context for self-healing
- LLM can read error messages and adapt
## Implementation
- Append error events to context
- Limit retries, escalate to human if needed
- Optionally restructure or remove errors from context
## Example
- Error handling loop with retry counter
- Escalate after threshold
## Benefits
- Self-healing agents
- Durable: can continue after failures
- Prevent error spin-outs with control flow and small agents
## Related Factors
- Own your control flow
- Own your context window
- Small, focused agents
