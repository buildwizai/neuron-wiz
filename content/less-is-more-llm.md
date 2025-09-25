---
title: LIMI - Less Is More for Agency
tags: [limi, agency, data-efficiency, agents, research]
description: Mind map of LIMI, a paradigm for developing AI agency with minimal, high-quality data.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# LIMI: Less Is More for Intelligent Agency
## Core Concept: The Agency Efficiency Principle
- **Agency Definition**
  - AI's emergent capacity to function as autonomous agents
  - Discover problems, form hypotheses, execute solutions
- **Problem with Current Methods**
  - Assume more data yields better agency (traditional scaling laws)
  - Leads to complex pipelines and high resource costs
- **LIMI's Paradigm Shift**
  - **Less Is More**: Agency emerges from minimal, strategically curated demonstrations
  - Machine autonomy comes from strategic curation, not data abundance
## LIMI Approach & Innovations
- **Core Innovations**
  - Novel agentic user query synthesis
  - Systematic trajectory collection protocol
  - Data efficiency principle for AI agency
- **Focus Domains**
  - **Vibe Coding**: Collaborative software development with LLMs
  - **Research Workflows**: Navigating complex scientific processes
## Dataset Construction (78 Samples)
- **Framework**
  - Interaction Tuple: (Query, Trajectory)
  - **Query (qi)**: Initiates the task
  - **Trajectory (τi)**: Captures the collaborative workflow
- **Query Pool Construction**
  - **Real-world Collection (60 queries)**: From professional developers and researchers
  - **GitHub PR Synthesis (18 queries)**: Using GPT-5 to create authentic scenarios from high-quality repositories
- **Trajectory Collection**
  - **Environment**: SII CLI for tool integration and logging
  - **Protocol**: Human-AI collaboration (PhD students + GPT-5) to solve queries
  - **Data Characteristics**: Complex, long interaction sequences (avg. 42.4k tokens)
## Experiments & Evaluation
- **Evaluation Benchmarks**
  - **Primary: AgencyBench**
  - **Generalization**: tau2-bench, evalplus, DS-1000, SciCode
- **Models**
  - **Baselines**: Kimi-K2, DeepSeek-V3.1, Qwen3, GLM-4.5
  - **Our Models**: LIMI (fine-tuned GLM-4.5), LIMI-Air
- **Main Results**
  - **AgencyBench**: **LIMI achieves 73.5%**, significantly outperforming all baselines (e.g., GLM-4.5 at 45.1%)
  - **Generalization**: LIMI shows consistent advantages across all benchmarks
- **Data Efficiency Analysis**
  - **LIMI (78 samples) vs. 10,000 samples**: 53.7% performance gain with **128x fewer samples**
  - Strategic curation dramatically outperforms scale-based approaches
- **Impact of CLI Environment**
  - LIMI shows intrinsic model improvements even without tool access
  - SII CLI environment amplifies agentic capabilities, boosting performance
## Conclusion & Related Work
- **Related Work**
  - **Agentic LMs**: Extends beyond models like Toolformer and ReAct by focusing on data efficiency
  - **Data Efficiency**: Builds on concepts from LIMA and LIMO, applying them to the domain of AI agency
- **Final Conclusion**
  - Establishes the **Agency Efficiency Principle**
  - Mastering agency requires understanding its essence, not just scaling training data