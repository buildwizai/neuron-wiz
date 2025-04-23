---
title: The AI Scientist
tags: [ai-science, scientific-research, automated-discovery, hypothesis-testing, scientific-method, ai-research, lab-automation]
description: Exploration of AI systems functioning as scientists, autonomously conducting experiments and making discoveries.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery
## Introduction
* **Grand challenge**: Developing AGI for scientific research
* Current models: Aides to human scientists (brainstorming, code, prediction)
* **The AI Scientist**: First comprehensive framework for fully automatic scientific discovery
    * Generates novel research ideas
    * Writes code
    * Executes experiments
    * Visualizes results
    * Writes full scientific papers
    * Runs simulated review process
    * Iterative open-ended development of knowledge
* Applied to machine learning subfields: diffusion modeling, language modeling, learning dynamics
* Low cost: Less than $15 per paper
* Automated reviewer: Near-human performance in evaluation
* Potential to democratize research and accelerate progress
* Beginning of a new era in scientific discovery for AI itself
* Closer to endless affordable creativity and innovation
* Based on modern scientific method
    * Human researcher process: knowledge, hypotheses, evaluation, evidence, communication, peer review
    * Limited by human ingenuity, knowledge, time
* Long ambition to automate general scientific discovery
    * Early works: Automated Mathematician, DENDRAL
* Vision of automating AI research using AI ("AI-generating algorithms")
* Foundation models: Tremendous advances but only accelerate parts of research
    * Writing manuscripts
    * Brainstorming ideas
    * Coding
* Traditional automation: Constrained search spaces, substantial human expertise
    * Materials discovery, synthetic biology: Restricted domains
    * ML automation: Hyperparameter/architecture search, algorithm discovery (hand-crafted spaces)
* Recent LLM advances: Extended search space to code-level solutions
    * Still constrained by defined spaces and objectives
* The AI Scientist: Fully automated and scalable end-to-end paper generation
    * Ideation, literature search, experiment planning/iteration, manuscript writing, peer reviewing
    * Open-ended loop, builds on previous discoveries
    * Speeds up scientific iteration at low cost
    * Focus on ML applications initially, broader potential (biology, physics)
    * Leverages LLM frameworks: chain-of-thought, self-reflection
    * Uses Aider for plan-directed code changes and execution
    * Produces interpretable papers and artifacts
* Contributions: First end-to-end framework for fully automated ML research

## Background
* **Large Language Models (LLMs)**
    * Autoregressive models: Predict next token
    * Vast data and scaling: Coherent text, human-like abilities (commonsense, reasoning, coding)
    * Examples: Anthropic, Google DeepMind Gemini, Llama Team, OpenAI
* **LLM Agent Frameworks**
    * Embedding LLMs into agents
    * Structuring language queries (few-shot prompting)
    * Encouraging reasoning traces (chain-of-thought)
    * Iterative refinement (self-reflection)
    * Leverage in-context learning
    * Improve performance, robustness, reliability
* **Aider: An LLM-Based Coding Assistant**
    * Open-source agent for code implementation, bug fixes, refactoring
    * Can use any underlying LLM
    * High success rate on SWE Bench with frontier models
    * Enables full automation of ML research process

