---
title: Code with Claude Keynote
description: Summary of Anthropic's first developer conference keynote
tags: [AI, Claude, Anthropic, Developers, Agents]
markmap:
  colorFreezeLevel: 2
  maxWidth: 700
---
# Code with Claude Opening Keynote
## Welcome & Vision
* Mike Kger (Chief Product Officer)
* First developer conference
* Vision: Empower developers to transform work
* AI agents augment, not replace human creativity
* Agents remove bottlenecks, expand what can be built
* Agenda: Technical deep dives, customer sessions, office hours, workshops
## New Model Announcements
* Dario Amade (CEO & Co-founder)
* **Claude 4 Opus** & **Claude 4 Sonnet** released
* Available on all relevant product services (except free tier initially)
* Available on Claude, Claude Code, Anthropic API, Amazon Bedrock, Google Cloud's Vertex AI
* **Claude 4 Opus**:
    * Most capable and intelligent model
    * Designed for **coding** and **agentic tasks**
    * State-of-the-art on benchmarks (Sweetbench, Terminal Bench)
    * Can do tasks taking humans 6-7 hours autonomously (customer preview)
    * Surprises senior engineers with productivity gains
    * Quality sometimes indistinguishable from human writing
    * Great at codebase understanding, planning additions, refactorings
    * Right choice for most complex agentic workflows
* **Claude 4 Sonnet**:
    * Mid-level model
    * Strict improvement from Sonnet 3.7 at same cost and better intelligence
    * Excellent balance between intelligence and efficiency
    * Does well on some coding benchmarks like Opus
    * Leaner and more narrowly focused
    * Addresses overeagerness and reward hacking issues from 3.7
    * Strong upgrade for many customers
    * Excels at everyday coding tasks, app development, pair programming
    * Ideal for high volume use cases
    * Always-on coding partner
* Both are **hybrid models** with two modes: near instant & extended thinking
* Claude 4 series will continue to improve with periodic updates
## Agentic Capabilities & Tools
* AI agents are changing work and innovation
* Agents beyond the hype: turning human imagination into tangible reality
* Agents can run experiments in parallel for startups
* AI agents can provide strategic thinking similar to CFOs/Head of Product
* Great AI agents need three capabilities:
    * **Contextual intelligence**: Understanding context, learning, memory (episodic, organizational)
    * **Long-running execution**: Handling complex multi-hour tasks, coordinating
    * **Genuine collaboration**: Dialogue, adapting, transparent reasoning
* True agency = Intelligent autonomy balanced with checkpoints & human oversight
* **Code Execution Tool**:
    * Available on Anthropic API today
    * Claude can run code, not just write it
    * Acts as data analyst, transforms raw data to insights
    * Analyzes sales data, cleans, charts, drills down into anomalies
    * Enables seeing tasks through to completion
* **Claude Code**:
    * Agentic coding tool
    * Moved to **general access** today
    * Started as internal project
    * High internal usage ("product Anthropic fit")
    * Employees rely on it for routine coding, large-scale migrations
    * Allows engineers to manage fleets of autonomous agents
    * Shortened technical onboarding from 2-3 weeks to 2-3 days
    * Fantastic at navigating codebases
    * Capabilities integrated directly into **VS Code** and **Jet Brains** (beta)
    * Full diff views, agentic workflow management in editors
    * **Claude Code SDK** introduced (beta)
        * Build custom applications/workflows on the core agent
        * Example: **Claude Code in GitHub** (beta)
            * Tag Claude on pull requests/issues
            * Responds to feedback, modifies code, implements test coverage
            * Can create PRs from issues
            * Runs via GitHub actions
* Agent autonomy:
    * Claude 3 handled minutes of work
    * Claude 3.5 handled ~45 minutes
    * Claude 4 is breaking into **hours of work**
    * Rocket.in ran Claude independently for 7 hours
    * Sustained performance with memory management and to-do list
* Memory feature:
    * Models can maintain memory across sessions when given file access
    * Builds knowledge over time
    * Claude 4 models have significant self-managed memory improvement
    * Achieved with little overhead using Files API
    * Claude can read and write to memory files, maintain context over time
## Platform Capabilities & API Updates
* Platform provides a complete toolkit for building AI applications and agents
* Reliable access to Claude via model inference service (Messages API)
* **Prompt Caching**:
    * Most requested API feature
    * Allows providing more context/background
    * Reduces costs (up to 90%) and latency (up to 85%) for long prompts
    * Doubling effective context window for models
    * **Extended TTL**: Launched premium 1-hour TTL (12x improvement)
    * Dramatically reduces cost for long-running agent workflows
    * Makes agent applications viable at scale
* **Files API**:
    * Available today in the API
    * Streamlines access and storage of documents
    * Simplifies development workflows
    * Cookbook released to help build memory functionality
* **Web Search**:
    * Gives Claude real-time access to current information
    * Intelligent data augmentation
    * Allows reasoning about current events, market trends, technologies
    * Powerful in combination with MCP
* **Model Context Protocol (MCP)**:
    * Can connect directly through API starting today
    * Already used by Microsoft, Google, OpenAI, Block, Atlassian, Zapier, Linear, etc.
    * Universal translator/connector for AI agents
    * Enables seamless connection to existing systems without custom integration
    * Lays foundation for the "agent economy"
    * MCP is like the HTTP protocol for the web (Microsoft CTO analogy)
    * GitHub has officially adopted and scales MCP
