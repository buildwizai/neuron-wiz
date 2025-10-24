---
title: AI Engineering 101 with Chip Huyen
tags: [AI Engineering, LLMs, RAG, Evals, Productivity]
description: Insights on building successful AI products, engineering strategies, training fundamentals, and organizational challenges.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---
# AI Engineering 101: Building Successful AI Products & Strategies
## Foundations of Successful AI Apps
### What People *Think* Improves Apps (Pitfalls)
* Staying up to date with latest AI news
* Adopting the newest agentic framework
* Agonizing over vector databases
* Constantly evaluating what model is smarter
* Fine-tuning a model (often overemphasized)
### What *Actually* Improves Apps (Core Focus)
* Talking to users and understanding feedback
* Building more reliable platforms
* Preparing better data
* Optimizing end-to-end workflows
* Writing better prompts
## AI Model Training Concepts
### Pre-training vs. Post-training
* **Pre-training**
- Encoding statistical information about a language
- Predicting the next word/token
- Builds general capacity; depends on large data/model size
* **Post-training (The key differentiator)**
- Changes model behavior
- Where focus labs spend a lot of energy today
### Fine-tuning
* Supervised Fine-Tuning (SFT)
- Uses demonstration data from human experts (Prop/Answer pairs)
* Distillation
- Training smaller models to emulate output of high-performing models
### Reinforcement Learning (RL/RLHF)
* Goal: Encourage/reinforce better model output
* Training Signal Collection
- Human Feedback (comparisons are easier than scoring)
- AI Feedback (using AI to judge responses)
- Verifiable Rewards (e.g., math problems with objective answers)
## Model Evaluation (Evals)
### Importance of Evals
* Guides product development
* Uncovers opportunities for improvement (e.g., poor performance on specific user segments)
* Critical when operating at scale or where failures have catastrophic consequences
* Necessary if the feature is a competitive advantage
### Two Types of Eval Problems
* App Builder (e.g., knowing if a chatbot is good or bad)
* Task-Specific Eval Design (e.g., measuring creative writing)
### Evals Pragmatism & Design
* Pick your battles: Don't need evals for every low-key feature
* Focus on the core use case/most common path
* Design evaluations at every step of a process, not just end-to-end
- Example: Evaluating search queries, result relevance, and aggregation steps in a deep research application
## Retrieval Augmented Generation (RAG)
### Definition and Purpose
* RAG stands for Retrieval Augmented Generation
* Provides the model with relevant context to improve answers
### Data Preparation is Crucial
* Biggest performance driver (more so than agonizing over vector databases)
* **Techniques**
- Optimal Chunk Design (balancing length for retrieval/context)
- Adding Contextual Information
 - Summary and metadata
 - Hypothetical questions the chunk can answer
- Rewriting data into Question/Answer format
- Adding annotation layers for AI to explain human context/scales
## AI Tool Adoption & Organizational Challenges
### Productivity and Adoption Gap
* Hard to measure productivity gain from AI tools
* Idea crisis: People are stuck on what to build despite advanced tooling
* Many companies try AI but stop due to lack of clear outcome
### Managerial Perspectives
* Team Managers prefer headcount over expensive AI agent subscriptions
* Executives (VP level) prefer AI assistant tools for broad productivity gains
### Impact on Engineering Teams
* **Productivity:** Highest performing engineers often see the biggest boost
* **Resistance:** Some senior engineers are resistant due to high standards of output quality
* **Structural Shift:** Senior engineers focus more on PR review, defining processes, and system architecture
* **System Thinking:** The most critical skill—understanding how components interact to solve problems (CS is about system thinking, not just coding)
## Future Trends & Organizational Structure
### Organizational Changes
* **Blurring of functions:** Increased communication between Engineering, Product, and Marketing (Evals are a system problem)
* Automation leading to shedding of outsourced functions
### Model Improvement Trajectory
* Base model performance gains may slow down compared to recent years
* Future gains will concentrate in the post-training/application building phase
### Multimodality
* Significant excitement in audio and video use cases
* **Voice Chatbot Challenges**
 - Latency (due to multiple text-to-voice hops)
 - Sounding natural (handling interruptions and conversational flow)
 - Regulation regarding disclosure (human vs. AI)
### Test Time Compute (Inference Strategy)
* Strategy: Allocating more compute resources during inference
* Improves perceived performance without changing the base model
* Examples: Generating multiple answers for agreement, generating more "thinking tokens" (reasoning)