## The AI Scientist Overview
* **Three Main Phases**
    * **Idea Generation**
        * "Brainstorms" diverse novel research directions
        * Inspired by evolutionary computation and open-endedness
        * Iteratively grows an archive of ideas using LLMs as mutation operator
        * Each idea: Description, experiment plan, self-assessed scores (interestingness, novelty, feasibility)
        * Prompting for new ideas conditional on existing archive (including review scores)
        * Multiple rounds of chain-of-thought and self-reflection
        * Filters ideas using Semantic Scholar API and web access for novelty
    * **Experimental Iteration**
        * Executes proposed experiments (Aider)
        * Visualizes results
        * Aider plans and executes experiments sequentially
        * Error handling: Returns errors to Aider for fixes and re-attempts
        * Aider takes notes in experimental journal style after each experiment
        * Re-plans and implements next experiment based on results (up to five times)
        * Aider edits plotting script (Python) to create figures
        * AI Scientist notes plot contents
        * Aider sees execution history
        * Starts with small, self-contained templates
        * Frequently implements new plots and collects new metrics
    * **Paper Write-up**
        * Produces concise and informative write-up in LaTeX (standard ML conference)
        * Robust process due to LaTeX writing complexity
        * **(a) Per-Section Text Generation**: Aider fills template section by section (intro, background, methods, setup, results, conclusion) using notes and plots
            * Previous sections in context
            * Brief tips based on "How to ML Paper"
            * Only uses real experimental results and citations to reduce hallucination
            * Initial refinement with self-reflection
            * Related work skeleton initially, no citations yet
        * **(b) Related Work Generation**: Aider completes related work using literature search (Semantic Scholar)
        * **(c) Refinement**: Section-by-section self-reflection to remove verbosity and streamline arguments
        * **(d) Compilation**: LaTeX compiler used, errors piped back to Aider for correction
* **LLM-Generated Review**
    * Assesses quality of generated paper after write-up
    * LLM trained to act as reviewer

## LLM-Generated Review
* LLMs can produce reasonably accurate reviews
* Achieves near-human performance in evaluating paper scores
* Each review costs $0.25 to $0.50 in API
* Comparison of foundation models: GPT-4o best, Claude Sonnet 3.5 close second
    * Claude Sonnet 3.5 more cost-efficient but worse performance, over-optimism bias
    * Llama 3.1 struggled with output template
* Prompt configurations improve accuracy
    * Reflexion (+2%)
    * One-shot prompting (+2%)
* Review ensembling doesn't substantially improve performance but reduces variance
* Best reviewer used: GPT-4o with 5 self-reflections, 5 ensembled reviews, meta-aggregation, 1 few-shot example
* Code open-sourced as new LLM benchmark

## Results
* The AI Scientist can generate hundreds of interesting, medium-quality papers per week
* Focus on subset highlighting novel insights in:
    * Diffusion modeling
    * Language modeling
    * Grokking
* In-depth case study: "Adaptive Dual-Scale Denoising" in diffusion modeling (Claude Sonnet 3.5)
    * Idea: Improve diffusion models for global structure and local details with two branches
    * Generated 11-page manuscript with visualizations
    * Precise mathematical description of algorithm
    * Automated reviewer points out valid concerns (simple datasets, computational cost)
    * AI Scientist often upfront about drawbacks
    * Reviewer asks relevant questions
    * Human domain knowledge assessment: Interesting and well-motivated direction
    * Comprehensive experimental plan, good results, iterative code adjustment
    * Idea resembles mixture-of-expert structure
* Aggregate results: Tables show performance of different LLMs across subfields
    * Sonnet 3.5 consistently produces highest quality papers
    * GPT-4o second best but struggles with LaTeX
    * DeepSeek Coder cheaper but fails on Aider tools
    * Llama-3.1 worst overall but convenient due to fewer rate limits
    * Open models offer lower costs, availability, transparency, flexibility (slightly lower quality)
* Cost: Around $10-15 per paper
* Bulk of cost: LLM API for coding and writing
* Experiment costs negligible due to constraints
* Preliminary qualitative analysis: Papers broadly informative and novel
* Experiments run on single 8xNVIDIA H100 node over a week
* Massively scaling search/filtering could yield higher quality

## Highlighted Generated Papers
* **Diffusion Modeling**
    * DualScale Diffusion: Adaptive Feature Balancing
    * Multi-scale Grid Noise Adaptation
    * GAN-Enhanced Diffusion: Boosting Sample Quality and Diversity
    * DualDiff: Enhancing Mode Capture via Dual-expert Denoising
* **Language Modeling**
    * StyleFusion: Adaptive Multi-style Generation
    * Adaptive Learning Rates via Q-Learning
