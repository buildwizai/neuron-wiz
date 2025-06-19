---
title: The Agent Development Life Cycle (ADLC) at Sierra
description: A comprehensive overview of how Sierra builds and improves AI agents, including historical context, platform philosophy, and key development processes.
tags: [AI, Agents, Development, Sierra, LLM]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# The Agent Development Life Cycle (ADLC) at Sierra
## Introduction to Sierra
*   **Conversational AI platform for businesses**
*   Broadening scope:
    *   From chat experiences and customer service
    *   To phone interactions (most interactions by end of year)
    *   Sales, subscription management, product recommendations
    *   Covers all pieces of the customer experience
## Historical Context of AI & Software Development
*   **2016: AI Caves - Computer Vision (Google Lens)**
    *   Goal: Help computers understand differences (e.g., Chihuahua vs. blueberry muffins, dogs vs. mops)
    *   Building the first version of Google Lens
    *   Early capability: Identifying plants (e.g., type of fern or palm)
    *   Early experience: Felt like a "slot machine" due to non-determinism of inputs/outputs
    *   Present Day Google Lens capabilities: Search/shop what you see, translate non-Latin characters, math homework, identify flowers
    *   Achieved through: **Consistent step-by-step iteration over a decade**
*   **2012: AI Caves - Google Brain**
    *   Breakthrough: Watching cat videos and identifying them on YouTube
    *   Model size: 1 billion parameters (frontier models today are ~1 trillion parameters)
    *   Theory at the time: Computers would be limited (less popular now)
*   **"Software is eating the world" (Mark Andreessen essay)**
    *   Published around 2012
    *   Inspired early startups (e.g., Chubbies with their "teeny shorts for men")
## The Need for AI Agents in Business (Chubbies Example)
*   Chubbies: Known for amazing brand and customer experience
*   Kit Garten (SVP Commercial at Chubbies) belief: **By 2025, businesses need an AI agent** to represent them and help customers (like needing a website in 1995)
*   Chubbies partnered with Sierra
*   **Duncan Smothers (Chubbies' AI Agent)**
    *   Incredibly capable and "always down to clown"
    *   Located on Chubbies website
    *   **Capabilities (examples):**
        *   **Sizing and fit:** Empathetically helps, asks questions (e.g., waist size), offers product recommendations
        *   **Inventory tracking:** Tells what's in stock, helps customers choose new items
        *   **Package tracking and refunds:** Informs about multiple tracking numbers, issues refunds
        *   **Autonomous actions:** Agents actually taking action, not just answering questions
    *   **Results for Chubbies:** Able to help more customers, more quickly, with higher satisfaction
    *   Agents can have a budget to delight customers (e.g., DoorDashing shorts from retail)
## Sierra's Philosophy: Every Agent is a Product
*   **Cannot just "drag and drop a bunch of boxes"**
*   Requires a **fully featured developer platform** and a **fully featured customer experience operations platform**
*   Work on agents the same way you would work on a mobile app or website
*   Sierra partners closely with customers: Dedicated agent engineering and product management functions are "forward deployed"
## The Agent Development Life Cycle (ADLC) Process
*   Sought to build something like the **Software Development Life Cycle (SDLC)**
*   **Challenge with Large Language Models (LLMs):** Building on a "foundation of jello"
    *   LLMs are: Non-deterministic, slow, expensive to run, flexible, creative, can reason
    *   Traditional software is: Deterministic, fast, cheap, rigid, governed by if statements
    *   Methodology goal: Take advantage of LLM strengths, invoke traditional software where helpful
*   **Sierra's ADLC:** The process to build and improve AI agents
    *   **Core principle: Iterative refinement with customers in production**
    *   Goal: Continuously improve without also getting worse
    *   **Key aspects:**
        *   **Quality Assurance (QA):**
            *   Sierra's Experience Manager: Access to every conversation, high-level reports on agent performance
            *   Provide feedback (e.g., incorrect inventory due to API call issues)
            *   Feedback leads to: Issue filing -> test creation -> new release
            *   Agents evolve from a handful of tests at launch to hundreds/thousands
        *   **Applying AI to ADLC:**
            *   A year ago, this was done manually
            *   Now, AI is added to each part of the life cycle to speed up improvements
            *   **Reasoning models are a "force multiplier"** toward each step (development, testing, QA)
*   **Impact:** More effective for larger customers (tens of millions of requests vs. hundreds of thousands)
*   **Change Management:** Comes from everywhere (agent issues, model upgrades, new paradigms, multimodality)
## Voice Capabilities at Sierra
*   Zack started working on voice a year ago, launched generally available in October
*   Example: SiriusXM (large customer with tens of millions of customers)
    *   Able to pick up the phone right away to answer customers
*   Approach similar to **responsive web design**
    *   10-15 years ago: m.website.com (separate mobile/desktop sites)
    *   Now: Responsive design for websites
    *   Sierra AI agents: **Same platform, same agent code**, responsive to whatever channel and modality
    *   Customization possible (different phrasing, parallelize requests for lower latency)
    *   Basically works "out of the box"
## Reflections on Building with AI
*   LLMs remind us of ourselves: **Unpredictable, slow, not great at math**
*   Allows for great design through empathy: Put yourself in the "shoes of the robot"
*   Focus on **robustness and richness** when LLMs have human-like inputs and experiences
*   Excitement about Voice 2 models