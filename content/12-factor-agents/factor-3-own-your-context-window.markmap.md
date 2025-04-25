---
title: 3. Own Your Context Window
description: the importance of context window management in agent workflows.
tags: [12-factor-agents, context-window, context-engineering, agents, LLM]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# 3. Own Your Context Window
## Principle
- Everything is context engineering
- LLMs are stateless, context is key
## What Makes Great Context
- Prompt and instructions
- External data (RAG)
- Past state, tool calls, results
- Memory from related conversations
- Output instructions
## Standard vs Custom Formats
- Standard: message-based (system, user, assistant, tool)
- Custom: optimized for use case, e.g. XML-style
## Example
- Slack request, tool calls, results, errors, human responses
## Benefits
- Information density
- Error handling
- Safety
- Flexibility
- Token efficiency
## Reminder
- Context window is the main interface to the LLM
- Flexibility to experiment is key
