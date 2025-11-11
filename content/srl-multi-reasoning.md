---
title: Supervised Reinforcement Learning for LLM Step-wise Reasoning
description: A novel framework to enhance LLM reasoning by providing dense, step-wise supervision from expert trajectories.
tags: [LLM, SRL, Reasoning, RL]
created_at: 2024-01-01T00:00:00Z
# markmap
colorFreezeLevel: 2
maxWidth: 400
---
# Supervised Reinforcement Learning (SRL) for Multi-Step Reasoning
## Core Concept and Goal
- Addresses LLMs' struggle with problems requiring multi-step reasoning
- Reformulates problem solving as generating a sequence of logical "actions"
- Bridges the gap between imitation learning (SFT) and reinforcement learning (RLVR)
- Enables small models to learn challenging problems unlearnable by SFT or RLVR

## Methodology: SRL Framework
- Action-based problem formulation
	- Expert solution (y) decomposed into sequence of logical action steps ({ystepn})
	- Actions are domain-agnostic (e.g., algebraic manipulation, code command)
- Step-wise Training and Generation
	- Model generates internal reasoning monologue (y’think) before committing to an action
	- Inner monologue encapsulated by <think> tags
	- Prediction: y’ ~ pθ(·|xstepk) = [y’think, y’stepk]
	- Uses partial solution context (xstepk) to predict subsequent step (ystepk)
- Sequence Similarity Reward (R)
	- Dense and smooth reward based on similarity between model's action (y’stepk) and expert action (ystepk)
	- R computed only on the logical action, allowing flexible internal reasoning style
	- Calculation: R = 2M / T
		- M: Matched elements in non-overlapping blocks
		- T: Total elements in both sequences
	- Final reward: R if format followed, -1 otherwise
- Optimization
	- Policy pθ optimized using the GRPO objective function
- Dynamic Sampling
	- Filters samples with near-zero reward variance to ensure meaningful updates

## Limitations of Baseline Methods
- Supervised Fine-Tuning (SFT)
	- Next-token prediction objective enforces rigid, token-level imitation
	- Limits generalization, risks overfitting long demonstrations
	- Leads to performance decline on challenging training data
- Reinforcement Learning with Verifiable Rewards (RLVR)
	- Relies on final outcome correctness (sparse reward signal)
	- Policy struggles to discover correct solutions within limited rollout budget
	- Ineffective on challenging problems (Dhard) where success rate is near zero

## Results and Advantages
- Mathematical Reasoning (s1k dataset)
	- SRL substantially outperforms SFT and RLVR baselines
	- SRL → RLVR pipeline achieves highest average performance
	- Granular guidance (Multi-step SRL) is critical compared to one-step reward
- Software Engineering Agentic Reasoning (SWE-Bench)
	- Applies SRL to Qwen2.5-Coder-7B-Instruct
	- Action defined as environment-consumable command
	- Achieves significant performance gains in both Oracle file editing and End-to-end evaluation
- Emergent Reasoning Behaviors
	- Induces flexible and sophisticated reasoning patterns
	- Examples: upfront planning, on-the-fly adjustments, reflective verification
- Enhanced Quality
	- Performance gains attributed to enhanced planning/higher-quality reasoning, not simply increased output length

## Prerequisites for SRL Effectiveness
- Student model must possess baseline competence in instruction-following
- Initial rollout samples must be task-relevant and correctly structured
- Step-wise data must allow policy model to achieve good rewards with certain probability