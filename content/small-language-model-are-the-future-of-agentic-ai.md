---
title: Small Language Models are the Future of Agentic AI
description: A comprehensive overview of why Small Language Models (SLMs) are better suited for agentic AI systems than Large Language Models (LLMs), outlining their advantages, rebuttals to counterarguments, barriers to adoption, and a conversion algorithm.
tags: [AI, SLM, LLM, Agentic AI, Future of AI]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Small Language Models are the Future of Agentic AI
## Introduction
*   **Agentic AI Deployment**
    *   On a meteoric rise
    *   Over half of large IT enterprises actively using AI agents
    *   Market expected to grow to nearly USD 200bn by 2034
*   **Current Operational Model**
    *   Core components are (very) large language models (LLMs)
    *   LLMs provide foundational intelligence for strategic decisions, task breakdown, reasoning
    *   AI agents typically communicate with LLM API endpoints hosted in centralized cloud infrastructure
    *   Deeply ingrained industry model with substantial capital bets
*   **The Challenge**
    *   Agents' requests are comparatively simple, yet handled by singleton generalist LLMs
    *   Position: SLMs are the future of agentic AI

## Position: Why SLMs are the Future
*   **Definitions**
    *   **SLM (Small Language Model)**: LM that fits on common consumer device and performs low-latency inference for one user's agentic requests
        *   Models below 10bn parameters by 2025
    *   **LLM (Large Language Model)**: LM that is not a SLM
*   **Statement (V1-V3)**
    *   **V1: Principally sufficiently powerful** for agentic applications
    *   **V2: Inherently more operationally suitable** for use in agentic systems
    *   **V3: Necessarily more economical** for vast majority of LM uses in agentic systems
    *   This is a statement of necessary consequence
*   **Elaboration**
    *   Dominance of LLMs in AI agent design is excessive and misaligned
    *   Most agentic subtasks are repetitive, scoped, non-conversational
    *   SLMs offer lower latency, reduced resource requirements, and lower operational costs
    *   Advocates for **heterogeneous agentic systems**: SLMs by default, LLMs invoked selectively for general reasoning or open-domain dialogue
    *   Shift to SLM-first architectures promotes responsible and sustainable AI deployment

## Position Arguments
*   **A1: SLMs are already sufficiently powerful for use in agents (Supports V1)**
    *   Significant advances in SLM capabilities, nearing previous LLM performance
    *   Aptitude for commonsense reasoning, tool calling, code generation, and instruction following
    *   Examples: Microsoft Phi series, NVIDIA Nemotron-H family, Huggingface SmolLM2, NVIDIA Hymba-1.5B, DeepSeek-R1-Distill, DeepMind RETRO-7.5B, Salesforce xLAM-2-8B
    *   Capabilities can be enhanced at inference time with self-consistency, verifier feedback, tool augmentation
    *   **Conclusion**: Capability, not parameter count, is the binding constraint for agentic invocations
*   **A2: SLMs are more economical in agentic systems (Supports V3)**
    *   **Inference Efficiency**: 7bn SLM 10-30x cheaper than 70-175bn LLM
    *   **Fine-tuning Agility**: Requires few GPU-hours, allowing rapid adaptation
    *   **Edge Deployment**: Local execution on consumer-grade GPUs, real-time offline inference
    *   **Parameter Utilization**: SLMs may be fundamentally more efficient by engaging a larger proportion of their parameters
    *   **Modular System Design**: "Lego-like" composition with specialized experts, leading to cheaper, faster to debug, and easier to deploy systems
*   **A3: SLMs are more flexible (Supports V2 and V3)**
    *   Lower pre-training and fine-tuning costs enable training and deployment of multiple specialized expert models
    *   Facilitates rapid iteration and adaptation to evolving needs and regulations
    *   **Democratization**: Increases participation in LM development for agents, promoting diversity, reducing biases, encouraging innovation
*   **A4: Agents expose only very narrow LM functionality (Supports V1 and V2)**
    *   LLMs are restricted to a small subset of their skills via prompts and context management in agentic applications
    *   A fine-tuned SLM would suffice with increased efficiency and flexibility
*   **A5: Agentic interactions necessitate close behavioral alignment (Supports V2)**
    *   Strict formatting requirements for tool calls and output
    *   SLMs trained for a single format are preferable to general-purpose LLMs which might hallucinate formats
*   **A6: Agentic systems are naturally heterogeneous (Supports V2)**
    *   Allows for incorporating multiple language models of different sizes for varying complexity
    *   Example: LLM for root agency, SLM for subordinate LMs
*   **A7: Agentic interactions are natural pathways for gathering data for future improvement (Supports V2)**
    *   Invocations during agentic processes are a source of high-quality, specialized instruction data
    *   Enables production of expert SLMs to replace LLMs as a natural step in agent deployment

## Alternative Views & Rebuttals
*   **AV1: LLM generalists will always have the advantage of more general language understanding**
    *   **Counter-arguments**: LLM scaling laws and "semantic hub" mechanism
    *   **Rebuttal**: Scaling law studies assume constant architecture, but SLMs benefit from different architectures and can be fine-tuned. Agentic systems decompose problems into simple sub-tasks, reducing the utility of a "semantic hub".
*   **AV2: Per-token inference cost benefit of SLMs is dwarfed by economy of scale/centralization**
    *   **Counter-arguments**: Difficulty in utilizing expert SLM endpoints, high infrastructure setup and talent retention costs
    *   **Acknowledgment**: Valid view, but recent improvements in inference scheduling and falling infrastructure costs may make V3 prevail
*   **AV3: Both SLM and LLM agentic worlds are equally possible, but LLM has a head start and industry inertia**
    *   **Acknowledgment**: Distinct possibility, but the advantages of SLMs (A1-A7) can plausibly overturn the present state

## Barriers to Adoption
*   **B1: Large upfront investment into centralized LLM inference infrastructure**
    *   Industry built tools for centralized LLM, neglecting decentralized SLM possibilities
*   **B2: Use of generalist benchmarks in SLM training, design, and evaluation**
    *   SLM development often follows LLM design, focusing on generalist benchmarks
*   **B3: Lack of popular awareness**
    *   SLMs receive less marketing and press despite their suitability
*   **Note**: These are practical hurdles, not fundamental flaws, and are being addressed

## LLM-to-SLM Agent Conversion Algorithm
*   **S1: Secure Usage Data Collection**: Log non-HCI agent calls, capturing inputs, outputs, tool calls, and latency
*   **S2: Data Curation and Filtering**: Collect sufficient data (10k-100k examples), remove sensitive information using automated tools
*   **S3: Task Clustering**: Employ unsupervised clustering on prompts and actions to identify recurring patterns for SLM specialization
*   **S4: SLM Selection**: Choose candidate SLMs for each identified task based on capabilities, performance, licensing, and deployment footprint
*   **S5: Specialized SLM Fine-tuning**: Prepare task-specific datasets and fine-tune chosen SLMs, leveraging PEFT techniques or knowledge distillation
*   **S6: Iteration and Refinement**: Periodically retrain SLMs and router with new data for continuous improvement

## Call for Discussion
*   Agentic AI industry promises transformative effects
*   Expense savings and infrastructure improvements act as a catalyst
*   Authors call for contributions to and critique of their position