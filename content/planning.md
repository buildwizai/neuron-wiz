---
title: AI Agent Planning
tags: [ai-agents, planning, task-decomposition, plan-generation, reasoning, error-correction, hierarchical-planning]
description: Detailed exploration of planning mechanisms used by AI agents to break down and execute complex tasks.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Planning
## Core Function
- **Planning is a process for creating a roadmap of steps to accomplish a task.**
- It requires understanding the task, considering different options and selecting the most promising one.
- Effective planning involves both a task's goal and its constraints.
## Key Concepts
### Plan
- A plan is a sequence of actions to achieve a specific goal.
### Task Decomposition
- Breaking down complex tasks into smaller, manageable actions.
## Planning Process
### Decoupling
- **Planning and execution are often decoupled to avoid wasting resources on bad plans.**
- A plan is generated, then validated before execution.
### Validation
- Plans are validated using:
  - Heuristics (e.g., checking for invalid actions)
  - AI judges (evaluating the plan's reasonableness)
### Generation
- If a plan is bad, a new one is generated. If a plan is good it is executed.
## Planning Components
- Plan generation, plan validation, and plan execution.
- Can be considered a **multi-agent system** with each component as an agent.
- Intent classifiers are often used to help agents plan by understanding the task's intent.
## Foundation Models as Planners
### Challenges
- There is debate about the ability of foundation models, especially autoregressive language models, to plan effectively.
- **Planning is essentially a search problem**, which requires backtracking.
### Abilities
- Foundation models may be capable of predicting the outcome of actions, which is crucial for planning.
- LLMs can be augmented with search tools and state tracking systems to help them plan.
## Plan Generation
### Methods
- Prompt engineering can turn a model into a plan generator, such as using system prompts with examples of valid plans.
- Plans can be a list of functions with parameters inferred by the agent.
- Parameters can be hard to predict since they are extracted from previous tool outputs.
### Hallucination
- **Both the action sequences and parameters can be hallucinated.**
### Tips
- Improve planning with better system prompts, tool descriptions and function design.
## Function Calling
- Many model providers offer tool use through function calling.
- The agent automatically generates what tools to use and their parameters based on the query.
- API settings can specify if a tool is required, not used or is chosen automatically.
## Planning Granularity
### Levels
- Plans can have different levels of granularity (e.g. high-level vs. detailed).
### Tradeoffs
- Detailed plans are harder to generate but easier to execute. Higher-level plans are easier to generate, but harder to execute.
- Hierarchical planning can balance this tradeoff.
## Plan Representation
### Function Names
- Plans can be generated using exact function names.
- This can make them harder to reuse and less robust to changes.
### Natural Language
- Plans can be generated using more natural language to increase flexibility and robustness.
- Natural language plans require a translator to turn them into executable commands.
## Complex Plans
### Control Flows
- Plans can have different control flows, including:
  - Sequential
  - Parallel
  - If statements
  - For loops
- AI models determine the control flows.
- Non-sequential control flows are harder to generate.
## Reflection and Error Correction
### Importance
- Reflection is crucial for an agent's success.
### Use Cases
- Evaluating the feasibility of the request
- Evaluating a generated plan
- Evaluating results of an execution step
- Evaluating if a task has been accomplished
### Mechanisms
- Self-critique prompts.
- Specialized scoring models.
### Interleaving
- Interleaving reasoning and action (ReAct) is a common approach.
### Learning
- Reflection allows agents to learn from their mistakes by generating new plans after failures.
- Separating evaluation and self-reflection (Reflexion) can improve performance.