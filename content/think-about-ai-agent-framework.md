---
title: How to Think About Agent Frameworks
description: A comprehensive overview of AI agent frameworks, their types, benefits, and how to evaluate them for production systems
tags: [ai-agents, frameworks, langgraph, workflows, orchestration]
created: 2025-04-24T10:00:00Z
updated: 2025-04-24T10:00:00Z
---

# How to think about agent frameworks
## TL;DR
- Hard part is making sure LLM has appropriate context at each step (controlling content, running steps)
- Agentic systems are workflows, agents, and everything in between
- Most frameworks are just agent abstractions, not orchestration frameworks
- Agent abstractions make getting started easy but obfuscate context control
- Agentic systems (agents or workflows) benefit from helpful features
- LangGraph is orchestration framework (declarative/imperative) with agent abstractions on top
## Background info
### What is an agent
- No consistent definition
- OpenAI: Systems that independently accomplish tasks on your behalf (vague, not practical)
- Anthropic:
  - Agentic systems: Categorizes variations
  - Workflows: LLMs/tools orchestrated through predefined code paths
  - Agents: LLMs dynamically direct processes/tool usage
  - Agent = LLM using tools based on environmental feedback in a loop (OpenAI basically means this too)
- Agent parameters: Model, instructions (system prompt), tools
- LLM is less in control in workflows, flow is more deterministic
- Don't always need agents
  - Workflows can be simpler, reliable, cheaper, faster, performant
  - Use workflows for predictability/consistency for well-defined tasks
  - Use agents when flexibility/model-driven decision-making needed at scale
- Most agentic systems are combination of workflows and agents
- Think "agentic" to different degrees, not binary "agent"
### What is hard about building agents?
- Making them reliable (prototype easy, reliable for production hard)
- Number one limitation for production: performance quality
- Why LLM messes up:
  - Model not good enough (less frequent)
  - Wrong/incomplete context passed to model (very frequent)
- Causes of wrong context:
  - Incomplete/short system messages
  - Vague user input
  - Not having access to right tools
  - Poor tool descriptions
  - Not passing in the right context
  - Poorly formatted tool responses
- Hard part: Making sure LLM has appropriate context at each step (controlling content, generating content)
- Frameworks making context control harder get in the way
### What is LangGraph
- Orchestration framework (declarative/imperative APIs) with agent abstractions on top
- Event-driven framework for agentic systems
- Common ways of using: Declarative graph syntax, agent abstractions
- Also supports functional and event-driven APIs
- Nodes represent units of work, edges represent transitions
- Nodes and edges are normal code (imperative logic)
- Graph structure is declarative, path can be dynamic (conditional edges)
- Built-in persistence layer
  - Enables fault tolerance, short-term memory, long-term memory
  - Enables human-in-the-loop/on-the-loop patterns (interrupt, approve, resume, time travel)
- Built-in support for streaming (tokens, node updates, arbitrary events)
- Integrates seamlessly with LangSmith (debugging, evaluation, observability)
## Flavors of agentic frameworks
- Different dimensions for comparison
### Workflows vs Agents
- Most frameworks have agent abstractions
- Some frameworks have workflow abstractions
- LangGraph is low-level orchestration framework for both, and in-between (crucial for production)
- Workflows are useful for passing right context (you decide data flow)
- Spectrum from "workflow" to "agent"
  - Predictability vs agency (more agentic = less predictable; predictability needed for trust/regulation; LangGraph supports anywhere)
  - High floor, low ceiling
    - Low floor: beginner-friendly
    - High floor: steep learning curve
    - Low ceiling: limitations, quickly outgrow
    - High ceiling: extensive capabilities
    - Workflow frameworks: High ceiling, high floor
    - Agent frameworks: Low floor, low ceiling
    - LangGraph aims for low floor (abstractions) and high ceiling (low-level)
