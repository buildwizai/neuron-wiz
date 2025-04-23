---
title: MCP Key Entities and Concepts
tags: [mcp, llm, client, data-source, server, tools, protocol, architecture]
description: Comprehensive overview of key components and concepts in the Model Context Protocol ecosystem.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Model Context Protocol (MCP)
## Key Entities
### **Client/Host**
* Application that initiates the query
* Acts as an intermediary between the user and the LLM
* Examples: **Claude Desktop**, custom server application
* Can contain multiple clients (host definition)
* Configures and interacts with the MCP Server
* Sends the initial query and tool information to the LLM
* Executes the tool by calling the MCP Server
* Sends the final query with retrieved data to the LLM
### **LLM**
* The **language model** that processes the user's request
* Example: **Claude**
* Initially lacks direct access to external data sources
* Receives the user query and available tools from the Client
* Determines the need for a specific tool
* Instructs the Client to use the tool
* Processes the data provided by the Client (retrieved via MCP Server)
* Generates the final response to the user
### **Data Source**
* The location where the desired data resides
* Examples: **GitHub repositories**, private databases, Google Docs, file systems, Slack messages
* Accessed indirectly by the LLM through the MCP Server
* Provides the raw data requested by the MCP Server
### **MCP Server**
* A **program** that acts as a bridge between the LLM and data sources
* Runs locally or on-premises
* Discovers and exposes its capabilities through the **/tools endpoint**
* Implements the logic for each advertised tool
* Can access data source APIs (e.g., GitHub REST API)
* Receives requests from the Client to execute specific tools
* Interacts with the Data Source to retrieve data
* Returns the retrieved data to the Client
## Key Concepts
### **Problem of Limited LLM Data Access**
* LLMs like Claude initially cannot directly access external data
* Prevents them from fulfilling requests requiring external information (e.g., summarizing GitHub commits)
### **MCP as an Enabling Protocol**
* An initiative to give LLMs access to external data
* Achieves this access **without giving the LLM direct access** to the data source
### **Tools**
* Specific actions or functionalities that the MCP Server can perform
* Advertised through the **/tools endpoint**
* Examples: `list commits`, `create update file`, `create pull request`
* Have a name, description, and schema defining required parameters
* The LLM instructs the Client to use these tools
### **/tools Endpoint**
* An endpoint on the MCP Server that lists the available tools
* Initially returns plain text, but implemented as a JSON object
* JSON includes the tool's name, description, and input schema
### **MCP Workflow (Conceptual)**
* Client discovers available tools from the MCP Server
* Client sends the user query and tool info to the LLM
* LLM requests the use of a specific tool
* Client tells the MCP Server to execute the tool
* MCP Server retrieves data from the Data Source
* Client sends the query and retrieved data to the LLM
* LLM generates a response based on the provided data
### **Abstraction of Data Access**
* Claude (the LLM) **never directly interacts** with GitHub or other data sources
* All data access is mediated by the MCP Server
* The LLM only knows that a "tool" exists and can be used to get information