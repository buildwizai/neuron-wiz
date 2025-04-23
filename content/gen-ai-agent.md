---
title: Generative AI Agents
tags: [gen-ai, agents, autonomous-systems, reasoning, planning, tool-use, agent-architecture, llm-agents]
description: Overview of generative AI agent architectures, capabilities, and implementation strategies for autonomous task execution.
---

# Generative AI Agents

## Introduction
- Extend beyond standalone model capabilities
- Use tools to access real-time info, suggest actions
- Requires planning and self-directed execution
- Combination of reasoning, logic, and external information

## What is an agent?
- Application achieving a goal
- Observes the world and acts using tools
- **Autonomous**: can act independently
- **Proactive**: can reason about next steps
- Focus on Generative AI model-based agents

## Foundational Components (Cognitive Architecture)

### The model
- Language Model (LM) as central decision maker
- Can be single or multiple LMs, any size
- Capable of instruction-based reasoning (ReAct, CoT, ToT)
- Can be general-purpose, multimodal, or fine-tuned
- Ideally trained on data signatures of the tools
- Configuration (tools, orchestration) typically separate from training

### The tools
- Bridge the gap to the outside world
- Empower agents to interact with external data/services
- Variety of forms, align with web API methods
- Enable specialized systems like RAG
- Primary types for Google models:
    - **Extensions**
        - Bridge between API and agent (standardized)
        - Teach agent how to use API endpoint via examples
        - Teach required arguments/parameters
        - Agent dynamically selects suitable Extension
        - Google provides out-of-box extensions (e.g., Code Interpreter)
    - **Functions**
        - Self-contained code modules for specific tasks
        - Model decides when to use and what arguments are needed
        - Model outputs Function and arguments, no live API call by agent
        - **Executed on the client-side**
        - Developer has more granular control
        - Use cases include security restrictions, timing constraints, data transformation
    - **Data stores**
        - Provide access to dynamic and up-to-date information
        - Address limitations of static training data
        - Allow access to data in original formats (spreadsheets, PDFs)
        - Typically implemented as vector database
        - Used in Retrieval Augmented Generation (RAG)
        - Process involves embedding user query, matching against vector DB, retrieving content

### The orchestration layer
- Cyclical process governing information intake, reasoning, and action
- Continues until goal is reached or stopping point
- Complexity varies by agent and task
- Maintains memory, state, reasoning, and planning
- Uses prompt engineering frameworks
- Reasoning techniques:
    - **ReAct**
        - Reason and Act on user query
        - Improves human interoperability and trustworthiness
    - **Chain-of-Thought (CoT)**
        - Enables reasoning through intermediate steps
        - Sub-techniques: self-consistency, active-prompt, multimodal CoT
    - **Tree-of-thoughts (ToT)**
        - For exploration or strategic lookahead tasks
        - Generalizes over CoT

## Agents vs. models
- Models: limited to training data knowledge
- Agents: extend knowledge via tools
- Models: single inference/prediction, limited session history
- Agents: manage session history for multi-turn inference
- Models: no native tool implementation
- Agents: native tool implementation
- Models: user-formed prompts, reasoning frameworks in prompts
- Agents: native cognitive architecture with reasoning frameworks

## Cognitive architectures: How agents operate
- Cycle of planning, execution, and adjustment (chef analogy)
- Information intake -> Internal reasoning -> Action -> Adjustment
- Orchestration layer at the core

## Enhancing model performance with targeted learning
- Need for knowledge beyond training data for tool selection
- Approaches:
    - **In-context learning**
        - Prompt with tools and few-shot examples at inference
        - Learns 'on the fly'
        - ReAct framework example
    - **Retrieval-based in-context learning**
        - Dynamically populates prompt with relevant info/tools/examples from external memory
        - Vertex AI extensions 'Example Store', RAG data stores
    - **Fine-tuning based learning**
        - Training model on specific examples prior to inference
        - Helps understand when and how to apply tools

## Agent quick start with LangChain
- Open-source libraries for building custom agents
- "Chaining" logic, reasoning, and tool calls
- Example using SerpAPI and Google Places API
- Demonstrates Model, Orchestration, and tools working together

## Production applications with Vertex AI agents
- Requires integration with UI, evaluation, improvement mechanisms
- Vertex AI platform offers managed environment
- Natural language interface for defining agent elements
- Includes development tools for testing, evaluation, debugging
- Sample architecture on Vertex AI includes Vertex Agent Builder, Extensions, Function Calling, Example Store

## Summary
- Agents extend model capabilities via tools, real-time info, autonomous task execution
- Orchestration layer (cognitive architecture) guides reasoning and actions using frameworks
- Tools (Extensions, Functions, Data Stores) connect agents to the external world
    - Extensions: bridge to APIs
    - Functions: client-side execution, granular control
    - Data Stores: access to structured/unstructured data (RAG)
- Future advancements: more sophisticated tools, enhanced reasoning, agent chaining
- Building complex agents is iterative, requires experimentation