---
title: AI Development
tags: [ai-safety, ai-development, frontier-models, technical-progress, ai-capabilities, research-advancements, compute-scaling]
description: Analysis of artificial intelligence development trajectories, technical progress, and capabilities of frontier models through 2025.
---

# AI Development

## Stages

### Data Collection and Preprocessing
  - **Cleaning, labeling, and filtering** data
  - May involve thousands of contracted data workers
  - General-purpose AI systems are increasingly used to help fine-tune other models

### Model Training
  -  **Iterative process** alternating between fine-tuning and testing
  -   Fine-tuning can significantly enhance capabilities in specific domains
  -  Improving autonomy is a focus
  -  Using multiple models together for new tasks

### System Integration
  - Combining models with other components
  - User interfaces, content filters, and other tools
  - Aims to enhance capability, usefulness, and safety
  - Involves alternating integration and testing
  - 'Scaffolding' around models allows them to plan ahead, pursue goals, and interact with the world

### Deployment
  - Implementing systems into real-world applications, products, or services
  - Internal or external
  - External deployment through online user interfaces or integrations

### Model Release
   - Making trained models available for further use, study, modification, and integration
   - Spectrum from fully closed to fully open
      - Fully closed models for internal use only
      - Fully open models with all components and documentation freely available under an open-source license
   - **Open-weight models** have weights available for public download

### Monitoring
  - Inspecting system inputs and outputs
  - Track performance and detect problems
  - Gathering user feedback, tracking metrics, making iterative improvements
  - Developers continually update systems in response to newly discovered issues

## Techniques

### Fine-tuning
  - Adapting pre-trained models to specific tasks
  - Learning to approach problems in a more structured way
  - Can significantly enhance model capabilities

### Prompting
  - Crafting instructions to improve performance
  - Providing example problems and solutions
  - Providing useful documents for context
  - Instructing models to 'think step-by-step'

### Agent Scaffolding and Tool Use
  - Providing models with means to break down tasks
  - Planning with clear subgoals
  - Interacting with the environment using websites or code
  - Developing AI agents that can plan and act autonomously

## Key Considerations

### Compute Resources
  - Models require significant computing power, especially at point of use
  - Inference scaling (giving models more computing power) improves performance but increases costs
  - Researchers are working on lowering these costs

### Iterative Process
  - Development often involves iterative steps of training, testing, and refinement
  - Cat-and-mouse game where developers continually update in response to issues

### Policy Challenges
  - Risks and vulnerabilities emerge at many points in development
  - Advances in model development are rapid and difficult to predict
  - Difficult to pinpoint effective interventions and prioritize them
  -  Need for robust policy interventions that can adapt to rapid evolution