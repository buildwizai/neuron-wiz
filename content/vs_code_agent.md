---
title: VS Code Agent
tags: [vs-code, ai-agent, coding-assistant, development-tools, ide-integration, code-generation, productivity]
description: Overview of VS Code's AI agent capabilities for automated coding assistance and development workflow enhancement.
---

# VS Code AI Features

## New VS Code AI Features

### Agent Mode
- **Enabling Agent Mode**
  - Via chat sidebar dropdown (Ask, Edit, Agent)
  - May require enabling in user settings (search for 'agent' and check the box)
- **Functionality**
  - Acts like an autonomous developer
  - Runs through steps to complete a task
  - Can install dependencies
  - Requires explicit permission for terminal commands
  - Can modify files
  - Can read project files
  - Auto-saves changes (can undo)
- **Comparison with Ask and Edit Modes**
  - Ask: Standard chat interaction, returns an answer
  - Edit: Can create and modify files
  - Agent: More proactive, performs multiple steps
- **Addressing LLM Limitations**
  - Training cut-off date (e.g., Claude 3.5 - April 2024)
  - Importance of providing context
  - Using tools (e.g., fetch) to provide up-to-date information
  - Following instructions exactly
- **Building an Application with Agent Mode**
  - Using a Project Requirements Document (PRD)
  - Using custom instructions
  - Integration with MCP servers for database context
  - Autonomous development process (observed over time)
  - Potential for issues requiring manual adjustments
  - Successful building of a link tracking application

## MCP Servers (Model Context Protocol)

- **Problem Solved:** How VS Code talks to databases
- **Functionality:** Programs that run locally and know how to interact with specific services (e.g., Postgres)
- **Installation:** Downloadable in various formats (Docker, NPM, Python)
- **Usage:**
  - Add server via command palette (MCP Add Server)
  - Select package type and provide package name
  - Allow local execution
  - Provide connection string
  - Choose User or Workspace Settings for availability
  - Start the server
  - Query tool available in the tools menu
  - Can query database schema

## Next Edit Suggestions

- **Functionality:** Suggests subsequent edits based on recent changes
- **Activation:** Available to everyone
- **Usage:** Tab or click to apply suggestions

## Bring Your Own Key

- **Functionality:** Allows users to use their own API keys with VS Code
- **Supported Models (Example):** Ollama (local), Gemini
- **Configuration:** Manage models, paste API key
- **Result:** Selected model appears in the model picker