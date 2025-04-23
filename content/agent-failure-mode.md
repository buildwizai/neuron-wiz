---
title: AI Agent Failure Modes
tags: [ai-agents, failure-modes, error-handling, reliability, robustness, debugging, agent-limitations]
description: Analysis of common failure patterns in AI agents and strategies for improving reliability.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Agent Failure Modes and Evaluation
## Core Concepts
- **Evaluation is about detecting failures** in an agent's performance.
- The complexity of an agent's task increases the number of potential failure points.
## Unique Failures
- Agents have unique failure modes in addition to those common to all AI applications.
- These failures stem from issues in **planning, tool execution, and efficiency**.
## Evaluation Process
- Identify the agent's failure modes and measure their frequency.
## Planning Failures
### Tool Use Failures
- **Invalid Tool:** The plan includes a tool not in the agent's inventory.
- **Valid Tool, Invalid Parameters:** A tool is used with incorrect parameters or the wrong number of parameters.
- **Valid Tool, Incorrect Parameter Values:** A tool is used with the correct parameters but the wrong values.
### Goal Failure
- The agent **fails to achieve the task's goal**, or does not adhere to given constraints.
- Time constraints are frequently overlooked.
### Reflection Errors
- The agent incorrectly believes a task is completed, when it has not been.
## Tool Failures
### Incorrect Outputs
- A tool provides the wrong output (e.g., incorrect image caption or SQL query).
### Translation Errors
- If high-level plans are translated into executable commands, failures can occur during translation.
### Missing Tools
- The agent lacks the necessary tools for a specific domain.
## Efficiency Issues
- An agent can perform a valid plan using the right tools but still be inefficient.
- Consider tracking these metrics:
- **Number of steps** to complete a task
- **Cost** to complete a task
- **Time** each action takes
## Evaluation Metrics
### Planning Evaluation
- Using a planning dataset of (task, tool inventory) tuples, generate K plans per task and calculate:
- **Percentage of valid plans** generated.
- **Number of plans generated on average** to find a valid plan.
- **Percentage of valid tool calls**.
- **Frequency of invalid tool calls**.
- **Frequency of valid tools with invalid parameters**.
- **Frequency of valid tools with incorrect parameter values**.
### Tool Evaluation
- Each tool needs to be tested independently.
- Print and inspect each tool call and its output.
- If a translator is used, evaluate it with benchmarks.
- Use human domain experts to help understand what tools should be used for particular tasks.
### Efficiency Evaluation
- Compare the agent's efficiency with baselines such as:
- Another agent
- A human operator
- Be aware that **human and AI have very different modes of operation**.
## General Evaluation Tips
- Analyze agent outputs for failure patterns.
- Focus on areas of repeated failure.
- Identify problematic tools.
- Consider improving, replacing or eliminating difficult to use tools.