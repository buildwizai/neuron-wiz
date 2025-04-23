---
title: LLMs for Domain-Specific Applications
tags: [domain-specific-llms, fine-tuning, adaptation, specialized-models, industry-applications, vertical-ai, model-customization]
description: Strategies for adapting large language models to specialized domains through fine-tuning and customization techniques.
---

# Solving Domain-Specific Problems Using LLMs

## Introduction
- LLMs are powerful tools for addressing complex challenges in various domains.
- Recent advancements highlight the potential of fine-tuning LLMs for specialized fields.
- This whitepaper focuses on cybersecurity and medicine.
- It showcases how LLMs enhance workflows and unlock new possibilities.
- Explores challenges and opportunities in specialized data, technical language, and sensitive use cases.
- Provides insights into how LLMs like SecLM and Med-PaLM can revolutionize expertise areas.

## SecLM and the Future of Cybersecurity

### Challenges in Cybersecurity
- New and evolving threats: Constantly changing, sophisticated attacks make it hard for defenders to keep up.
- Operational toil: Repetitive tasks overload analysts, hindering strategic defenses.
- Talent shortage: Limited skilled professionals and training opportunities.
- Modern cybersecurity demands addressing these challenges.

### How GenAI Can Help
- Envisioned world: AI expertise paired with novices and experts.
- Goals: Reduce repetition, accomplish complex tasks, and share knowledge.
- GenAI improves working lives and solves real-world security problems.

#### Examples of GenAI Applications
- Security Analyst: Translate natural language to query languages, investigate alerts, plan remediation.
- Threat Researcher/System Administrator: Reverse engineer, classify malicious artifacts.
- CISO Team: Generate readable threat summaries.
- IT Administrator/Security Team: Identify attack paths and remediations.
- Application Developers: Generate code, identify fuzz-testing locations.
- Align access policies to least privilege.

#### Multi-Layered Approach
- Top: Existing security tools with context and actuation.
- Middle: Security-specialized model API with advanced reasoning and planning.
- Bottom: Datastores of authoritative security intelligence and operational expertise.

### SecLM: An API for Cybersecurity Tasks
- Vision: A "one-stop shop" for security questions, regardless of complexity.
- Features:
    - Freshness: Access to the latest threat and vulnerability data.
    - User-specific data: Operates securely within the user's environment.
    - Security expertise: Breaks down high-level concepts.
    - Multi-step reasoning: Combines data sources and techniques.

### Security-Focused Large Language Models
- General-purpose models underperform on security tasks due to:
    - Lack of publicly available security data.
    - Limited depth of technical content.
    - Sensitive use cases like malware/phishing.
- Specialized LLMs trained on cybersecurity-specific content address these gaps.

### A Flexible Planning and Reasoning Framework
- Example: Answering a question about APT41 activity.
    - Multi-step planning: Retrieve, synthesize, and query data.
    - SecLM API automates tedious steps, saving analysts time.
- Holistic approach combines LLMs, authoritative data, and flexible planning.

## MedLM and the Future of Health Tech

### The Potential for GenAI in Medical Q&A
- Medical QA is challenging due to vast, evolving knowledge and nuanced reasoning.
- LLMs like Med-PaLM show promise in understanding and applying complex medical concepts.

### Opportunities in Healthcare
- Examples:
    - Triaging patient messages.
    - Enhancing patient intake with adaptive questions.
    - Monitoring patient-clinician conversations for actionable feedback.
    - On-demand consults for clinicians in unfamiliar scenarios.

### Scientific Starting Point
- Medicine revolves around human-centric care.
- Goal: Flexible AI systems that interact with people and assist in various scenarios.
    * Develops specialized language and core technology understanding
