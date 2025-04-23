---
title: Graph RAG Evaluation
tags: [rag, graph-rag, evaluation, metrics, benchmarks, performance-testing, local-queries, global-queries]
description: Evaluation methodologies and performance metrics for assessing Graph RAG systems against various benchmarks.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Evaluation of Graph RAG

## Datasets
### Podcast Transcripts
- Conversations between tech leaders
- Approximately 1 million tokens in size

### News Articles
- Diverse range of news from 2013 to 2023
- Around 1.7 million tokens in size

## Queries
### Activity-Centered Approach
- LLM generates potential users, tasks, and questions
- Questions require understanding of the entire corpus
- Designed to evaluate global sensemaking rather than fact retrieval

## Conditions
### Graph RAG
- Utilizes different levels of graph community summaries:
  - C0: Root-level summaries
  - C1: High-level sub-communities
  - C2: Intermediate-level sub-communities
  - C3: Low-level sub-communities

### Text Summarization (TS)
- Map-reduce summarization applied to source texts
- Serves as global approach baseline without graph index

### Naïve RAG (SS)
- Basic retrieval of text chunks based on semantic search
- Provides local approach baseline
- Chunks added to context window until token limit reached

## Metrics
### LLM Evaluator
- Head-to-head comparisons of generated answers
- LLM assesses answers based on metrics
- Accounts for LLM stochasticity through multiple runs

### Comprehensiveness
- Measures detail and completeness of answers

### Diversity
- Assesses variety and richness of perspectives

### Empowerment
- Evaluates answer effectiveness for understanding

### Directness
- Determines specific and clear question addressing
- Acts as validity control

## Results
### Global vs Naive RAG
- Global approaches outperform naïve RAG on comprehensiveness
- Naïve RAG provides more direct responses

### Community Summaries vs Source Texts
- Community summaries provide better comprehensiveness
- Graph RAG more scalable with less context tokens
- Root-level summaries (C0) show lower performance

### Empowerment
- Mixed results across approaches
- Example and citation ability crucial

### Context Window Size
- 8k token window optimal
- Outperforms larger sizes
- Used uniformly across conditions

### Graph Index
- Podcast dataset: 8564 nodes, 20691 edges
- News dataset: 15754 nodes, 19520 edges

## Key Findings
### Graph RAG
- Improves comprehensiveness and diversity
- Offers scalable approach
- Hierarchical structure aids iterative questioning

### Trade-Offs
- Implementation depends on compute budget and query volume

### Limitations
- Limited to specific questions and datasets
- Needs end-user validation