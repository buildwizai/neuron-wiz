---
title: Attention Is All You Need - The Transformer Model
description: A mind map summarizing the key concepts from the paper "Attention Is All You Need".
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# The Transformer Model: "Attention Is All You Need"
## Core Idea
* A new network architecture based solely on attention mechanisms
* Dispenses with recurrence (RNNs) and convolutions entirely
* Aims to increase parallelization and reduce training time
* Achieves state-of-the-art results on machine translation tasks

## Model Architecture
* **Encoder-Decoder Structure**
  * **Encoder Stack** (N=6 layers)
    * Maps input sequence (x₁, ..., xₙ) to continuous representations z = (z₁, ..., zₙ)
    * Two sub-layers per layer:
      * Multi-Head Self-Attention
      * Position-wise Fully Connected Feed-Forward Network
    * Uses residual connections and layer normalization
  * **Decoder Stack** (N=6 layers)
    * Generates output sequence (y₁, ..., yₘ) one element at a time (auto-regressive)
    * Three sub-layers per layer:
      * Masked Multi-Head Self-Attention (prevents attending to future positions)
      * Encoder-Decoder Attention (queries from decoder, keys/values from encoder)
      * Position-wise Fully Connected Feed-Forward Network
    * Uses residual connections and layer normalization

## Key Mechanisms
* **Attention**
  * Maps a query and a set of key-value pairs to an output
  * **Scaled Dot-Product Attention**
    * Computes dot products of the query with all keys
    * Scales by 1/√dₖ to counteract small gradients in softmax
    * Faster and more space-efficient than additive attention
  * **Multi-Head Attention** (h=8 heads)
    * Linearly projects queries, keys, and values `h` times
    * Performs attention in parallel on each projection
    * Allows model to attend to information from different representation subspaces
* **Position-wise Feed-Forward Networks**
  * Applied to each position separately and identically
  * Consists of two linear transformations with a ReLU activation
* **Positional Encoding**
  * Injects information about token position since the model has no recurrence/convolution
  * Uses sine and cosine functions of different frequencies
  * Allows the model to learn relative positions
* **Embeddings and Softmax**
  * Learned embeddings convert tokens to vectors
  * Shared weight matrix between embedding layers and pre-softmax linear transformation

## Why Self-Attention?
* **Advantages over RNNs & CNNs**
  * **Complexity per Layer**: Faster than recurrent layers when sequence length `n` < representation dimension `d`
  * **Parallelization**: Requires constant number of sequential operations (O(1)), unlike RNNs (O(n))
  * **Path Length**: Constant path length (O(1)) for long-range dependencies, making them easier to learn
* **Interpretability**
  * Attention distributions can be inspected
  * Heads appear to learn syntactic and semantic structures

## Training & Results
* **Training Details**
  * **Optimizer**: Adam with a custom learning rate schedule (linear warmup, then inverse square root decay)
  * **Regularization**:
    * Residual Dropout (Pdrop = 0.1)
    * Label Smoothing (ε = 0.1)
  * **Hardware**: Trained on 8 NVIDIA P100 GPUs
* **Machine Translation Results (WMT 2014)**
  * **English-to-German**: Achieved a new state-of-the-art BLEU score of 28.4
  * **English-to-French**: Achieved a new single-model state-of-the-art BLEU score of 41.8
  * Significantly faster to train than previous models
* **English Constituency Parsing**
  * Generalizes well to other tasks
  * Outperforms previous models, except for Recurrent Neural Network Grammar
  * Performs surprisingly well even with limited training data

## Conclusion & Future Work
* First sequence transduction model based entirely on attention
* Faster training and new state-of-the-art results for translation
* **Future Plans**:
  * Apply to other tasks and modalities (images, audio, video)
  * Investigate local, restricted attention for large inputs
  * Make generation less sequential