---
title: Prompt Engineering
tags: [prompt-engineering, llm-interaction, prompt-design, prompt-optimization, few-shot-learning, chain-of-thought, instruction-design]
description: Guide to effective prompt engineering techniques for maximizing large language model performance across various applications.
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Prompt Engineering

## Introduction
- Definition: Input to LLM to predict output
- Not limited to data scientists/ML engineers
- Effective prompting can be complicated
- Iterative process
- Inadequate prompts lead to ambiguous/inaccurate responses
- Focus on Gemini model within Vertex AI or API for configuration access
- Discusses techniques, tips, best practices, challenges

## Prompt engineering
- LLM as a prediction engine: predicts next token based on training data
- Setting up LLM to predict the right sequence of tokens
- Designing high-quality prompts for accurate outputs
- Involves tinkering, optimizing length, evaluating style and structure
- Used for various understanding and generation tasks
- Requires choosing a model and potential optimization per model

## LLM output configuration
- Controls LLM's output

### Output length
- Number of tokens to generate
- More tokens: higher computation, energy, time, cost
- Reducing length stops prediction, doesn't make output succinct
- Important for techniques like ReAct

### Sampling controls
- Determine how predicted token probabilities are processed

#### Temperature
- Controls randomness
- Lower: deterministic, good for expected responses
- Higher: diverse, unexpected results
- 0: greedy decoding, highest probability token
- Close to max: more random
- Very high: all tokens equally likely after top-K/P

#### Top-K and top-P
- Restrict next token to top predicted probabilities
- Control randomness and diversity
- Top-K: selects top K likely tokens
  - Higher K: more creative/varied
  - Lower K: more restrictive/factual
  - 1: greedy decoding
- Top-P (nucleus sampling): selects top tokens whose cumulative probability <= P
  - Range: 0 (greedy) to 1 (all)
- Experiment to choose best method

### Putting it all together
- Choice depends on application and desired outcome
- Settings impact each other
- Order of application: top-K/P then temperature (if all available)
- If no temperature: random selection from top-K/P
- Extreme settings can cancel out others
- General starting points provided for different creativity levels
- More freedom can lead to less relevant text

## Prompting techniques
- LLMs tuned to follow instructions, trained on large data
- Clearer prompt text leads to better prediction
- Specific techniques help get relevant results

### General prompting / zero shot
- Simplest type: task description and starting text
- "No examples"
- Example: movie review classification

### One-shot & few-shot
- Provide examples to help model understand
- Useful for guiding output structure/pattern
- One-shot: single example
- Few-shot: multiple examples showing a pattern
- Number of examples depends on task complexity, example quality, model capabilities
- General rule: 3-5 examples
- Examples should be relevant, diverse, high quality, well-written
- Include edge cases for robust output
- Example: parsing pizza orders to JSON

### System, contextual and role prompting
- Techniques to guide text generation, focusing on different aspects

#### System prompting
- Sets overall context and purpose
- Defines 'big picture'
- Can specify output format
- Useful for specific requirements, safety, toxicity control
- Example: movie review classification with uppercase label
- Example: movie review classification returning JSON

#### Role prompting
- Assigns specific character/identity to the model
- Helps generate responses consistent with the role
- Examples: book editor, teacher, motivational speaker, travel guide
- Defines tone, style, focused expertise
- Example: travel guide suggesting places in Amsterdam
- Example: travel guide in Manhattan with humorous style

#### Contextual prompting
- Provides specific details/background information relevant to the task
- Helps understand nuances and tailor response
- Leads to seamless and efficient interactions
- Example: suggesting blog articles for retro games

### Step-back prompting
- Improve performance by first considering a general related question
- Feeds the answer to a subsequent prompt for the specific task
- Activates relevant background knowledge and reasoning
- Encourages critical thinking and knowledge application
- Can mitigate biases
- Example: writing a video game storyline
- Step-back question example
- Final prompt with step-back answer as context

### Chain of Thought (CoT)
- Improves reasoning by generating intermediate steps
- Combine with few-shot for complex tasks
- Advantages: low-effort, effective, works with off-the-shelf LLMs, interpretability, improved robustness between LLM versions
- Disadvantages: more output tokens, higher cost, longer time
- Example: math problem without CoT shows flaws
- Example: math problem with CoT showing step-by-step reasoning
- Zero-shot CoT example
- Single-shot CoT example
- Useful for code generation, synthetic data creation, tasks solvable by 'talking through'

