---
title: 8. Own Your Control Flow
description: building custom control flow for agent workflows.
tags: [12-factor-agents, control-flow, agents, LLM, workflow]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 8. Own Your Control Flow
## Principle
- Build custom control structures for your use case
- Interrupt/resume agent flow as needed
## Patterns
- Break loop for human input or long-running tasks
- Summarization/caching, LLM-as-judge, context compaction
- Logging, tracing, rate limiting, durable sleep
## Example
- request_clarification: wait for human
- fetch_git_tags: fetch and continue
- create_issue: wait for human approval
## Benefits
- Resumability
- Review/approve before execution
- More natural conversations/workflows
## Related Factors
- Unify execution state
- Launch/pause/resume
- Contact humans with tools
