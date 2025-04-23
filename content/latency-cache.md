---
title: Reducing Latency with Cache
tags: [caching, latency-optimization, prompt-cache, exact-cache, semantic-cache, performance, vector-database]
description: Strategies for implementing caching mechanisms to reduce latency in generative AI platforms.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Latency and Cache
## Core Concepts
  - **Latency:** The delay in processing a request and generating a response.
  - **Cache:**  A storage mechanism for reusing previously computed results, reducing latency and cost.
## Caching Techniques
  - **Prompt Cache:**
    - **Stores and reuses overlapping text segments** in prompts (e.g., system prompts).
    - Reduces the need to process repetitive input tokens, decreasing latency and costs.
    - Especially useful for applications with long system prompts or documents.
    - **Implemented by model APIs** (e.g., Gemini's context cache)
  - **Exact Cache:**
    - **Stores and reuses processed items** when the exact same items are requested.
    - Used for model outputs and embedding-based retrieval.
    - Suitable for queries that require multiple steps or time-consuming actions.
    - Implementation:
        - Can use in-memory storage or databases.
        - Requires an eviction policy to manage cache size.
    - **Cache Duration:** Depends on how likely a query will be called again.
  - **Semantic Cache:**
    - **Reuses responses for semantically similar queries**, does not require identical queries.
    - Determines semantic similarity using embedding-based similarity.
    - Implementation:
        - Requires a vector database.
        - Has a similarity threshold to determine matches.
    - **Potential Issues**:
        - Relies on high-quality embeddings and vector search.
        - Can be computationally expensive.
        - Setting the right similarity threshold is crucial and can be difficult.
## Latency Metrics
  - **Time to First Token (TTFT):** Time it takes for the first token to be generated.
  - **Time Between Tokens (TBT):** Interval between each token generation.
  - **Tokens Per Second (TPS):** Rate at which tokens are generated.
  - **Time Per Output Token (TPOT):** Time it takes to generate each output token.
  - **Total Latency:** Total time required to complete a response.
## Other Considerations
  - **Cache Location**: KV cache and prompt cache are usually part of the model API.
  - **Cache for training**: Caching can be used during training, but this post is focused on caching for deployment/inference.
  - **Tradeoffs**: Semantic cache can be more complex and failure prone, but can be worth it if the cache hit rate is high.
  - **Retry policies**: Can increase latency and costs [1]
    - Retries can be carried out in parallel to reduce latency [1]