---
title: Graph RAG Approach Pipeline
tags: [rag, graph-rag, pipeline, data-indexing, query-matching, answer-mapping, answer-reducing, workflow]
description: Detailed explanation of the four-stage Graph RAG pipeline from data indexing to answer generation.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Graph RAG Approach & Pipeline

## Core Idea
- Utilizes an **LLM to construct a graph-based index** from text data
- Aims to address limitations of traditional RAG using **query-focused summarization**

## Indexing Time
### 1. Source Documents → Text Chunks
- Text Extraction and Chunking
  - Input texts divided into smaller segments
  - Chunk size affects LLM call frequency and recall
  - **Optimal chunk size balances recall and precision**

### 2. Text Chunks → Element Instances
- Graph Element Extraction
  - LLM identifies and extracts graph nodes and edges
  - **Entities, relationships, and covariates extracted**
  - Few-shot examples tailor prompts to domains
- Gleanings
  - Multiple rounds to catch missed entities
  - **Improves recall** through iterative prompting

### 3. Element Instances → Element Summaries
- Abstractive Summarization
  - LLM generates summaries of entities, relationships and claims
  - **Instance-level summaries converted to descriptive text**
  - Resilient to variations in entity references

### 4. Element Summaries → Graph Communities
- Graph Construction
  - Index modeled as **weighted, undirected graph**
  - Entity nodes connected by relationship edges
- Community Detection
  - **Leiden** algorithm partitions the graph
  - Identifies groups of closely related nodes
  - Recovers **hierarchical community structure**

### 5. Graph Communities → Community Summaries
- Report Generation
  - LLM creates community-level summaries
  - **Enables global understanding** without specific queries
- Summary Prioritization
  - Leaf-level communities prioritize based on edge prominence
  - Higher-level communities optimize for context window

## Query Time
### Community Summaries → Global Answer
- Hierarchical Summarization
  - Flexible use of multi-level community summaries
  - Balances detail and scope
- Multi-Stage Process
  - Prepares and chunks community summaries
  - Generates parallel intermediate answers
  - Filters unhelpful content by score
  - Combines into **final global answer**

## Key Components
- **LLM-Derived Graph Index**: Core enabler of summarization
- **Community Detection**: Enables parallel content processing
- **Hierarchical Summaries**: Supports multi-level exploration
- **Map-Reduce Approach**: Enables efficient large-scale processing