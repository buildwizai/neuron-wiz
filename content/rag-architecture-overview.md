---
title: RAG Architectures
tags: [rag, llm, architectures, retrieval, generation, data-retrieval, hallucinations, fact-based]
description: Overview of RAG architecture types, from simple implementations to advanced agentic systems.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Retrieval Augmented Generation (RAG)

## Key Concepts
- Enhances text generation with real-time data retrieval
- Two-stage process: Retrieval and Generation
  - Retrieval: Fetches relevant data from external sources
  - Generation: Processes retrieved data and generates response
- Addresses limitations such as hallucinations
- Improves fact-based, contextually relevant outputs
- Effective for real-time information retrieval

## RAG Architectures
### 1. Simple RAG
- Retrieves documents from a static database
- Generates output based on retrieved information
- Use case: FAQ systems, customer support bots

### 2. Simple RAG with Memory
- Retains information from previous interactions
- Uses prompt caching to achieve memory
- Combines retrieved documents with stored memory for generation
- Use case: Chatbots, personalized recommendations

### 3. Branched RAG
- Selects specific data sources based on input
- Evaluates the query and selects the most relevant source
- Retrieves documents from the selected source
- Use case: Complex queries, legal tools, multidisciplinary research

### 4. HyDE (Hypothetical Document Embedding)
- Generates hypothetical documents before retrieving information
- Creates an embedded representation of an ideal document
- Uses the hypothetical document to guide retrieval
- Use case: Research, creative content generation

### 5. Adaptive RAG
- Adjusts retrieval strategy based on the query
- Alters approach in real-time for simple or complex queries
- May retrieve from single or multiple sources
- Use case: Enterprise search systems

### 6. Corrective RAG (CRAG)
- Evaluates the quality of retrieved information
- Breaks down documents into "knowledge strips" and grades each strip for relevance
- Initiates additional retrieval if initial retrieval fails to meet relevance threshold
- Use case: High factual accuracy applications (legal, medical, financial)

### 7. Self-RAG
- Generates retrieval queries during the generation process
- Iteratively refines retrieval queries
- Use case: Exploratory research, long-form content creation

### 8. Agentic RAG
- Autonomous, agent-like behavior in retrieval and generation
- Acts as an "agent" to perform complex, multi-step tasks
- Employs Document Agents for individual documents managed by a Meta-Agent
- Meta-Agent integrates Document Agent outputs for final response
- Use case: Automated research, multi-source data aggregation, decision support