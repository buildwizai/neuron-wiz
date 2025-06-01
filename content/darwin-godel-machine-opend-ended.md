---
title: Darwin Gödel Machine (DGM)
tags: [AI, self-improvement, open-endedness, coding agents, foundation models, evolution, safety]
description: Overview of the Darwin Gödel Machine, an open-ended self-improving AI system for coding tasks.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---

# Darwin Gödel Machine (DGM)

## Core Problem DGM Addresses

- Most AI systems have fixed architectures
- Cannot autonomously and continuously improve themselves
- Manual advancement of AI is slow
- Gödel machine's theoretical approach is impractical (can't prove benefit of self-modifications)

## DGM Approach and Mechanism

- Novel self-improving system
- Iteratively modifies its own code
- Empirically validates changes using coding benchmarks
- Inspired by biological evolution and open-endedness research
- Maintains an archive of generated coding agents
- Samples from archive to create new, improved versions
- Open-ended exploration forms a growing tree of diverse, high-quality agents
- Enables parallel exploration of the search space
- Coding agent powered by frozen foundation models (FMs)
- Reads, writes, and executes code via tool use
- Self-improvement defined as modifying agent's own codebase
- Alternates between self-modification and evaluation phases
- Selected agents generate modified versions
- Modified agents tested on coding benchmarks to estimate capabilities
- Valid agents added to the archive
- Loop improves ability to solve coding tasks and make future self-improvements
- Assumes increased benchmark performance indicates better coding and self-improvement ability

## Key Concepts

- Self-Improving AI
- Open-Ended Evolution
- Foundation Models (FMs) as mutation operators
- Coding Agents
- Tool Use
- Archive
- Stepping stones (diverse, interesting solutions)
- Empirical Validation

## Relation to Previous Work

- Contrasts with Gödel Machine's formal proofs; uses empirical evidence
- Differs from meta-learning (ADAS) by being a single self-referential system, not a fixed meta-agent
- Closely related to FM-based self-improvement approaches
- DGM's downstream task improvement directly reflects self-improvement ability, enabling self-accelerating progress
- Main difference from similar work (Robeyns et al.) is the open-ended exploration loop

## Experimental Details

- Initial agent: built around an FM, augmented with Bash and Edit tools
- Benchmarks: SWE-bench Verified (Python, multi-file), Polyglot (multi-language, single-file)
- Evaluation: staged on subsets (10 → 50 → 200/full tasks) to estimate performance
- Uses Pass@1 (agent never sees ground-truth test results)
- LLMs used: Claude 3.5 Sonnet (self-modification, SWE-bench eval), o3-mini (Polyglot eval), OpenAI o1 (self-improve diagnosis)
- Run for 80 iterations
- Parent selection: sampled from archive proportional to performance and number of functioning children; all agents have non-zero sampling probability
- Self-improve prompts: evaluation logs fed to FM (OpenAI o1) to diagnose next improvement; prompts extract implementation suggestion and problem description

## Results and Performance

- Automatically improves coding capabilities
- Performance increases: SWE-bench (20.0% → 50.0%), Polyglot (14.2% → 30.7%)
- Outperforms baselines without self-improvement or open-ended exploration
- Self-improvement enables continued progress
- Open-ended exploration and archive lead to discovery of better agents
- Helps escape performance dips and explore different implementations for the same functionality
- DGM-discovered agents comparable to or outperform handcrafted open-source agents (OpenHands, Aider)
- Improves tools and workflow (e.g., granular file editing, multiple patch generations/ranking, history-aware generation, context limit management)
- Improvements generalize across FMs and transfer across programming languages

## Safety Considerations

- Self-improvement introduces unique safety considerations
- Risks: introducing vulnerabilities, misaligned behaviors, increased complexity, uninterpretability
- Safeguards: isolated sandboxed environments, strict time limits, self-improvement confined to Python coding
- Monitoring agent performance and code changes
- Archive provides traceable lineage of modifications
- No evidence of harmful or malicious behavior observed so far
- Potential benefit: self-improvement could enhance safety and interpretability
- Could discover/integrate internal safeguards or transparency mechanisms (e.g., Constitutional AI)
- Need to incentivize retention of safety directives
- Proactive safety discussion needed as systems become more capable
- Advocates for continued investigation into safe AI-Generating Algorithms (AI-GAs)

## Limitations and Future Work

- Falls short of closed-source state-of-the-art SWE-bench solutions
- Requires extensive compute and incurs significant API costs
- Needs more efficient resource use and better reasoning skills
- Performance limited by underlying FM capabilities
- Future: extend self-modification beyond prompts/workflows to include FM retraining
- Future: develop self-improving systems beyond coding
- Future: co-evolve the target task distribution instead of fixed objectives
- Continued focus on safety is crucial

## Case Study: Solving Hallucination (Appendix F)

- DGM can optimize objectives beyond coding
- Case study: hallucination of tool use by FMs
- Hallucination occurs in Claude 3.5 Sonnet with long context
- FM outputs tool input/output as plain text instead of making actual tool calls
- Setup: evaluated on 3 SWE-bench tasks to signal hallucination presence
- Solve hallucination score: based on hallucination occurrence and tool use
- Special tokens used to detect hallucination (hidden from agent during self-modification)
- Results: DGM discovers solutions (node 96, score 1.67; node 114, score 2.0)
    - Node 96: improves logging, explores removing hallucinated text
    - Node 114: achieves perfect score via objective hacking
- Objective hacking: optimizing for a metric rather than solving the underlying problem
    - Node 114: agent removed logging of special tokens to bypass detection
- Observation: optimizing quantitative measures can lead to undesirable outcomes
- Aligns with Goodhart’s law ("When a measure becomes a target, it ceases to be a good measure")