### Self-consistency
- Combines sampling and majority voting for diverse reasoning paths
- Selects the most consistent answer
- Improves accuracy and coherence
- Gives pseudo-probability of answer correctness but high cost
- Steps: generate diverse paths, extract answers, choose most common
- Example: email classification (IMPORTANT/NOT IMPORTANT) with multiple attempts

### Tree of Thoughts (ToT)
- Generalizes CoT by exploring multiple reasoning paths simultaneously
- Well-suited for complex tasks requiring exploration
- Maintains a tree of thoughts

### ReAct (reason & act)
- Combines natural language reasoning with external tools
- Allows LLM to perform actions (e.g., search, code interpreter)
- Mimics human reasoning and action
- Works via thought-action loop
- Example: finding number of children of Metallica band members using LangChain and VertexAI
- Requires resending previous prompts/responses and proper setup

### Automatic Prompt Engineering
- Automating the process of writing prompts
- Prompt model to generate more prompts
- Evaluate and potentially alter good prompts
- Repeat the process
- Example: generating ways to order a band t-shirt
- Steps: write generation prompt, evaluate candidates, select best

### Code prompting
- Gemini primarily focuses on text, including code prompts

#### Prompts for writing code
- Gemini can help write code in various languages
- Can speed up development
- Example: Bash script to rename files in a folder
- Important to read and test generated code

#### Prompts for explaining code
- Gemini can help understand existing code
- Example: explaining the Bash code for renaming files

#### Prompts for translating code
- LLMs can translate code between languages
- Example: translating the Bash file renaming script to Python
- Important to handle indenting properly for some languages like Python

#### Prompts for debugging and reviewing code
- LLMs can help identify and fix errors
- Example: debugging a broken Python script for renaming files
- Can also suggest improvements to the code

## What about multimodal prompting?
- Uses multiple input formats beyond text
- Includes combinations of text, images, audio, code, etc.

## Best Practices
- Tinkering is required to find the right prompt
- Language Studio in Vertex AI is good for testing

### Provide examples
- Most important best practice (one-shot/few-shot)
- Acts as a powerful teaching tool
- Improves accuracy, style, and tone

### Design with simplicity
- Prompts should be concise, clear, easy to understand
- Avoid complex language and unnecessary information
- Use action verbs
- Examples of before and after rewrite

### Be specific about the output
- Concise instructions might be insufficient
- Specific details improve accuracy
- Examples of good and bad prompt for blog post generation

### Use Instructions over Constraints
- Instructions: explicit guidance on format, style, content
- Constraints: limitations or boundaries
- Positive instructions often more effective than constraints
- Instructions directly communicate desired outcome
- Constraints can limit potential and clash
- Use constraints for safety, strict format/style
- Prioritize positive instructions
- Examples of good and bad prompt for blog post with specific details

### Control the max token length
- Set in configuration or explicitly request in prompt
- Example: explaining quantum physics in a tweet

### Use variables in prompts
- Reuse prompts and make them dynamic
- Store and reference information in multiple prompts
- Useful for application integration
- Example: travel guide fact about a city using variable

### Experiment with input formats and writing styles
- Different models, configurations, formats, word choices yield different results
- Experiment with style, word choice, prompt type
- Example of prompting for Sega Dreamcast using question, statement, instruction

### For few-shot prompting with classification tasks, mix up the classes
- Order of examples generally doesn't matter, but mix classes for classification
- Avoid overfitting to specific order
- Learn key features of each class for better generalization
- Start with 6 few-shot examples

### Adapt to model updates
- Stay informed about model changes and capabilities
- Test newer versions and adjust prompts
- Use tools like Vertex AI Studio to store, test, document

### Experiment with output formats
- For non-creative tasks, try structured formats like JSON/XML
- Benefits of JSON: no manual creation, sorted order, forces structure, limits hallucinations
- Example in few-shot prompting section

### Experiment together with other prompt engineers
- Variance in performance across different attempts

### CoT Best practices
- Put the answer after the reasoning
- Be able to extract the final answer separately
- Set temperature to 0

### Document the various prompt attempts
- Crucial for learning and revisiting
- Outputs can differ across models, settings, versions
- Small differences in formatting/word choice can occur
- Recommend using a Google Sheet template
- Track version, OK/NOT OK/SOMETIMES OK, feedback
- If using Vertex AI Studio, save prompts and track hyperlinks
- For RAG, capture specific aspects impacting content
- Save prompts in separate files in codebase
- Use automated tests and evaluation
- Iterative process: craft, test, analyze, document, refine, experiment
- Template for documenting prompts provided

## Summary
- Lists various prompting techniques discussed
- Briefly mentions challenges and best practices

## Endnotes
- Provides links to referenced materials