---
title: Think Tool for Claude
tags: [claude-ai, prompt-engineering, thinking-tool, reasoning-strategies, ai-techniques, structured-thinking, decision-making]
description: Guide for prompting Claude AI to use structured thinking processes for complex problem-solving and reasoning.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Think Tool for Claude

## Overview
- Improves Claude's complex problem-solving
- Creates dedicated space for structured thinking
- Enhances agentic tool use
  - Following policies
  - Making consistent decisions
  - Handling multi-step problems
  - Minimal implementation overhead

## What is the "think" tool?
- Additional thinking step during response generation
- Designated space for thinking
- Helps determine if all necessary information is available
- Useful for long chains of tool calls or multi-step conversations

## Difference from Extended Thinking
- **Extended thinking:** Before generating a response, deep consideration and plan iteration
- **"Think" tool:** During response generation, a step to pause and consider information needed
- **"Think" tool** focuses on new information from tool call results
- **Extended thinking** is more comprehensive reasoning

## When to Use
- **"Think" tool:**
  - Claude needs to process external information (tool results)
  - Long chains of tool calls
  - Policy-heavy environments with detailed guidelines
  - Sequential decisions where each step builds on previous ones
  - Mistakes are costly
- **Extended thinking:**
  - Simpler tool use scenarios (non-sequential calls)
  - Straightforward instruction following
  - Use cases like coding, math, and physics (no tools needed)

## Implementation (Example from τ-Bench)
```json
{
  "name": "think",
  "description": "Use the tool to think about something. It will not obtain new information or change the database, but just append the thought to the log. Use it when complex reasoning or some cache memory is needed.",
  "input_schema": {
    "type": "object",
    "properties": {
      "thought": {
        "type": "string",
        "description": "A thought to think about."
      }
    },
    "required": ["thought"]
  }
}
```

## Performance Evaluation (τ-Bench)
- Benchmark for realistic customer service scenarios
- Evaluates:
  - Navigating conversations with simulated users
  - Following complex policy guidelines
  - Using tools to access and manipulate database
- Primary metric: **pass^k** (probability of all k trials successful)
  - Measures consistency and reliability
- Results in Airline Domain
  - **"Think" + Optimized Prompt:** 0.570 (pass^1), 54% improvement over baseline
  - Baseline: 0.370 (pass^1)
  - "Think" alone improved performance over baseline
  - Optimized prompt gave examples of reasoning approaches
  - Examples of optimized prompt usage
- Results in Retail Domain
  - **"Think" alone:** 0.812 (pass^1), improved over baseline (0.783)
  - Retail policy easier to navigate

## Key Insights from τ-Bench Analysis
- **Prompting matters significantly on difficult domains**
- Easier domains may benefit from "think" alone
- **Improved consistency across trials (pass^k)**

## Performance Evaluation (SWE-Bench)
- Similar "think" tool added
- Improved performance by **1.6% on average**
- Adapted "think" tool definition for coding/brainstorming
```json
{
  "name": "think",
  "description": "Use the tool to think about something. It will not obtain new information or make any changes to the repository, but just log the thought. Use it when complex reasoning or brainstorming is needed. For example, if you explore the repo and discover the source of a bug, call this tool to brainstorm several unique ways of fixing the bug, and assess which change(s) are likely to be simplest and most effective. Alternatively, if you receive some test results, call this tool to brainstorm ways to fix the failing tests.",
  "input_schema": {
    "type": "object",
    "properties": {
      "thought": {
        "type": "string",
        "description": "Your thoughts."
      }
    },
    "required": ["thought"]
  }
}
```

## When Claude Benefits Most from "Think" Tool
- **Tool output analysis:** Carefully processing outputs and potential backtracking
- **Policy-heavy environments:** Following detailed guidelines and verifying compliance
- **Sequential decision making:** Actions build on previous ones, mistakes costly

## Implementation Best Practices
- **Strategic prompting with domain-specific examples**
  - Level of detail in reasoning
  - Breaking down complex instructions
  - Decision trees for common scenarios
  - Checking for all necessary information
- **Place complex guidance in the system prompt**

## When Not to Use "Think" Tool
- **Non-sequential tool calls** (single or parallel calls)
- **Simple instruction following** (few constraints, good default behavior)
- Increases prompt length and output tokens

## Getting Started
- **Test with agentic tool use scenarios** (policy compliance, complex reasoning)
- **Add the tool definition** (customize to domain)
- Consider instructions and examples in system prompt
- **Monitor and refine** Claude's usage and adjust prompts
- Minimal downside in performance outcomes
- Doesn't change external behavior unless used
- Doesn't interfere with existing tools/workflows

## Conclusion
- Significantly enhances performance on complex tasks with policy adherence and reasoning
- Not a one-size-fits-all solution
- Offers substantial benefits for correct use cases
- Minimal implementation complexity
- Improvement generalizes to other Claude models (e.g., 3.5 Sonnet)