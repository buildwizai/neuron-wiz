---
title: Prompt Engineering Guide
tags: [Prompt Engineering, LLM, AI, Strategies]
description: A concise guide to prompt engineering strategies for optimizing AI outputs.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---

# Prompt Engineering Guide

## Introduction to Prompt Engineering

- Definition: Designing high-quality prompts that guide LLMs to produce accurate outputs
- How LLMs work:
    - Prediction engine; takes sequential text (prompt) as input, then predicts the following token
- Token: Roughly equivalent to a word (about 3/4 of a word)
- Importance: Prompt structure, word choice, and examples all impact results

## LLM Settings

- Output Length
    - Maximum number of tokens a model should output in response
    - Longer output increases cost, processing time, and energy usage
    - Reducing output length only limits tokens, not succinctness
- Sampling Controls
    - LLMs predict probabilities for next tokens
    - Temperature
        - Controls randomness in token selection
        - Higher: more creative responses
        - Lower: more consistent responses
    - Top K
        - Selects top K most likely tokens
        - Higher: more creative and varied output
        - Lower: more restrictive and factual output
    - Top P
        - Limits vocabulary based on cumulative probability
        - Rarely used by some practitioners
    - Suggested starting points: Temperature 0.2, Top P 0.95, Top K 30 for coherent and creative results

## Prompting Techniques

- General Prompting (Zero-shot)
    - No examples provided
    - Suitable for simple tasks with thorough task description
- One-shot / Few-shot Prompting
    - One-shot: one example
    - Few-shot: two or more examples (3-5 recommended)
    - Model mimics examples for desired pattern or format
- System Message / Contextual / Role Prompting
    - System: Sets overall context and purpose
    - Contextual: Provides relevant details or background
    - Role: Assigns a specific character or identity to the model
- Step Back Prompting
    - Model considers a general question, then uses that answer in a follow-up prompt
    - Activates background knowledge and reasoning
- Chain of Thought (CoT)
    - Model outputs step-by-step reasoning before the answer
    - Add "think step by step" or "show your work step by step" to the prompt
    - Powerful for STEM, logic, and reasoning tasks
- Self-Consistency
    - Combines sampling and majority voting for diverse reasoning paths
    - Run prompt multiple times and vote on the best solution
    - Improves accuracy and coherence, but increases cost and latency
- Tree of Thoughts
    - Explores multiple reasoning paths simultaneously
    - Combines self-consistency and chain of thought
    - Requires code or frameworks; suited for complex tasks
- ReAct (Reason and Act)
    - Combines natural language reasoning with external tools (e.g., search, code interpreter)
    - Functions like an agent: reasons, plans, acts, observes results
    - Built-in for frontier models; can be used with frameworks for others
- Automatic Prompt Engineering
    - AI writes prompts for you
    - Example: Model generates a PRD from a brief, then uses it as a prompt for code generation
    - Can incorporate techniques like CoT or Self-Consistency
- Prompting Using Code
    - Instructs the model to write and execute code for solutions
    - Ensures higher accuracy for code-related tasks

## Best Practices

- Provide examples: Use zero-shot, one-shot, or few-shot as needed for consistency
- Design with simplicity: Start simple, add complexity only as needed
- Specify output: Clearly define desired format or content
- Use instructions over constraints: Tell the model what to do directly
- Control max token length: Optimize for latency and cost
- Use variables in prompts: Enable dynamic content insertion
- Stay up to date: Monitor LLM capabilities and limitations for effective prompt formatting