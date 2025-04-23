---
title: RAG Architectures
tags: [rag, llm, architectures, retrieval, generation, ai, information-retrieval, document-retrieval]
description: Comprehensive overview of various RAG architecture types and their specific use cases.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# RAG Architectures
## Simple RAG
- Basic form of RAG
- Retrieves documents from static database in response to a query
- Generates output based on retrieved information
- Suitable for small databases and limited scope information like FAQ systems or customer support bots

## Simple RAG with Memory
- Introduces storage component to retain information from previous interactions
- Uses prompt caching to achieve memory
- Combines retrieved documents with stored memory for generation
- Useful for chatbots in customer service and personalized recommendations

## Branched RAG
- Selects specific data sources based on input
- Evaluates the query to choose most relevant source
- Retrieves documents from selected source
- Ideal for complex queries requiring specialized knowledge, like legal tools or multidisciplinary research

## HyDe (Hypothetical Document Embedding)
- Generates hypothetical documents before retrieving information
- Creates embedded representation of an ideal document
- Uses the hypothetical document to guide retrieval
- Beneficial for research and development where queries may be vague, and creative content generation

## Adaptive RAG
- Adjusts retrieval strategy based on query complexity
- Alters approach in real-time, using single or multiple sources
- Optimizes retrieval for each specific query
- Suitable for enterprise search systems with varying query complexity

## Corrective RAG (CRAG)
- Evaluates quality of retrieved information
- Breaks down documents into knowledge strips and grades them for relevance
- Initiates additional retrieval if initial retrieval doesn't meet relevance threshold
- Ideal for applications requiring high factual accuracy such as legal, medical, or financial analysis

## Self-RAG
- Generates retrieval queries during generation process
- Iteratively refines retrieval queries to fill information gaps
- Effective for exploratory research or long-form content creation

## Agentic RAG
- Employs autonomous, agent-like behavior in retrieval and generation
- Acts as an agent capable of complex, multi-step tasks
- Uses Document Agents for individual documents managed by Meta-Agent
- Meta-Agent integrates individual Document Agent outputs for final response
- Perfect for automated research, multi-source data aggregation, and executive decision support