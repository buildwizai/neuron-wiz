---
title: Google's AI Stage - Day 1
description: Key discussions on the frontiers of AI and an overview of Google's AI Stack for developers.
tags: [AI, AGI, Google, DeepMind, Gemini, Gemma, Developers]
markmap:
  colorFreezeLevel: 2
  maxWidth: 700
---
# Google's AI Stage - Day 1
## Conversation with Demis Hassabis & Sergey Brin
* Participants: Alex Kantrowitz (Host), Demis Hassabis (CEO, Google DeepMind), Sergey Brin (Google co-founder)
* Frontiers of AI
    * Incredible progress with existing techniques
    * May require 1-2 more breakthroughs for AGI
    * Lots of promising ideas in development
* Scale vs. Techniques
    * Need both scale (data, compute, data centers) and algorithmic techniques
    * Exploit existing techniques to the limit
    * Innovations can bring 10X leaps
    * Historically, algorithmic advances often more significant
    * Need many more data centers for training, serving, and inference compute
* Reasoning Paradigm ("Deep Think")
    * DeepMind heritage (AlphaGo, AlphaZero)
    * Thinking improves performance dramatically (e.g., AlphaGo 600 Elo higher)
    * Potentially even bigger gains in the real world
    * Inference time compute allows "letting it think" for difficult tasks
    * Deep Think: parallel reasoning processes checking each other
    * Requires better world models
    * Challenge: world models are complex and have errors
    * AI is much stronger with thinking capability added
    * Still early days (less than a year)
    * Future: AI using tools or other AIs in the thinking process
* AGI (Artificial General Intelligence)
    * May require 1-2 more breakthroughs
    * Importance of the term AGI despite overuse
    * Two concepts: typical human intelligence vs. human brain architecture capability
    * Human brain is the only evidence of general intelligence
    * AGI should match capabilities of best humans in history (Einstein, Mozart, etc.)
    * Current systems are not AGI - inconsistent, easily findable flaws
    * AGI should be consistent, taking experts months to find holes
    * Prediction: likely one company/country reaches AGI first, but maybe others close behind
    * Important that first AGI systems are built reliably and safely
    * Timeframe: more like 5 to 10 years (Demis)
    * Predictions vary (Sergey: before 2030, Demis: after 2030)
* Emotion in AI/AGI
    * AI needs to understand emotion
    * Mimicking emotions is a design decision
    * Not necessarily desirable for AIs to have human emotional reactions
    * Open question as AGI timeframe approaches
* Self-improving systems ("Alpha Evolve")
    * Could potentially shrink timeframe
    * AI helping design better algorithms and improve LLM training
    * DeepMind knows it's possible (AlphaZero self-play)
    * Alpha Evolve: Gemini coding agent for designing advanced algorithms
    * Targets fundamental/complex math and coding problems
    * Uses Gemma/Flash models
    * A big promise for the future
* Motivation / The "Race"
    * Unique time in history for computer scientists
    * Incredible technical revolution
    * More scientifically exciting and greater potential impact than web/mobile
    * Sergey's day-to-day: deep in technical details of Gemini models
* Agents & Robotics
    * DeepMind heritage is agent-based systems
    * Goal: AGI needs to understand the physical world
    * Massive use cases: truly useful assistants (not stuck on one device)
    * Assistant needs to understand physical context
    * Robotics bottleneck is software intelligence, not hardware
    * Exciting moment with new algorithms (Gemini 2.5, Veo) to make robotics work
    * AGI needs to do all these things (agents, robotics)
    * Gemini built multi-modal from the start
    * Gemini robotic models (private early access)
    * Advanced vision, language, action models with physical actions output
    * Robotic agnostic (humanoids to industrial machinery)
    * Fine-tuned to be dexterous
