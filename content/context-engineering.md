---
title: Context Engineering
description: A comprehensive overview of Context Engineering, its comparison with Prompt Engineering and Vibe Coding, and its implications for LLM development.
tags: [Context Engineering, LLMs, AI, Prompt Engineering, Vibe Coding]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Context Engineering
## Definition
* The art and science of structuring everything an LLM needs to complete a task successfully
* The delicate art and science of filling the context window with just the right information for the next step
* The art of providing all the context for the task to be plausibly solvable by the LLM
## Evolution & Comparison
### Vibe Coding
* Characterized by intuition and repetition, endlessly tweaking wording until it "felt right"
* Relied on experimentation in early LLM development
* **Limitations**: intuition doesn't scale, structure does; what works in a playground doesn't hold up in production
### Prompt Engineering
* Defined by clever, mostly one-liner instructions
* Focuses on *how to phrase* a task
* Users often associate prompts with short task descriptions
* Described as "for the moment," focused on specific input, and fine-tuning by changing words
* Often considered user-facing
* Provides "form" and is seen as "surface"
### Shift to Context Engineering
* Advocated as **10x better than prompt engineering and 100x better than vibe coding**
* "Prompt engineering walked so context engineering could run"
* Represents a **structural shift**, not just semantic
* Moves beyond crafting a single sentence to designing full systems
* Strongly endorsed by Andrej Karpathy (OpenAI co-founder) and Tobi Lütke (Shopify CEO)
## Why It's Necessary
* Traditional prompt engineering hits a wall as applications become more complex
* LLM failures are often due to an insufficient, disorganized, or wrong surrounding system context
* LLMs, like humans, respond differently depending on how they are "talked to" (e.g., poorly structured JSON vs. crisp natural language)
* AI models lack inherent intent, judgment, or first-principles reasoning; they predict the next word based on the provided context
* Ensuring the task is *possible to solve* in the first place is paramount
## Key Components & Aspects
* Involves curating, compressing, and sequencing the right inputs at the right time
* It is a **system**, not merely a sentence
* **Elements provided in context window**:
    * Task descriptions and explanations
    * Few-shot examples
    * Retrieval-augmented generation (RAG) for relevant documents
    * Summarizing long conversations to preserve state
    * Injecting structured knowledge
    * Supplying tools that enable the model to take action in the world
    * Memory, history, retrieval, and clean data
    * Context from user history, prior interactions, tool calls, and internal databases
    * Non-verbal cues like tone, role, intent, embedded values, and downstream use
* Requires building robust data pipelines to deliver context in a digestible format for Transformer-based systems
* **Example (Digital System Prompt Notebooks)**:
    * No-code solution using structured documents (e.g., Google Docs) as a "context world" for the LLM
    * Can include core tabs like Title and Summary, Role and Definition, Instructions, and Examples
    * Creates a detailed writing environment for the LLM to follow
    * LLM is prompted to use this file as a primary source of reference
    * Allows for on-the-fly updates, portability across different LLMs, and refreshing the LLM by recalling the file
## Broader Implications
* Primarily a **developer-facing** practice
* Frameworks like LangGraph gain traction by giving developers fine-grained control over model inputs, pre-run steps, and output storage
* Extends beyond technical aspects to **organizational implications**
    * Involves encoding how a company operates (e.g., structure of reports, communication tone, internal business logic)
    * Considered as much about **culture** as it is about code
* Forms **one piece of a growing software stack built around LLMs**
    * Coexists with problem decomposition, memory management, UI/UX flows, verification steps, and orchestrating multiple LLM calls
* Represents a **new paradigm of software**, not merely a "ChatGPT wrapper"
* Ultimately, **context engineering is the new software architecture**