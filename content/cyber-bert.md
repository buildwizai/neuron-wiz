---
title: CySecBERT: Domain-Adapted Language Model for Cybersecurity
tags: [cybersecurity, NLP, BERT, language-model, machine-learning, CTI]
description: Overview and evaluation of CySecBERT, a BERT-based language model adapted for cybersecurity tasks.
markmap:
    colorFreezeLevel: 2
    maxWidth: 300
---

# CySecBERT: Domain-Adapted Language Model for Cybersecurity

## Introduction
- Cybersecurity is evolving rapidly
    - Attacks are more advanced, targets are bigger, systems are more complex
    - Manual management of information is difficult
    - Automated support is needed
- Cyber Threat Intelligence (CTI)
    - Information published in structured (IoC) or natural language (blogs, news)
    - Manual extraction is labor intensive
    - NLP can automate extraction
- Language Models (LMs) in NLP
    - Neural network-based LMs like BERT are standard for NLP tasks
    - Pre-trained models are fine-tuned for specific tasks
    - General LMs may miss domain-specific knowledge and terms
    - Domain adaptation improves results
- Problems with general domain models
    - Unfamiliar with domain-specific words (e.g., new vulnerabilities)
    - Ambiguous meanings (e.g., "virus")
    - Challenges for automated CTI
- CySecBERT Proposal
    - BERT-based word embedding model for cybersecurity texts
    - Aims for state-of-the-art NLP in security
    - Suitable for practical use and research
    - Evaluated on intrinsic and extrinsic tasks
    - Trained on a curated cybersecurity corpus
    - Reduces manual work
- Contributions
    - Pre-trained, general-purpose cybersecurity LM (CySecBERT)
    - Carefully chosen cybersecurity dataset
    - Evaluation on domain-specific tasks (intrinsic, extrinsic, benchmark)
    - Measures catastrophic forgetting
    - Comparison to related models (BERT, CyBERT)

## Related Work
- BERT Models in Different Domains
    - Domain-adaptive pre-training (DAPT)
    - Training on domain-specific data differs from task-specific fine-tuning
    - Used in various domains (BioBERT, SciBERT, DA-RoBERTa)
- BERT Models for Cybersecurity
    - CyBERT: further pre-training of BERT
    - Other models are fine-tuned, less suitable for multiple tasks
    - MalBERT: malicious software detection
    - CatBERT: phishing email detection
    - BERT-based filters for CTI classification
    - Similar approaches, differing in target domain/task
    - BERT's potential in cybersecurity is not fully exploited

## Research Gap
- Need for strong performance on cybersecurity texts across tasks
- BERT adapted to other domains (BioBERT, SciBERT) and specific CS domains (MalBERT, CatBERT)
- Lack of a general cybersecurity LM
- Solid information extraction methods can improve research
- Enables extensibility (e.g., CRF, BiLSTM)
- CySecBERT stands out by:
    - Evaluation steps (intrinsic, extrinsic, catastrophic forgetting)
    - Applied data (corpus)
    - Overall scope

## Methodology
- Domain Adaptive Pre-Training (DAPT)
    - Improves domain-specific LM performance
    - Reduces training time for downstream tasks
    - Adapts bert-base-uncased
    - Pipeline uses Huggingface, Weights and Biases
    - Trained on Lichtenberg Cluster
    - Mitigates catastrophic forgetting (reduced learning rate, steps, dataset size)
    - Evaluates on non-cybersecurity tasks to check forgetting

## Text Corpus
- Data quality is crucial
- Composed of sub-corpora:
    - Blog data: 38 blogs, >151k posts, practical info (vulnerabilities, exploits, threats)
    - arXiv: Cryptography and Security, >16k papers, educational language
    - NVD: Vulnerability descriptions, 58 entries, expert curated, concise
    - Twitter: ~4M tweets, >179M tokens, crawled with cybersecurity keywords
- Datasets vary in structure

## Setup
- DAPT parameters:
    - Learning rate: 2 × 10^-5 (BERT: 1 × 10^-4)
    - Epochs: 30 (BERT: ~40)
    - Dataset size: 10% of original BERT dataset
    - Batch size: 64
    - GPUs: 4 Nvidia Tesla V100
    - Other hyperparameters follow BERT
- Training loss decreases logarithmically, slow improvement after 300k steps

## Evaluation
- Compare CySecBERT with BERT and CyBERT
- Task types: intrinsic and extrinsic
    - Intrinsic: measures model's internal representation
    - Extrinsic: measures real-world task performance
- Catastrophic forgetting tested with SuperGLUE benchmark
    - Expect some decrease, but not severe
- Extrinsic experiments run five times; mean and standard deviation reported

## Intrinsic Tasks
- Representation quality
    - Clustering:
        - Dataset: Log4j Twitter posts
        - Posts converted to latent representations (last four layers, mean over words)
        - KMeans clustering (k=5 to 9)
        - Evaluation: Silhouette Coefficient
        - CySecBERT outperforms BERT and CyBERT
    - Word Similarity:
        - Dataset: >300 cybersecurity word pairs
        - Cloze task: "Are word1 and word2 similar? [MASK]"
        - Model predicts "Yes" or "No"
        - Evaluation: F1 score
        - CySecBERT superior (0.6382 F1) to BERT (0.44) and CyBERT (0.4861)

## Extrinsic Tasks
- Real-world application suitability
    - NER (Named Entity Recognition):
        - Dataset: NVD descriptions
        - Tasks: software version, name, attack complexity
        - Evaluation: F1 score
        - CySecBERT outperforms BERT and CyBERT
        - Highest improvement in attack complexity
    - Relevance Classification (CySecAlert):
        - Task: Predict if Twitter post is cybersecurity related
        - Evaluation: F1 score
        - CySecBERT improves over BERT and CyBERT
        - Stable fine-tuning (low standard deviation)
    - Specialised CTI Classification (MS Exchange):
        - Task: Find specialized CTI using specific words
        - Evaluation: F1 score
        - CySecBERT shows high improvement and stability

## Catastrophic Forgetting
- Evaluation: SuperGLUE benchmark (standard NLP tasks)
- Tests if domain training degrades original knowledge
- Results: Small mean drop (~-0.05), no catastrophic forgetting
- Most basic knowledge retained; some tasks show little or no degradation

## Conclusion (Evaluation Summary)
- CySecBERT shows strong cybersecurity capabilities
- Consistently outperforms BERT and CyBERT on cybersecurity tasks
- Intrinsic tasks: improved representation quality
- Extrinsic tasks: practical and useful
- Highest improvement in specialized CTI classification
- Catastrophic forgetting within expected range; original knowledge retained

## Discussion, Conclusion, and Outlook
- State-of-the-art cybersecurity LM based on BERT
- DAPT on curated cybersecurity corpus (blogs, papers, Twitter)
- Dataset size and training structure prevent catastrophic forgetting
- Thorough evaluation vs. BERT and CyBERT
- Outperforms others in all tasks
- Greatest improvement in special CTI classification
- SuperGLUE results show no catastrophic forgetting
- BERT chosen for accessibility in research/practice

## Practical and Theoretical Implications
- Contributions to research and practice
- CySecBERT and dataset are published for further work
- Useful for many tasks (extrinsic and intrinsic scores)
- Enables better cybersecurity tools (alert aggregation, phishing, malware detection)
- Foundation for further research (data augmentation, explainable AI)
- Dataset can be expanded

## Ethical Considerations
- No explicit analysis of social biases
- Warn users about potential for discrimination in bias-reliant applications
- Open source mentality; encourage community discussion

