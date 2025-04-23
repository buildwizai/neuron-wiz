---
title: AI Agent Tools
tags: [ai-agents, tools, tool-integration, api-access, system-interface, agent-capabilities, task-execution]
description: Overview of various tools that enable AI agents to interact with external systems and data.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Tools

## Core Function

- **Tools extend an agent's capabilities** beyond what the AI model can do on its own.
- They allow an agent to **perceive its environment and act upon it**.
- Without external tools, an agent's abilities are limited.

## Types of Tools

### Knowledge Augmentation

- Tools that **help an agent gather relevant context** and information.
- Examples include:
  - **Text retrievers**
  - **Image retrievers**
  - **SQL executors**
  - **Web browsing** tools (including search APIs, news APIs)
- Can access both private and public information.
- Web browsing helps prevent models from becoming stale.

### Capability Extension

- Tools that **address the limitations of AI models**.
- Examples include:
  - **Calculators**
  - **Calendars**
  - **Time zone converters**
  - **Unit converters**
  - **Translators**
  - **Code interpreters**
- Can turn text or image only models into multimodal models.
- Provides a performance boost to the model.

### Write Actions

- Tools that **enable an agent to make changes** to data sources.
- Examples include:
  - **SQL executors** (can change or delete tables)
  - **Email APIs** (can send and respond to emails)
  - **Banking APIs** (can initiate bank transfers)
- Enables automation of workflows.
- Requires security and trust.

## Tool Inventory

- The **set of tools an agent has access to**.
- **More tools increase the capability of an agent but make it harder to utilize effectively**.
- Requires careful experimentation to find the right set of tools.

## Tool Selection

- Crucial for task success and depends on the environment, the task and the AI model.
- Requires experimentation and analysis.
- Consider:
  - Comparing agent performance with different sets of tools.
  - Conducting ablation studies.
  - Identifying tools that are frequently misused.
  - Analyzing tool usage distributions.
- Different tasks require different tools and different models have different tool preferences.

## Tool Use

- Tool use can significantly boost a model's performance compared to prompting or finetuning.
- Models can use tools through a mechanism called function calling.

## Tool Evolution

- Tools can be combined into more complex tools.
- Agents can learn new skills (tools) for later use.