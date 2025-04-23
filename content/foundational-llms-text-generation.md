---
title: Foundational LLMs for Text Generation
tags: [llms, text-generation, foundation-models, transformer-architecture, language-modeling, ai-fundamentals, token-prediction]
description: Exploration of foundational large language models, their architecture, and implementation for effective text generation.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Foundational Large Language Models & Text Generation
## Introduction
- Seismic shift in AI
- Processing, generation, understanding user intent
- Advanced AI system for human-like text
- Deep neural networks trained on massive text data
- Tasks: translation, generation, QA, summarization, reasoning
- Whitepaper scope: architectures, fine-tuning, efficiency, inference, applications

## Why language models are important
- Impressive performance boost
- Complex tasks: QA, reasoning
- Feasible new applications
- Language translation, code generation, text generation, text classification, QA
- Emergent behaviors
- Adaptation via fine-tuning (less data/compute)
- Guiding behavior via prompt engineering

## Large language models
- Predict probability of word sequences
- Assign probabilities to subsequent words given a prefix
- Basic LM: n-gram table
- Modern LM: neural models (transformers)

## Transformer
- Developed at Google in 2017 for translation
- Sequence-to-sequence model
- Converts one domain to another
- Encoder: input to representation
- Decoder: representation to output (autoregressive)
- Encoder output size linear in input size
- Multiple layers with specific transformations
- Input, hidden, output layers
- Input layer: raw data (Input/Output Embedding)
- Output layer: final output (Softmax)
- Hidden layers: processing (Multi-Head Attention)

### Input preparation and embedding
- Convert input sequence to tokens
- Convert tokens to input embeddings (high-dimensional meaning vector)
- Steps:
  - Optional Normalization (whitespace, accents)
  - Tokenization (words/subwords to integer IDs)
  - Embedding (token ID to vector via lookup)
  - Positional Encoding (word order information)

### Multi-head attention
- Feed embeddings into multi-head attention module
- Self-attention: focus on relevant parts, capture long-range dependencies
- Understanding self-attention:
  - Queries, Keys, Values (Q, K, V) via learned weight matrices
    - Query: "Which other words are relevant to me?"
    - Key: label for relevance
    - Value: word content
  - Calculating scores: dot product of query with all keys
  - Normalization: divide by sqrt(key dimension), softmax to get attention weights
  - Weighted values: value vectors multiplied by attention weights, summed for context-aware representation
- Multi-head attention: multiple sets of Q, K, V weights in parallel ("heads")
- Each head focuses on different aspects
- Outputs concatenated and linearly transformed (richer representation)
- Improves handling of complex patterns and long dependencies
- Crucial for nuanced understanding (translation, summarization, QA)

### Layer normalization and residual connections
- Each transformer layer (multi-head attention + feedforward)
- Layer normalization: normalize activations (reduce covariate shift, improve gradient flow, faster convergence, better performance)
- Residual connections: propagate inputs to layer outputs (easier optimization, vanishing/exploding gradients)
- Applied to multi-head attention and feedforward layer

### Feedforward layer
- After multi-head attention and 'Add and Norm'
- Position-wise transformation (independent for each position)
- Incorporates non-linearity and complexity
- Typically two linear transformations with non-linear activation (ReLU/GELU)
- Adds representational power
- Followed by another 'Add and Norm' step (stability, effectiveness)

### Encoder and decoder
- Original transformer: encoder and decoder modules
- Series of layers: multi-head self-attention, feed-forward, normalization, residual connections
- Encoder: processes input to contextual representation (embeddings Z)
- Decoder: generates output based on encoder context Z (token by token)
  - Masked self-attention: attends to earlier positions only (auto-regressive)
  - Encoder-decoder cross-attention: focuses on relevant input parts (using encoder embeddings)
  - Iterative process until end-of-sequence token
- Majority of recent LLMs: decoder-only variant
  - Input embedding and positional encoding
  - Masked self-attention for next token prediction
  - Simplifies architecture for some tasks

### Training the transformer
- Training: modifying model parameters (loss, backpropagation)
- Inference: using model for prediction (fixed weights)
- Focus on training process

#### Data preparation
- Cleaning: filtering, deduplication, normalization
- Tokenization: convert to tokens (Byte-Pair Encoding, Unigram)
- Vocabulary: set of unique tokens (model's "language")
- Split into training and test datasets

#### Training and loss function
- Batches of input sequences from training data
- Corresponding target sequence (self-derived in unsupervised pre-training)
- Transformer generates predicted output
- Loss function (cross-entropy) measures difference
- Gradients calculated, optimizer updates parameters
- Repeated until convergence or specified tokens
- Training task formulation depends on architecture:
  - Decoder-only: language modeling (predict next token)
  - Encoder-only (BERT): corrupt input, reconstruct (e.g., masked language modeling)
  - Encoder-decoder: sequence-to-sequence (translation, QA, summarization)
    - Can also be unsupervised (e.g., predict remainder of Wikipedia article)
- Context length: number of previous tokens model remembers
  - Longer context: more complex relationships, better performance
  - Longer context: more resources, slower training/inference
  - Balance trade-offs based on task and resources
