---
title: The State of AI - Giants, Challenges, & Superintelligence
description: An overview of the current landscape of AI, including strategies of major tech companies, competition, and future outlook based on Dylan Patel's insights.
tags: [AI, Superintelligence, Tech Giants, Challenges, Competition, Future]
markmap:
  colorFreezeLevel: 2
  maxWidth: 500
---
# The State of AI
## Meta's AI Efforts
### Model Development
* Llama 4: Good, but not world-changing; worse than new Chinese models on release
* Behemoth: Delayed, may not release due to training problems
* Maverick & Scout: One decent, one objectively bad due to rush job and sparsity issues
### Organizational Hurdles
* Lack of technical leadership to evaluate research ideas
* Difficulty in choosing best ideas from researchers
* "Taste" involved in deciding what is worth researching
### Hiring & Acquisition Strategy
* **Poaching Spree & $100M+ Offers**: Aimed at top researchers
* **Scale AI Acquisition**:
  * Company "cooked" (Google/OpenAI cutting ties)
  * Acquired for Alex Wang and key talent, not company itself or data
  * Goal: Lead superintelligence effort, gain power and control
* **Attempted Acquisitions**: SSI, Thinking Machines, Perplexity (rebuffed)
* **Daniel Gross & Nat Friedman**: Product people, not AI researchers, offer strategic power
* **Effectiveness**: Sam Altman's claim of no top researchers leaving is disputed; offers over $1B rumored for individuals

## OpenAI & Microsoft Relationship
### GPT 4.5 (Orion) Flop
* **Goal**: Aimed to be GPT-5, bet on full-scale pre-training
* **Problems**: Not useful, too slow, too expensive
* **Technical Issues**:
  * Overparameterization (memorized instead of generalized)
  * Training bug for months
  * Infrastructure challenges (stability)
* **Data Scarcity**: Didn't scale data fast enough (relative to Chinchilla paper)
* **Reasoning Breakthrough (Strawberry)**:
  * Happened during 4.5 training
  * Generates verifiable, high-quality data at lower cost
  * Addresses the "data wall" problem
### Microsoft Partnership Dynamics
* **"Choppy Waters"**: Past honeymoon phase
* **Deal Structure**: Complex, non-profit/for-profit hybrid
  * Revenue share (20%), profit share (49-51% up to 10x cap)
  * IP rights until AGI (ambiguous definition)
* **Compute Exclusivity**:
  * Initially exclusive to Microsoft Azure
  * Microsoft backed off due to antitrust concerns and OpenAI's need for faster compute
  * OpenAI now uses Oracle, CoreWeave, and others
* **Microsoft's Leverage**: Access to OpenAI's monorepo/IP, scares investors
* **Capital Intensity**: OpenAI needs continuous funding, not profitable for 5+ years despite soaring valuations

## Apple's AI Challenges
### Strategy & Culture
* **Behind in AI**: Not much public information or models
* **Conservative Acquisitions**: Typically small companies, avoids large deals
* **Talent Attraction**:
  * Secretive company culture (despite policy changes for publishing)
  * Difficulty attracting top AI researchers
* **Nvidia Aversion**:
  * Historically dislikes Nvidia due to patent threats and "Bumpgate" (faulty GPUs around 2015)
  * Avoids Nvidia hardware
### Compute & On-Device AI
* **Limited Internal Compute**: Relies on Mac chips in data centers for inference
* **Cloud Shift**: Building massive data centers, investing in accelerators (hired Google's Andy)
* **On-device AI**:
  * Dylan Patel is a "bear" on it
  * **Pros (cited)**: Security, latency
  * **Cons**:
    * Human psychology prioritizes "free" over "secure"
    * Hardware limitations (memory bandwidth) and increased device cost
    * Cloud models are free and better
    * Latency benefit is limited for complex or agentic workloads (which often interact with cloud data)
    * Large, powerful models (GPT-4.5) cannot run on-device
  * **Future**: Low-value AI (typing ahead) on device; core reasoning in cloud (e.g., for wearables)

## Chip Competition: Nvidia vs. AMD
### AMD's Position
* **Hardware**: Behind Nvidia Blackwell in some ways, better in others
* **Software**: Significantly behind (CUDA ecosystem is mature); developer experience not great
* **Networking**: Limited tightly connected chips (8 vs. Nvidia's 72 via NVLink)
* **User Experience**: Less streamlined for developers
### Nvidia's Strategies
* **Prioritizing "NeoClouds"**: Reallocating GPUs to smaller cloud companies (CoreWeave, Oracle, etc.)
  * Aim: Drive down GPU rental prices (reduce Amazon's high margins)
* **Lepton Acquisition**:
  * Acquired cloud software company
  * Offers "DGX Lepton": Rents spare GPU resources from others
  * Leads to anger from cloud companies due to direct competition
### AMD's Counter-Strategies
* **Leveraging Nvidia's Missteps**: Some cloud companies turn to AMD
* **"Accounting Trickery"**: Selling GPUs to clouds and then renting them back
  * Aims: Foster relations, get clouds comfortable, encourage future purchases
* **Market Outlook**: AMD will gain some share, sell billions, but Nvidia generally remains superior (price dependent)

## XAI (Grok) & Superintelligence Race
### Grok Development
* **Elon Musk**: Fantastic engineer/manager and marketer
* **Grok 3**: Pleasantly surprising, better than expected
* **Use Cases**: Fast deep research, "divisive but true facts" (human geography, history), current events (leveraging X data)
* **Compute**: Large, concentrated (200,000 GPUs), acquiring power plants
* **"Rewrite Corpus of Human Knowledge"**: Elon's stated goal; X data is massive but low quality
* **Fundamental Approach**: Generally similar to others (pre-training large transformers, RL)
### Superintelligence Outlook
* **Narrative Shift**: From AGI to "Superintelligence" (influenced by Ilia Sutskever's SSI)
* **Job Automation**:
  * "50% of white-collar jobs could disappear"
  * Offset by aging populations, historical trend of less work, AI enabling more leisure
  * Challenge: Distribution of resources
  * **Junior Software Engineering**: Market "nuked" due to AI's productivity
  * **Future Human Role**: Managing AI, reviewing AI output; eventual "no humans in the loop" (long-term)
  * **Timeline**: Pessimistic, end of decade/beginning of next for 20% job automation
* **Open Source vs. Closed Source**:
  * Closed source predicted to win (China will stop open sourcing when ahead)
  * Hope for more distributed AI, not just a few dominant closed-source entities
* **Who Reaches Superintelligence First**:
  1.  **OpenAI**: First to every major breakthrough (reasoning, pre-training scaling)
  2.  **Anthropic**: Good people, becoming less conservative
  3.  **Toss-up**: Google, XAI, Meta (Meta becoming competitive with new talent)