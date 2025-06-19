---
title: Software Is Changing (Again)
description: A mind map summarizing Andrej Karpathy's talk on the evolution of software, LLMs as new computing paradigms, and opportunities in partial autonomy apps and building for agents.
tags: [AI, Software, LLMs, Autonomy, Programming]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Software Is Changing (Again)
## The Evolution of Software Paradigms
*   **Software 1.0: Manually Coded**
    - Instructions for the computer
    - Example: C++ code
*   **Software 2.0: Neural Networks (Weights)**
    - Not directly written code
    - Tuned by data and optimizers
    - Example: AlexNet image recognizer neural network
    - Hugging Face is the equivalent of GitHub for Software 2.0
    - Software 2.0 literally "ate through" the Software 1.0 stack (Tesla Autopilot example)
*   **Software 3.0: Programmable Large Language Models (LLMs)**
    - Neural networks became programmable with LLMs
    - Prompts are now programs that program the LLM
    - Prompts are written in English (native language)
    - Considered a new kind of computer and programming paradigm
*   **Importance of Fluency**
    - Be fluent in Software 1.0, 2.0, and 3.0
    - Need to decide which paradigm to use for functionality

## LLMs as a New Computer
*   **Analogies for LLMs**
    -   **Utilities (Electricity)**
        -   LLM labs (OpenAI, Gemini, Anthropic) spend capex to train (building a grid)
        -   Opex to serve intelligence via APIs (metered access)
        -   Demands: low latency, high uptime, consistent quality
        -   Open Router allows switching between different LLMs (like a transfer switch for electricity)
        -   LLM outages are "intelligence brownouts" for the world
    -   **Fabs**
        -   Large capex required for building LLMs
        -   Deep tech trees and R&D secrets centralizing in LLM labs
        -   Software is malleable and less defensible
        -   Fabless model (Nvidia GPUs, software only) vs. Intel model (Google TPUs, owns hardware)
    -   **Operating Systems (Most Fitting Analogy)**
        -   Not simple commodities; increasingly complex software ecosystems
        -   Few closed-source providers (like Windows/MacOS) and open-source alternatives (Llama ecosystem like Linux)
        -   LLM is like the CPU, context windows are like memory
        -   Orchestrates memory and compute for problem solving
        -   LLM apps can run on different LLMs (e.g., Cursor on GPT/Cloud/Gemini, similar to VS Code on Windows/Linux/Mac)
*   **Current State of LLM Computing (Circa 1960s)**
    -   LLM compute is very expensive
    -   Centralized in the cloud; users are thin clients
    -   Time sharing model (batching)
    -   Personal computing revolution for LLMs hasn't happened yet (Mac minis show early indications)
    -   Interacting via text with LLMs feels like a terminal to an operating system
    -   No general GUI for LLMs yet
*   **Unique Property: Flipped Technology Diffusion**
    -   Typically: Government and corporations are first users, then technology diffuses to consumers
    -   LLMs: Flipped, consumers are the first users ("helping me boil an egg")
    -   Corporations and governments are lagging in adoption
    -   Chaship was "beamed down" to billions instantly

## Psychology and Limitations of LLMs
*   **Nature**: Stochastic simulations of people; emergent humanlike psychology
    -   Trained on all text on the internet
    -   Auto-regressive transformer
*   **Superpowers**:
    -   Encyclopedic knowledge and memory (more than any human)
    -   Example: Remembering phone book details (Rainman analogy)
*   **Cognitive Deficits**:
    -   **Hallucinate**: Make up stuff
    -   **Insufficient Internal Model of Self-Knowledge**
    -   **Jagged Intelligence**: Superhuman in some problem domains, but make trivial mistakes no human would make (e.g., "9.11 > 9.9", "two Rs in strawberry")
    -   **Anterograde Amnesia**: Don't natively learn/consolidate knowledge over time
        -   Context windows are working memory that gets wiped (Momento, 50 First Dates analogy)
    -   **Security-Related Limitations**: Gullible, susceptible to prompt injection, potential data leakage
