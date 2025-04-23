---
title: MLOps on Vertex AI
tags: [mlops, vertex-ai, gcp, model-deployment, machine-learning-operations, ci-cd, model-monitoring]
description: Guide to implementing MLOps practices on Google Cloud's Vertex AI platform for streamlined ML lifecycle management.
---

# Operationalizing Generative AI on Vertex AI using MLOps

## Introduction
- Emergence of foundation models and generative AI introduces a new era for building AI systems.
- Novel challenges with large models:
  - Selecting the right model
  - Curating data
  - Optimal prompt engineering
  - Tuning models
  - Grounding model outputs
  - Optimizing hardware
- Focus on MLOps adaptations for generative AI and foundation models.
- Examines Vertex AI products for foundation models and generative AI.
- Vertex AI as a comprehensive MLOps platform for generative AI.

## What are DevOps and MLOps?
- **DevOps** bridges development and operations:
  - Collaboration, automation, continuous improvement.
  - Continuous integration and continuous delivery.
- **MLOps** builds upon DevOps for ML systems:
  - Tackles the experimental nature of ML.
  - Practices include:
    - Data validation
    - Model evaluation
    - Model monitoring
    - Tracking and reproducibility.

## Lifecycle of a Generative AI System
- Five key moments:
  - **Discover**: Identify the most suitable model.
  - **Develop and experiment**: Focus on prompt engineering, fine-tuning, and model chaining.
  - **Deployment**: Manage new artifacts like prompt templates and fine-tuned adapters.
  - **Continuous monitoring**: Ensure performance and safety standards.
  - **Continuous improvement**: Refine prompts, swap models, or combine models.
- Assumes foundational model is already operationalized.
- Focuses on operationalizing generative AI applications using existing foundation models.

## Discover
- Building foundation models from scratch is resource-intensive.
- Shift towards adapting existing foundation models:
  - Fine-tuning and prompt engineering.
- Key factors for model discovery:
  - Quality, latency, development time, cost, and compliance.
- **Vertex Model Garden** simplifies model discoverability.

## Develop and Experiment
- Iterative process involving data refinement, model adaptation, and evaluation.
- Generative AI models require prompts as a core component.
- Prompt engineering involves crafting and refining prompts iteratively.
- Prompts blur the lines between data and code:
  - **Prompt as Data**: Few-shot examples, knowledge bases.
  - **Prompt as Code**: Context, templates, guardrails.
- MLOps practices expand to include prompted model components.

## Chain and Augment
- Challenges like recency and hallucinations require chaining models.
- Common patterns:
  - **Retrieval Augmented Generation (RAG)**: Augments models with retrieved knowledge.
  - **Agents**: LLMs interact with tools and APIs for complex tasks.
- New demands for MLOps:
  - End-to-end evaluation, versioning, monitoring, and introspection.
- Vertex AI supports chaining and augmentation with tools like Grounding as a Service and Agent Builder.

## Tuning and Training
- Fine-tuning optimizes models for specific tasks:
  - Supervised fine-tuning and RLHF.
- MLOps requirements include tracking artifacts and measuring impact.
- Vertex AI provides services for fine-tuning and training.

## Continuous Training and Tuning
- Continuous tuning is often more practical than retraining.
- Cost considerations include GPUs, TPUs, and model quantization.
- Vertex AI supports tuning for generative AI.

## Data Practices
- Generative AI leverages diverse data types:
  - Conditioning prompts, few-shot examples, grounding data, task-specific datasets.
- Data organization and lifecycle management are critical.
- Synthetic data generation and augmentation can enhance datasets.

## Evaluate
- Evaluation is a core activity for generative AI systems.
- Automation ensures speed, scalability, and reproducibility.
- Challenges include complex inputs/outputs and subjective metrics.
- Stabilize evaluation approaches and metrics early.

## Deploy
- Deployment involves managing complex systems with many components.
- Two types:
  - **Gen AI systems**: Operationalizing complete applications.
  - **Foundation models**: Making models accessible for various use cases.
- Best practices include version control, CI/CD, and infrastructure validation.

### Logging and Monitoring
- End-to-end logging and monitoring are essential.
- Detect skew, drift, and performance decay.
- Vertex AI tools support monitoring and evaluation.

## Govern
- Governance ensures control, accountability, and transparency.
- Extends to lineage tracking for all components.
- Vertex AI provides tools for governance of data, models, and code.

## Extend MLOps for Generative AI to Agents
- Agents interact with tools and environments to make decisions.
- Lifecycle includes tool orchestration, evaluation, and optimization.
- Observability and memory (short-term and long-term) are critical.
- Deployment requires robust CI/CD pipelines.

## Operations: People and Processes
- Collaboration between diverse roles is essential:
  - Prompt engineers, AI engineers, DevOps, and app developers.
- Organizational scale influences specific roles.

## The Role of an AI Platform for Generative AI Operations
- AI platforms like Vertex AI provide a unified environment for the AI lifecycle.
- Supports predictive and generative AI development.

## Key Components of Vertex AI for Generative AI
- **Discover**: Vertex Model Garden simplifies model discovery.
- **Prototype**: Vertex AI Studio and Notebooks enable rapid development.
- **Customize**: Training and tuning options for adapting models.
- **Orchestrate**: Vertex Pipelines automate workflows.
- **Chain and Augment**: Tools for RAG and agent-based approaches.
- **Evaluate**: Experiment tracking and evaluation pipelines.
- **Predict**: Vertex AI Endpoints for production deployment.
- **Govern**: Feature Store, Model Registry, and Dataplex for governance.

## Summary
- Generative AI reinforces MLOps principles of reliability, repeatability, and dependability.
- Vertex AI provides a comprehensive platform for predictive and generative AI.
- Solid engineering processes remain critical for success.
