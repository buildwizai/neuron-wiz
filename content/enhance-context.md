---
title: Enhancing Context in AI Platforms
tags: [rag, context-enhancement, retrieval, embedding, document-chunking, query-rewriting, tabular-data]
description: Techniques for improving context quality in generative AI platforms through retrieval methods and data integration.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Enhance Context
## Core Concepts
- **Context Construction:** Gathering relevant information to augment queries.
- **Purpose:** To provide models with necessary information to reduce reliance on internal knowledge and improve response quality.
- **In-context Learning:** Enables models to learn from context and incorporate new information.
## Retrieval Augmented Generation (RAG)
- **Components:**
  - **Retriever:** Fetches relevant information from external sources.
    - **Term-based Retrieval:** Keyword search, BM25, Elasticsearch.
      - Suitable for text data, also works with text metadata for images and videos.
      - **Faster and cheaper**.
    - **Embedding-based Retrieval:** Vector search using embedding models.
      - Uses ANN algorithms for nearest neighbor search.
      - Works with various data types (text, images, audio, code).
      - Can be more accurate but is **more computationally expensive** than term-based.
    - **Hybrid Search:** Combination of term-based and embedding-based retrieval.
      - Often sequential, with term-based retrieval as a first pass followed by embedding-based reranking.
  - **Generator:** Language model that generates the response.
- **Document Handling:**
  - Documents are split into **manageable chunks**.
  - Chunking is determined by model's context length and application's latency needs.
  - Optimal chunk size is a key consideration.
- **Context Reranking:**
  - Ordering of documents matters for model processing, though less critical than in search ranking.
  - Models may better understand documents at the beginning and end of the context.
## RAGs with Tabular Data
- **Process:**
  - **Text-to-SQL:** Converts user query to SQL.
  - **SQL Execution:** Runs the SQL query.
  - **Generation:** Generates a response based on the SQL result.
- **Table Selection:** If many tables are available, an intermediate step may be needed to determine which tables to use.
## Agentic RAGs
- **External Actions:** Models can use tools like web search APIs.
- **Workflow:** Incorporates external actions as function calls.
- **Tools vs. Actions:** Terms often used interchangeably.
- **Read-only vs. Write Actions:**
  - Read-only actions retrieve information without changing state.
  - Write actions modify data sources, increasing functionality but also risk.
## Query Rewriting
- **Purpose:** To clarify ambiguous user queries for better information retrieval.
- **Process:** Uses AI models to rewrite queries based on conversation history.
- **Challenges:**
  - Identity resolution.
  - Handling unsolvable queries without hallucination.