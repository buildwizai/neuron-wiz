---
title: Prompt Engineering for AI
description: A comprehensive guide to crafting effective AI prompts and avoiding common pitfalls.
tags: [AI, Prompt Engineering, Prompts, Frameworks]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Prompt Engineering for AI
## What is a Prompt?
* Instruction or question provided to an AI system
* Serves as the foundation for the AI's response
* The quality of the prompt directly influences the quality and relevance of the AI's output
* **Directive:** The main instruction, a concise command or question telling the AI what task to perform, often using action verbs
* Implicit directives: Guides the AI through context or formatting rather than explicit statements
## Why Prompt Engineering is Crucial
* Unlocks significant productivity and enhances AI functionality
* Ensures the AI produces accurate and relevant outputs, aligning with user vision
* Reduces instances of AI generating false information ("hallucinations")
* Improves the coherence of conversations and fosters engagement with AI systems
* Essential skill for modern professionals to harness AI's power effectively
## Key Elements of Effective Prompts
* **Role (Persona):**
  * Defines the persona or character the AI should assume (e.g., expert, professional, specific character)
  * Guides the tone, style, and content of the response to be appropriate for the designated role
  * Examples: Professional communication specialist, senior software engineer, doctor, innovation consultant
* **Context:**
  * Provides relevant background, situation, or environment for the AI to understand the request
  * Crucial for AI to generate accurate and tailored output
  * Focus on including only directly relevant information
* **Task (Request / Action):**
  * Specifies the exact task or operation the AI needs to perform
  * Should be clear and directive, often using precise verbs
  * Guides the AI's focus and objective
* **Instructions (Steps):**
  * Directs the AI to follow a series of steps or a structured process
  * Especially useful for complex tasks, encouraging systematic execution
* **Constraints (Frame / Narrowing):**
  * Sets limitations or boundaries on the AI's output
  * Helps prevent extraneous information or undesired conversational elements
  * Examples: Word limits, exclusion of certain content, specific details to include
* **Output Format (Result / Template):**
  * Defines the desired structure, style, or length of the AI's response
  * Ensures the output is presented in a usable and consistent manner
  * Examples: Rewritten email, bullet points, table, JSON, CSV, script
* **Examples (Few-Shot Learning):**
  * Provides concrete references or samples that illustrate the expected output, style, or format
  * Guides the AI's behavior and improves its understanding of the desired result
  * More examples generally lead to more accurate and consistent results
* **Reasoning (Chain of Thought):**
  * Instructs the AI to go through a problem step-by-step, enabling complex reasoning
  * Reduces errors, particularly in tasks involving math, logic, or analysis
  * Can be activated by simple phrases like "Let's think step-by-step"
* **Additional Information:**
  * Provides relevant facts, data, or background details that the AI might not otherwise have
  * Crucial for generating accurate and contextually appropriate responses for complex tasks
## Prompting Frameworks & Structures
* **RTF (Role, Task, Format):** A versatile "jack-of-all-trades" framework suitable for most use cases, explicitly setting the AI's persona, the task at hand, and the output structure.
* **RISEN (Role, Instructions, Steps, End Goal, Narrowing):** Provides a structured approach to dissect complex or constrained tasks into actionable components for better execution and focus.
* **RODES (Role, Objective, Details, Examples, Sense Check):** Particularly effective when good examples of the desired output are available to guide the AI's response.
* **CARE (Context, Action, Result, Example):** A comprehensive framework for crafting detailed, contextual prompts that lead to practical and actionable outputs.
* **CRAFT (Context, Request, Actions, Frame, Template):** A systematic approach for writing prompts, with optional "Example" and "Develop" steps to form CRAFTED for further refinement.
* **TAG (Task, Action, Goal):** Focuses on breaking down prompts into what needs doing, how to approach it, and the ultimate end goal, ideal for problem-solving or planning.
* **BAB (Before, After, Bridge):** A storytelling and persuasive writing formula that describes a current problem (Before), a desired future state (After), and the solution or steps to bridge the gap (Bridge).
* **RISE (Role, Input, Steps, Expectation):** Guides the AI through a structured process by assigning a role, providing specific input/data, requesting a step-by-step solution, and stating the expected outcome.
## Prompting Techniques
* **Zero-Shot Prompting:**
  * The AI performs a task without any specific examples or demonstrations
  * Relies entirely on its pre-trained knowledge to infer the task
  * Offers high flexibility for broad applicability but can yield inconsistent results for specialized tasks
  * Use cases: Content categorization, language translation, sentiment analysis, question answering, generative art descriptions
* **Few-Shot Prompting:**
  * The AI is provided with a small number of specific examples (typically fewer than ten) related to the task
  * These examples act as a mini-lesson, helping the AI adapt its approach and tune its responses
  * Generally results in more consistent performance and enhances task specificity and adaptability
  * Use cases: Text summarization, customer support automation, medical diagnosis interpretation, programming code generation, educational content creation
* **Chain of Thought (CoT):**
  * A technique where the AI is instructed to perform complex reasoning by showing intermediate steps, often by simply adding "Let's think step by step"
  * Significantly improves accuracy in complex tasks like math, logic, and analysis
* **Self-Consistency:** Enhances accuracy by generating multiple responses and selecting the most frequent or consistent answer.
* **Retrieval-Augmented Generation (RAG):** Incorporates information retrieved from an external database into the prompt to provide facts and improve context accuracy, often more affordable than fine-tuning.
* **Program-Aided Language Models (PAL):** Leverages the AI's ability to generate code by instructing it to write code to solve calculation tasks, compensating for LLMs' weakness in direct arithmetic.
* **Iterative Refinement:** An experimental approach where you start with a simple prompt and gradually refine it based on the initial output, adjusting its length, wording, or structure.
* **Automated Feedback Loops (Meta-prompting):** Involves asking the AI to self-critique its own output for clarity or other criteria, which can significantly improve output quality.
## Common Prompt Writing Mistakes to Avoid
* **The Vagueness Trap:** Providing unclear or superficial prompts, leading to generic or inaccurate AI responses, as AI cannot read minds
  * **Fix:** Craft clear, specific prompts with critical details to guide the AI effectively
* **Information Overload:** Overwhelming the AI with excessive or multiple unrelated topics in a single prompt, leading to confusion and incoherent responses
  * **Fix:** Break down complex requests into a series of focused, manageable prompts
* **The Creativity Crutch:** Expecting the AI to replace human creativity entirely, resulting in bland or formulaic creative content
  * **Fix:** Leverage AI as a brainstorming partner or starting point, then infuse your unique human touch and perspective
* **The Privacy Pitfall:** Inputting sensitive or private information into public AI platforms, risking it being reviewed or unintentionally resurfacing in other users' responses
  * **Fix:** Assume zero privacy on public platforms; use anonymized data or hypothetical examples when dealing with sensitive topics