* **Grokking Analysis**
    * Unlocking Grokking: Weight Initialization Strategies
    * Grokking Accelerated: Layer-wise Learning Rates
    * Grokking Through Compression: Minimal Description Length
    * Accelerating Mathematical Insight: Strategic Data Augmentation

## Related Work
* **AutoML**: Automating individual parts of ML pipeline
    * None achieve full automation of entire research process and communication
* **LLMs for Machine Learning Research**: Closely related
    * Benchmarks for LLM coding in ML
    * LLMs for algorithm proposal, implementation, evaluation
    * LLMs for feedback on research papers (similar to humans)
    * LLMs for higher quality innovation ideas than humans
    * LLMs for research idea proposal based on literature (no execution)
    * LLMs for automatic survey writing
    * The AI Scientist synthesizes these threads into autonomous open-ended system
* **LLMs for Structured Exploration**: Used for exploring large search spaces
    * Reward functions, virtual robotic design, environment design, neural architecture search
    * Evaluators for "interestingness"
    * Recombination operators for optimization (Evolution Strategies, Quality-Diversity)
    * AI Scientist's reviewer judges novelty and interestingness, ideas are combinations
* **AI for Scientific Discovery**: Long tradition across fields
    * Chemistry, synthetic biology, materials discovery, mathematics, algorithm search
    * Analyzing existing datasets for novel insights
    * Usually restricted to defined search space, single domain, no ideation, writing, review
    * AI Scientist excels at code-implemented research ideas
    * Future with robotics in labs could extend impact to all science

## Discussion
* **Why writing papers matters**: For automating scientific discovery
    * Interpretable method for humans to benefit
    * Standardized evaluation within ML conference framework
    * Primary medium for disseminating research findings
    * Flexible format (language, plots, code)
    * Essential for integration into broader scientific community
* **Costs**: Versatile and effective across ML subfields
    * Cost-effective (∼$15/paper)
    * Democratizes research and accelerates progress
    * Preliminary qualitative analysis suggests novelty
    * Light compute: Single 8xH100 node over a week
    * Scaling could improve quality
    * Main cost: LLM API for coding/writing
    * Reviewer and experiment costs negligible
    * Breakdown may change for other fields or larger experiments
* **Open vs. Closed Models**: Automated Paper Reviewer for evaluation and improvement
    * LLMs can produce reasonably accurate reviews
    * Sonnet 3.5 currently produces best papers (some above conference threshold)
    * No fundamental reason for a single model to lead
    * Expect all frontier LLMs to improve
    * Competition leads to commoditization and increased capabilities
    * Aim for model-agnostic framework
    * Studied proprietary (GPT-4o, Sonnet) and open (DeepSeek, Llama-3) models
    * Open models: Lower costs, availability, transparency, flexibility (slightly worse quality)
    * Future: Self-improving AI in closed-loop using open models
* **Future Directions**:
    * Integrating vision for plots/figures
    * Incorporating human feedback
    * Automatic expansion of experiments (internet data/models, safely)
    * Following up on best ideas
    * Self-referential research on its own code (Aider already contributed)
    * Expanding to other scientific domains (biology, chemistry, materials) with lab automation
    * Addressing reliability and hallucination concerns (automatic verification)

## Conclusion
* The AI Scientist: Significant step towards full AI potential in scientific research
* Automating discovery and AI-driven review opens possibilities for innovation
* Vision: Fully AI-driven scientific ecosystem (researchers, reviewers, area chairs, conferences)
* Role of human scientists will change, empowered to tackle more ambitious goals
* What if AI Scientist could do initial explorations of all human ideas?
* Current version innovates on established ideas
* Open question: Can such systems propose genuinely paradigm-shifting ideas?
* Will machines invent fundamental concepts (neural networks, information theory)?
* Believes AI Scientist will be great companion to human scientists
* Extent of replicating human creativity and serendipitous innovation is unknown