* Smart Glasses & Universal Assistant
    * Google interested in assistants that see the world visually
    * Learnings from Google Glass: technology gap, need to polish/release steadily
    * New AI capabilities higher now
    * Universal assistant is the killer app for smart glasses (Demis's opinion)
* Generative Media & Model Collapse
    * Worry about model collapse if trained on AI-generated content
    * Google rigorous with data quality/curation
    * Attach SYNID (invisible, robust AI watermark) to generative models (images, video)
    * Tools to detect watermarks
    * Important to combat Deepfake information
    * Can filter auto-generated stuff from training data
    * Example: AlphaFold mixed synthetic and real data carefully
    * GenMedia models (Lyria for music, image/video generation) available
    * Available in AI Studio and API
* Future of the Web
    * Hard to predict 10 years out due to AI pace (Sergey)
    * Web will change a lot in near term (Demis)
    * Agent-first web won't need renders like humans do
* Hiring & AI in Interviews
    * Depends on how AI was used
    * Using today's models, probably wouldn't hire (Demis)
* Simulation Theory
    * Not a simulation in the sense of a game run by conscious beings (Demis)
    * Underlying physics is information theory - a computational universe
    * AI modeling nature is interesting/telling
    * AlphaGo/AlphaFold work gives insights
    * Recursive argument: if we're in a simulation, so are the simulators (Sergey)
    * Requires infinite stack or stopping criteria
    * Hard to reason about one level up from an anthropocentric view (Sergey)

## Google AI Stack for Developers
* Presenters: Joana Carrasqueira, Josh Gordon
* Mission: Empower every developer/org to harness AI power
* Stack combines robust infrastructure with state-of-the-art research
* Enables real-world applications
* Components
    * Foundation Models
        * Gemini family (most capable, versatile)
            * Core philosophy: provide state-of-the-art models/tools
            * Multi-modal, long context window, powerful reasoning
            * Variety of models for different use cases
            * Gemini 2.5 Pro: high context, deep reasoning, good at coding
            * Gemini 2.5 Flash: efficient, speed, improved benchmarks
            * Gemini Nano: optimized for on-demand tasks
        * Gemma
            * Latest is Gemma 3 (sizes: 1B, 4B, 12B, 27B)
            * Flexibility for different applications (on-device, Cloud)
            * 4B, 12B, 27B are multi-modal & multilingual (>140 languages)
            * MedGemma: open models for medical text/image (4B, 27B)
            * Gemma 3n (on tablets/laptops)
            * Gemma-verse blooming with variants (Chill, Dolphin, etc.)
            * Can download, adapt (prompting, fine-tuning, agentic workflows)
        * Domain-specific models
    * Frameworks
        * Keras: Applied AI, easiest for fine-tuning
            * Fine-tuning not complicated, requires 2-column CSV
            * Example: fine-tune Gemma to speak emoji
            * Great for healthcare/medicine applications
            * Easy tutorial (~5 key lines of code)
            * Uses LoRA fine-tuning
        * JAX: Research, highest scales
            * Scales easily to tens of thousands of accelerators
            * Used to build Gemini
            * Python ML library with NumPy API
            * Good for implementing models line-by-line to understand
            * Can run on GPU/TPU without changing code
            * Good for thinking through techniques
            * Ecosystem of libraries (optimizers, checkpoints, networks)
            * MaxText: reference LLM implementation
            * MaxDiffusion: reference generative image models
            * Tunics: New library for easy post-training algorithms in JAX (stay tuned)
            * Used by Marin (Stanford's open model - built with JAX/TPUs)
        * PyTorch: Google works with community
            * Can use PyTorch and get benefits
            * vLLM community: popular inference engine with TPU support
            * LLM D: New project (RedHat/Nvidia/Google) for distributed serving (JAX/PyTorch support)
    * Developer Tools
        * Google AI Studio
            * Perfect place to start, simplest way to test models
            * Free of charge, no Cloud knowledge needed
            * Create, test, save prompts
            * Starter apps to inspire
            * "Build" app: generate web apps with natural language
            * New generative media experience
            * Built-in usage dashboard (community requested)
            * Native audio TTS support
            * "Mumble Jumbo" app: interactive audio experiences
            * Shows thought summaries of model's thinking
        * Gemini API
            * Easiest way to develop with foundation models
            * New capabilities: text-to-speech (control emotion/style)
            * Enhanced tooling: grounding with Google Search, code execution, URL context (build Search Agents)
            * Gemini case support for MCP (reduces friction, simplifies agentic capability)
            * Easy to get started (~1 minute), get API keys in AI Studio
            * Google AI SDK: Latest, easy/friendly, call API in few lines
            * Advanced functionality: thinking summaries
            * Function calling: Pass function definition (JSON) to API, model assesses if calling makes sense, returns details
            * Works with multiple functions
        * Deployment tools
            * Deploy Gemma models from AI Studio to Cloud Run with one click
            * Requires 2 line change to call with GenAI
    * Infrastructure
        * Hardware: TPU
        * Software: XLA (Compiler for ML code - JAX, Keras, TensorFlow, PyTorch)
    * Deployment on Mobile Devices
        * Google AI Edge: Framework for deploying ML on Android, iOS, browser, embedded
        * Reasons: Latency, cost saving (running locally), offline capability
        * Added latest Gemma model
        * Can run small language models on device
        * Community support (Hugging Face)
        * AI Edge Portal: Testing service on fleet of real devices (coming soon)
* What's Next
    * Pushing boundaries, bringing innovation to developers/community
    * Future: AI changing fields (science, healthcare), radical abundance
    * Co-create the future safely/responsibly
    * Domains with potential:
        * Alpha Evolve: Self-improving coding agent for algorithms/math
        * AI Co-scientist: Accelerate discovery/drug development
            * Scientist gives research goal in natural language
            * Provides overview, hypothesis, methodology
            * Uses coalition of agents inspired by scientific method
        * Gemini Robotic models: Advanced vision, language, action models with physical actions output
            * Private early access
            * Robotic agnostic (humanoids to industrial machinery)
            * Fine-tuned to be dexterous
* How to Learn More
    * Feedback, social media, developer forum
    * Links: AI.Google.dev, goo.gle/cookbook, AI.Google studio.com, XLA.org
    * Check out sessions tomorrow (Gemini API, Gemma-verse, robotics)
    * Early access programs available