* Supervised fine-tuning: Proprietary data compartmentalized within expert-like tasks (malicious script analysis, event explanation, query generation)
* Evaluating model performance is challenging due to diverse tasks and trade-offs
* Evaluation methods
    * Classification metrics for classification tasks (malware classification, simple QA)
    * Similarity-based metrics (ROUGE, BLEU, BERTScore) for less quantifiable tasks
    * Automated side-by-side preference evaluations using larger LLMs
    * Expert human evaluators using Likert scale and side-by-side preference
* Metrics guide fine-tuning and future training changes
* Fine-tuned model capable of many core expert tasks
* May still require in-context learning, RAG, and PET for generalization and user-specific needs
    * In-context examples for new security platforms
    * PET adapters for specialized knowledge and aligning with human experts
    * RAG for freshest threat information
### A flexible planning and reasoning framework
* Building the framework for complex tasks requires solving system engineering and ML challenges
* SecLM's specialized models tied to a broader ecosystem for leveraging data and expertise
* Example: Answering a broad question about APT activity (APT41)
* Requires multi-step planning: retrieve info, extract/synthesize, query user's SIEM
* Plan can be static (expert-generated) or dynamic (LLMs using chain-of-thought)
* SecLM API planner retrieves recent APT41 information from threat intelligence
* Raw response processed to extract TTPs and indicators of compromise
* Specialized SecLM (PET for SIEM query language) translates TTPs to SIEM clauses
* API retrieves matching security events from SIEM
* SecLM aggregates information into a final response for the analyst
* SecLM API saves analyst substantial time by automating tedious steps across security services
* Analyst can focus on results and follow-up investigations, also assisted by SecLM
* Numerous use cases where tool use, RAG, specialized models, and long-term memory can solve problems and answer questions
* Example: Automatically decoding and analyzing a PowerShell script for malicious activity
* Side-by-side analysis with security experts showed clear preference for SecLM over standalone LLMs on security tasks
* Underscores importance of a full-featured platform in cybersecurity
* Holistic approach combines LLMs and authoritative data with a flexible planning framework
* SecLM and its infrastructure aim to be a one-stop security platform for various users
* Advances, combined with human expertise, can transform security practice with superior results and less toil
## MedLM and the future of health tech
* Recent AI advances in NLP and foundation models enabled rapid medical research
* Section dives into medical field challenges and how MedLM solutions (fine-tuned for healthcare) can help
* Illustrates with Med-PaLM, a specific GenAI model addressing needs
### The potential for GenAI in medical Q&A
* Medical QA has been a grand AI challenge due to vast, evolving knowledge and need for nuanced reasoning
* LLMs trained on massive text datasets show promising results on medical QA benchmarks
* LLMs can understand and apply complex medical concepts
* Increasing medical data and medical NLP field create new innovation opportunities
* Systems can answer questions from various sources (textbooks, papers, records)
* Combination of technical capabilities and data enables models like Med-PaLM (aligned and fine-tuned PaLM)
* Med-PaLM development is a journey to improve health outcomes
### The opportunities
* Gen AI potential to fundamentally transform medical field (diagnostic and non-diagnostic)
* Examples
    * Empowering users to ask questions in context of medical history
    * Triaging patient messages to clinicians based on urgency and context
    * Enhancing patient intake with adaptive questions and cohesive summaries
    * Monitoring patient-clinician conversations for actionable feedback
    * Enabling clinicians to tackle unfamiliar scenarios with on-demand consults
