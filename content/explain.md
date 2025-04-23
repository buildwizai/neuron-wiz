---
title: Model Context Protocol (MCP)
tags: [mcp, anthropic, claude, llm, data-access, api, tools, workflow, implementation]
description: Comprehensive explanation of MCP framework for enabling LLMs to access external data sources.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Model Context Protocol (MCP)
## Problem Addressed
* LLMs lacking direct access to external data
  * Example: Claude's inability to summarize GitHub commits initially
* Need to give LLMs access to various data sources
  * Private databases
  * Google Docs
  * File systems
  * Slack messages
## MCP Overview
* Initiative by Anthropic (creators of Claude)
* Aims to provide LLMs with access to your data
## Key Entities in MCP
### Client/Host
* Application initiating the query
* Examples: Claude Desktop, server application
* Often used interchangeably
* Host can contain multiple clients
### LLM
* The language model processing the request
* Example: Claude
### Data Source
* Location of the desired data
* Examples: GitHub repositories, databases, file systems
### MCP Server
* Enables LLM access to data sources
* Tiny program running locally or on-premises
* Can access data source APIs (e.g., GitHub REST API)
* **/tools Endpoint**
  * Returns a list of available tools the server can perform
  * Initially plain text
  * Implemented as JSON with name, description, and schema
  * Examples: `list commits`, `create update file`, `create pull request`
* Implements the logic for each tool
  * Calls relevant APIs
  * Processes and returns data
## MCP Workflow
### Step 1
* Client asks the preconfigured MCP server for available tools
### Step 2
* Client sends the user query and tool information to the LLM
### Step 3
* LLM responds by requesting the use of a specific tool
### Step 4
* Client instructs the MCP server to execute the requested tool with necessary parameters
### Step 5
* MCP server interacts with the data source (e.g., GitHub API)
* Retrieves the requested data
* Returns data to the client
### Step 6
* Client sends the original query along with the retrieved data to the LLM
### Step 7
* LLM processes the data and generates a response to the user
### Background
* Multiple queries are executed in the background
## Implementation Details
### Reference MCP Servers
* Available on the [model-context-protocol](https://github.com/model-context-protocol) GitHub organization
* Pre-implemented for various services
  * File System
  * Google Drive
  * GitHub
  * Google Maps
  * PostgreSQL
### Client Configuration (e.g., Claude Desktop)
* Requires modifying a configuration file (`config.json`)
* Specifies the details of the MCP server to use
* Instructions provided with reference servers
### Running the MCP Server
* Can be run using Docker
* May also support NPM/NPX or Python commands
* Requires necessary API keys/tokens (e.g., GitHub personal access token)
### Verification
* Claude Desktop displays a hammer icon with the number of available MCP tools after successful configuration
## Beyond Tools
* MCP servers can potentially support more than just tools
  * Sampling Roots
  * Template Prompts
## Future Development
* Implementation of custom MCP clients