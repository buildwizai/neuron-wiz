---
title: Efficient Large Language Models (LLMs)
description: A comprehensive overview of techniques for optimizing the efficiency and compression of Large Language Models.
tags: [LLMs, Compression, Efficiency, Quantization, Pruning, Knowledge Distillation, Low Rank Factorization, Inference, Deployment]
markmap:
  colorFreezeLevel: 2
  maxWidth: 500
---
# Efficient Large Language Models (LLMs)
## Motivation & Challenges
### Immense Scale
*   Revolutionized NLP but pose deployment barriers
*   Higher computational cost, memory access, memory usage
*   Leads to higher latency, lower throughput, power consumption, storage
*   Difficult on mobile/edge devices, personal laptops
*   GPT-175B requires 350GB memory (FP16)
### Core Architecture Bottlenecks
*   Transformer architecture with Multi-Headed Self-Attention (MHA)
*   Attention Operation: Quadratic complexity (O(n^2)) with input length
*   Decoding Approach: Auto-regressive, sequential token generation, KV cache growth
*   Feed Forward Network (FFN): Large parameter count, high memory usage

## Model Compression Techniques
### Quantization
*   Reduces bit-width (precision) of parameters (e.g., FP32 to INT8, INT4, 1-bit)
*   Reduces memory footprint and computational cost
*   **Types**
    *   Quantization-Aware Training (QAT): Integrates quantization into training, requires retraining
        *   Examples: OneBit (1-bit), LR-QAT, LLM-QAT, BitDistiller
    *   Post-Training Quantization (PTQ): Quantizes pre-trained models without retraining
        *   Weight-Only Quantization: Quantizes weights, speeds up memory access, reduces decoding latency
            *   Examples: GPTQ, AWQ, SpQR, QuIP, LUT-GEMM
        *   Weight-Activation Quantization: Quantizes both weights and activations, accelerates computation using Tensor Cores
            *   Handles outliers: LLM.int8(), SmoothQuant, RPTQ, OliVe, OS+, OmniQuant
        *   KV Cache Quantization: Reduces memory for Key-Value cache, supports longer contexts
            *   Examples: KVQuant, KIVI, WKVQuant
*   **Impact**
    *   Significantly reduces memory and inference speed
    *   May compromise emergent abilities or degrade performance in long contexts
    *   Weight-only boosts decoding, but may increase prefilling latency

### Pruning
*   Removes redundant components (weights, neurons, attention heads, layers)
*   Decreases computational complexity and memory usage
*   **Types**
    *   Unstructured Pruning: Removes individual weights, fine-grained, high sparsity
        *   Hardware acceleration difficult due to irregular patterns
        *   Examples: SparseGPT, Wanda, SAMSP, DSnoT
    *   Structured Pruning: Removes entire structural units (e.g., channels, layers, attention heads)
        *   Direct inference speedup on conventional hardware
        *   Can have more pronounced impact on model performance
        *   Examples: LLM-Pruner, Sheared LLaMA, SliceGPT, FLAP
    *   Semi-Structured Pruning: Intermediate between unstructured and structured (e.g., N:M sparsity)
        *   Examples: E-Sparse
*   **Limitations**
    *   Can lead to considerable performance degradation at high sparsity

### Knowledge Distillation (KD)
*   Transfers knowledge from a larger "teacher" model to a smaller "student" model
*   Aims to bridge performance gap while reducing model size and cost
*   **Types**
    *   Black-box KD: Only teacher's outputs accessible (e.g., proprietary LLMs)
        *   Distills emergent abilities: Chain-of-Thought (CoT), In-Context Learning (ICL), Instruction Following (IF)
        *   Examples: Distilling Step-by-Step, PaD, Lion, LaMini-LM
    *   White-box KD: Teacher's parameters or output distribution available (e.g., open-source LLMs)
        *   Utilizes intermediate features and output logits
        *   Examples: MiniLLM, GKD, TED
*   **Methods**
    *   Supervised Fine-Tuning (Sequence-Level KD)
    *   Similarity-based methods (aligning hidden states/features)
*   **Benefits**
    *   Faster deployment, lower cost, increased user privacy
*   **Drawbacks**
    *   Student model performance limited by teacher's quality
    *   Requires sufficient unlabeled data
    *   API terms often restrict using outputs for training competitors

### Low-Rank Factorization (LRF)
*   Approximates a large weight matrix with two smaller low-rank matrices
*   Reduces memory usage and enhances computational efficiency
*   Significantly improves fine-tuning efficiency, reducing storage and compute
*   Examples: LoRA, QLoRA, Linformer, LoRD, TensorGPT, ASVD
*   Linformer: Reduces self-attention complexity to O(n) by approximating with low-rank matrices

## Optimization Levels for Efficient LLM Inference
### Data-level Optimization
*   Optimizing input prompts or organizing output content
*   Typically does not change the original model
*   **Input Compression**
    *   Prompt Pruning: Removes unimportant tokens or sentences
    *   Prompt Summary: Condenses original prompt into a shorter summary
    *   Soft Prompt-based Compression: Designs shorter learnable continuous tokens
    *   Retrieval-Augmented Generation (RAG): Adds relevant retrieved information to the prompt
