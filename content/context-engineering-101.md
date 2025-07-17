---
title: Context Engineering with PRP Framework
description: A comprehensive overview of Context Engineering and the Product Requirement Prompt (PRP) framework for AI coding.
tags: [AI Coding, Context Engineering, PRP Framework, LLM, Prompt Engineering]
markmap:
  colorFreezeLevel: 2
  maxWidth: 500
---
# Context Engineering with PRP Framework
## What is Context Engineering?
* Providing extensive context to AI coding assistants upfront
* Separates real results from vibe coding & basic prompt engineering
* **10x process** for building anything
* Supersets prompt engineering
* Requires upfront time investment
* Validation is crucial
## The PRP Framework
* Creator: Raasmus
* Core Concept: PRD + curated codebase intelligence + agent runbook
* Goal: Minimum viable packet for production-ready code on first pass
* Works well on existing codebases
* Improves significantly with better models (e.g., Claude 4)
* Inspiration: Devdan, Client community, Memory Prompting
* Rationale: Mirrors product management for human developers; leverages user feedback & existing codebase patterns
## PRP Components & Usage
* **initial.mmd**: Defines plan, desired tools, business logic in detail
* **PRP Base Template**: Generic starting point with pre-done context engineering
    * References patterns, tool registry, database setup
    * Specialized templates exist (e.g., MCP server)
* **Global Rules (e.g., cloud.mmd)**:
    * For constant, rarely changing rules & core principles
    * Can be folder-specific
* **PRP Content**: Specific context for a particular piece of work or feature
* **Workflow with AI Coding Assistants**
    * **Generate PRP** (e.g., `/PRP MCP create`)
        * Passes `initial.mmd` as argument
        * Gathers context & pulls needed info
        * Serves as a planning & preparation step
    * **Validate PRP**
        * Crucial review step before execution
        * Adjust generated content to ensure business logic alignment
    * **Execute PRP** (e.g., `/PRP MCP execute`)
        * Clears prior conversation context for a clean slate
        * AI analyzes PRP, creates a comprehensive to-do list
        * Implements code with validation gates (linting, unit tests)
        * Can be an extensive process (e.g., ~25 minutes)
## Practical Application: Building an MCP Server
* Utilizes a specialized MCP server template
* **Three-Step Process**
    * **1. Edit `initial.mmd`**: Describe desired MCP features, examples, and considerations (can include external references like GitHub repos)
    * **2. Generate PRP**: Use the specific slash command (e.g., `/PRP MCPre`)
    * **3. Validate & Execute PRP**: Review, adjust, then run the execution command
* **Iteration**: Often requires follow-up prompts for bug fixes (e.g., a "two-shot" process for the demo)
* **Deployment**: Uses Wrangler (Cloudflare CLI) for local simulation and deployment
* **Example Built**: PRP Taskmaster MCP
    * Extracts tasks from PRPs
    * Manages tasks
    * Non-trivial, similar to Claude Taskmaster
    * Successfully built with 18 working tools
## Key Tools & Platforms
* **AI Coding Assistants**:
    * Claude Code (main demo tool, supports slash commands)
    * Gemini CLI, Cursor, Windsurf (slash commands can be used as regular prompts)
* **Development Communities/Resources**:
    * Dynamis.ai (community, actively building a repository of PRP templates)
* **Sponsors/Integrations**:
    * Lindy (AI + Zapier, features parallel agents/agent swarms for deep research)
        * Partners with Pipeream (5000+ integrations)
        * Partners with Appify (4000 web scrapers)
* **Deployment Platform**: Cloudflare (for MCP servers, specifically Cloudflare Workers)