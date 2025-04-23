---
title: Lazy Graph RAG Core Concepts
tags: [rag, graph-rag, lazy-graph, core-concepts, knowledge-graph, community-structure, iterative-deepening]
description: Deep dive into the core concepts of Lazy Graph RAG including iterative deepening and relevance testing.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Core Concepts of LazyGraphRAG

## Lazy Approach
- Deferred LLM Use: Delays the use of Large Language Models until query time to enhance efficiency
- Reduced Up-front Costs: Avoids the need for prior summarization of source data, decreasing indexing costs
- Cost Efficiency: Lowers computational overhead by postponing resource-intensive processes

## Iterative Deepening
- Combined Search: Integrates both best-first and breadth-first search strategies
- Best-First Search: Uses query similarity to select the most relevant text chunks
- Breadth-First Search: Explores the dataset's community structure to consider the full scope of the data
- Dynamic Approach: Starts with a focused search and expands as needed

## Relevance Test Budget
- Cost-Quality Control: A single parameter that manages the balance between cost and answer quality
- Scalable Performance: Allows for adjustments to performance based on the budget allocated for testing
- Flexible Use: Enables users to tailor the system's intensity to specific needs

## Data Indexing
- Lightweight Indexing: Achieves costs identical to vector RAG and 0.1% of the costs of full GraphRAG
- NLP Extraction: Uses NLP to extract concepts and their co-occurrences from text
- Graph Optimization: Applies graph statistics to optimize the concept graph and extract hierarchical community structure

## Query Matching
- Initial Ranking: Ranks text chunks based on their similarity to the query and then ranks communities based on the rank of their top-k text chunks
- LLM Assessment: Utilizes an LLM-based assessor to evaluate the relevance of top-k untested text chunks
- Iterative Ranking: Ranks communities in an iterative way and recurses into sub-communities if necessary

## Answer Mapping
- Subgraph Creation: Develops a subgraph of concepts from relevant text chunks
- Community Grouping: Uses community assignments of concepts to group related chunks together
- Claim Extraction: Employs an LLM to extract subquery-relevant claims from groups of related chunks, thus focusing on relevant content

## Answer Reducing
- LLM Finalization: Uses an LLM to answer the expanded query utilizing extracted claims
- Contextual Synthesis: Combines the information from subqueries to provide a comprehensive response to the original query
- Concise Output: Delivers a summary from the relevant extracted claims