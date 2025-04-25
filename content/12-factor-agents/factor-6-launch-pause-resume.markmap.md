---
title: 6. Launch/Pause/Resume with Simple APIs
description: launching, pausing, and resuming agents with simple APIs.
tags: [12-factor-agents, agent-lifecycle, pause-resume, agents, LLM]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 6. Launch/Pause/Resume with Simple APIs
## Principle
- Agents are programs: should be easy to launch, pause, resume, stop
## Features
- Simple API for launching agents
- Pause for long-running operations
- Resume via external triggers (webhooks)
## Related Factors
- Unify execution state and business state
- Own your control flow
- Contact humans with tool calls
- Trigger from anywhere
## Note
- Pause/resume should be possible between tool selection and execution
