---
title: LoRA - Low-Rank Adaptation of Large Language Models
description: A mind map summarizing the key concepts, methodology, and empirical results of the LoRA paper.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# LoRA: Low-Rank Adaptation of Large Language Models

## Introduction & Problem
- **Paradigm:** Large-scale pre-training and task-specific adaptation.
- **Problem with Full Fine-Tuning:**
  - Retrains all model parameters.
  - Becomes infeasible for large models (e.g., GPT-3 175B).
  - Deploying independent instances is prohibitively expensive.
  - Requires storing a full copy of parameters for each task.

## Core Idea & Methodology
- **Hypothesis:** The change in weights (ΔW) during adaptation has a low "intrinsic rank".
- **LoRA Approach:**
  - Freezes pre-trained model weights (W₀).
  - Injects trainable rank decomposition matrices (A and B) into Transformer layers.
  - The update is represented as ΔW = BA.
  - The modified forward pass: `h = W₀x + BAx`.
- **Initialization:**
  - A: Random Gaussian initialization.
  - B: Zero initialization, so ΔW is zero at the start.
- **Key Advantages:**
  - **Parameter Efficiency:** Reduces trainable parameters by up to 10,000x.
  - **Storage Efficiency:** Reduces checkpoint size significantly (e.g., 350GB to 35MB for GPT-3).
  - **No Inference Latency:** Trainable matrices can be merged with frozen weights (`W = W₀ + BA`) for deployment.
  - **Efficient Task Switching:** Swap small LoRA modules (A and B) instead of entire models.
  - **Reduced Hardware Barrier:** Lowers GPU memory requirement by up to 3x.
  - **Orthogonality:** Can be combined with other methods like prefix-tuning.

## Comparison with Existing Solutions
- **Adapter Layers:**
  - **Limitation:** Introduce inference latency by adding extra layers that are processed sequentially.
  - Latency is significant in online settings with small batch sizes.
- **Prefix-Tuning (Prompt Optimization):**
  - **Limitation:** Difficult to optimize.
  - Reduces the usable sequence length for task processing.
  - Performance can degrade as more trainable parameters (special tokens) are added.

## Empirical Experiments & Results
- **Models Tested:**
  - RoBERTa (base/large)
  - DeBERTa (XXL)
  - GPT-2 (medium/large)
  - GPT-3 (175B)
- **Key Findings:**
  - LoRA performs on-par or better than full fine-tuning across various tasks (NLU and NLG).
  - Outperforms other parameter-efficient methods like adapters and prefix-tuning.
  - **GPT-3 175B:**
    - Matches or exceeds fine-tuning baseline on WikiSQL, MNLI, and SAMSum.
    - Shows better scalability and task performance as trainable parameters increase.
  - **Low-Data Regime (MNLI subsets):**
    - Exhibits favorable sample-efficiency compared to fine-tuning and prefix-based methods.

## Understanding Low-Rank Updates
- **Which Weights to Adapt?**
  - Adapting both Query (Wq) and Value (Wv) attention weights gives the best performance for a given parameter budget.
- **Optimal Rank (r):**
  - A surprisingly small rank (r=1 or r=2) is often sufficient.
  - Suggests the update matrix (ΔW) has a very small "intrinsic rank".
- **Subspace Analysis:**
  - **Between ranks:** Top singular vector directions overlap significantly between low-rank (r=8) and high-rank (r=64) adaptations.
  - **Between seeds:** Different random seeds learn common singular value directions, especially for Wq.
- **Relationship between ΔW and W:**
  - ΔW amplifies important task-specific features that are already present but not emphasized in the pre-trained weights W.
  - The amplification factor can be very large (e.g., ~21.5 for r=4).

## Conclusion & Future Work
- **Summary:** LoRA is an efficient adaptation strategy that avoids inference latency and reduces hardware/storage costs without compromising model quality.
- **Future Directions:**
  - Combine LoRA with other methods.
  - Investigate the mechanisms of fine-tuning.
  - Develop principled ways to select which weights to adapt.
