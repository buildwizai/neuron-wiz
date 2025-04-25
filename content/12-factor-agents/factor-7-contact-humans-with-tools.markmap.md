---
title: 7. Contact Humans with Tool Calls
description: integrating human input into agent workflows using tool calls.
tags: [12-factor-agents, human-in-the-loop, tool-calls, agents, LLM]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 7. Contact Humans with Tool Calls
## Principle
- LLM can request human input as a tool call
- Use structured events for human interaction
## Implementation
- LLM outputs intent (e.g., request_human_input)
- Code notifies human, waits for response
- Webhooks handle human responses
## Benefits
- Clear instructions for LLM
- Supports agent-initiated workflows
- Multiple human access
- Multi-agent extension
- Durable, reliable workflows
## Related Factors
- Unify execution state
- Own your control flow
- Launch/pause/resume
- Trigger from anywhere