* List is a small selection of vast possibilities
* Medicine has strong culture and need for responsible innovation
* Medical applications regulated due to patient safety
* Validation of safety and efficacy is important before clinical implementation
* Scientific experimentation requires phased approach: retrospective before prospective studies
### The scientific starting point
* Many current medical AI systems lack user interaction, produce inflexible structured outputs
* Need for models created for every application slows innovation
* Medicine revolves around human-centric care
* Ambitious goal: Flexible AI system interacting with people and assisting in various scenarios with context
* Creating such a system requires incorporating diverse experiences, perspectives, and expertise
* Data and algorithms should go hand-in-hand with language, interaction, empathy, and compassion
* Objective: Enhance effectiveness, helpfulness, and safety of AI models in medicine via natural language and interactivity
* First step: Reimagining conversational AI in medicine with Med-PaLM (Google's LLM for high-quality medical answers)
* QA task was a great starting point, combining reasoning and understanding evaluation
* Recent progress in foundation models (LLMs) presents opportunity to rethink medical AI development broadly
* Expressive and interactive models have significant potential to make medical AI more performant, safe, accessible, and equitable
* Description of Med-PaLM improvements over time
    * First version (late 2022/July 2023): First AI to exceed passing mark on USMLE-style questions
    * Med-PaLM 2 (March 2023): Rapid advancements on USMLE and long-form answers; 86.5% accuracy on USMLE; improved long-form answers
* Advances reflect belief in rapid, responsible, and rigorous innovation
### How to evaluate: quantitative and qualitative
* Developing accurate and authoritative medical QA AI has been a long challenge
* Task spans logical reasoning and knowledge retrieval; USMLE-style questions are a prominent benchmark
* Figure 4 shows a USMLE-style question example
* Answering requires comprehending symptoms, interpreting results, intricate reasoning, and selecting correct choice
* Medical comprehension, knowledge retrieval, and reasoning are vital for success
* Clinicians need years of training to consistently answer accurately
* Passing USMLE doesn't indicate clinical proficiency
* USMLE is a specific assessment of knowledge and reasoning based on scenarios
* Serves as a useful benchmark due to documented answers and programmatic evaluation
* Historical popularity as a research benchmark demonstrates technology advancements
* Figure 5 shows Med-PaLM 2 reaching expert-level performance on MedQA
* Med-PaLM was first to exceed passing (67%), Med-PaLM 2 reached 86.5% (expert)
* Evaluation scope extends beyond accuracy to qualitative assessment for real-world clinical applications
* Qualitative assessment of factuality, expert knowledge use, helpfulness, health equity, potential harm
* Rubric for evaluation by expert clinicians
    * Relation to scientific/clinical consensus
    * Extent and likelihood of possible harm
    * Evidence of correct/incorrect reading comprehension, knowledge recall, reasoning steps
    * Presence of inappropriate/omitted content
    * Applicability/accuracy across medical demographics
    * How well answer addresses question intent
    * Helpfulness to user, enabling conclusion or next steps
* Figure 6 shows example of clinician review of Med-PaLM 2
* Human evaluation procedure for Med-PaLM
    * Each question to Med-PaLM and a physician
    * Independent answers provided
    * Answers presented blindly to separate raters
    * Direct side-by-side comparisons conducted
* Evaluation focuses on substance over style/delivery
* Clinician's concise response may meet criteria; verbose answer may also be appropriate
* Human evaluation results (May 2023) show model answers compare well to physicians on critical axes
* Rigorous evaluations require expert labor (physicians), making it costlier than multiple-choice
* Other studies adopted and expanded the framework for comparative purposes and AI safety
* Expert evaluation is vital in discerning style, content, and correctness
* More work needed, including improvements where physician performance remained superior
* Detailed results are cornerstone for future scientific modeling and evaluation
* Help determine feasibility of next steps
* Despite potential for perfect benchmark performance, technology can still provide practical real-world value
### Evaluation in real clinical environments
* Integration of technology in clinical environment is established (Google's experience with diabetic retinopathy screening)
* High performance on retrospective data doesn't guarantee clinical performance
* Careful validation in real-world environments is imperative for robustness and reliability
* Technologies in patient journey should adhere to scientific steps
    * Retrospective evaluation: Against real-world data from past cases
    * Prospective observational (non-interventional): On newly collected data, outputs don't impact care
    * Prospective interventional: Deployment in live clinical environment with consented patients, influencing care
* Steps crucial for assessing model on unseen data and end-to-end system effectiveness in real workflows
* Optimal use of GenAI models may diverge from initial assumptions
* Introducing new tools may require unexpected workflow adjustments
* End-to-end assessment essential for understanding technology's role and benefit, tailoring AI solutions
### Task- vs. domain-specific models
* Med-PaLM highlighted significance of specialized model for medical domain
* Med-PaLM 2 (fine-tuned PaLM 2) achieves ninefold enhancement in precise reasoning
* Excelling in one medical domain task doesn't guarantee success in another
* Example: General medical QA vs. mental health assessment
* Each specific task requires validation and possible adaptation
* Medical domain extends beyond textual information (images, EHR, sensors, genomics, etc.)
* Multimodal versions of MedLM and related approaches are in early research, following same validation principles
* Multimodal use cases will be observed in evaluation and deployment
* Medically specialized model can be applied to clinical and non-clinical use cases leveraging medical knowledge
* Example: Med-PaLM for identifying genes associated with biomedical traits
* Exploring breadth of possibilities with vertical-specific models; expecting new applications
* Exploring safe and responsible ways to bring models to healthcare industry
* MedLM (suite of models fine-tuned for healthcare, built on Med-PaLM 2) is commercially available for organizations to build GenAI use cases
### Training strategies for Med-PaLM 2
* Med-PaLM 2 is advancement of PaLM 2 with performance improvements
* Tailored for medical applications via instruction fine-tuning using MultiMedQA datasets
* Dataset mixture ratios empirically determined
* To enhance specialized variant for multiple-choice questions, prompting strategies used
    * Few-shot prompting
    * Chain-of-thought (CoT) prompting: Step-by-step explanations in prompts
    * Self-consistency: Sampling multiple explanations and answers, majority vote for final answer
* Strategies improve reasoning and accuracy for complex queries
* Ensemble refinement (ER) is another methodological improvement
* Conditions LLM on its own generations before final answer
* First stage: Multiple stochastic generations via temperature sampling
* Second stage: Model conditioned on original prompt and first-stage content for refined explanation and answer
* Facilitated effective aggregation of answers beyond limited sets, enhancing overall performance
* Figure 7 depicts ensemble refinement mechanism
* Goal behind Med-PaLM research: Improve health outcomes via AI technologies
* Achieving expert-level medical QA was the first step, with more to follow in collaboration with clinicians
* Health research at Google showed technology isn't the sole challenge in productive AI healthcare application
* Thoughtful evaluation and clinically meaningful applications with clinicians are pivotal
* This insight likely applies to other vertical domains
* As AI matures, careful multi-step evaluations (retrospective and prospective) are beneficial
* Clinical partner guidance improves chances of building the right solution for better health outcomes
* Many promising applications lie in healthcare worker and technology collaboration
* Important to use GenAI systems respectfully of patient autonomy and privacy
* For the foreseeable future, domain-specific models will likely yield better results
* Tracking performance convergence between general and specific models
* Med-PaLM research progress tracked at webpage
* Aim to make progress broadly in using AI and GenAI for the betterment of patients, clinicians, and researchers
## Summary
* Whitepaper explores LLM potential in specific domains, focusing on healthcare and cybersecurity
* Cybersecurity: SecLM acts as a force multiplier by intelligently processing data, empowering effective threat analysis and response
* Vision for SecLM: Comprehensive platform for diverse security practitioners
* LLM and human expertise combination can revolutionize cybersecurity with superior results and less effort
* Healthcare: MedLM (family of fine-tuned models) can unlock knowledge and make medicine more effective
* Built on Med-PaLM, which demonstrated expert-level performance in medical QA
* This is the first step towards improving health outcomes via GenAI
* Key takeaway: Technology alone is insufficient; collaboration and careful multi-step evaluations are crucial
* Vertical-specific models like MedLM foundation models expected to yield better results
* Whitepaper showcases LLM possibilities in solving domain-specific problems
* Leveraging advanced models, human expertise, and careful implementation can tackle complex challenges and achieve breakthroughs*