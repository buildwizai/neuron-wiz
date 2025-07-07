---
title: Groq and the Future of AI Compute - Jonathan Ross Interview
description: Insights from Jonathan Ross, CEO of Groq, on the company's founding, its unique silicon architecture, the future of AI compute, and the impact of inference speed.
tags: [Groq, AI, Compute, Inference, Jonathan Ross, Silicon, Startup]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Groq and the Future of AI Compute
## Founding Story of Groq
### Jonathan Ross's Background
* Invented Google TPU at Google
* Worked in Google X (rapid experimental team)
### Decision to Leave Google
* Felt constrained in a large company
* Inside Google: Needed "and" across many approvals
* Outside Google: "Or" across thousands of VCs, allowing more ambition and boldness
### Groq's Genesis
* Did not initially plan to do a chip
* VCS were interested in AI chips after the TPU paper was published
* Funded based on the idea to make AI software much easier to use
* **Spent the first six months working on the compiler** before designing the chip
## Groq's Unique Technology
### Inference Speed
* Known for **insane inference speed** (5-7+ 100 tokens per second)
### Memory Architecture
* Has **low memory per chip**
* Requires multiple chips; currently runs on 792 chips
### Design Philosophy
* **Not about the number of chips, but efficiency**
* Designed for more chips rather than fewer
* Avoids memory bottlenecks, unlike GPUs
* Analogy: Car factory assembly line
    * GPUs are like segmented assembly lines, repeatedly setting up and tearing down, leading to slow token production
    * Groq has a large system where everything "shoots through" rapidly
### Cost-Effectiveness
* Inexpensive despite massive initial investment because chips are used for short periods but with better utilization
## Business Model & Deployment
### Starting with Groq Cloud
* **Recommended first step for everyone**: console.groq.com
* Easy to use API, compatible with OpenAI
* Has 70,000 developers and 17,000-18,000 API Keys generated within weeks of launch
### Hardware Acquisition (On-Prem)
* Discussed for companies needing **enormous scale** (e.g., millions of tokens per second)
* Groq handles hardware deployment and maintenance
* Analogy: Users don't need to buy the assembly line; they use the API to get their "car" super fast
### Hardware Utilization
* Groq aims for **high utilization** (like Lyft/Uber of generative AI)
* GPUs are often only 25% utilized, wasting 75% of time and power
* Groq hardware is less expensive and uses about 1/10th the power
### Future Offerings
* Will allow users to upload their own models, with Groq handling the running
* Not renting individual chips
## Future of AI & Compute
### Compute as the New Oil
* **Compute is going to be the limiter**
* Sam Altman's view: Compute is the currency of the future
### Generative AI vs. Information Age
* Generative AI is **not an Information Age Technology** (not copying data)
* **Creates something new in the moment**, requiring compute
### Training vs. Inference Economics
* Money is spent on training models
* **Money is made during inference** (10-20x deployment cost)
### Biggest Bottleneck
* **Compute**
## Advice for AI Startups
### Focus Areas
* **Silicon Layer**: Difficult to succeed now; over 100 funded startups often build features, not full products; established software ecosystem is too hard to compete with
* **Infrastructure Layer**: Focus on "drudgery" (like AWS); offers less competition and opportunities for lasting businesses, though still challenging
* **Model Layer**: Higher expected value but **much higher variance and risk**; harder to predict success as models are quickly becoming commoditized
### General Advice
* Do the thing you know and are passionate about
## Use Cases Unlocked by Groq's Speed
### Initial Skepticism
* Internally, many questioned the need for 100 tokens/second, thinking it was "faster than I can read"
### Importance of Speed
* Analogy: Dial-up vs. Broadband – humans desire immediate feedback
* Users ask follow-on questions before fully reading initial output
* Google found even imperceptible improvements in latency increase conversion rates significantly (e.g., 100ms = 8% desktop, 30% mobile conversion increase)
### Real-World Impact
* Groq's chat site grew from 8,000 to 400,000 new users in one week using standard open-source models
* Developer console gained 70,000 developers and 17,000-18,000 API Keys in about 30 days
### Specific Applications
* **Interactive speech**
* **Coding** (immediate feedback)
* **Infinite Wikipedia**: Generates articles and linked pages instantly
* New applications built on Groq are frequently posted
## Model Optimization for Groq Hardware
### The "Hardware Lottery"
* Models are typically optimized for Nvidia GPUs, making it hard for other hardware to pull ahead
### Groq's Performance Advantage
* Has achieved a **5-10x performance advantage** over Nvidia GPUs
### Optimization Techniques
* **Automated compiler**: Minimal manual work required
* **Architectures that take advantage of low latency** (e.g., RNNs and LSTMs, which were previously dismissed)
* Utilizing quantized numerics (FP16 multiplies)
* Leveraging specific hardware dimensions like faster interconnect
### Model Curation on Groq Cloud
* Focuses on making the **"best of the best" models available**
* Not a broad model repository like Hugging Face
## Future Outlook & AI Concerns
### Hope for AI
* Will bring **subtlety and nuance to human discourse**
* Provoke curiosity and open up understanding, countering oversimplification from traditional and social media
* Children growing up in the "generative age" may develop more curiosity and desire for nuanced views
### Fears about AI
* **Loss of human agency** and decision-making over time
* Analogy: Galileo's telescope revealed a vast universe, initially frightening but then beautiful; Large Language Models are "telescopes for the mind" showing the vastness of intelligence
### Groq's Mission to Preserve Human Agency
* Goal is to **ensure humans continue to make decisions**
* Models should **help people map out and understand** options to make their *own* decisions, rather than making decisions *for* them
* This will be a constant challenge requiring continuous learning