---
title: Perplexity's Vision for AI and Browsing
description: An overview of Perplexity's strategy, Comet browser, AI model approach, and societal views.
tags: [Perplexity, AI, Browser, Comet, Business Model, Future of Work]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Perplexity's Vision for AI and Browsing
## Building the Comet Browser
### Reasons for Development
*   **Defensive Strategy**
    *   Control own destiny and avoid third-party control
    *   Prevent issues like Chrome extensions being uninstalled or janky
    *   Learning from Google's historical struggles with browser control (e.g., Google Toolbar, IE patch)
*   **Offensive Strategy**
    *   Enable advanced AI capabilities (agents) that require full browser control
    *   Pioneering the future of AI and search through agent-driven workflows
### Development & Architecture
*   Developed as a Chromium fork, launched in approximately 8 months
*   Focus on quality testing, bug fixing, seamless login import, and core browsing functionality
*   **Seamless integration of AI agents**
*   **Hybrid Client-Server Model**
    *   User logins and third-party service data reside client-side (on the user's device)
    *   Data is pulled on-demand from open tabs for specific agent prompts
    *   Intelligence and powerful AI models run server-side due to computational requirements
    *   Offers a **zero retention policy** for prompts and intermediate thoughts when using incognito mode
### Agent Capabilities
*   **Deep research** across multiple tabs, and personal data sources like Slack, Notion, and Google Docs
*   **Automate daily browsing tasks**:
    *   Answering emails and managing calendars
    *   Comparing prices and identifying arbitrage opportunities
    *   Tailoring marketing messages based on audience feedback
*   Orchestrates information into actionable outputs for the user
*   Serves as a **personal AI to filter noise** (e.g., AI-generated junk, spam) to extract relevant signal
*   Automates mundane, time-consuming tasks (e.g., filtering LinkedIn connection requests, managing event guest lists)
## Business Model & Revenue
### Rejection of Ads
*   Actively advocates for a future **without ads** as the primary revenue model
*   Views the ad industry as a "mafia" dominated by Google
*   Highlights that AI agents ignoring sponsored links would significantly undermine Google's Adwords business
*   Suggests Google's slow adoption of advanced agents is due to potential **self-sabotage of its ad revenue**
### Preferred Model
*   **Subscription or Usage-based**
    *   Users pay the agent for tasks, similar to hiring a person
    *   Revenue based on subscription fees or per-task completion
    *   Considers a retainer fee model for agent access
*   **Value-driven Approach**
    *   Aims to deliver tangible value by saving users significant hours of mundane work
    *   Anticipates a higher average revenue per user (ARPU) compared to traditional ad models (e.g., $50-100 per year)
*   **Other Potential Revenue Streams**
    *   Providing APIs for search and browsing infrastructure to other businesses
    *   Taking a cut from transactions that agents complete on behalf of the user (similar to a real estate agent model)
### Affordability & Adoption
*   Believes users will pay for AI tools that provide substantial value to their lives, such as saving family time or enhancing career prospects
*   Compares AI tool payments to existing societal expenditures on services like financial consultants, real estate agents, Netflix subscriptions, gym memberships, and Amazon Prime
## AI Model Strategy
### Model Selection & Post-training
*   **PPLX Bench** is an internal benchmark used for model evaluation:
    *   Continuously expanded with user-flagged bugs and prompts from various channels
    *   Provides a reliable ground truth signal for prompt and post-training changes
    *   Designed to prevent external model providers from overfitting to public academic benchmarks
*   **Post-training Process**:
    *   Involves sampling prompts where current models underperform
    *   Utilizes **Supervised Fine-Tuning (SFT)** and **Reinforcement Learning from Human Feedback (RLHF)**
    *   Employs the GRPO algorithm (developed by DeepSeek)
    *   Integrates various specialized models (e.g., DeepSeek, Alibaba Queen) for tasks like classifying personal data requests, generating UI, or handling shopping queries
    *   The core chat model orchestrates calls to these specialized models
### Competing with Frontier Models
*   **Does not aim to compete directly** with frontier model providers (e.g., OpenAI, Google) in training the largest base models
    *   Such competition requires continuous, massive investment (billions of dollars, huge GPU clusters, data centers, energy)
    *   Described as a "rat race" that never ends
*   **Strategic Focus**:
    *   **Superior Summarization with Referencing**: Achieving high accuracy, no hallucinations, and excellent formatting (using "Sonar" models)
    *   **Browser Control**: Specializing in training models highly effective at controlling browser tabs and executing actions
    *   Developing **fast, specialized models** that can eventually run efficiently on user devices (e.g., MacBooks with NPUs)
### Local Models & Edge AI
*   **Long-term Vision**: To shift more AI intelligence directly to edge devices (user clients)
    *   **Anticipated Benefits**: Significant speed improvements and enhanced privacy as data remains local
*   **Current Challenges**: Frontier models are presently too large and computationally intensive to run efficiently on local hardware
*   **Belief in Progress**: Confident that distillation techniques will enable the creation of smaller, yet highly capable models
*   **Role of Open Source**: Expects open-source models to eventually catch up to proprietary frontier models, driven by organizations aiming to gain market share and developer mindshare by releasing their models
## AI's Impact on Jobs & Society
### Labor Displacement
*   Acknowledges that **AI will cause short-term labor displacement** in society
*   **Employability Shift**: Individuals proficient in using AI tools will be significantly more employable
*   **Adaptation Challenge**: The rapid pace of AI technology evolution (every 3-6 months) outpaces humanity's typical rate of adaptation
### Solutions & Outlook
*   **Entrepreneurship**: Calls for more entrepreneurs to emerge and create new jobs leveraging AI
*   **Individual Adaptation**: Stresses the importance of individuals learning and actively using AI tools
*   **Societal Responsibility**: While education is key, it may not be enough for everyone to adapt to the speed of change
*   **Personal Growth**: Encourages individuals to dedicate time to learning AI and its applications, rather than "doom scrolling," to add value in the evolving societal landscape