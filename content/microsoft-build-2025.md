---
title: Microsoft Build 2025 Keynotes
description: Key announcements from Microsoft Build 2025 on the open agentic web, AI platforms, and developer opportunities.
tags: [Microsoft, Build 2025, AI, Agents, Developers, Azure, Copilot, Windows]
markmap:
  colorFreezeLevel: 2
  maxWidth: 400
---
# Microsoft Build 2025: The Open Agentic Web
## Platform Shift Vision
	- Middle innings of platform shift
	- Building the open agentic web at scale
	- Expanding opportunity for developers
## Developer Tools & GitHub Copilot
	- Visual Studio family (50M+ users), GitHub (150M users)
	- GitHub Copilot used by 15M+ developers
	- Copilot evolution: Code completion -> Chat -> Multi-file edits -> Agents
	- Open-sourcing C-Pilot in VS Code core
	- Copilot agents capabilities
		- App modernization (framework upgrades, cloud migration)
		- Autonomous agent for SRE (triage, root cause, mitigate, report)
		- Full coding agent (bug fixes, new features, maintenance)
	- Shifts Copilot from pair programmer to peer programmer
	- Assigning issues to Copilot
	- Supports MCP (Model Context Protocol)
## Microsoft 365 Agents & Copilot Studio
	- Microsoft 365 Copilot Generally Available
	- 5-in-1 hub for work: Chat, Search, Notebooks, Create, Agents
	- Grounded on web data & work data
	- Includes agents like Researcher (synthesizes web/enterprise data) and Analyst (raw data insights)
	- Puts expertise at your fingertips
	- Integrates with Teams (multiplayer agents, at-mention)
	- Agent Store for discovery and distribution (reach 100s millions of users)
	- Copilot Studio: Build your own agents
		- Full KUA agent, MCP agent flows
		- Mix and match LLMs and deterministic workflows
		- Multi-agent orchestration for complex workflows (e.g., new hire onboarding)
	- 1 Million+ agents built connecting with Copilot and Teams
	- Copilot Tuning: New class of enterprise-grade agents
		- Fine-tuned on company data, workflows, style
		- Learns company tone/language, understands specific expertise/knowledge
## Azure AI Foundry
	- Complete app platform for the AI age
	- Production line for intelligence
	- Supports 1900+ models (OpenAI, Grok, Mistral, Llama, Hugging Face, etc.)
	- Sim ship OpenAI models on Azure (same day access)
	- Model Router: Automatically chooses best OpenAI model
	- Provision throughput across multiple models
	- Sophisticated Retrieval System: Knowledge engine/query engine for RAG
	- Foundry Agent Service (Generally Available): Build declarative agents, Supports multi-agent orchestration, Managed execution environment
	- Used by 70,000+ organizations for enterprise deployments
	- New Observability features for monitoring AI in production
	- Integrates with Microsoft Entra ID for agent identity, permissions, access controls
	- Integrates with Purview for end-to-end data protection
	- Integrates with Defender for agent security
	- Healthcare Agent Orchestrator available to everyone in Foundry
	- Connects Foundry to Copilot Studio for fine-tuning and workflow automation
## Windows Platform
	- Most open platform with massive scale (1 Billion+ users/devices)
	- Windows AI Foundry: Platform for AI app dev life cycle
		- Includes runtime and SDK
		- Supports building apps to run across CPUs, GPUs, NPUs, and Cloud
	- Foundry Local: Runtime, models/agents as a service, CLI for local dev
		- Fully supported on Windows and Mac
	- Customize built-in models (e.g., 5 Silica SLM using Laura adapters)
	- Rich semantic APIs to embed/index local data into a vector store (privacy protected)
	- Windows ML: Path to deploy high-performance AI across silicon
	- Native support for MCP (Modernizing Windows for the agentic web)
		- Includes built-in MCP servers (file systems, settings, app actions, windowing)
		- Native MCP Registry for discovering secure servers
		- Keeps users in control with explicit permissions
	- WSL (Windows Subsystem for Linux) fully open source
