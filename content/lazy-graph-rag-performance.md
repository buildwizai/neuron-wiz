---
title: Lazy Graph RAG Performance
tags: [rag, graph-rag, lazy-graph, performance, benchmarks, cost-efficiency, quality-metrics, comparison]
description: Performance analysis of Lazy Graph RAG showing superior cost-quality balance compared to other approaches.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# LazyGraphRAG Performance

## Cost Efficiency
- Low Indexing Costs: Data indexing costs are identical to vector RAG and only 0.1% of the costs of full GraphRAG
- Reduced Query Costs: For comparable query costs to vector RAG, LazyGraphRAG outperforms all competing methods on local queries
- Global Query Efficiency: Achieves comparable answer quality to GraphRAG Global Search for global queries, but with more than 700 times lower query cost
- Cost-Effective Global Search: For just 4% of the query cost of GraphRAG global search, LazyGraphRAG significantly outperforms all competing methods on both local and global query types
- Deferred LLM Usage: The "lazy" approach defers LLM use, which dramatically increases the efficiency of answer generation

## Answer Quality
- Superior Local Query Performance: Outperforms all competing methods on local queries, including long-context vector RAG and GraphRAG DRIFT search
- Comparable Global Query Quality: Shows comparable answer quality to GraphRAG Global Search for global queries
- State-of-the-Art Quality: LazyGraphRAG demonstrates strong performance across the cost-quality spectrum
- High Win Rates: Significantly outperforms all conditions on both local and global queries at an increased budget of 500 relevance tests
- Improved Answer Quality: Answer quality improves with an increasing relevance test budget

## Scalability
- Cost Scalability: The system scales well in terms of cost vs. quality, as shown by increased win rates with a higher relevance test budget
- Quality Scalability: Can smoothly increase answer quality by increasing relevance test budget
- Flexible Performance: Overall performance can be scaled via the relevance test budget, which controls the cost-quality trade-off

## Comparison to Other Methods
- Outperforms Vector RAG: LazyGraphRAG outperforms vector RAG in local and global query scenarios, particularly where context is important
- Outperforms GraphRAG: It matches or exceeds the performance of GraphRAG, especially in terms of query costs
- Superior to Specialized Mechanisms: A single, flexible query mechanism outperforms diverse specialized query mechanisms across the local-global query spectrum

## Benchmarking
- Valuable Tool: The scalability of LazyGraphRAG makes it useful for benchmarking RAG approaches in general
- Comparative Analysis: Can be used to compare other RAG approaches (e.g., "RAG approach X beats LazyGraphRAG with budget Y for task Z")

## Use Cases
- Suitable Applications: Ideal for one-off queries, exploratory analysis, and streaming data use cases due to its fast indexing and low cost
- Versatile Tool: The flexibility and performance make it a suitable solution across various data analysis needs