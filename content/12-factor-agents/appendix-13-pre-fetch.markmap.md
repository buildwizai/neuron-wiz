---
title: 13. Pre-fetch All the Context You Might Need
description: pre-fetching context for agent efficiency and deterministic workflows.
tags: [12-factor-agents, context-engineering, pre-fetch, agents, LLM]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 13. Pre-fetch All the Context You Might Need
## Principle
- Fetch likely-needed context before LLM asks
- Avoid unnecessary token round trips
## Example
- Instead of prompting LLM to fetch data, fetch it deterministically
- Include results in context window
## Implementation
- Add requests and results to thread events
- Remove unnecessary tool call intents from prompt
## Benefits
- Efficiency: fewer LLM calls
- Deterministic code handles known needs
- LLM focuses on using outputs, not fetching
## Related Factors
- Context engineering
- Stateless reducer
