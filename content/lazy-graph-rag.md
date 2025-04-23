---
title: Lazy Graph RAG
tags: [rag, graph-rag, lazy-graph, retrieval, generation, knowledge-graph, information-retrieval, ai]
description: Overview of Lazy Graph RAG approach combining graph structures with on-demand knowledge retrieval.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# LazyGraphRAG: Setting a new standard for quality and cost

## Overview
- Goal: Expand the class of questions AI systems can answer over private datasets using relationships in unstructured text
- Key Advantage: Ability to answer global queries that address the entire dataset
- Traditional Vector RAG: Excels for local queries with answers in specific text regions
- GraphRAG: Uses community structure of source text to answer global queries
- LazyGraphRAG: Aims to blend the advantages of Vector RAG and GraphRAG while overcoming their limitations

## Core Concepts
- Lazy Approach: Defers LLM use, increasing efficiency
- Iterative Deepening: Combines best-first and breadth-first search
- Relevance Test Budget: Controls the cost-quality trade-off

### Data Indexing
- LazyGraphRAG data indexing costs are identical to vector RAG and 0.1% of the costs of full GraphRAG
- Uses NLP noun phrase extraction to extract concepts and their co-occurrences
- Uses graph statistics to optimize the concept graph and extract hierarchical community structure

### Query Matching
- Ranks text chunks by similarity to the query, then ranks communities by the rank of their top-k text chunks
- Uses an LLM-based relevance assessor to rate the relevance of the top-k untested text chunks

### Answer Mapping
- Builds a subgraph of concepts from the relevant text chunks
- Uses community assignments of concepts to group related chunks together
- Uses an LLM to extract subquery-relevant claims from groups of related chunks

### Answer Reducing
- Uses an LLM to answer the expanded query using the extracted map claims

## Performance
### Cost
- For comparable query costs to vector RAG, LazyGraphRAG outperforms all competing methods on local queries
- Shows comparable answer quality to GraphRAG Global Search for global queries, but more than 700 times lower query cost
- For 4% of the query cost of GraphRAG global search, LazyGraphRAG significantly outperforms all competing methods

### Quality
- Strong performance across the cost-quality spectrum
- Outperforms all conditions on local and global queries at the lowest budget level
- Significantly outperforms all conditions on both local and global queries at an increased budget

### Scalability
- Scalable in terms of cost vs. quality
- Win rates increase with increased relevance test budget

## Comparison with other methods
- Vector RAG: Best-first search, no sense of the breadth of the dataset for global queries
- GraphRAG Global Search: Breadth-first search, no sense of the best communities for local queries
- LazyGraphRAG: Combines best-first and breadth-first search dynamics in an iterative deepening manner

## Use Cases
- Ideal for: One-off queries, exploratory analysis, streaming data use cases
- Valuable Tool: Benchmarking RAG approaches

## Future Directions
### Further research
- Combine GraphRAG data index of entity, relationship, and community summaries with a LazyGraphRAG-like search mechanism
- Design new kind of GraphRAG data index to support a LazyGraphRAG-like search mechanism
- Availability: Advances released via the GraphRAG GitHub repository
