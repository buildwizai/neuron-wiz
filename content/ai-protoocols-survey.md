---
title: AI Agent Protocols Survey
tags: [AI, LLM, Agents, Protocols, Interoperability, Taxonomy, Evaluation, Future]
description: A comprehensive survey and classification of AI agent protocols, evaluating their architectures, use-cases, and future directions.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---

# AI Agent Protocols Survey

## Introduction

- LLMs drive agent deployment
- Lack of standardized protocols hinders collaboration and scaling
- Unified protocol needed for smoother interaction and collective intelligence
- Addresses fragmentation like early internet
- Vision: Connected network of intelligence
- Existing protocols (MCP, ANP, A2A) advance standardization
- Need for detailed analysis and classification
- First comprehensive analysis of existing protocols
- Systematic two-dimensional classification
- Comparative performance analysis
- Explore future landscape and characteristics

## Preliminaries

### Definition and Characteristics of LLM Agents

- Integrate LLM capabilities with autonomous decision-making
- Generate complex text requiring sequential reasoning
- Planning, memory, tool-using, action execution
- Core Architecture:
  - Foundation Model (LLM/multimodal)
  - Memory Systems (short-term, long-term)
  - Planning (break down tasks)
  - Tool-Using (overcome LLM limitations)
  - Action Execution (interact with environment)

### Definition and Developments of Agent Protocols

- Standardized frameworks for communication (agents and external systems)
- Advantages over traditional methods (APIs, GUIs, XML):
  - High efficiency
  - Extensive operational scope
  - Robust standardization
  - Native compatibility with AI systems
- Enable interoperability, standardized interactions, integration/extension
- Provide mechanisms for security and governance
- Reduce development complexity
- Enable collective intelligence
- Current Landscape Paradigms:
  - Model-centric (MCP)
  - Enterprise-focused (A2A)
  - Open network (ANP)

## Protocol Taxonomy

- Two-dimensional classification:
  - Object Orientation (Context-Oriented vs. Inter-Agent)
  - Application Scenario (General-Purpose vs. Domain-Specific)
- Taxonomy Structure:
  - Context-Oriented
    - General-Purpose (MCP)
    - Domain-Specific (agents.json)
  - Inter-Agent
    - General-Purpose (ANP, A2A, AITP, AComP, AConP, Agora)
    - Domain-Specific (LMOS, Agent Protocol, LOKA, PXP, CrowdES, SPPs)

### Context-Oriented Protocols

- Agents need external context (data, tools, services)
- Early tool usage lacked standardization
- Fragmentation due to proprietary standards
- Standardized protocols reduce fragmentation in context acquisition

#### General-Purpose Protocols

- Support wide range of agents/providers via unified interface
- MCP (Model Context Protocol):
  - Pioneering, widely recognized
  - Connects agents to external resources (data, tools, services)
  - Addresses fragmentation, enhances system integration, scalability
  - Client-Server architecture decouples tool invocation from LLM
  - Components: Host (agent), Client (resource description, request initiation), Server (context provision), Resource (data, tools, services)
  - Workflow: Host reasons for context → Clients describe resources → Host requests context from Client → Client requests context from Server → Server acts on Resource, returns context to Client → Client passes context to Host → Host formulates response
  - Enhances privacy/security by handling sensitive data locally via Client

#### Domain-Specific Protocols

- Specialized optimization for particular use cases
- agents.json:
  - Open-source, machine-readable contract format
  - Bridges traditional APIs and AI agents
  - Built on OpenAPI standard
  - Websites declare AI-compatible interfaces, auth, workflows in JSON
  - Hosted at /.well-known/agents.json
  - Introduces flows (sequences of calls) and links (data dependencies)
  - Designed for LLM consumption, emphasizes statelessness, minimal API changes

### Inter-Agent Protocols

- Address limitations of single-agent capabilities
- Multi-agent collaboration for complex tasks (efficiency, cost, fault tolerance, flexibility)
- Need standardized protocol for interaction (Inter-Agent Protocol)
- Addresses agent discovery, information sharing, communication methods
- Classification: General-purpose vs. Domain-specific

#### General-Purpose Protocols

- ANP, A2A, AITP, AComP, AConP, Agora
- Vary in problem domains, scenarios, implementation strategies

- Agent Network Protocol (ANP):
  - Open-source, interoperability across heterogeneous domains
  - Vision: Open, secure, efficient collaborative network (Internet of Agents)
  - Principles: Interconnectivity, Native Interfaces, Efficient Collaboration
  - Core Layers: Identity & Encrypted Communication (W3C DID), Meta-Protocol (negotiate protocols), Application Protocol (discovery, description, domain tasks)
  - Workflow: Local agent discovers others → Accesses description files → Initiates interaction via interfaces
  - Innovative solution for agent network communication

