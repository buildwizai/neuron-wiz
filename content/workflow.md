---
title: MCP Workflow
tags: [mcp, workflow, tools, llm, client, steps]
description: Step-by-step process of how MCP enables LLMs to access external data sources.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# MCP Workflow
## Step 1: Tool Discovery
* **Client (e.g., Claude Desktop) queries the MCP Server**
* Asks for available tools
* MCP Server responds with a list of its capabilities
  * Example: `list commits`, `create update file`
## Step 2: Initial User Query to LLM
* Client sends the **user's query**
* Includes the **available tools** information received from the MCP Server
* Sent to the **LLM (e.g., Claude)**
## Step 3: LLM Requests Tool Usage
* **LLM acknowledges lack of direct data access**
* Identifies a relevant tool from the provided list
* **Instructs the Client to use the specific tool**
* Asks the Client to call the tool and then query the LLM again
## Step 4: Client Executes the Tool
* **Client communicates with the MCP Server**
* Tells the server to execute the requested tool
* Provides necessary parameters based on the user's query
  * Example: Repository owner, repository name for `list commits`
## Step 5: MCP Server Interacts with Data Source
* **MCP Server accesses the relevant API**
  * Example: GitHub REST API
* Retrieves the requested data
  * Example: List of recent commits
* Returns the data to the Client
## Step 6: Client Submits Data and Query to LLM
* **Client sends the original user query to the LLM again**
* **Includes the data retrieved by the MCP Server**
  * Example: The list of recent commits from GitHub
* Provides the LLM with the necessary context
## Step 7: LLM Generates Response
* **LLM processes the provided data**
* Applies natural language processing
* Generates a summarized or relevant response to the user
* Response is based on the data obtained through the MCP Server
## Background Processes
* **Multiple queries happen in the background**
* Initial query + tool discovery + LLM tool request + tool execution + final query with data