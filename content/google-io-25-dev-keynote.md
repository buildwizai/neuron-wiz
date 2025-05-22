---
title: Google I/O '25 Developer Keynote - Building with Google's AI/ML and Developer Tools
tags: [google-io, keynote, ai, ml, developer-tools, gemini, android, web, firebase, gemma]
description: Key highlights and announcements from the Google I/O 2025 Developer Keynote, focusing on AI/ML advancements and developer tools across Google platforms.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---

# Google I/O '25 Developer Keynote - Building with Google's AI/ML and Developer Tools

## Introduction
- Hosted by Josh Woodward
- Focus on turning research into reality
- Google Labs: Dedicated space to try new ideas
- New format: Demos in 59 minutes

## Building with Gemini (Logan Kilpatrick, Paige Bailey)
- Goal: Help developers build with Gemini models
- Google AI Studio
  - Prototyping AI voice agents
  - Live API updates
  - New 2.5 Flash native audio model
  - More controls (proactive audio, ignore stray sounds)
  - Supports 24 languages natively
  - Session context management
  - Tool improvements (function calling, search counting)
  - URL Context Tool: Access up to 20 web links for grounding responses
  - Native Code Editor in AI Studio
    - Optimized with SDK
    - Generate web apps using Gemini API
    - Model reasons, composes spec, generates code, self-corrects errors
    - Multi-turn and iterative experience
- Google GenAI SDK Update
  - Native MCP definitions support
  - Build agentic apps with open-source tools (e.g., Google Maps + MCP app demo)
- Building Conversational Agents (Keynote Companion demo)
  - Listen to specific audio inputs
  - Execute functions based on input (e.g., word counting, Gemini term triggers)
  - Dynamically update UI based on input
  - Gemini Live API: Sliding context window for long-running sessions
  - Maps Integration demo (location, nearby places, directions)
- Function Calls
  - Asynchronous execution for seamless dialogue (NON_BLOCKING)
  - Synchronous calls for quick operations
  - Background processing for high-latency tasks (e.g., MCP server)
  - `getFunFact` demo using 2.5 Pro and search grounding
- Structured Outputs
  - Improved structured outputs with function calling (JSON format)
- Deployment from AI Studio
  - Easy app sharing
  - Deploy via Cloud Run (one-click)
  - Runnable/viewable in IDEs (e.g., VS Code)
  - Build multimodal agents easily

## Building on Android (Diana Wong, Florina Muntenescu)
- Build excellent, AI-powered apps on Android
- APIs and tools for productivity
- Excellent app characteristics: Delightful, performant, cross-device
- AI-powered apps
  - Androidify app demo (build Android bot from selfie)
  - Steps: Describe person in photo, create robot from description
  - Used Cloud-based models via Firebase
  - Gemini models: Multimodal (text, images, video, audio)
  - Imagen 3 model for image generation
  - Androidify sample app on GitHub
- On-device AI
  - Process prompts locally with Gemini Nano
  - APIs for summarize, rewrite, image description
- Delightful Apps
  - Material 3 Expressive design system update
  - New shape library (e.g., cookie shape for buttons)
  - Expressive APIs (button group shape morphing)
  - Compose Material alpha for API trials
  - Android 16 Live Updates (navigation, deliveries, rideshares)
  - ProgressStyle template for time-sensitive updates
- Performant Apps
  - Enable R8 and Baseline profiles for better performance
  - Improved Play Store ratings (e.g., Reddit app)
- Adaptive Apps
  - Apps look good across all devices (foldables, tablets, Chromebooks)
  - Android 16: More responsive UIs by default
  - Samsung DEX: Enhanced desktop windowing in Android 16
  - Compose Adaptive Layouts library for adaptive UIs
  - Adaptive optimization increases engagement and retention
  - Bringing Android apps to Cars and XR
    - Opt-in via Play Console for cars
    - Android XR: Extended reality platform with Samsung
    - XREAL Developer edition (Project Aura)
    - Developer Preview 2 for Android XR SDK
    - Partner experiences: Peacock, Calm
