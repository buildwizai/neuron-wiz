---
title: Self-Consistency Improves Chain of Thought Reasoning in LMs
tags: [self-consistency, chain-of-thought, reasoning, lm, research]
description: Mind map summarizing the self-consistency method for improving chain-of-thought reasoning in language models.
markmap:
  colorFreezeLevel: 2
---

# Self-Consistency in Language Models

## 1. Introduction
- **Problem:** Language Models (LMs) show limitations in complex reasoning.
- **Existing Solution: Chain-of-Thought (CoT) Prompting**
  - Mimics human reasoning by generating intermediate steps.
  - Example: "There are 3 cars... 2 more arrive... 3 + 2 = 5 cars."
  - Significantly improves performance on multi-step reasoning tasks.
- **Proposed Solution: Self-Consistency**
  - A new decoding strategy to replace naive greedy decoding in CoT.
  - **Core Idea:** Sample multiple reasoning paths and select the most consistent answer.
  - Boosts performance on key benchmarks:
    - GSM8K (+17.9%)
    - SVAMP (+11.0%)
    - AQuA (+12.2%)
    - StrategyQA (+6.4%)

## 2. The Self-Consistency Method
- **Core Intuition**
  - Complex reasoning problems have multiple paths to a unique correct answer.
  - Greater confidence in an answer if multiple thinking processes lead to it.
- **Three-Step Process**
  1. Prompt an LM using Chain-of-Thought (CoT).
  2. Sample a diverse set of reasoning paths from the decoder (replaces greedy decode).
  3. Marginalize out the reasoning paths and aggregate to find the most consistent answer (e.g., majority vote).
- **Advantages**
  - Unsupervised and works off-the-shelf.
  - Requires no additional training, fine-tuning, or human annotation.
  - Avoids extra models like verifiers or re-rankers.
  - Acts as a "self-ensemble" on a single LM.
- **Answer Aggregation Strategies**
  - **Majority vote (unweighted sum)** is highly effective and simple.
  - Compared to:
    - Weighted sum (normalized/unnormalized)
    - Weighted average (worse performance)

## 3. Experiments & Results
- **Setup**
  - **Tasks**
    - Arithmetic Reasoning (GSM8K, SVAMP)
    - Commonsense Reasoning (StrategyQA, ARC)
    - Symbolic Reasoning (Coinflip, Last letter concatenation)
  - **Language Models**
    - UL2-20B
    - GPT-3-175B
    - LaMDA-137B
    - PaLM-540B
- **Main Results**
  - **Significant Accuracy Gains:** Robustly improves performance over standard CoT across all models and tasks.
  - **Scaling Effect:** Gains are more significant for larger models.
  - **New State-of-the-Art (SoTA):** Achieved on several arithmetic and commonsense reasoning tasks.
  - **Effect of More Paths:** Sampling more reasoning paths (e.g., 40) consistently improves performance.
- **Comparison to Other Methods**
  - **Outperforms Sample-and-Rank:** The gain from self-consistency is much larger.
  - **Outperforms Beam Search:** Beam search yields lower diversity, which is key to self-consistency's success.
  - **Outperforms Ensemble Approaches:**
    - Prompt order permutation.
    - Multiple sets of prompts.
    - Ensembling different models.
- **Additional Studies**
  - **Helps when CoT hurts:** Can boost performance on NLP tasks where standard CoT is detrimental.
  - **Robustness:**
    - To various sampling strategies and parameters (temperature, top-k, nucleus).
    - To imperfect or human-annotated prompts.
  - **Generality:**
    - Works for non-natural-language reasoning paths (e.g., equations).
    - Works with Zero-shot CoT.
  - **Uncertainty Estimation:** Consistency score correlates with accuracy, indicating model confidence.

## 4. Related Work
- Reasoning in Language Models
- Sampling, Re-ranking, and Decoding Strategies
- Extracting Reasoning Paths
- Consistency in Language Models

## 5. Conclusion & Discussion
- **Summary:** Self-consistency is a simple, effective, and unsupervised method to improve reasoning in LMs.
- **Key Benefits:**
  - Substantial accuracy gains.
  - Useful for collecting diverse rationales.
  - Provides model uncertainty estimates.
- **Limitations**
  - Incurs higher computational cost due to multiple sampling paths.
- **Future Work**
  - Use self-consistency to generate high-quality supervised data for fine-tuning.
  - Improve grounding and factuality of generated rationales.