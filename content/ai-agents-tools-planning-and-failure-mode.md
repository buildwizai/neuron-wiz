---
title: AI Agents Tools, Planning, and Failure Mode
tags: [ai-agents, tools, planning, failure-mode, agent-architecture, evaluation, debugging, reliability]
description: Comprehensive guide to AI agent tools, planning mechanisms, and strategies for handling failure modes.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Agents
## Agent Overview
### Definition
- An agent perceives its environment and acts upon it
- Characterized by its environment and set of actions
### Environment
- Defined by use case
- Examples: games, internet, road systems
### Actions
- Augmented by tools
- Strong dependency between environment and tools
- AI is the brain, plans actions and determines task completion
### Agent Operation
- Reason about tasks
- Invoke tools to execute
- Evaluate tool outputs
- Determine task completion
### Requirements for powerful models
- Compound mistakes: accuracy decreases as steps increase
- Higher stakes: more impactful tasks, severe consequences of failure
- Autonomy can save human time and resources
### Success factors
- Tools and AI planner
## Tools
### Importance
- Extend capabilities
- Enable perception and action in the environment
### Types of tools
#### Knowledge augmentation
- Augment agent with relevant context
- Examples: text retriever, image retriever, SQL executor, web browsing
- Access to private and public information
- Web browsing prevents model staleness
#### Capability extension
- Address AI model limitations
- Examples: calculator, calendar, timezone converter, unit converter, translator, code interpreter
- Turns text/image-only models into multimodal
- Can significantly boost performance
#### Write actions
- Enable changes to data sources
- Examples: SQL executor, email API, banking API
- Automate workflows
- Requires security measures and trust
### Tool Inventory
- Set of tools agent has access to
- More tools increase capability but harder to utilize
- Requires experimentation for the right tool set
## Planning
### Overview
- Complex tasks require planning
- Plan is a roadmap for task completion
- Involves understanding the task, considering options and choosing the best one
- Decouple planning from execution to avoid waste
- Planning can be validated using heuristics or AI judges
- Can be a multi-agent system
- Intent classifier helps agents plan
- Human involvement can mitigate risk
### Processes
- Plan generation: task decomposition
- Reflection and error correction: evaluate and correct the plan
- Execution: actions based on plan
- Reflection and error correction: evaluate outcomes and correct mistakes
### Foundation Models as Planners
- Debate about planning capabilities of foundation models
- Planning is a search problem
- Requires understanding of available actions and their outcomes
- LLMs may be poor planners because they lack the tooling needed
### Plan Generation
- Can be achieved through prompt engineering
- Function parameters can be hard to predict in advance
- Hallucinations can occur in actions and parameters
- Improve planning with better prompts, tool descriptions, stronger models, finetuning
### Function Calling
- Tool use by model providers
- Define a tool inventory with entry point, parameters, and documentation
- Specify tools per query with settings: required, none, auto
- Model automatically generates tools and parameters
### Planning Granularity
- Detailed plans are harder to generate, easier to execute
- Hierarchical planning can be used to mitigate the trade off
- Use more natural language for plans to be robust to changes in APIs
- Requires a translator from natural language to executable commands
### Complex Plans
- Control flows determine the order of actions
- Sequential, parallel, if statement, and for loop control flows
- AI models determine the control flow
## Reflection and Error Correction
- Necessary for success of the agent
- Useful after queries, initial plans, each execution step and full execution
- Interleaving reasoning and action (ReAct)
- Reflection with self-critique prompts or separate evaluators
- Correct failures by reflecting on errors and improving
## Tool Selection
- Crucial for task success
- Depends on the environment, task and AI model
- Requires experimentation and analysis
- More tools increase capability but harder to use
- Tool transition: combine tools that are used frequently together
- Skill manager keeps track of and reuses skills/tools
## Agent Failure Modes and Evaluation
### Overview
- Evaluation is about detecting failures
- Unique failures from planning, tool execution, and efficiency
### Planning Failures
- Tool use failure: invalid tool, invalid parameters, incorrect parameter values
- Goal failure: fails to achieve goals or meet constraints
- Overlooking time constraints
- Errors in reflection
### Tool Failures
- Wrong tool outputs
- Translation errors
- Missing tools
### Efficiency
- Steps to complete a task, cost, and action duration
- Compare to human operators
## Conclusion
### Key Points
- Agents are defined by their environment and tools
- AI model is the brain for planning and task completion
- Agents built upon concepts such as self-critique and chain-of-thought
- Memory system enhances agents