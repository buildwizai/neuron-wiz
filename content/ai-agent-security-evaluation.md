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
* AI Agent Deployment Context
- Powered by LLMs and deployed at scale
- Security modeling is challenging
- Non-deterministic sequential nature
- LLMs cannot distinguish data from instructions
* Goals of Research
- Systematically understand backbone LLM security
- Address limitations of existing frameworks (too narrow or require complete agent modeling)
* Distinction
- Focuses on Security (adversarial exploitation in deployment context)
- Different from broader Safety (toxicity, reliability)
## Threat Snapshots Framework
* Definition and Purpose
- Formal framework isolating specific states (time t) in agent execution flow
- Captures concrete instances of LLM vulnerabilities
- Provides clear distinction between LLM and traditional risks
* Key Components of a Snapshot
- Agent state
- Agent description and current state
- Full non-poisoned model context ($C_t$)
- Threat description
- Attack categorization (vector, objective, task type)
- Attack insertion function
- Attack scoring function (score in)
* LLM Vulnerability
- Attacker manipulates model output or execution flow
- Achieved by inserting attack ($a$) into context ($C_t$) creating poisoned context ($C_p^t(a)$)
- Vulnerabilities are often insecure features, not bugs
## Attack Categorization
* Vector-Objective Categorization
- Attack Vector (Delivery Method)
- Direct (Attacker viewed as user)
- Indirect (Attack placed in external data sources like documents or tool definitions)
- Attack Objectives (Goal)
- Data Exfiltration (e.g., system prompt, PII)
- Content Injection (e.g., phishing, malicious code)
- Decision and Behavior Manipulation (e.g., structured output, bias)
- Denial-of-Service (e.g., excessive resource consumption, content hijacking)
- System and Tool Compromise (e.g., invoke restricted tools)
- Content Policy Bypass (e.g., harmful content generation)
* Task-Type Categorization (Affects LLM function)
- Direct Instruction Override (DIO)
- Indirect Instruction Override (IIO)
- Direct Tool Invocation (DTI)
- Indirect Tool Invocation (ITI)
- Direct Context Extraction (DCE)
- Denial of AI Service (DAIS)
## B3 Benchmark Construction
* Foundation
- Combines threat snapshots with high-quality adapted attacks
- Used to evaluate 31 popular LLMs
* Threat Snapshots (TS)
- 10 application-based scenarios covering broad risks
- 3 Defense Levels per TS ($L_1, L_2, L_3$)
- L1: Minimal security constraints (weak prompt)
- L2: Stronger system prompt and benign data in context
- L3: Adds LLM-as-judge defense to L1
* Attack Data Collection
- Crowdsourcing via Gandalf Agent Breaker challenge
- Collected 194,331 unique attacks
- Selected 210 top-scoring, high-quality attacks for benchmark (7 per $L$ per TS)
* Evaluation Metric
- Vulnerability Score $V(m, T)$
- Average attack score across repetitions ($N=5$) and target threat snapshots
## Experimental Results and Insights
* Overall Ranking
- Most secure models: grok-4 (R), grok-4-fast (R), claude-opus-4-1 (R)
* Enhanced Reasoning
- Reasoning improves security for most models
- Contradicts some prior studies
- Tiny versions showed reduced benefit or performance decrease
* Model Size Correlation
- Model size does not correlate with security
- Larger versions often showed no significant advantage without reasoning
* Open vs Closed Systems
- Closed weights generally outperform open weights (due to system-level guardrails)
- Best open weights models are competitive with older closed models
* Specific Task Insights
- Model security properties differ significantly between task types (e.g., DIO vs DTI)
- Backbone selection should be use-case specific
- Ranking is robust across different defense levels ($L_1, L_2, L_3$)
## Threat Snapshot Examples
* Cycling Coach (TSℓ1)
- Task Type: DCE
- Objective: System prompt extraction
* Trippy Planner (TSℓ2)
- Task Type: IIO
- Objective: Inject phishing link via external website
* Curs-ed CodeReview (TSℓ7)
- Task Type: IIO
- Objective: Inject malicious code via poisoned rules file
* CorpConnect Messenger (TSℓ9)
- Task Type: DTI
- Objective: Send unauthorized email via tool invocation