*   **Programming Challenge**: Work around deficits and enjoy superhuman powers

## Opportunities: Partial Autonomy Apps
*   **Shift from Direct LLM Interaction**: Use dedicated apps (e.g., Cursor for coding instead of direct ChatGPT)
*   **Shared Properties of LLM Apps**
    -   **Context Management**: LLMs handle much of the context
    -   **Orchestrates Multiple LLM Calls**: Under the hood (embedding models, chat models, diff models)
    -   **Application-Specific GUI**: Crucial for human auditing and faster work
        -   Visual representations (e.g., red/green diffs) are faster to process than text
    -   **Autonomy Slider**: User controls the level of automation (e.g., Cursor allows tap completion, chunk change, file change, full repo change)
*   **Cooperating with AIs**: Humans do verification, AI does generation
    -   **Goal**: Make the generation-verification loop as fast as possible
    -   **Speed up Verification**: GUIs are extremely important for visual auditing
    -   **Keep AI on a Leash**: Avoid large, unmanageable outputs (e.g., 10,000 line diffs)
        -   Work in small, incremental chunks
        -   Concrete prompts increase successful verification probability
*   **Examples of Partial Autonomy Products**
    -   **Cursor**: Coding app with autonomy slider and GUI for code diffs
    -   **Perplexity**: Search/research app with source citations and autonomy slider
    -   **Tesla Autopilot**: Partial autonomy driving product with GUI in instrument panel and autonomy slider; took over 12 years, still human-in-the-loop
*   **Iron Man Suit Analogy**:
    -   Build augmentations (human-driven with AI assistance) rather than fully autonomous agents (robots)
    -   Products need custom GUIs and UI/UX for a fast human generation-verification loop
    -   Products should have an autonomy slider to allow for more automation over time

## Everyone is a Programmer: Natural Language Interface
*   **Natural Language as a Programming Language**: Programming in English is unprecedented
    -   No longer requires 5-10 years of formal study
*   **Vibe Coding**: Building custom software using natural language prompts without deep coding knowledge
    -   Example: Building an iOS app in Swift without knowing Swift; MenuGen app
*   **Challenges of "Making It Real"**:
    -   Deployment, authentication, payments, domain names, devops are often manual, non-code tasks
    -   Involves tedious, explicit instructions ("go to this URL, click on this dropdown")
*   **Building for Agents (New Consumer/Manipulator)**
    -   Agents are humanlike "people spirits" that need to interact with digital infrastructure
    -   **lm.txt**: A simple markdown file instructing LLMs about a domain (similar to robots.txt for web crawlers)
    -   **LLM-Friendly Documentation**:
        -   Transitioning from human-focused docs (lists, bold, pictures) to markdown (Vercel, Stripe are early movers)
        -   Replacing "click" instructions with equivalent `curl` commands for agents
    -   **Model Context Protocol (Anthropic)**: A protocol for speaking directly to agents
    -   **Tools for LLM-Friendly Data Ingestion**:
        -   `getingest.com` for GitHub repos: Concatenates files into a single text with directory structure for LLM input
        -   Deep Wiki (Devon): Analyzes GitHub repos and builds docs pages specifically for LLMs
        -   Tools that change a URL to make content LLM-accessible
    -   Meeting LLMs halfway with structured data is more efficient than letting them "click stuff"

## Conclusion
*   Extremely unique and interesting time to enter the industry.
*   Huge amount of software needs to be written and rewritten.
*   LLMs are like utilities, fabs, but most accurately, they are operating systems (circa 1960s era).
*   LLMs are fallible "people spirits" that require new ways of working with them.
*   Adjust infrastructure to work effectively with LLMs.
*   Focus on building partial autonomy products with fast generation-verification loops.
*   Develop software for agents more directly.
*   The next decade will see the "autonomy slider" move from augmentation towards more autonomous agents.