### Declarative vs non-declarative
- Endless debate
- Non-declarative usually implies imperative
- LangGraph is a blend (declarative structure, imperative code)
- Supports other APIs besides declarative (functional, event-driven)
- Comparison to Tensorflow/Pytorch is incorrect
- Many frameworks (Agents SDK, CrewAI) are just abstractions, not orchestration frameworks
### Agent Abstractions
- Most frameworks contain abstractions (prompt, model, tools, parameters)
- Danger: Make it hard to understand/control exact input to LLM (crucial for reliability)
- Hard to change logic without modifying source code
- Original LangChain had this issue
- Value: Easier to get started
- Not good enough for building reliable agents yet
- Think like Keras (high-level on top of lower-level)
- LangGraph builds abstractions on top of its lower-level framework
### Multi Agent
- Agentic systems often contain multiple agents
- Key part: How they communicate
- Hard part (context to LLMs) applies to communication
- Communication methods: Handoffs (Agents SDK example)
- Best way: Workflows (blend of workflows and agents)
- Agentic systems are combinations, not just one type
- Building blocks can be combined and customized
## Common Questions
### What is the value of a framework?
- Agent abstractions (easy start, common build method) - downsides exist
- Short term memory (multi-turn support, threads)
- Long term memory (cross-thread memory/learning)
- Human-in-the-loop (feedback, approval, editing)
- Human-on-the-loop (inspect trajectory, time travel, rerun)
- Streaming (tokens, node updates, events)
- Debugging/observability (inspect steps, inputs/outputs) - LangSmith integration
- Fault tolerance (durable workflows, retries)
- Optimization (evaluation datasets, auto-optimize) - LangGraph not currently, dspy is example
- Value props (except abstractions) benefit all agentic system types
- Framework needed depends on required features and willingness to build them
- Understand the underlying code
### As models get better, will everything become agents instead of workflows?
- Tool-calling agents will improve
- Controlling LLM context still important
- Simple tool calling loop enough for some apps
- Workflows simpler/better for others
- Most production systems will be combinations
- Both OpenAI/Anthropic recommend simplest solution first
- Simple tool calling loop likely only with models trained on specific data
  - Task is unique (enterprise use cases) - often requires platforms for customization (Sierra) - training SOTA models is hard, currently mostly large labs
  - Task is not unique (computer use, coding) - general models might be good enough (OpenAI Computer Use, coding agents) - sensitivity to training data shape matters
- Even pure agent apps benefit from framework features (memory, human-in-loop, etc.)
### What did OpenAI get wrong in their take?
- Based on false dichotomies, conflates dimensions
- Inflates value of singular abstraction
- Misses main challenge (context control) and main framework value (reliable orchestration with control and production features)
- Specific issues:
  - "Declarative vs non-declarative graphs": misleading, Agents SDK is abstraction not imperative
  - "Cumbersome as workflows grow dynamic": true for complex workflows vs agents, not declarative vs non-declarative; use workflows when appropriate
  - "Necessitating learning specialized DSLs": Agents SDK has DSL (abstractions), obfuscates context more than LangGraph
  - "More flexible" (about Agents SDK): False, LangGraph is more flexible
  - "Code-first" (about Agents SDK): LangGraph uses more normal code
  - "Using familiar programming constructs" (about Agents SDK): LangGraph uses more normal code
  - "Enabling more dynamic... orchestration" (about non-declarative): related to workflows vs agents, not declarative vs non-declarative
### Comparing Agent Frameworks
- Dimensions: Orchestration or abstraction? Declarative or otherwise? Other features?
- Spreadsheet comparison exists (includes Agents SDK, Google's ADK, LangChain, Crew AI, etc.)
## Conclusion
- Hard part: Making sure LLM has appropriate context at each step
- Agentic systems are workflows, agents, and in between
- Most frameworks are just agent abstractions
- Abstractions ease start but obfuscate context control
- Agentic systems benefit from helpful features
- LangGraph is orchestration framework with agent abstractions on top