---
title: Graph RAG Pipeline Stages Mindmap
tags: [rag, graph-rag, pipeline, mindmap, visualization, workflow, data-processing]
description: Visual mindmap representation of the Graph RAG pipeline stages from source documents to answers.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Graph RAG Pipeline Stages

## Indexing Time

### Source Documents → Text Chunks
- Input texts are divided into smaller segments called text chunks [1, 2]
- Chunk size affects the number of LLM calls for extraction and recall [2]
- Optimal chunk size balances recall and precision. A smaller chunk size increases recall of entity references [2]

### Text Chunks → Element Instances
- LLM extracts graph nodes and edges from each chunk of text [3]
  - Entities, relationships, and covariates are extracted [1, 3]
- A multi-part LLM prompt identifies entities and relationships [3]
- Few-shot examples tailor prompts to specific domains [4]
- Secondary extraction prompt extracts additional covariates [4]
- Multiple rounds of "gleanings" can improve recall [5]

### Element Instances → Element Summaries
- LLM generates abstractive summaries of extracted elements [6]
- Instance-level summaries convert to descriptive text [6]
- Approach is resilient to variations in entity references [7]

### Element Summaries → Graph Communities
- Index is modeled as weighted, undirected graph [8]
- Entity nodes are connected by relationship edges [8]
- Weights represent normalized counts of relationship instances [8]
- Community detection algorithms partition the graph [8]
  - Leiden algorithm efficiently recovers hierarchical structures [8]

### Graph Communities → Community Summaries
- LLM generates report-like summaries for each community [9]
- Summaries help understand global structure without queries [9]
- Element summaries added based on edge prominence [10]
- Higher-level communities use sub-community summaries [10]

## Query Time

### Community Summaries → Community Answers
- Community summaries generate intermediate answers [11]
- Summaries are shuffled and divided into chunks [11]
- LLM generates scored answers in parallel [11]

### Community Answers → Global Answer
- Answers sorted by helpfulness scores [12]
- Context window used for final global answer [12]

## Key Components
- LLM-Derived Graph Index: Central to summarization [13]
- Community Detection: Enables parallel summarization [13]
- Hierarchical Summaries: Allow multi-level exploration [8]
- Map-Reduce Approach: Enables efficient processing [14]