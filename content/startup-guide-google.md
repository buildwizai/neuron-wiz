---
title: Startup Technical Guide to AI Agents
tags: [AI, Agents, Google Cloud, Startups, Technical Guide]
description: A comprehensive mind map outlining Google's technical guide for startups building AI agents.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Startup Technical Guide: AI Agents
## Section 1: Core Concepts
* ### Google Cloud's Agent Ecosystem
  * **Build your own agents**
    * **Agent Development Kit (ADK)** (Code-first)
      * **Core Capabilities:** Orchestration, Tool Definition, Context Management, Evaluation, Containerization, Multi-agent composition
      * **For Startups:** Automate workflows, Build defensible products, Personalize experiences, Launch with confidence
    * **Google Agentspace** (Application-first)
      * **Core Capabilities:** Unified search, Multimodal synthesis, No-code builder
      * **For Startups:** Break down data silos, Automate workflows without engineers
  * **Use Google Cloud agents**
    * **Gemini Code Assist:** AI for developers (IDE, CLI, GitHub)
    * **Gemini Cloud Assist:** AI for cloud environment (Design, Troubleshoot, Optimize)
    * **Gemini in Colab Enterprise:** AI for data science notebooks
  * **Bring in partner agents**
    * Integrate third-party agents via Google Cloud Marketplace
    * Explore Agent Garden for pre-built ADK agents
* ### Key Components of Every Agent
  * **Models: Selection and Tuning**
    * **Choosing a model:** Balance capability, speed, and cost
    * **Model Profiles**
      * Gemini 2.5 Flash-Lite: Early-stage, high-volume tasks
      * Gemini 2.5 Flash: Balanced, production applications
      * Gemini 2.5 Pro: Complex reasoning, frontier coding
    * **Model Garden:** Discover, customize, and deploy over 200 models
    * **Model Tuning:** Specialize model knowledge and style
  * **Tools: Enabling Agentic Action**
    * Internal functions, APIs, Data sources, Other agents
  * **Data Architecture for Agentic Systems**
    * **Long-term knowledge base:** Vertex AI Search, Firestore, Cloud Storage, BigQuery
    * **Working memory (short-term):** Memorystore for caching
    * **Transactional memory (auditing):** Cloud SQL, Cloud Spanner
  * **Agent Orchestration: Executive Function**
    * **ReAct Framework (Reason + Act)**
      * **Loop:** Reason -> Act -> Observe
      * **Use Cases:** Customer onboarding, System monitoring, Lead qualification
  * **Runtime: Deploying Agents at Scale**
    * **Core Capabilities:** Scalability, Security, Reliability
    * **Options:** Vertex AI Agent Engine, Cloud Run, Google Kubernetes Engine (GKE)
* ### The Role of Grounding
  * **RAG (Retrieval-Augmented Generation): Foundational Step**
    * Retrieves external knowledge before answering
    * Benefits: Access latest info, improve accuracy, faster responses
    * Tools: Vertex AI Search, Vertex AI RAG Engine
  * **Vector Databases: Search by Meaning**
    * Store and query vector embeddings for semantic search
  * **GraphRAG: Smarter Grounding**
    * Understands relationships between concepts in a knowledge graph
  * **Agentic RAG: Dynamic Reasoning and Retrieval**
    * Agent actively participates in the retrieval process (e.g., using Google Search)
    * Combines retrieval with real-time actions (function calling)
## Section 2: How to Build AI Agents
* ### A Complete Toolkit for Building
  * **Agent Development Kit (ADK)**
    * **Capabilities:** Build collaborative systems, Integrate with existing tools, Ensure quality, Scale with confidence
    * **Core Architectures**
      * **LlmAgent:** LLM-based, non-deterministic
      * **Workflow Agents:** Deterministic logic
        * SequentialAgent
        * ParallelAgent
        * LoopAgent
      * **CustomAgent:** Custom Python logic
    * **ADK Tools:** A framework for action (Toolsets, Custom functions, Remote tools)
  * **Model Context Protocol (MCP)**
    * Open standard for connecting AI to external data and tools
  * **Vertex AI Agent Engine**
    * Recommended managed runtime for deploying ADK agents
  * **Agent2Agent (A2A) Protocol**
    * Open standard for inter-agent communication and discovery
* ### Step-by-Step: Defining an LLM Agent
  * 1. **Define Identity:** name, description, model
  * 2. **Guide with Instructions:** Persona, constraints, tool usage
  * 3. **Equip with Tools:** Functions for external interaction
  * 4. **Complete Lifecycle:** Test, evaluate, and deploy
* ### Govern and Scale with Google Agentspace
  * Unify company data
  * Enable team-wide automation with a no-code designer
  * Govern and orchestrate a fleet of agents
* ### Other Building Options
  * **Gemini CLI:** Experiment with Gemini in the terminal
  * **Firebase Studio:** Accelerate full-stack app development with AI
## Section 3: Ensuring Reliability and Responsibility
* ### AgentOps: A Framework for Production
  * Adapts DevOps/MLOps for AI agents
  * **Systematic Evaluation Framework**
    * **Layer 1: Component-level:** Unit tests for tools and functions
    * **Layer 2: Trajectory Evaluation:** Verify reasoning process (ReAct loop)
    * **Layer 3: Outcome Evaluation:** Semantic correctness of final answer
    * **Layer 4: System-level Monitoring:** Track live performance
  * **AgentOps Toolkit**
    * **ADK:** Defines agent's application logic
    * **Agent Starter Pack:** Provides operational baseline (IaC, CI/CD, Observability)
* ### Building Responsible and Secure Agents
  * **Mitigating Risks:** Unintended performance, harmful use, bias, information hazards
  * **Defense-in-Depth Strategy**
    * **Secure Infrastructure:** Enforce least privilege with IAM
    * **Input/Output Guardrails:** Validate prompts and filter outputs
    * **Auditing and Monitoring:** Create a durable audit trail with logging