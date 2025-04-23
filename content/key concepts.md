---
title: RAG Key Concepts
tags: [rag, llm, retrieval, generation, core-concepts, data-retrieval, hallucinations, use-cases]
description: Fundamental concepts of Retrieval Augmented Generation, explaining its core mechanics and benefits.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Retrieval Augmented Generation (RAG)
## Core Idea
- Enhances text generation by incorporating real-time data retrieval
- Combines retrieval and generation processes

## How RAG Works
- Retrieval Stage: Fetches relevant data from external sources based on a query
  - Sources can be databases or documents
- Generation Stage: Processes the retrieved data and generates a response
  - Creates coherent and informed responses

## Key Benefits
- Addresses limitations of traditional models, reducing hallucinations
- Improves fact-based, contextually relevant outputs
- Enables real-time information retrieval

## Advantages Over Other Methods
- Offers advantages over fine-tuning (retraining models)
- Offers advantages over prompt engineering (optimizing input queries)

## Use Cases
- Open-domain question answering
- Customer support automation
- Enterprise search

## RAG Variations
- Several architectures to support different use cases
- Vary in how they retrieve and process information
- Some use memory, source selection, hypothetical documents, or self-reflection
- Some RAG variations function like agents with multi-step capabilities