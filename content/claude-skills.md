---
title: Agent Skills (Standard Operating Procedures for LLMs)
description: Analysis of Claude Skills, core concepts, best practices, and architecture for customizing AI workflows.
tags: [Anthropic, Claude, Agents, SOPs, Skills]
created_at: [Date generated]
markmap:
  colorFreezeLevel: 2
  maxWidth: 400
---
# Agent Skills: SOPs for LLM Workflows
## Core Concept & Purpose
* Definition
 - Folders including instructions, scripts, and resources that Claude loads when relevant
 - Functions like custom onboarding or packaged expertise
* Benefit
 - Improves performance on specialized tasks (e.g., Excel, presentations)
 - Reduces variability in agent output
 - Ensures high-quality context input for the LLM
* Historical Context
 - Related to Model Context Protocol (MCP) prompt context
 - Similar trend seen in Gemini CLI extensions and Claude code plugins
## How Skills Work (Properties & Mechanics)
* Properties
 - Composable: Skills stack and are coordinated automatically
 - Portable: Use across Claude apps, Claude Code, and API
 - Efficient: Loads only minimal, relevant information when needed
 - Powerful: Can include executable code for reliability
* Mechanism
 - Claude scans available skills for matches
 - Metadata (name/description) is pre-loaded into the system prompt
 - SKILL.md is read only upon relevance
 - Files are accessed on-demand from the filesystem using bash Read tools
## Skill Structure & Authoring Best Practices
* Core Principles
 - Concise is Key: The context window is a public good
 - Only add context Claude doesn't already have (assume Claude is smart)
* Setting Degrees of Freedom (Specificity)
 - High Freedom: Text-based instructions (e.g., code review process)
 - Medium Freedom: Pseudocode or scripts with parameters (e.g., report generation template)
 - Low Freedom: Specific scripts with few parameters (e.g., database migration)
* SKILL.md Anatomy (Metadata)
 - name: Max 64 characters, recommended gerund form (e.g., "Processing PDFs")
 - description: Max 1024 characters, write in third person, specific details for discovery
* Progressive Disclosure
 - SKILL.md should be under 500 lines
 - Split content into separate files (e.g., FORMS.md, reference.md)
 - Keep references one level deep from SKILL.md
 - Use Table of Contents for reference files longer than 100 lines
* Workflows and Feedback
 - Use clear, sequential steps for complex tasks
 - Provide a checklist to track progress
 - Implement feedback loops (e.g., Run validator → fix errors → repeat)
* Content Guidelines
 - Use consistent terminology
 - Avoid time-sensitive information (use "Old patterns" sections)
 - Utilize common patterns (Templates, Examples, Conditional workflows)
## Integration and Availability
* Claude Apps (UI)
 - Available for Pro, Max, Team, and Enterprise users
 - Claude automatically invokes relevant skills
 - "Skill-creator" skill provides interactive guidance to build new skills
* Claude Developer Platform (API)
 - Added to Messages API requests
 - Uses /v1/skills endpoint for programmatic management
 - Requires Code Execution Tool beta
* Claude Code
 - Extends team expertise
 - Skills installed via plugins from anthropics/skills marketplace or manually
* Industry Context
 - LLM platforms are becoming full agentic platforms
 - OpenAI, Google (Gemini), and Anthropic are all moving toward standardized agent instructions
## Advanced Skills (Executable Code)
* Scripts vs. Generated Code
 - Scripts are more reliable, consistent, and save context tokens
 - Make execution intent clear (Execute the script vs. Read as reference)
* Code Best Practices
 - Solve, Don't Punt: Handle errors explicitly instead of failing
 - Avoid "voodoo constants" (justify configuration parameters)
 - Provide utility scripts (e.g., validate_form.py)
 - Use visual analysis (e.g., convert PDFs to images)
 - Create verifiable intermediate outputs (plan-validate-execute pattern)
 - Use Unix-style paths (forward slashes)
* Dependencies & Environment
 - API environment has no network access/runtime package installation
 - List required packages in instructions
 - Use fully qualified MCP tool names (ServerName:tool_name)
## Evaluation & Iteration
* Evaluation-Driven Development
 - Build evaluations (test scenarios) *before* writing extensive documentation
 - Create baseline performance measurements
* Iterative Development Cycle
 - Use Claude A (Expert) to design and refine skills
 - Use Claude B (Agent) to test skills in real tasks
 - Test with all target models (Haiku, Sonnet, Opus)
 - Observe agent behavior (unexpected paths, missed content) and refine based on findings