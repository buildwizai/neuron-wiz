---
title: AI Platform Observability
tags: [observability, metrics, logging, tracing, monitoring, quality-assessment, performance-analysis]
description: Framework for implementing comprehensive observability in generative AI platforms to track performance and quality.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Observability
## Core Concepts
  - **Purpose:** Provides visibility into the system for monitoring and debugging.
  - **Integration:** Should be integrated from the beginning rather than as an afterthought.
  - **Importance:** Crucial for all project sizes, especially as system complexity grows.
## Monitoring Pillars
  - **Metrics:**
    - **System Metrics:** Track the state of the overall system, including throughput, memory usage, hardware utilization, and service availability.
    - **Model Metrics:** Assess model performance, such as accuracy, toxicity, and hallucination rate.
       - **Retrieval Quality Metrics**: context relevance and context precision.
        - **Vector Database Metrics**: storage needed to index data and query time.
    - **Failure Metrics:** Track how often a model times out, returns empty responses, or produces malformatted responses.
    - **Sensitive Information Metrics**:  Track how often the model reveals sensitive information.
    - **Length Metrics:** Track query, context, and response lengths.
        - Helps detect changes and issues in the application
    - **Latency Metrics:**
      - **Time to First Token (TTFT):** Time for the first token to be generated.
      - **Time Between Tokens (TBT):** Interval between token generation.
      - **Tokens Per Second (TPS):** Rate of token generation.
      - **Time Per Output Token (TPOT):** Time to generate each output token.
      - **Total Latency:** Total time to complete a response.
    - **Cost Metrics:** Track number of queries and volume of input and output tokens.
    - **Rate Limits**: Tracking number of requests per second to avoid service interruptions.
    - **Spot Checks:** Sampling a subset of data to quickly identify issues.
    - **Exhaustive Checks:** Evaluating every request for a comprehensive view.
    - **Breakdown by Axes**:  Metrics broken down by users, releases, prompt/chain versions, prompt/chain types, and time.
  - **Logs:**
    - **Philosophy:** Log everything (system configurations, queries, outputs, intermediate outputs, component start/end times, crashes).
    - **Tagging and IDs:**  Use tags and IDs to identify where in the system the log comes from.
    - **Automated Analysis:** Use tools for automated log analysis and log anomaly detection.
    - **Manual Inspection:** Manually inspect production data to understand user interaction.
  - **Traces:**
    - **Detailed Recording:** Capture a request's execution path through various components.
     - Include the actions, the documents retrieved, and the final prompt sent to the model.
    - **Performance Details:** Show the time each step takes and associated costs.
    - **Failure Analysis:** Pinpoint the exact step where a query failed.
## Additional Notes
  - **User Feedback, Drift Detection, Debugging**: These are also important but not detailed here.