---
title: AI Agents Overview
tags: [ai-agents, autonomous-agents, overview, agent-architecture, components, capabilities, decision-making]
description: Comprehensive introduction to AI agents, their core components, and fundamental operational principles.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Agent Overview
## Definition
- An agent is **anything that can perceive its environment and act upon it**.
- Agents are characterized by their **environment and the set of actions** they can perform.
- In AI, agents use AI models as the "brain" for processing tasks, planning actions, and determining task completion.
## Core Components
### Environment
- The environment is **defined by the use case**.
- Examples include games, the internet, or a road system for a self-driving car.
- The environment determines the tools an agent can potentially use.
### Actions
- The actions an agent can perform are augmented by the tools it has access to.
- **There's a strong dependency between an agent's environment and its set of tools**.
- The set of actions can be read-only (perceive the environment) or write actions (act on the environment).
### AI Planner
- The AI model acts as the planner, determining the sequence of actions to achieve tasks.
- **Planning involves understanding the task, considering options, and choosing the most promising one**.
## Agent Operation
### Task Execution
- Agents reason about how to accomplish a task.
- They invoke tools to execute actions.
- Agents evaluate the outputs of tool execution.
- Finally, they determine whether the task has been successfully completed.
### Example: RAG System
- A RAG system is a simple agent that includes actions like response generation, SQL query generation, and SQL query execution.
### Example: SWE-agent
- SWE-agent's environment is a computer and file system with actions like navigation, search, viewing files and editing.
## Key Considerations
### Model Requirements
- Agents require **powerful models due to compound mistakes**, where the accuracy decreases with each step.
- Higher stakes are involved, as agent actions can have significant consequences.
### Autonomy
- **Autonomous agents can save human time and resources**.
### Success Factors
- The success of an agent depends on the **tools available to it and the strength of its AI planner**.
## Importance of Tools
- Tools are crucial for extending the agent's capabilities.
- Without external tools, an agent's capabilities are limited.
- Tools enable perception and action in the environment.
### Types of tools
- Knowledge augmentation: helps the agent access relevant information.
- Capability extension: overcomes inherent limitations of AI models.
- Write actions: enables the system to make changes to the data sources.
## Planning Process
### Decoupling
- Planning and execution are often decoupled so that only validated plans are executed.
### Evaluation
- Plans can be validated using heuristics or AI judges.
### Multi-agent Systems
- Most agentic workflows are complex and involve multiple components, creating multi-agent systems.
### Intent Classification
- Intent classifiers help agents plan by understanding the goal of the task.