*   **Output Organization**
    *   Parallelizes generation by structuring output content
    *   Leverages LLMs' ability to plan output structure
    *   Examples: Skeleton-of-Thought (SoT), SGD, APAR, SGLang

### Model-level Optimization
*   Designing efficient model structures or compressing pre-trained models
*   Often requires pre-training or fine-tuning, typically involves performance trade-offs
*   **Efficient Structure Design**
    *   Efficient FFN Design: Integrates Mixture-of-Experts (MoE) for dynamic computational allocation
        *   Examples: Switch Transformers, MoEfication, Mixtral 8x7B
    *   Efficient Attention Design: Reduces quadratic complexity of attention operation
        *   Multi-Query Attention (MQA)/Grouped-Query Attention (GQA): Shares K/V cache across heads
        *   Low-Complexity Attention: Reduces complexity to O(n)
            *   Kernel-based Attention
            *   Low-Rank Attention
    *   Transformer Alternates: Sequence modeling architectures with sub-quadratic complexity
        *   State Space Model (SSM): Linear computational/memory complexity (e.g., Mamba, S4)
        *   Other Alternates: Long convolution, attention-like recurrence (e.g., RWKV, RetNet)
*   **Dynamic Inference**
    *   Adaptive selection of model sub-structures during inference (early exiting)
    *   Sample-level: Determines optimal model size/structure for input samples
    *   Token-level: Optimizes for each output token
*   **Structure Optimization**
    *   Neural Architecture Search (NAS): Automatically searches for optimal neural architectures
    *   Low-Rank Factorization (LRF): Approximates matrices with low-rank ones

### System-level Optimization
*   Optimizes the inference engine or the serving system
*   Typically lossless in model performance
*   **Inference Engine**
    *   Graph and Operator Optimization: Improves attention and linear operators, kernel fusion
        *   Attention Operator Optimization (e.g., FlashAttention, FlashDecoding++)
        *   Linear Operator Optimization (e.g., GEMV, FlatGEMM, MegaBlocks for MoE FFN)
    *   Speculative Decoding: Uses a smaller "draft" model to predict tokens, verified by the target LLM
        *   Ensures output equivalence with standard auto-regressive decoding
        *   Examples: SpD, LADE, Medusa, Eagle
    *   Offloading: Offloads part of storage from GPU to CPU to manage memory demands
        *   Examples: FlexGen, llama.cpp, PowerInfer
*   **Serving System**
    *   Memory Management: Optimizes KV cache storage (e.g., paged memory in vLLM)
    *   Continuous Batching: Batches new requests as old ones finish to improve utilization
    *   Scheduling Strategy: Optimizes request execution order (e.g., FCFS, preemptive scheduling)
    *   Distributed Systems: Exploits distributed computational resources for high throughput

## Hardware Accelerator Design
*   Focuses on optimizing Transformer architectures, especially the attention operator
*   Employs sparse methods for FPGA deployment
*   Examples: FACT, ALLO, DFX, FlightLLM

## LLMs as Compression Algorithms (Conceptual View)
### LLMs as Lossy Compressors
*   Idea: LLMs are highly efficient lossy compression algorithms for knowledge
*   Better compression implies better prediction, which is central to intelligence
*   "Understanding" enables maximal compression by identifying and removing redundant information
*   Can compress non-text data, sometimes outperforming domain-specific compressors
*   Hallucinations and limited recall can be seen as characteristics of lossy compression
*   Analogy: LLMs are like a blurry JPEG of the web
*   Compression-Meaning Tradeoff: Humans balance compression with semantic fidelity; LLMs prioritize aggressive statistical compression
*   LLMs capture broad conceptual categories well, but struggle with fine-grained semantic nuances

### LLMs for Lossless Compression
*   Can be used as a probabilistic model for an entropy encoder
*   Only encodes the "errors" or deviations from the model's predictions
*   Achieves very high compression ratios for natural language (e.g., 6% of ASCII size)
*   Examples: Fabrice Bellard's nncp / ts_zip

## Future Directions & Challenges
### Addressing Performance Gap
*   Compressed LLMs still lag behind uncompressed counterparts in some metrics
### Combining Compression Methods
*   Integrating orthogonal techniques (e.g., quantized low-rank adaptation, pruning + KD)
### Scaling Law Implications
*   Understanding the fundamental trade-off between model size and performance
### AutoML for Compression
*   Reducing manual design effort in hyperparameter selection and architecture tailoring
### Explainability of LLM Compression
*   Clarifying changes, trade-offs, and how emergent abilities are transferred
### Enhancing Long-Context Processing
*   Overcoming the quadratic complexity of attention for longer inputs
### Edge Device Deployment
*   Developing efficient and powerful smaller models for resource-constrained environments
### Security-Efficiency Synergy
*   Investigating the interplay and trade-offs between efficiency and security
### Exploring Beyond Transformers
*   Research into alternative architectures like State Space Models (SSMs)