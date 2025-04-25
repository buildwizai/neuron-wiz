---
title: 11. Trigger from Anywhere
description: enabling agents to be triggered from any channel or event.
tags: [12-factor-agents, triggers, agent-activation, LLM, workflow]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 11. Trigger from Anywhere
## Principle
- Agents should be triggerable from any channel
- Meet users where they are (slack, email, events)
## Features
- Outer loop agents: triggered by events, crons, outages
- Agents can contact humans for help/approval
- Enable high-stakes tools with human loop-in
## Benefits
- Realistic, human-like AI applications
- Auditability and confidence for high-stakes actions
## Related Factors
- Launch/pause/resume
- Contact humans with tool calls
- Small, focused agents
