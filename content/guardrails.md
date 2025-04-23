---
title: AI Platform Guardrails
tags: [guardrails, safety, security, input-filtering, output-quality, failure-management, risk-mitigation]
description: Strategies for implementing input and output guardrails to ensure AI platform safety and quality.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Guardrails
## Core Concepts
- **Purpose:** To reduce AI risks and protect users and developers.
- **Placement:** Implemented wherever there is potential for failure in the system.
## Input Guardrails
- **Protection Against:**
  - **Leaking Private Information to External APIs:**
    - Risk: Sensitive data is sent to third-party APIs.
    - Mitigation:
      - **Sensitive Data Detection:** Identifying personal information, faces, and proprietary keywords.
      - **Data Masking:** Replacing sensitive data with placeholders (e.g., "[PHONE NUMBER]").
      - **PII Reversible Dictionaries:** Mapping placeholders back to original data.
  - **Model Jailbreaking:** Preventing harmful prompts that compromise the system.
    - Mitigation:
      - **Out-of-scope Topic Filtering:** Blocking inputs with predefined controversial phrases.
      - **AI-based Classification:** Using AI to identify restricted topics.
      - **Anomaly Detection:** Identifying unusual prompts.
      - **Harmful actions should not be executed automatically**.
## Output Guardrails
- **Functionalities:**
  - **Evaluate Quality of Each Generation:**
    - **Failure Modes:**
      - **Empty Responses**
      - **Malformatted Responses:** Responses not following expected format (e.g., missing JSON brackets).
        - Use format validators (regex, JSON, Python).
      - **Toxic Responses:** Racist, sexist, or otherwise offensive content.
        - Use toxicity detection tools.
      - **Factual Inconsistent Responses:** Hallucinated content.
        - Employ hallucination detection techniques.
      - **Responses Containing Sensitive Information:** Data regurgitated from training data or retrieved from internal databases.
        - Prevent by avoiding training on sensitive data and restricting retrieval of sensitive data.
      - **Brand-risk Responses:** Mischaracterizations of company or competitors.
        - Use keyword monitoring.
      - **Generally Bad Responses:** Poor quality or incorrect responses.
        - Use AI judges to evaluate response quality.
  - **Specify Policy to Deal With Failure Modes:**
    - **Retry Logic:** Re-attempting query upon failure.
    - **Parallel Calls:** Making multiple calls at the same time and picking the better response.
    - **Human Fallback:** Transferring queries to human operators.
      - Can be triggered by specific key phrases, sentiment analysis, or number of turns.
## Guardrail Tradeoffs
- **Reliability vs. Latency:**
  - Guardrails can increase latency, but the increased risks from not using them often outweigh the cost of the added latency.
  - Output guardrails may not work well in stream completion mode, where partial responses are streamed to the user before guardrails can determine they are unsafe.
- **Self-hosted vs. Third-party API:**
  - Self-hosted models reduce the need for input guardrails, but require implementing all guardrails yourself.
  - Third-party APIs may have their own guardrails, but can still pose risks.