---
title: Large Language Models - Fine-tuning, Data, and Evaluation
tags: [llm, ml, ai, fine-tuning, evaluation, data-preparation]
description: A comprehensive guide on fine-tuning Large Language Models, covering data preparation, evaluation methods, and practical considerations.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---
# Large Language Models
## Basics
- Neural Network Type: Transformer architecture for sequential data processing and generation
- Capabilities: Text generation, machine translation, sentiment analysis
- Learning: Unsupervised learning, self-learning of grammar, languages, knowledge
- Categories:
  - Autoregressive models (e.g., GPT)
  - Other types (e.g., BERT)
- Parameter Size: Most models have at least one billion parameters
## Fine-tuning
- Purpose: Tailor models for specific functions, adapt to specific domains
- Approaches:
  - Feature Extraction: Train only the final layer, rest of model frozen
  - Full Fine-Tuning: Train entire model on task-specific data
  - Parameter-Efficient Fine-Tuning (PEFT): Adapt LLMs efficiently (memory, computational performance)
    - Categories:
      - Additive Methods: Introduce new parameters
        - Adapters: Small dense networks inserted after transformer sublayers
        - Soft Prompts: Continuous trainable vectors concatenated to input embeddings
          - Prompt Tuning: Trainable "soft prompt" added to input embeddings
          - Prefix Tuning: Trainable "prefixes" across all model layers
          - P-tuning: Optimizes NLU tasks via trainable embedding tensor
          - IA³: Modifies learned vectors in attention/feedforward layers
      - Reparameterization-based Methods: Adjust existing parameters
        - Low-Rank Adaptation (LoRA): Decomposes weight updates into lower-rank matrices
        - QLoRA: Combines LoRA with quantization
        - DoRA: Weight-Decomposed Low-Rank Adaptation
        - OLoRA: Orthonormal Low-Rank Adaptation
        - PiSSA: Principal Singular Values and Vectors Adaptation
        - Merge LoRA Adapter: Merges adapter weights with base model
        - Variants: LoHa, LoKr, X-LoRA, KronA
      - Selective Methods: Selectively update subset of parameters
        - BitFit: Modifies only biases
        - DiffPruning: Updates weights sparsely with learnable binary mask
        - FAR: Freezes part of model parameters
        - FishMask: Selects parameters based on Fisher information
  - Retrieval-Augmented Fine-tuning (RAFT)
    - Concept: Domain-specific RAG solution
    - Data Augmentation: Uses question-answer-document triplets
    - Training: Model learns to extract correct info
    - Inference: Retrieves and validates top-k documents
  - Reinforcement Learning from Human Feedback (RLHF)
    - Purpose: Align model responses with human preferences
    - Core Pipeline:
      1. Instruction Tuning (SFT)
      2. Reward Model Training
      3. RL Optimization
    - Human Involvement: Selection, design, feedback
    - Preference Data: Rankings, ratings, multi-turn data
    - Reward Modeling: Captures human preference signal
    - Direct Alignment: DPO, DAA methods
## Data Preparation
- Challenges: Diversity, quality, efficiency, cost
- Techniques:
  - Data Sources: Common Crawl, Wikipedia, books, articles
  - Document Weighting: Repeating high-quality data
  - Deduplication: URLs, content, paragraphs
  - Data Cleaning: Heuristics, domain-specific mining
  - Formatting: Structuring content, filtering
  - Tokenization: BPE, Wordpiece, Unigram
- Tools:
  - Vector Databases: Store embeddings
  - Processing: Kubernetes, Spark, Python scripts
  - Orchestration: Airflow, Kubeflow
  - TractoAI: Simplifies data preparation
## Evaluation
- Methods:
  - Quantitative Metrics:
    - ROUGE: N-gram overlap
    - BertScore: Contextualized embeddings
    - Vector Similarity: Dot score, cosine similarity
  - Qualitative Metrics:
    - Human Evaluation: Structure, relevance, coherence
    - Golden Answers: Expert human comparisons
    - LLM-based: Ragas, CriteriaEvalChain
- Generalizability: Diverse question evaluation
- Iteration: User feedback collection
## Tools & Libraries
- Frameworks: PyTorch, TensorFlow, Transformers
- PEFT Library: Hugging Face integration
- Data Processing: Python ecosystem
- UI/GUI Tools: Llama Factory, Unsloth, Axolotl
- Deployment: FastAPI, Docker, Cloud platforms
- Evaluation: Ragas, LangChain, Inspect AI
## Key Concepts
- Transformer Architecture
- Attention Mechanisms
- Chain of Thought
- In-Context Learning
- Synthetic Data
- Distillation
- Prompt Engineering
- Chat Templates
- Tool Use / Function Calling
- Model Context Protocol
## Practical Considerations
- Computational Requirements
- Hyperparameter Tuning
- Data Quality vs. Quantity
- Overfitting Prevention
- Post-processing
- Cost & Time Management
- Model Deployment
- Scalability Planning
