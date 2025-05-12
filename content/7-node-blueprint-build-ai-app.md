---
title: Seven Node Blueprint for AI Agents
description: A mental model for breaking down complex AI agents into core components.
tags: [AI, Agents, Blueprint, Framework, Markmap]
markmap:
    colorFreezeLevel: 2
    maxWidth: 600
---

# Seven Node Blueprint for AI Agents

## Core Principle

- Agents are Graphs:
    - Cycle of LLM deciding, using tools, getting feedback, reasoning, invoking more tools.
    - Allows non-deterministic behavior.
    - Contrast with linear, deterministic traditional workflows.
    - Enables breaking agents into smaller components.
    - Can be thought of as Lego bricks.

## The Seven Nodes

- **LLM Node**:
    - Brain of the agent.
    - Reasoning and decision-making.
    - Examples: GPT-4.1, Gemini 2.5 Pro, Claude 3.7 Sonnet.

- **Tool Node**:
    - Performs actions for the agent.
    - Invoked by LLM decisions.
    - Examples: Web search, code execution, database queries.

- **Control Node**:
    - Adds deterministic behavior.
    - Uses regular workflows or code instead of agent reasoning.
    - Handles filters, conditions, routing.
    - Routes based on agent output deterministically.

- **Memory Node**:
    - For long-term and short-term memory.
    - Short-term: Conversation history.
    - Long-term: Vector databases.
    - Typically managed at start and end of workflow.
    - Examples: Memzero library, Google Doc (basic visual example).

- **Guardrail Node**:
    - Makes agents more reliable.
    - Validates inputs and outputs.
    - Input Guardrails: Validate user input against rules (e.g., budget check for travel planning).
    - Output Guardrails: Validate agent output against rules (e.g., itinerary details match request).
    - Can use LLMs or deterministic code.
    - Crucial for filtering bad outputs, validating format, reducing hallucinations.
    - Can involve retrying the process with feedback (self-evaluation/critique).

- **Fallback Node**:
    - Handles errors gracefully.
    - Prevents crashing or ignoring errors.
    - Examples: Retry action, produce default response, alert internally.
    - Often used with Control nodes.
    - Error trigger can handle errors consistently from any part of workflow.

- **User Input Node**:
    - Gets feedback or confirmation from user.
    - Can interrupt agent operation (Human in the loop).
    - Example: Approving or declining an action (like sending a message or booking).

## Building Robust Agents

- Break down complex problems into bite-sized chunks.
- Combine the seven node components.
- Focus on subsections of the graph.
- Build components individually (like Lego bricks) and combine.
- Example workflow demonstrates combining multiple nodes (Memory, LLM, Tool, Guardrail, User Input, Control, Fallback).
- Multi-agent workflows can be built by stringing together LLM nodes with tools or using agents as tools (sub-agents).
- Ask questions about needed components (Memory, Guardrails, Fallback) to simplify design.