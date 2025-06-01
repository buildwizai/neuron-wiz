---
title: State of AI Agents and Agentic Systems
tags: [AI, agents, agentic systems, Andrew Ng, LangChain, DeepLearning.AI, workflows, evals, coding, MCP, startups]
description: Key concepts and insights from Andrew Ng on AI agents, skills, and emerging technologies.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---

# State of AI Agents and Agentic Systems

## Context
- Fireside chat with Andrew Ng and Harrison
- Andrew Ng's involvement with DeepLearning.AI and LangChain

## Defining "Agentic"
- Shift from "Is this an agent?" to degrees of "agenticness"
- Systems have varying autonomy
- Prefer calling all systems "agentic" to focus on building

## Current State & Opportunities
- Autonomy ranges from minimal to extensive
- LangGraph used for complex flows
- Many business opportunities are linear or have simple branches
    - Examples: forms, web search, database checks, copy/paste tasks
- Simpler workflows are still being developed
- Complex agentic workflows are also valuable

## Challenges in Building Agentic Systems
- Translating business processes into agentic workflows is difficult
- Determining task granularity for microtasks
- Deciding which step to improve when prototypes fail

## Key Skills for Agent Builders
- Integrating data (e.g., LangGraph, MCP)
- Prompting and managing multi-step systems
- Establishing evaluation frameworks
    - Understand system performance
    - Trace steps to identify issues (e.g., broken prompts)
    - Avoid relying solely on human evals
    - Start with simple, quick evals and improve incrementally
- Developing instincts for next steps
    - Skilled teams avoid blind alleys
    - Requires "tactile knowledge" from output/traces
- Understanding a wide range of AI tools ("Lego bricks")
    - Includes LangGraph, RAG, chatbots, memory, evals, guardrails
    - Familiarity enables faster assembly and decision-making
    - Stay updated as practices evolve (e.g., LLM context length)

## Underrated Areas / "Lego Bricks"
- **Evals:** Often discussed, rarely practiced; start simple and iterate
- **Voice Stack:** High enterprise value, underutilized by developers
    - Reduces user friction, easier for users to interact
    - Key challenge: latency (aim for sub-second)
    - Tricks: pre-response cues, background noise
    - Prefer agentic voice stack workflows for control
- **AI Assisted Coding:** Boosts productivity
    - Developers using it are faster
    - Some businesses restrict its use; this should change
    - Tools: Cursor, Warp, others
- **Learning to Code:** Essential for everyone
    - At AI Fund, all team members code
    - Enables precise instructions and productivity
    - AI helps with less familiar languages
    - Understanding code aids in debugging AI output

## MCP (Meta Common Protocol)
- Addresses a clear market gap
- Standardizes interfaces to tools/APIs and data sources
- Reduces integration effort from N*M to N+M
- Still early; many implementations are immature
    - Clunky authentication
    - Needs better discovery mechanisms
- Worth learning about

## Agent-to-Agent / Multi-Agent Systems
- Less attention than MCP, still early stage
- Most teams struggle with single-agent systems
- Multi-agent systems often work internally, but cross-team success is rare

## "Vibe Coding" Phenomenon
- Name is misleading; it's a deeply intellectual exercise
- Coding with AI assistance is valuable
- Advice against learning to code due to AI is misguided
    - As coding gets easier, more people learn

## Advice for Startups (from AI Fund)
- AI Fund co-founds companies
- Top predictor of success: speed of execution
- Second predictor: technical knowledge
    - Technology evolves quickly; technical expertise is rare and critical
    - Business knowledge is important but more common
    - AI Fund prefers deeply technical founders with strong instincts