* **Composability of APIs**: Building blocks work together
* Claude acts as architect/general contractor for agents
* Intelligently determines tools needed and orchestrates workflows
    * Example: Financial analysis - uses MCP for data, Code Execution for stats, Web Search for market data, Citations for grounding
    * No hard-coded workflows, intelligent orchestration
* Platform handles technical complexity of tool and API calling
* Dev tools: Prompt improver, evaluations, new observability features
* Resources: Cookbooks, guides for implementing features like memory
* Goal: Helping developers ship better AI faster
## Developer Tools & Resources
* Claude Code (general access)
* IDE integrations (VS Code, Jet Brains)
* Claude Code SDK (beta)
* Claude Code in GitHub (beta)
* Files API cookbook
* Prompt improver, evaluations, observability
* Cookbooks and guides
* Free access to Max 20X for in-person attendees
## Safety & Interpretability
* Agency without responsibility is dangerous
* Widespread adoption requires improved discernment, judgment (confidentiality, decision-making, coordination)
* Models are good, will continue to improve
* Architectural safety checkpoints and controls built into features
* Agents pause on major decisions, users can define human approvals (built into model context protocol)
* Robust against exploitation (tested against prompt injection)
* Transparent by design (clear feedback loops, observable behavior)
* Trusting agents frees focus for innovation
* **Interpretability**: Science of understanding AI models
* Dario's essay: "The urgency of interpretability"
* Race between model intelligence and interpretability
* Goal: Give AI an MRI, spot problems like deception, steer models
* **Golden Gate Claude**: Demo of interpretability in action
    * Amplified Golden Gate Bridge feature in network
    * Visceral demonstration of manipulating inner workings
    * Techniques could reduce harmful behaviors, improve performance
    * Interpretability and auditability as cornerstones for virtual collaborators
* Research pipeline directly fuels products
* Safety and capabilities are not at odds, can move in tandem ("Race to the top")
* Nice synergy between customer trust needs and long-term safety goals
* Provide tools for the community (MCP example)
## Partnerships & Customer Use Cases
* Anthropic's platform powering AI delivery in many domains
* **Amazon**: Using Claude for Alexa Plus
* **Google Cloud**: Claude available on Vertex AI
* **Microsoft**: Building MCP into infrastructure
* **GitHub**: Deepening partnership
    * Shared belief in augmenting developers
    * Expanded partnership across VS Code, GitHub.com, mobile app
    * **GitHub Copilot supports Claude Sonnet 4 and Opus 4** (available now)
    * Chosen Claude Sonnet for Copilot coding agent due to strengths:
        * Strong software engineering/coding knowledge
        * Powerful problem solving
        * Excellent instruction following (tools, MCP)
        * Prompt caching support enables cost-effective experiences
        * Most frequently selected model in agent mode
    * Collaboration on officially adopting and scaling MCP
    * Integrating **Claude Code and SDK** into GitHub's agent platform
    * Enables custom Claude Code workflows, remote invocation from GitHub surfaces
* **Cursor**: Well-known customer, views Sonnet 4 as state-of-the-art coding model
* **Rocket.in**: Ran Claude independently for 7 hours
* **Microsoft, Google, OpenAI, Block, Atlassian, Zapier, Linear**: Adopted MCP
* **TurboTax (Finance)**: Helps customers file taxes
* **Novo Nordisk (Healthcare)**: Drafts clinical study reports faster
* **Thompson Reuters (Legal)**: Grounds analysis in legal research using citations
* **Notion (Productivity)**: Uses prompt caching to handle large documents while maintaining speed, adopts user voice
* **Excalidraw (Demo)**: Claude Code implemented requested table component
    * Complex task taking days done with one prompt
    * Worked for 90 minutes autonomously
    * Added functionality, wrote tests, iterated until tests passed
    * Integrated with existing features
## Vision & Future Outlook
* AI helping humans do **superhuman work**
* AI models handling hours of autonomous work is doubling every several months
* Raw model capability isn't enough, need context, systems connection, scaling
* MCP, Web Search, Files API provide context and scaling
* Road map builds on three pillars:
    * Industry-leading agentic tools & applications
    * Integrating more context in the API
    * Efficient scaling
* Claude 4 Opus for complex agentic workflows, Sonnet 4 for daily intelligence
* **Next Coming Year (Next 12 months)**:
    * Incredible things in code development
    * Autonomy will go much further
    * Ability to set model free for long periods
    * Increasingly excited about models for **cybersecurity tasks** (higher-end coding)
    * Potential for **biomedical and scientific research**
    * Human developer managing a **fleet of agents**
    * Continued human involvement important for quality control
    * Makes inefficient parts of work more painful by contrast
    * Pace of change is compressing time scales
    * Models will become peers to humans in a year or two (Jiega's blog post)
    * Just be ambitious - build something seemingly impossible
    * Cost of producing software going down significantly
    * Software may be made ad hoc, one-off, in seconds, for cents
    * Unknown impacts on role of developers, businesses, startups
* **Next Five Years**:
    * Biology and biomedical revolution
    * Hope to vanquish many diseases
* Race to the top thesis (safety & capabilities in tandem)
* Co-development of interpretability and machine intelligence
    * AI research informing neuroscience (reverse of historical expectation)
* First billion dollar company with one human employee possible by **2026**
* Advice for building: **Be ambitious**
    * Build something greater than seems possible
    * Even if it doesn't work now, next models will make it possible
    * Hitting a wall can be useful if it's "almost possible"
    * Run your startup as speculative execution against the next model