- Productivity Tools
  - Jetpack Compose for Android
  - Latest features: autofill, text auto-size, visibility tracking
  - CameraX and Media3 Compose libraries
  - Rebuilt navigation library (simpler, more powerful)
  - Streamlined development lifecycle (refactoring, testing, crash fixing)
  - Gemini and Android Studio for tedious tasks
  - AI features in Android Studio
    - Natural language for end-to-end tests
    - Test user journeys, verify UI elements
    - New AI agent for dependency updates (coming soon)
    - Gemini Code Assist for enterprise (privacy, security, management)

## Building on the Web (Una Kravets, Addy Osmani)
- Web reach is virtually unlimited, but device/browser diversity is a challenge
- New Chrome features: Better UI, easier debugging, faster AI features
- Building Engaging User Interfaces
  - Leverage HTML and CSS for accessible, cross-browser UI
  - Build common/complex UI elements (carousels, hover cards) quickly
- New CSS Primitives (Chrome 135)
  - Easier carousels and off-screen UI with less code
  - Scroll button and marker pseudo-elements for navigation
  - `target-current` pseudo-class for active marker management
  - Pinterest: Reduced JS by 90%, improved performance
  - Scroll-driven animations for effects
- Complex Layered UI Elements
  - New experimental interest invoker API for accessible elements
  - Demo: Seat preview popover on hover/focus
  - Browser handles state, events, ARIA labeling
- Baseline Integration
  - Shows feature availability across browsers in tools (IDEs, linters)
  - VS Code and WebStorm support for baseline status
- Debugging with Chrome DevTools AI
  - AI assistance in DevTools panels
  - Ask AI for solutions to UI issues
  - Chrome 137: AI can apply fixes directly to source code
  - Redesigned performance panel with AI insights
- AI Features with Gemini Nano in Chrome
  - Seven AI APIs rolling out, backed by on-device models
  - Data never leaves device with Gemini Nano/built-in APIs
  - Hybrid solutions with Gemini and Firebase
  - AI Usher demo: Find seat from ticket photo
  - Multimodal AI APIs: Audio and image input
  - Early preview available for multimodal/hybrid solutions

## Firebase Studio (David East)
- Launched last month: Cloud-based AI Workspace
- Create full apps with a single prompt
- Customizable VM for extensibility
- Example: CRM tools, interview coaches, games generated from prompts
- Frontend
  - Figma to functional UI with Builder I/O plugin
  - Import Figma mockups, generate components and pages
  - Use Gemini for code advice and feature generation
  - Generates Add to Cart button, updates data and routing
- Backend
  - Add backend by coding or with Gemini
  - Backend section in app blueprints
  - Detects need for backend, provisions services as needed
  - Deploy to Firebase App Hosting
  - Extend with any backend/stack in coding workspace
- Features rolling out, feedback-driven improvements

## Tuning Your Own Models (Gus Martins)
- Fine-tune models for sensitive data, business details, or offline use
- Gemma Family: Open models for private, instant AI experiences
- Gemma 3: State-of-the-art, runs on single Cloud/desktop accelerator
- Gemma 3n: Runs on as little as 2GB RAM, same architecture as Gemini Nano, adds audio understanding
- Available on Google AI Studio, Edge, and open-source tools (Hugging Face, Ollama, Unsloth)
- MedGemma: Open models for medical text/image understanding
- Demo: Fine-tune Gemma with Unsloth in Colab (e.g., emoji language translator)
- Agentic-first Colab UI for dynamic coding conversations
- Deploy custom models via Google Cloud or AI Edge
- Gemmaverse: 70,000+ variants, 140+ languages, best multilingual open model
- Expanding to sign languages (SignGemma) and dolphin communication (DolphinGemma)
- Wrap up: Recap, encourage trying new tools, join developer programs