## Open Agentic Web Architecture
	- Emerging in an open way
	- Agent Definition: A thing a human can delegate increasingly complex tasks to
	- Explosion of agents, daily active users more than doubled
	- Agentic Web Stack: Agent Layer -> Runtime Layer -> Protocols
	- Runtime Layer Components:
		- Reasoning: Models getting smarter (capability overhang exists)
		- Memory: Need robust agentic memory (recall with breadth/precision), Type Agent open sourced
		- Protocols: Needed for agents to take actions (MCP, A2A)
	- Model Context Protocol (MCP):
		- Standard protocol for agentic communication
		- Simple, akin to HTTP, doesn't have opinion on payload
		- Foundation for composability and layering
		- Microsoft's standard protocol for agent communication
		- Collaboration with Anthropic on enterprise problems (entitlements)
		- Ubiquity is most important for utility
	- NL Web announced:
		- Turn any website or API into an agent application
		- Implement and leverage full power of LLMs to enrich services
		- Every NL web endpoint is an MCP server
		- Accessible to any agent that speaks MCP
		- Akin to HTML for the agentic web
		- Democratizes creation and aggregation of intelligence
## Data Stack for AI
	- Data tier is super important for any AI app
	- SQL Server 2025 launching
	- Integrating Cosmos DB directly into Foundry (store/retrieve conversational history, RAG)
	- Connecting Azure Data Bricks (genie spaces, AI functions) to Foundry
	- LLM responses directly integrated into Postgress SQL queries
	- Fabric: At the heart of data and analytics stack
		- Unifies all data and workloads
		- Cosmos DB coming to Fabric (unify entire data estate for AI)
	- Digital twin builder in Fabric (no-code/low-code)
	- Shortcut transformations in OneLake (AI-driven ETL)
	- Power BI Copilot: Chat with data, visually explore/analyze reports/models
		- Available in Microsoft 365 Copilot
## AI Infrastructure
	- Optimize performance, latency, and cost
	- Systems approach across silicon, system software, app server
	- Aim: Lowest cost, highest scale infrastructure (cloud & next-gen AI)
	- Focus: Tokens per watt per dollar
	- S-curves: Moore's law + System software opt + Model opt
	- Azure is first cloud with Nvidia GB200s online at scale (highest throughput)
	- Partnership with Nvidia (40x speed up over Hopper in 2 years)
	- Expanding Azure footprint: 70+ regions, opened 10 in last 3 months
	- Complete AI system includes cooling (Maya sidekick, zero water), Network (more fiber optics, AI WAN 400TB backbone)
	- Cobalt ARM-based VMs for efficiency
	- Digital resilience: Comprehensive compliance, sovereign controls, confidential computing
	- Azure Local: For extreme low latency and disconnected scenarios
## Microsoft Discovery for Science
	- Applying the AI stack to science workflows and the scientific process
	- Ambition for real breakthroughs in science (materials, compounds, molecules)
	- For science (akin to GitHub for dev, M365 for knowledge work)
	- Built on a powerful graph-based knowledge engine (Graph RAG)
	- Advanced agents specialized in R&D (reasoning, conducting research)
	- Agents cooperate in continuous iterative cycle (generate, simulate, learn)
	- Integrates tools and models (Microsoft, open source, 3rd party, internal)
	- Uses HPC and Quantum computing advances
	- Compresses time to discovery (months/years to days/hours)
	- Examples: Discovering new materials (PASF-free coolants), Therapeutics, Semiconductors
	- Healthcare Agent Orchestrator built on Discovery
## Overall Impact & Opportunity
	- Creating opportunity to fuel developer ambition
	- Big winners will be people building applications
	- Opportunity across every sector of the economy and every part of the world
	- It's about what people can do with the technology
	- Real-world examples of impact:
		- Speeding diagnosis of rare diseases
		- Gamifying wellness
		- Helping airline staff complete reports
		- Education: World Bank study (Nigeria/Peru) showed Copilot is best educational intervention using tech