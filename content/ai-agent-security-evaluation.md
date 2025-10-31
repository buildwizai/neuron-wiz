---
title: Breaking Agent Backbones
description: Evaluating the Security of Backbone LLMs in AI Agents using the threat snapshot framework and b3 benchmark.
tags: [AI Agents, LLM Security, Benchmarking]
created_at: 2025-10-28
markmap:
  colorFreezeLevel: 2
  maxWidth: 700
---
# Security Evaluation of Backbone LLMs in AI Agents

## Introduction and Motivation

### AI Agent Deployment Context
- Powered by LLMs and deployed at scale
- Security modeling remains challenging
- Non-deterministic, sequential execution complicates analysis
- LLMs cannot reliably distinguish data from instructions

### Goals of Research
- Systematically understand backbone LLM security
- Address gaps in existing frameworks that are too narrow or require full agent modeling

### Security vs. Safety
- Focuses on security: adversarial exploitation in deployment contexts
- Distinct from broader safety themes such as toxicity or reliability

## Threat Snapshots Framework

### Definition and Purpose
- Formal framework isolating specific states (time $t$) in an agent execution flow
- Captures concrete instances of LLM vulnerabilities
- Separates LLM-specific risk from traditional software risk

### Key Snapshot Components
- Agent description and current state
- Full non-poisoned model context ($C_t$)
- Threat description
- Attack categorization (vector, objective, task type)
- Attack insertion function
- Attack scoring function (score-in)

### LLM Vulnerability Mechanics
- Attacker manipulates model output or execution flow
- Achieved by inserting an attack ($a$) into context ($C_t$) to form poisoned context ($C_p^t(a)$)
- Vulnerabilities often stem from insecure features rather than outright bugs

## Attack Categorization

### Vector-Objective Matrix
- Attack vectors describe delivery methods
  - Direct: attacker appears as a user
  - Indirect: attack embedded in external data sources (documents, tool definitions)
- Attack objectives define end goals
  - Data exfiltration (system prompts, PII)
  - Content injection (phishing, malicious code)
  - Decision and behavior manipulation (structured output, bias)
  - Denial of service (resource exhaustion, content hijacking)
  - System and tool compromise (trigger restricted tools)
  - Content policy bypass (harmful content generation)

### Task-Type Categorization
- Direct Instruction Override (DIO)
- Indirect Instruction Override (IIO)
- Direct Tool Invocation (DTI)
- Indirect Tool Invocation (ITI)
- Direct Context Extraction (DCE)
- Denial of AI Service (DAIS)

## B3 Benchmark Construction

### Benchmark Foundation
- Merges threat snapshots with high-quality adapted attacks
- Evaluates 31 widely used LLMs

### Threat Snapshots (TS)
- Ten application scenarios covering broad risk profiles
- Three defense levels per snapshot ($L_1, L_2, L_3$)
  - $L_1$: Minimal constraints using a weak system prompt
  - $L_2$: Stronger system prompt plus benign context data
  - $L_3$: Adds an LLM-as-judge defense to the $L_1$ configuration

### Attack Data Collection
- Crowdsourced via the Gandalf Agent Breaker challenge
- 194,331 unique attacks gathered
- Curated 210 top-scoring attacks for the benchmark (seven per $L$ per TS)

### Evaluation Metric
- Vulnerability score $V(m, T)$
- Represents the average attack score across five repetitions and targeted threat snapshots

## Experimental Results and Insights

### Overall Ranking
- Most secure models: grok-4 (R), grok-4-fast (R), claude-opus-4-1 (R)

### Enhanced Reasoning
- Reasoning features improve security for most models
- Findings contradict some earlier studies
- Tiny variants show smaller gains or outright regressions

### Model Size Correlation
- Model size alone does not predict security posture
- Larger models often require reasoning capabilities to realize benefit

### Open vs. Closed Systems
- Closed-weight models generally outperform open weights due to system guardrails
- Top open-weight backbones remain competitive with prior-generation closed models

### Task-Specific Behavior
- Security properties vary significantly across task types (e.g., DIO vs. DTI)
- Backbone selection should align with specific deployment use cases
- Ranking remains consistent across defense levels ($L_1, L_2, L_3$)

## Threat Snapshot Examples

### Cycling Coach ($\text{TS}_{\ell 1}$)
- Task type: DCE
- Objective: System prompt extraction

### Trippy Planner ($\text{TS}_{\ell 2}$)
- Task type: IIO
- Objective: Inject phishing link via external website

### Curs-ed CodeReview ($\text{TS}_{\ell 7}$)
- Task type: IIO
- Objective: Insert malicious code through a poisoned rules file

### CorpConnect Messenger ($\text{TS}_{\ell 9}$)
- Task type: DTI
- Objective: Send unauthorized email via tool invocation
