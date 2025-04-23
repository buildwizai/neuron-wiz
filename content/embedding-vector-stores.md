---
title: Embeddings and Vector Stores
tags: [embeddings, vector-stores, semantic-search, similarity-search, rag, vector-databases, information-retrieval]
description: Comprehensive guide to embedding models, vector stores, and their implementation for semantic search applications.
---

# Embeddings & Vector Stores

## Introduction
- Explores the power of embeddings for unifying diverse data.
- Transforms heterogeneous data into a unified vector representation.
- Covers concepts including understanding, techniques, management, vector databases, and applications.
- Provides code snippets for illustration.

## Embeddings

- **Importance of Embeddings**
    - Numerical representations of real-world data (text, speech, image, video).
    - Low-dimensional vectors where geometric distances reflect relationships.
    - Compact representations preserving semantic meaning.
    - Useful for retrieval and recommendations:
        - Includes precomputing embeddings, mapping query embeddings, and efficient nearest neighbor retrieval.
    - Essential for multimodality:
        - Projects diverse formats into a common vector space and retains key characteristics.
    - Task-specific representations.

- **Types of Embeddings**
    - Aim for low-dimensional representations that preserve essential information.
    - **Text Embeddings**
        - For natural language processing (NLP) tasks like text generation, classification, and sentiment analysis.
        - *Token/Word Embeddings*
            - Process: Tokenization, assigning unique integer IDs, and representing as sparse or dense vectors.
            - Techniques include GloVe (global and local statistics), SWIVEL (local windows with negative sampling), Word2Vec:
                - CBOW (predict middle word from context).
                - Skip-gram (predict surrounding words from middle word).
            - Can be derived from hidden layers of context-aware language models.
        - *Document Embeddings*
            - Represents meaning of words in paragraphs or documents.
            - Applications include semantic search, topic discovery, classification, and clustering.
            - Evolution from shallow models like Bag-of-Words, LSA, LDA, TF-IDF, and BM25 to deeper pretrained models like BERT and its variants (Sentence-BERT, SimCSE, E5) and other LLMs (T5, PaLM, Gemini, GPT, Llama).
            - Involves options like single-vector and multi-vector approaches.

    - **Image & Multimodal Embeddings**
        - Unimodal image embeddings typically use CNNs or the penultimate layer from Vision Transformers.
        - Multimodal embeddings combine text and image data.

    - **Structured Data Embeddings**
        - Created specifically for structured applications.
        - General structured data may use dimensionality reduction (e.g., PCA) for tasks like anomaly detection.
        - User/item structured data often combines with unstructured embeddings for recommendations.

    - **Graph Embeddings**
        - Represents nodes and their relationships for tasks such as node classification, graph classification, link prediction, and recommendations.
        - Techniques include DeepWalk, Node2vec, LINE, and GraphSAGE.

- **Training Embeddings**
    - Often uses a dual encoder (two-tower) architecture for queries/documents or image/text pairs.
    - Employs contrastive loss to bring positive pairs closer and push negatives apart.
    - Involves pretraining (unsupervised) followed by fine-tuning (supervised).
    - Can initialize from large pretrained models (BERT, T5, GPT).
    - Fine-tuning may include human labeling, synthetic data, distillation, and use of hard negatives.
    - Sometimes adds extra layers for specific downstream tasks.

## Vector Search

- Moves beyond keyword matching to search for meaning.
- **Process:**
    - Compute embeddings for items.
    - Store embeddings in a database.
    - Embed incoming queries.
    - Retrieve nearest neighbors using similarity metrics such as Euclidean, Cosine, or Dot product.

- **Key Algorithms:**
    - Linear search (O(N)) for small datasets.
    - Approximate Nearest Neighbor (ANN) search, which balances speed and accuracy:
        - Techniques include quantization, hashing, clustering, and tree-based methods.
    - Locality Sensitive Hashing (LSH) maps similar items into the same bucket.
    - Tree structures like Kd-tree and Ball-tree use medians or radial distances for decision boundaries.
    - Hierarchical Navigable Small Worlds (HNSW) offer sub-linear (O(log n)) runtime.
    - Google's ScaNN uses partitioning, approximate scoring, and optional rescoring.

## Vector Databases

- Designed for managing embeddings in production environments.
- **Workflow:**
    - Embed data points.
    - Augment with metadata and index.
    - Process queries by embedding inputs and retrieving similar items.
    - May include caching and pre/post-filtering.

- **Examples:**
    - Managed solutions: Google Cloud's Vertex Vector Search, AlloyDB, Cloud SQL Postgres with pgvector.
    - Open source options: Weaviate, ChromaDB.

- **Operational Considerations:**
    - Scalability (horizontal/vertical), availability, consistency.
    - Real-time updates, backups, access control, and compliance.
    - Handling updates due to model retraining and balancing update frequency vs. cost.
    - Integrating with full-text search for factors like literal/syntactic data.

## Applications

- Retrieval tasks (question answering, recommendations).
- Semantic text similarity for paraphrasing and duplicate detection.
- Classification (binary, multi-class, multi-label).
- Clustering and reranking.
- Retrieval Augmented Generation (RAG) for LLMs:
    - Retrieves relevant documents.
    - Uses prompt expansion to generate more accurate responses.
    - May supply sources for verification.

## Summary
- Embeddings and vector stores are crucial for managing and retrieving multimodal data.
- Choosing the right embedding model and vector database is key.
- Operational efficiency comes from automation and careful adjustment of resources.
- Key takeaways include wisely selecting models and databases to support applications like search, recommendations, and RAG.