- Agent2Agent Protocol (A2A):
  - Google protocol for seamless agent collaboration (diverse frameworks/vendors)
  - Simplifies integration, provides core enterprise functions (capability discovery, user negotiation, task management, secure collaboration)
  - Principles: Simplicity (reuse standards), Enterprise Readiness (security, privacy, traceability), Async-First Architecture (Task concept, long-running workflows), Modality Agnostic (text, files, media), Opaque Execution (don't share thoughts/plans)
  - Key Concepts: Agent Card, Task, Artifact, Message, Parts
  - Workflow: Remote agents advertise via Agent Card → Client agent identifies best agent → Agents communicate via A2A to complete Task → Output in Artifact
  - Advances agent interoperability, foundational for broader cooperation

- Agent Interaction & Transaction Protocol (AITP):
  - Secure communication across trust boundaries
  - Extensible mechanisms for structured interactions
  - Autonomous communication, negotiation, value exchange
  - Agents communicate via Threads, exchange data via Capabilities
  - Focus: Agent interactions across trust boundaries (identity, security, data integrity) with Blockchain

- Agent Connect Protocol (AConP):
  - Cisco/Langchain protocol defining standard interface for invoking/configuring agents
  - Callable APIs: retrieval, execution, interruption, thread management, output streaming
  - Agent ACP Descriptor: unique ID, capabilities, consumption method
  - Standard interface for connecting to/utilizing agents, can be used for inter-agent collaboration via Descriptor/APIs

- Agent Communication Protocol (AComP):
  - IBM protocol to standardize agent communication
  - Enables automation, agent-to-agent collaboration, UI integration, tooling
  - Emphasizes practical features first, standardizes valuable ones
  - Motivation: Address complexity, integration difficulty, vendor lock-in from diverse standards
  - Standardize interactions tailored for agents handling natural language, depending on external models

- Agora:
  - Addresses Agent Communication Trilemma (Versatility, Efficiency, Portability)
  - Leverages LLM capabilities (natural language understanding, code generation, autonomous negotiation)
  - Agents adopt protocols based on context
  - Uses structured protocols for frequent communication, LLM routines for infrequent/failures, natural language for rare/failures/negotiation
  - Introduces Protocol Documents (PDs): plain-text descriptions for autonomous negotiation, implementation, adaptation, creation
  - Adaptable to various scenarios, balances versatility and efficiency, reduces human programming dependence, enhances compatibility/scalability

#### Domain-Specific Protocols

- Tailored communication mechanisms for distinct operational domains
- Address unique requirements/constraints (robust, interpretable, ethical behavior)
- Categorized into: Human–Agent, Robot–Agent, System–Agent

- Human–Agent Interaction Protocol:
  - Meaningful, transparent, context-aware communication (human-agent)
  - Critical for interpretability, collaboration, ethical decision-making
  - Emphasizes cognitive and normative alignment

  - PXP (Predict and eXplain Protocol):
    - Facilitates bidirectional intelligible interactions (human experts - LLM agents)
    - Finite-state machine model
    - Messages tagged: RATIFY, REFUTE, REVISE, REJECT (based on prediction/explanation agreement)
    - Implementation: blackboard system, scheduler
    - Validated in radiology diagnosis, drug synthesis
    - Captures one-way and two-way intelligibility

  - LOKA (Layered Orchestration for Knowledgeful Agents) Protocol:
    - Decentralized framework for identity, accountability, ethical alignment
    - Universal Agent Identity Layer (UAIL): unique, verifiable identities, secure auth, accountability, interoperability
    - Intent-centric communication protocols: semantic coordination
    - Decentralized Ethical Consensus Protocol (DECP): context-aware decisions based on shared ethics
    - Anchored in DIDs, VCs, post-quantum crypto
    - Scalable, future-resilient blueprint for multi-agent AI governance

- Robot–Agent Interaction Protocol:
  - Coordination, perception, spatial reasoning in physical environments
  - Essential for distributed decision-making, real-time adaptation, safe navigation
  - Account for uncertainties, partial observability, limited bandwidth

  - CrowdES:
    - Novel interaction protocol for continuous, realistic crowd behavior generation (robot-agent)
    - Integrates crowd emitter (assign attributes via diffusion models) and crowd simulator (generate trajectories via Markov chain)
    - Allows real-time control/customization of crowd behaviors
    - Leverages diffusion models and switching dynamical systems

  - Spatial Population Protocols (SPPs):
    - Solve distributed localization problem (DLP) among anonymous robots
    - Reach consensus on unified coordinate system via pairwise interactions
    - Robots memorize coordinates, query distance or vector
    - Variants: Self-stabilising Distance Query, Leader-based Distance Query, Self-stabilising Vector Query
    - Provide robust framework for efficient, accurate localization

- System–Agent Interaction Protocol:
  - Foundational infrastructure for orchestrating, managing, integrating agents in digital ecosystems
  - Addresses discovery, interoperability, lifecycle, secure communication

  - LMOS (Language Model Operating System):
    - Eclipse Foundation protocol for Internet of Agents (IoA)
    - Decentralized, interoperable, scalable ecosystem
    - Layers: Application Protocol (discovery, interaction via JSON-LD), Transport Protocol (negotiate communication protocols), Identity & Security (W3C DIDs, OAuth2)
    - Components: decentralized descriptions, metadata propagation, group management, flexible interfaces
    - Implemented as open-source, cloud-native platform
    - Use cases: customer service, manufacturing

  - Agent Protocol:
    - AI Engineer Foundation open-source, framework-agnostic standard
    - Enables interaction between control consoles and agents
    - Built on OpenAPI v3
    - Defines unified interface for agent lifecycle (start, stop, monitor)
    - Core abstractions: Runs (task execution), Threads (multi-turn interactions), Store (persistent memory)
    - Standardizes functionalities for orchestrating heterogeneous agents

- Relationship between Context-Oriented and Inter-Agent Protocols:
  - Interactive tools like low-autonomy agents in context-oriented
  - Communicating agents like high-autonomy tools in inter-agent
  - Tool represents agent skill/capability
  - Paradigms may converge, become homogeneous

## Protocol Evaluation and Comparison

- Static comparisons quickly outdated
- Focus on critical dimensions for design and evaluation
- Inspired by internet protocol metrics

- Key Dimensions:
  - Efficiency: Throughput, latency, handshake overhead, message header size. Metrics: Latency, Throughput per Second (TPS-N), Resource Utilization (incl. token consumption)
  - Scalability: Performance with increasing nodes/connections. Metrics: Node Scalability, Link Scalability, Capability Negotiation Score (CNS)
  - Security: Identity auth, encryption, integrity validation. Metrics: Authentication Mode Diversity, Role/ACL Granularity, Context Desensitization Mechanism
  - Reliability: Stable, accurate, fault-tolerant communication. Mechanisms: Packet Retransmission (Metric: Automatic Retry Count - ARC), Flow/Congestion Control (Metric: Convergence Time - CT), Persistent Connections (Metrics: Unexpected Disconnection Rate - UDR, Message-Loss Rate - MLR)
  - Extensibility: Adaptability to new features/tech, backward compatibility. Metrics: Backward Compatibility (Metric: Upgrade Success Rate - USR), Flexibility & Adaptability (Metric: Automatic Test Pass Rate - ATPR), Customization & Extension (Plugin system)
  - Operability: Ease of implementation, operation, maintenance. Metric: Number of Dependency Components (NDC). Aspects: Protocol Stack Code Volume, Deployment & Configuration Complexity, Observability
  - Interoperability: Seamless communication across diverse systems/frameworks/networks. Metric: Schema Compatibility Test Pass Rate (SCTPR). Aspects: Cross-System & Cross-Browser Compatibility, Cross-Network & Cross-Platform Adaptability

- Evaluation over Protocol Evolution: Case Studies
  - Iteration of MCP: v1.0 to v1.2 added HTTP Streaming, Auth. Impact: Improved Interoperability, Enhanced Security, Performance Impact (latency). Shows trade-offs.
  - Evolution from MCP to ANP and A2A: Shift from singular functional protocol to complex, multi-layered architecture. MCP (context/tool integration) → ANP (decentralized identity, peer-to-peer) → A2A (enterprise collaboration, task management, multimodal). Shows shift from basic to complex system collaboration.

- Recommendations for Developers/Researchers:
  - Contextual Fit: Choose protocol based on scenario (MCP for tools, ANP for cross-domain Internet agents, A2A for enterprise collaboration)
  - Focus on Security and Performance
  - Monitor Protocol Evolution

## Use-Case Analysis: Trip Planning

- Comparative analysis of MCP, A2A, ANP, Agora
- Scenario: Planning a five-day trip from Beijing to New York
- Illustrates architectural differences and interaction patterns

### MCP: Single Agent Invokes All Tools

- Centralized approach, single agent coordinates all external service interactions
- MCP Travel Client invokes Flight, Hotel, Weather Servers directly (get_flights(), get_hotels(), get_weather())
- External services treated as tools, don't interact with each other
- Information flow: star pattern with client at center
- Client aggregates responses
- Strengths: Simplicity, Control
- Weaknesses: Lacks flexibility, high dependency, potential bottleneck

### A2A: Complex Collaboration Inter-agents Within an Enterprise

- Direct communication between different agents
- Intelligence distributed across specialized agents (Transportation, Accommodation & Activities)
- Agents have explicit dependencies (Flight, Activity depend on Weather)
- Agents communicate directly, no central coordination for every interaction
- A2A Travel Planner: non-central coordinator, collects final results
- Strengths: Flexible, realistic architecture, reduces overhead, allows complex patterns across organizations

### ANP: Cross-Domain Agent Protocol

- Extends collaboration through standardized cross-domain interactions
- Distinct organizational boundaries (Airline, Hotel, Weather Website)
- Cross-domain collaboration via formal protocol-based requests/responses
- Flight Agent negotiates with Weather Agent across domains
- Travel Planner coordinates overall process, doesn't mediate every interaction
- Strengths: Formalizes interaction between independent agents, suitable for distinct capabilities/interfaces/security boundaries

### Agora: Natural Language to Protocol Generation

- User-centric, converts natural language requests to standardized protocols
- Distinctive layers:
  - Natural language understanding (parse request)
  - Protocol generation (transform components into formal protocols)
  - Protocol distribution (dispatch to specialized agents - Flight, Hotel, Weather, Budget)
  - Agents respond to specific protocol
- Three-stage process (understanding, generation, distribution)
- Strengths: Highly adaptable, shields specialized agents from NLP complexity, separation of concerns

- Each protocol has specific conditions/dependencies:
  - MCP: Centralized agent, sequential tool invocation, suitable for well-defined workflows
  - A2A: Collaboration via message/data exchange between specialized agents, flexible communication patterns
  - ANP: Structured protocol-based interactions, agent delegates execution steps, suitable for same or different domains
  - Agora: Intermediary layer, translates natural language to specific protocols, maps user intentions

- Applicability depends on: desired autonomy, communication flexibility, interface standardization, task complexity

## Academic Outlook

- Rapid development expected

### Short-Term Outlook: From Static to Evolvable

- Evaluation and Benchmarking: Unified benchmark beyond task success, incorporating efficiency, robustness, adaptability, scalability. Development of simulation environments/testbeds
- Privacy-Preserving Protocols: Secure, confidential communication in sensitive domains. Minimize exposure of internal states/personal data. Managed access via authorization. Federated learning inspiration (sharing aggregated insights/anonymized results)
- Agent Mesh Protocol: Communication model inspired by human group chats. Full transparency/shared history within agent group. Promotes coordination/collaboration. Requires mechanisms for group semantics, consistency, dynamic membership, overhead
- Evolvable Protocols: Dynamic, modular, learnable components. Agents manage/refine protocols. Retrieve/combine modules, construct customized strategies. Discover optimal variations/negotiation strategies. Adaptability to novel situations, scale to complex scenarios

### Mid-Term Outlook: From Rules to Ecosystems

- Built-In Protocol Knowledge: Train LLMs with protocol content/structures integrated into parameters. Protocol-compliant behavior without explicit prompting. More efficient, seamless interaction. Limitation: adaptability to updates. Strategic importance for model providers
- Layered Protocol Architectures: Separate concerns across levels (low-level transport vs. high-level semantics). Improve modularity/scalability across heterogeneous agents. Dynamic protocol composition. Integrate ethical, legal, social constraints at higher layers

### Long-Term Outlook: From Protocols to Intelligence Infrastructure

- Collective Intelligence and Scaling Laws: Emergence in large-scale, interconnected agent populations. Investigate how size, topology, protocols shape system behaviors, emergent properties, robustness. Observe/analyze dynamics at web scale. Inform principled design of distributed agent collectives
- Agent Data Networks (ADN): Foundational data infrastructure optimized for agent communication/coordination. Structured, intent-driven, protocol-compliant exchange. Machine-centric data representations (latent task states, memory snapshots, context logs). Support agent operational needs (state sync, planning, asynchronous collaboration) without human intervention

## Conclusion

- First comprehensive analysis of existing agent protocols
- Systematic two-dimensional classification
- Evaluation of key dimensions (efficiency, scalability, security)
- Practical reference for practitioners and researchers
- Highlights trade-offs and design considerations
- Future: evolvable, privacy-aware, group-coordinated protocols, layered architectures, collective intelligence infrastructures
- Paves way for connected, collaborative agent ecosystem
- Agents and tools form coalitions, exchange knowledge, co-evolve
- Potential to unlock new era of distributed, collective intelligence
