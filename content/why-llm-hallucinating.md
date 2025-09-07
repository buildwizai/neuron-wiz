---
title: Why Language Models Hallucinate
description: An analysis of the causes and persistence of hallucinations in language models, and proposed socio-technical mitigations.
tags: [Language Models, Hallucinations, AI, Training, Evaluation, Mitigation]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# Why Language Models Hallucinate
## Introduction
*   **Definition**: Overconfident, plausible falsehoods produced by LMs, differing from human perceptual experience.
*   **Examples**: Incorrect birthdays, dissertation titles, letter counts.
*   **Nature**: Special case of errors analyzed using computational learning theory.
*   **Types**: Intrinsic (contradict prompt) and Extrinsic (contradict training data/reality).
*   **Core Argument**: Training and evaluation reward guessing over admitting uncertainty.
## Causes of Hallucinations
### Pretraining Origins
*   **Mechanism**: Statistical objective minimized during pretraining leads to errors, even with error-free data.
*   **Connection to Binary Classification**: Is-It-Valid (IIV) problem.
    *   Generative error rate is linked to IIV misclassification rate.
    *   Same statistical factors causing binary classification errors cause LM errors.
*   **Arbitrary Facts**: No learnable pattern in data (e.g., specific birthdays).
    *   Hallucination rate at least the fraction of training facts appearing once (singleton rate).
*   **Calibration**: Base models are often calibrated due to cross-entropy objective, implying errors are a natural consequence.
*   **Inevitable for Base Models**: Errors are a natural consequence of the standard cross-entropy objective.
### Post-training Persistence
*   **Socio-Technical Explanation**: Evaluation procedures reward guessing.
*   **Binary Grading**: Most benchmarks use 0-1 scoring (accuracy, pass-rate).
    *   Awards 1 point for correct, 0 for blanks/uncertainty (IDK).
    *   Makes abstaining strictly sub-optimal.
    *   Encourages overconfident "best guess" responses.
*   **"Test-Taking" Mode**: LMs are optimized to be good test-takers and are always in this mode due to evaluation design.
*   **"Epidemic"**: Penalizing uncertainty in primary evaluations overshadows specific hallucination evaluations.
### Error Factors for Base Models
*   **Arbitrary-Fact Hallucinations**: Epistemic uncertainty where necessary knowledge is absent (e.g., random birthdays).
    *   **Singleton Rate**: Fraction of prompts appearing exactly once in training data, used to estimate missing mass.
*   **Poor Models**:
    *   Model family cannot represent concept well (e.g., linear separators for circular regions).
    *   Model itself is not a good fit (e.g., trigram models for grammatical sentences, tokenization for letter counting).
*   **Additional Factors**:
    *   **Computational Hardness**: Errors on computationally hard problems (e.g., decryption without key).
    *   **Distribution Shift**: Out-of-distribution prompts (e.g., "pound of feathers or lead" riddle).
    *   **GIGO (Garbage In, Garbage Out)**: Replication of factual errors from large training corpora.
## Related Work
*   **Reduction from Supervised to Unsupervised Learning**: Novel contribution of this paper.
*   **Causes**: Model overconfidence, decoding randomness, snowballing effects, misleading alignment, spurious correlations, exposure bias, reversal curse, context hijacking.
*   **Consistency-Breadth Trade-off**: Inherent trade-off for models generalizing beyond training data.
*   **Mitigation Techniques**: RLHF, RLAIF, DPO (reduce misconceptions/conspiracy theories).
*   **Evaluation Challenges**: Hallucination benchmarks struggle to gain traction.
## Mitigation Strategies
*   **Modify Scoring of Benchmarks**: Socio-technical solution to realign incentives.
*   **Explicit Confidence Targets**: State confidence thresholds and penalties in instructions.
    *   Penalties for incorrect answers (e.g., t/(1-t) points) vs. 1 point for correct, 0 for IDK.
    *   Optimal to answer if confidence > threshold (t).
    *   Ensures objective grading and model awareness of risk.
    *   **Behavioral Calibration**: Output IDK when correctness probability is below target.
*   **Integrate into Mainstream Evaluations**: Incorporate confidence targets into existing popular benchmarks (e.g., SWE-bench, MMLU-Pro, GPQA).
## Discussion and Limitations
*   **Defining Hallucination**: Difficulty due to multifaceted nature.
*   **Plausibility**: Analysis focuses on plausible falsehoods, not nonsensical strings.
*   **Open-ended Generations**: Framework can apply by defining any falsehood as an error, but degrees of hallucination might be considered.
*   **Search/RAG**: Not panaceas; binary grading still rewards guessing when search fails.
*   **Latent Context**: Ambiguities depending on external context not covered.
*   **False Trichotomy**: Correct/incorrect/IDK is incomplete but better than dichotomy.
*   **Beyond IDK**: Other ways to signal uncertainty (hedging, omitting details, questions, linguistic calibration).
## Conclusions
*   Hallucinations are demystified as errors from pretraining and persistence from post-training.
*   Generative errors are akin to misclassifications in supervised learning.
*   Current mainstream evaluations reward hallucinatory behavior.
*   Simple modifications to these evaluations (e.g., explicit confidence targets) can realign incentives.
*   This will foster more trustworthy AI systems and nuanced language models.