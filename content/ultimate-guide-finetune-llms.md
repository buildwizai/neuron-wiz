---
title: The Ultimate Guide to Fine-Tuning LLMs
description: An exhaustive review of technologies, research, best practices, applied research challenges, and opportunities in fine-tuning Large Language Models.
tags: [LLM, Fine-Tuning, AI, NLP, Deep Learning]
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# The Ultimate Guide to Fine-Tuning LLMs
## Introduction
### Background of Large Language Models (LLMs)
- Significant leap in understanding and generating human language
- Address limitations of traditional LMs (N-gram models)
- Leverage Transformer architectures (self-attention mechanism)
- Key advancements: in-context learning, RLHF
### Historical Development and Key Milestones
- Evolution from Statistical Language Models (SLMs)
- Neural Language Models (NLMs) (e.g., Word2Vec)
- Pre-trained Language Models (PLMs) (e.g., GPT-2, BERT)
- Large Language Models (LLMs) (e.g., GPT-3, GPT-4, PaLM, LLaMA)
  - Two-stage process: pre-training and alignment with human values
### What is Fine-Tuning?
- Uses pre-trained model as foundation
- Further training on smaller, domain-specific dataset
- Enhances performance on specific tasks with reduced resources
- Popular in NLP for text classification, sentiment analysis, Q&A
### Types of LLM Fine-Tuning
- Unsupervised Fine-Tuning
  - No labelled data, refines language understanding in target domain
  - Less precise for specific tasks
- Supervised Fine-Tuning (SFT)
  - Uses labelled data tailored to target task
  - Effective but requires substantial labelled data
- Instruction Fine-Tuning via Prompt Engineering
  - Relies on natural language instructions
  - Reduces need for vast labelled data, depends on prompt quality
### Pre-training vs Fine-tuning
- Pre-training: Vast unlabelled data, general linguistic knowledge, entire model trained, high computational cost, weeks-months duration
- Fine-tuning: Smaller task-specific labelled data, specialise for tasks, last layers adapted, lower computational cost, days-weeks duration
### Importance of Fine-Tuning LLMs
- Transfer Learning
- Reduced Data Requirements
- Improved Generalisation
- Efficient Model Deployment
- Adaptability to Various Tasks
- Domain-Specific Performance
- Faster Convergence
### Retrieval Augmented Generation (RAG)
- Uses external data as additional context for LLM
- Avoids costs/time of fine-tuning or pre-training
- Traditional RAG Pipeline and Steps
  - Data Indexing (processing, chunking, vector database)
  - Input Query Processing (refine queries)
  - Searching and Ranking (retrieve & rank data)
  - Prompt Augmentation (incorporate search results into prompt)
  - Response Generation (LLM combines knowledge with current data)
- Benefits of Using RAG
  - Up-to-Date and Accurate Responses
  - Reducing Inaccurate Responses
  - Domain-Specific Responses
  - Efficiency and Cost-Effectiveness
- Challenges and Considerations in Serving RAG
  - User Experience (response times)
  - Cost Efficiency
  - Accuracy
  - Recency and Relevance
  - Business Context Awareness
  - Service Scalability
  - Security and Governance
- Considerations for Choosing Between RAG and Fine-Tuning
  - RAG: External data access, dynamic data, transparency, less prone to hallucinations
  - Fine-tuning: Adjust behavior, writing style, domain-specific knowledge (if ample labelled data)
### Objectives of the Report
- Comprehensive analysis of fine-tuning techniques
- Address critical questions, define fine-tuning, distinguish from pre-training
- Structured fine-tuning process, practical strategies, industry applications, evaluation, deployment, advancements
## Seven Stage Fine-Tuning Pipeline for LLM
### Stage 1: Dataset Preparation
- Adapt pre-trained model by updating parameters using new dataset
- Cleaning and formatting data (e.g., instruction tuning: Input Query -> Generated Output)
### Stage 2: Model Initialisation
- Setting up initial parameters and configurations of LLM
- Crucial for optimal performance, efficient training, avoiding gradient issues
### Stage 3: Training Environment Setup
- Configuring necessary infrastructure
- Selecting training data, defining architecture & hyperparameters
- Running training iterations to adjust weights and biases
### Stage 4: Partial or Full Fine-Tuning
- Updating LLM parameters with task-specific dataset
- Full fine-tuning: updates all parameters
- Half Fine-Tuning (HFT) or Parameter-Efficient Fine-Tuning (PEFT): partially fine-tune, fewer parameters
### Stage 5: Evaluation and Validation
- Assessing fine-tuned LLM performance on unseen data
- Evaluation metrics (e.g., cross-entropy)
- Monitoring loss curves to detect overfitting/underfitting
### Stage 6: Deployment
- Making LLM operational and accessible
- Configuring model for efficient running on hardware/software platforms
- Setting up integration, security, monitoring systems
### Stage 7: Monitoring and Maintenance
- Crucial for ongoing performance and reliability
- Continuously tracking performance, addressing issues, updating model
## Stage 1: Data Preparation
### Steps Involved in Data Preparation
- Data Collection
  - From various sources (CSV, web pages, SQL, S3)
  - Python libraries: pandas, BeautifulSoup, requests, SQLAlchemy, boto3
- Data Preprocessing and Formatting
  - Cleaning, handling missing values, formatting
  - Python libraries: spaCy, NLTK, HuggingFace
- Handling Data Imbalance
  - Over-sampling and Under-sampling (SMOTE, imbalanced-learn)
  - Adjusting Loss Function (class weights)
  - Focal Loss (focal loss package)
  - Cost-sensitive Learning
  - Ensemble Methods (sklearn.ensemble)
  - Stratified Sampling (sklearn.model_selection.StratifiedShuffleSplit)
  - Data Cleaning (pandas.DataFrame.sample)
  - Using Appropriate Metrics (Precision-Recall AUC, F1-score, Cohen’s Kappa, sklearn.metrics)
- Splitting Dataset
  - Training and validation sets (e.g., 80:20 ratio)
  - Techniques: Random Sampling, Stratified Sampling, K-Fold Cross Validation, Leave-One-Out Cross Validation (scikit-learn)
### Existing and Potential Research Methodologies
- Data Annotation
  - Human Annotation (Excel, Prodigy, Innodata)
  - Semi-automatic Annotation (Snorkel)
  - Automatic Annotation (Amazon SageMaker Ground Truth)
- Data Augmentation (DA)
  - Word Embeddings (Word2Vec, GloVe)
  - Back Translation (Google Translate API)
  - Adversarial Attacks (TextAttack)
  - NLP-AUG library
- Synthetic Data Generation using LLMs
  - Prompt Engineering
  - Multi-Step Generation
  - Crucial to verify accuracy and relevance
### Challenges in Data Preparation for Fine-Tuning LLMs
- Domain Relevance
- Data Diversity (prevent biases)
- Data Size (at least 1000 samples recommended)
- Data Cleaning and Preprocessing (remove noise, errors)
- Data Annotation (precise and consistent labelling)
- Handling Rare Cases (adequate representation)
- Ethical Considerations (scrutinise for harmful/biased content)
### Best Practices
- High-Quality Data Collection
- Effective Data Preprocessing
- Managing Data Imbalance
- Augmenting and Annotating Data
- Ethical Data Handling
- Regular Evaluation and Iteration
## Stage 2: Model Initialisation
### Steps Involved in Model Initialisation
- Set Up the Environment (GPU/TPU)
- Install the Dependencies (pip, PyTorch/TensorFlow)
- Import the Libraries (transformers, torch)
- Choose the Language Model (BERT, GPT-3, Hugging Face Model Hub)
- Download the Model from the Repository (AutoModel.from_pretrained)
- Load the Model in the Memory
- Execute Tasks
### Tools and Libraries for Model Initialisation
- HuggingFace (transformers library, AutoModelForCausalLM, pipeline feature)
- PyTorch (flexible, efficient platform, HuggingFace integration)
- TensorFlow (extensive tools, HuggingFace integration)
### Challenges in Model Initialisation
- Alignment with the Target Task
- Understanding the Pre-trained Model (architecture, capabilities, limitations)
- Availability and Compatibility (documentation, license, maintenance)
- Model Architecture (strengths and weaknesses)
- Resource Constraints (high-performance CPUs/GPUs, disk space, memory)
- Privacy (hosting on local servers or private cloud)
- Cost and Maintenance (setup/ongoing maintenance vs. cloud billing)
- Model Size and Quantisation (4-bit or 8-bit precision)
- Pre-training Datasets (understanding language, task-specific models)
- Bias Awareness (testing, backtracking datasets)
## Stage 3: Training Setup
### Steps Involved in Training Setup
- Setting up the training environment (hardware, software components)
- Defining the Hyper-parameters (learning rate, batch size, epochs)
- Initialising Optimisers and Loss Functions
### Setting up Training Environment
- High-performance hardware (GPUs - NVIDIA A100/V100, TPUs - Google Cloud)
- Software: PyTorch/TensorFlow, CUDA, cuDNN
- Verify hardware recognition (torch.cuda.is_available())
- Compatible deep learning framework (latest versions)
- Libraries: Hugging Face’s transformers
- Hardware considerations: GPU memory (VRAM), distributed training for large models
- Robust cooling and power supply
### Defining Hyperparameters
- Learning Rate
  - Dictates speed of model adaptation
  - Small rates: more training, minimal adjustments
  - Large rates: quicker changes, potential instability
- Batch Size
  - Subset of training data for weight updates
  - Determines samples processed before parameter update
- Epochs
  - Full pass through entire training dataset
  - Complete forward and backward pass
### Methods for Hyperparameter Tuning
- Adjusting hyperparameters and training settings for optimal output
- Automated methods streamline the process:
  - Random Search (randomly selects, efficient for large space, may not be optimal)
  - Grid Search (exhaustively evaluates every combination, resource-intensive, finds optimal)
  - Bayesian Optimisation (probabilistic model, efficient for large space, less resource-intensive than grid search, more complex setup)
  - Automated hyperparameter tuning (compares model outputs for best configuration)
### Initialising Optimisers and Loss Functions
- Crucial for training and fine-tuning LLMs
- Gradient Descent (GD)
  - Minimise cost functions, find optimal parameters
  - Iteratively updates in direction of negative gradient (entire dataset)
  - Pros: Simple, intuitive, converges to global minimum for convex, suitable for small problems
  - Cons: Computationally expensive, may get stuck in local minima, sensitive to learning rate
  - Use case: Small datasets
- Stochastic Gradient Descent (SGD)
  - Variant of GD, reduces computation per iteration
  - Updates parameters using single/few data points (introduces randomness)
  - Pros: Fast, handles large datasets, efficient memory, escapes local minima
  - Cons: High variance, can overshoot, sensitive to learning rate, slower convergence than batch methods
  - Use case: Large datasets, incremental/real-time learning
- Mini-batch Gradient Descent
  - Combines efficiency of SGD and stability of GD
  - Splits data into small batches, updates using averaged gradients
  - Pros: Balances efficiency & stability, generalisable updates, reduces variance
  - Cons: Requires batch size tuning, can be expensive for very large datasets, more complex
  - Use case: Most deep learning tasks, moderate to large datasets
- AdaGrad (Adaptive Gradient Algorithm)
  - Designed for sparse data, high-dimensional models
  - Adapts learning rate for each parameter based on historical gradients
  - Pros: Adapts learning rate, good for sparse data, no manual tuning, works with high-dimensional data
  - Cons: Learning rate can diminish to zero, slow down significantly
  - Use case: Sparse datasets (text, images)
- RMSprop (Root Mean Square Propagation)
  - Adaptive learning rate, better on non-stationary problems
  - Uses moving average of squared gradients (recent magnitudes)
  - Pros: Addresses AdaGrad's diminishing learning rate, effective for RNNs, robust to non-stationary targets
  - Cons: Can get stuck in local minima, requires hyperparameter tuning, sensitive to decay rate
  - Use case: Non-convex optimisation, RNNs/LSTMs, noisy objectives
- AdaDelta (Adaptive Delta)
  - Improves on AdaGrad and RMSprop
  - Eliminates need for default learning rate (moving window of gradient updates)
  - Pros: No default learning rate, addresses diminishing rate, no manual tuning, handles gradient sparsity
  - Cons: More complex, slower convergence initially, more iterations
  - Use case: Similar to RMSprop, when avoiding manual learning rate setting
- Adam (Adaptive Moment Estimation)
  - Combines AdaGrad and RMSprop advantages
  - Running averages of gradients and squared values, bias correction
  - Pros: Combines advantages, adaptive rates, bias correction, fast convergence, works with large datasets
  - Cons: Requires hyperparameter tuning (defaults often work), computationally intensive, overfitting risk, more memory
  - Use case: Widely used in most deep learning applications
- AdamW
  - Extension of Adam with weight decay regularisation
  - Integrates L2 regularisation directly into parameter updates
  - Pros: Weight decay for regularisation, combines Adam's adaptive rate with L2, improves generalisation, reduces overfitting
  - Cons: Slightly more complex, requires weight decay parameter tuning, slightly slower, more memory
  - Use case: Regularisation needed, preventing overfitting, fine-tuning pre-trained models
### Challenges in Training Setup
- Compatibility and configuration of high-performance hardware
- Managing dependencies and library versions
- Selecting appropriate learning rate
- Determining optimal batch size
- Choosing right number of epochs
- Selecting most suitable optimiser
- Choosing correct loss function
### Best Practices
- Optimal Learning Rate (1e-4 to 2e-4, learning rate schedules)
- Batch Size Considerations (balance memory, efficiency)
- Save Checkpoints Regularly (5-8 epochs, early stopping)
- Hyperparameter Tuning (grid search, random search, Bayesian optimisation, tools like Optuna)
- Data Parallelism and Model Parallelism (Horovod, DeepSpeed)
- Regular Monitoring and Logging (TensorBoard, Weights & Biases, MLflow)
- Handling Overfitting and Underfitting (L2 regularisation, dropout, data augmentation; increasing complexity/epochs)
- Use Mixed Precision Training (16-bit and 32-bit floating-point types, NVIDIA Apex, TensorFlow API)
- Evaluate and Iterate
- Documentation and Reproducibility
## Stage 4: Selection of Fine-Tuning Techniques and Appropriate Model Configurations
### Steps Involved in Fine-Tuning
- Initialise the Pre-Trained Tokenizer and Model
- Modify the Model’s Output Layer
- Choose an Appropriate Fine-Tuning Strategy
  - Task-Specific Fine-Tuning
  - Domain-Specific Fine-Tuning
  - Parameter-Efficient Fine-Tuning (PEFT)
  - Half Fine-Tuning (HFT)
- Set Up the Training Loop
- Incorporate Techniques for Handling Multiple Tasks
- Monitor Performance on a Validation Set
- Optimise Model Using Advanced Techniques (PPO, DPO)
- Prune and optimise the Model (if necessary)
- Continuous Evaluation and Iteration
### Fine-Tuning Strategies for LLMs
- Task-Specific Fine-Tuning
  - Text Summarisation (BERTSUM, GPT-3, T5)
  - Code Generation (Codex, GPT-3, CodeBERT)
  - Classification (BERT, RoBERTa, GPT-4)
  - Q&A (BERT, GPT-3, T5)
- Domain-Specific Fine-Tuning
  - Medical Domain (Med-PaLM 2)
  - Finance Domain (FinGPT, Palmyra-Fin-70B-32K)
  - Legal Domain (LAWGPT)
  - Pharmaceutical Domain (PharmaGPT)
### Parameter-Efficient Fine-Tuning (PEFT) Techniques
- Adapts pre-trained models with remarkable efficiency
- Fine-tune small subset of (additional) parameters, most LLM parameters frozen
- Reduces computational/storage costs, mitigates catastrophic forgetting
- Superior performance in low-data scenarios, better generalisation
- Adapters
  - Introduce additional trainable parameters after attention/FC layers
  - Reduce memory, accelerate training
  - Small, achieve comparable performance to fully fine-tuned models
  - HuggingFace PEFT library (LoraConfig, PeftConfig, Accelerate)
- Low-Rank Adaptation (LoRA)
  - Freeze original weights, apply changes to separate set of weights (low-rank matrices)
  - Reduces trainable parameters, speeds up, lowers costs
  - Useful for multiple clients with different applications (task-specific weights)
  - Benefits: Parameter Efficiency, Efficient Storage, Reduced Computational Load, Lower Memory Footprint, Flexibility, Compatibility, Comparable Results, Task-Specific Adaptation, Avoiding Overfitting
  - Limitations: Fine-tuning Scope (difficult for substantial alterations), Hyperparameter Optimisation (tuning rank 'r'), Ongoing Research
- QLoRA
  - Extended LoRA for greater memory efficiency
  - Quantises weight parameters to 4-bit precision (from 32-bit)
  - Quantises LoRA adapters from 8-bit to 4-bit
  - Achieves comparable performance to traditional 16-bit fine-tuning
  - Reduces memory usage significantly (e.g., 96 bits to 5.2 bits per parameter)
  - Supported by HuggingFace PEFT library (LoraConfig, BitsAndBytesConfig)
- Weight-Decomposed Low-Rank Adaptation (DoRA)
  - Decomposes weights into magnitude and directional components
  - Leverages LoRA efficiency for directional updates
  - Bridges performance gap between LoRA and Full Fine-Tuning (FT)
  - Benefits: Enhanced Learning Capacity, Efficient Fine-Tuning, No Additional Inference Latency, Superior Performance, Versatility Across Backbones, Innovative Analysis
  - Comparison with LoRA: DoRA mimics FT learning patterns, optimising magnitude/direction separately, while LoRA uses low-rank matrix products incrementally
- Fine-Tuning with Multiple Adapters
  - Consolidate multiple adapters into a unified multi-task adapter
  - PEFT library: add_weighted_adapter function
  - Methods: Concatenation, Linear Combination, SVD (Singular Value Decomposition)
  - Allows customising combination by adjusting weights
  - Steps: Adapter Creation, LoRA Integration, Task-Specific Adaptation, Behaviour Adjustment, Evaluation and Iteration
  - Advisable to combine adapters with distinctly varied prompt formats
### Half Fine Tuning (HFT)
- Balances foundational knowledge retention with new skill acquisition
- Freezes half of model's parameters during each fine-tuning round, updates other half
- Maintains knowledge parity, enhances scalability
- Robustness and efficiency (e.g., LLAMA 2-7B)
- Benefits: Recovery of Pre-Trained Knowledge, Enhanced Performance, Robustness, Simplicity and Scalability, Versatility
- Comparison with LoRA: HFT retains foundational knowledge without altering architecture; LoRA reduces parameters by introducing low-rank decomposition
### Lamini Memory Tuning
- Specialised approach to fine-tuning LLMs, targets reduction of hallucinations
- Analyzes loss of individual facts, improves factual recall
- Augments model with additional parameters for memory
- Lamini-1 Model Architecture
  - Massive Mixture of Memory Experts (MoME)
  - Pre-trained transformer backbone augmented by dynamically selected adapters (memory experts)
  - Freeze backbone, train network end-to-end
  - At inference: only relevant experts retrieved, low latency
- Systems Optimisations for Banishing Hallucinations
  - Minimise computational demand for memorising facts
  - Computation scales with training examples, not total parameters
### Mixture of Experts (MoE)
- Architectural design where computation is divided into specialised subnetworks ("experts")
- Each expert independently computes, results aggregated
- Dense MoE: every expert engaged for each input
- Sparse MoE: subset of experts utilised for each input
- Mixtral 8x7B Architecture and Performance
  - Sparse Mixture of Experts (SMoE)
  - Router network selects two experts per token at each layer
  - Each token has access to 47B parameters, but uses 13B active during inference
  - Matches/surpasses Llama 2 70B and GPT-3.5
### Mixture of Agents (MoA)
- Leverages collective expertise of multiple LLMs for a more capable/robust model
- Layered architecture: each layer comprises multiple LLM agents
- Reveals "collaborativeness of LLMs"
- Methodology:
  - Classification of individual LLM strengths: Proposers (generate reference responses), Aggregators (merge responses)
  - Careful selection of LLMs for each layer
  - Diversity in model outputs is vital
  - MoA framework operates at model level (prompt-based interactions), not altering internal activations/weights
- What makes MoA works well?
  - Superior Performance (aggregating responses)
  - Effective Incorporation of Proposals (integrates best answers)
  - Influence of Model Diversity and Proposer Count (improves output quality)
  - Model Specialisation (e.g., GPT-4o, Qwen, LLaMA-3 effective as assistants/aggregators; WizardLM as proposer)
### Proximal Policy Optimisation (PPO)
- Reinforcement learning algorithm for training agents
- Leverages policy gradient methods
- Optimises "surrogate" objective function via stochastic gradient ascent
- Allows multiple updates from same batch, enhances efficiency/stability
- Clipping mechanism limits policy updates
- HuggingFace TRL package supports PPO Trainer
- Benefits: Stability, Ease of Implementation, Sample Efficiency
- Limitations: Complexity and Computational Cost, Hyperparameter Sensitivity, Stability and Convergence Issues, Reward Signal Dependence
### Direct Preference Optimisation (DPO)
- Streamlined approach to aligning LMs with human preferences, bypasses RLHF complexity
- Directly optimises LMs with simple classification objective
- Eliminates need for explicit reward modeling and extensive hyperparameter tuning
- Increases relative likelihood of preferred responses, incorporates dynamic importance weights
- HuggingFace TRL package supports DPO Trainer
- Requires dataset with 'Prompt', 'Chosen', 'Rejected' entries
- Benefits: Direct Alignment with Human Preferences, Minimised Dependence on Proxy Objectives, Enhanced Performance on Subjective Tasks
- Best Practices: High-Quality Preference Data, Optimal Beta Value, Hyperparameter Tuning, Evaluation on Target Tasks, Ethical Considerations
- DPO vs PPO for LLM Alignment:
  - Theoretical findings suggest DPO may yield biased solutions
  - DPO performance affected by distribution shifts
  - PPO (with advantage normalisation, large batch sizes, EMA updates) achieves state-of-the-art results in challenging tasks (e.g., CodeContest)
### Odds-Ratio Preference Optimization (ORPO)
- Novel approach to align LLM output with desired responses
- Introduces penalisation mechanism for undesirable outputs
- Adds odds-ratio based loss to SFT loss
- Monolithic manner: no separate fine-tuning and preference optimisation phases
- Advantages: Reduces computational overhead, state-of-the-art performance across various models
### Pruning LLMs
- Eliminates unnecessary/redundant components to reduce size/complexity
- Enhances efficiency and performance, assists in resource-limited environments
- Techniques:
  - Weight Pruning (removes minimal magnitude weights/connections)
  - Unit Pruning (eliminates entire units/neurons)
  - Filter Pruning (removes entire filters/channels in CNNs)
- When to Prune AI Models?
  - Pre-Training Pruning (determine optimal structure before training)
  - Post-Training Pruning (assess importance after training)
  - Dynamic Pruning (adjusts structure during inference/runtime)
- Benefits of Pruning: Reduced Size and Complexity, Improved Efficiency and Performance, Enhanced Generalisation and Accuracy
- Challenges of Pruning: Balance Between Size Reduction and Performance, Choosing Appropriate Techniques, Evaluation and Validation
## Stage 5: Evaluation and Validation
### Steps Involved in Evaluating and Validating Fine-Tuned Models
- Set Up Evaluation Metrics
- Interpret Training Loss Curve
- Run Validation Loops
- Monitor and Interpret Results
- Hyperparameter Tuning and Adjustments
### Setting Up Evaluation Metrics
- Cross-entropy
  - Key metric, quantifies difference between probability distributions
  - Serves as loss function, guides model to produce high-quality predictions
  - Each potential word is a separate class, model predicts next word
- Beyond Cross-Entropy: Advanced LLM Evaluation Metrics
  - Perplexity (model's uncertainty about next word, lower is better)
  - Factuality (accuracy of information, higher scores correlate with quality)
  - LLM Uncertainty (measured by log probability, lower uncertainty = higher quality)
  - Prompt Perplexity (how well model understands input prompt, lower is better)
  - Context Relevance (in RAG, pertinence of retrieved context to query)
  - Completeness (response fully addresses query based on context)
  - Chunk Attribution and Utilisation (how effectively retrieved chunks contribute)
  - Data Error Potential (difficulty model faces in learning from training data)
  - Safety Metrics (appropriate and non-harmful outputs)
### Understanding the Training Loss Curve
- Plots loss value against training epochs
- Interpreting Loss Curves
  - Ideal: rapid decrease, gradual decline, eventual plateau
  - Underfitting: high loss, no significant decrease
  - Overfitting: decreasing training loss, increasing validation loss
  - Fluctuations: high learning rate or noisy gradients
- Avoiding Overfitting
  - Regularisation (penalty term for smaller weights)
  - Early Stopping (stop when validation performance no longer improves)
  - Dropout (randomly deactivates neurons)
  - Cross-Validation (splits data into multiple subsets)
  - Batch Normalisation (normalises inputs to each layer)
  - Larger Datasets and Batch Sizes
- Sources of Noisy Gradients
  - Variability in gradient estimates from stochastic gradient descent
  - Strategies: Learning Rate Scheduling, Gradient Clipping
### Running Validation Loops
- Unbiased evaluation of model performance
- Steps: Split Data, Initialise Validation (end of each epoch), Calculate Metrics, Record Results, Early Stopping (optional)
### Monitoring and Interpreting Results
- Analysing trends in validation metrics
- Consistent Improvement (good generalisation)
- Divergence (overfitting)
- Stability (stable training)
### Hyperparameter Tuning and Other Adjustments
- Learning Rate (e.g., 2e-4)
- Batch Size (larger for stability, more memory)
- Number of Training Epochs (balance learning and overfitting)
- Optimiser (e.g., Paged ADAM for memory usage)
- Other tunable parameters: dropout rate, weight decay, warmup steps
### Data Size and Quality
- Efficacy directly impacted by cleanliness, relevance, adequacy
- Cleanliness: absence of noise, errors, inconsistencies
### Benchmarking Fine-Tuned LLMs
- Standardised benchmarks: GLUE, SuperGLUE, HellaSwag, TruthfulQA, MMLU, IFEval, BBH, MATH, GPQA, MuSR, MMLU-PRO, ARC, COQA, DROP, SQuAD, TREC, WMT, XNLI, PiQA, Winogrande
- New standards: BigCodeBench
- Choice depends on specific tasks
### Evaluating Fine-Tuned LLMs on Safety Benchmark
- Scrutinized for ability to generate harmful content from jailbreaking prompts
- DecodingTrust (evaluates trustworthiness):
  - Toxicity
  - Stereotype Bias
  - Adversarial Robustness
  - Out-of-Distribution (OOD) Robustness
  - Robustness to Adversarial Demonstrations
  - Privacy
  - Hallucination Detection
  - Tone Appropriateness
  - Machine Ethics
  - Fairness
- LLM Safety Leaderboard (HuggingFace, DecodingTrust framework)
### Evaluating Safety of Fine-Tuned LLM using AI Models
- Llama Guard
  - Safeguard model built on LLMs for conversational AI risks
  - Categorises input prompts and responses using safety risk taxonomy
  - Taxonomy areas: Violence & Hate, Sexual Content, Guns & Illegal Weapons, Regulated/Controlled Substances, Suicide & Self-Harm, Criminal Planning
  - Llama Guard 3: latest advancement, fine-tuned on Llama 3 8b, adds Defamation, Elections, Code Interpreter Abuse
  - Accessible via HuggingFace's AutoModelForCausalLM
- Shield Gemma
  - Advanced content moderation model built on Gemma2
  - Filters user inputs/model outputs to mitigate harm types (offensive language, hate speech, misinformation, explicit content)
  - Scalability (2B to 27B parameters)
  - Novel data curation: leverages synthetic data generation
  - Accessible on HuggingFace via AutoModelForCausalLM
- WILDGUARD
  - Open-source tool to enhance LLM interaction safety
  - Addresses three moderation tasks: detecting harmful intent in prompts, identifying safety risks in responses, determining appropriate refusals
  - WILDGUARD MIX3: curated dataset
  - Fine-tuned on Mistral-7B, unified multi-task manner
  - Surpasses existing open-source tools, comparable to GPT-4
## Stage 6: Deployment
### Steps Involved in Deploying the Fine-Tuned Model
- Model Export (ONNX, TensorFlow SavedModel, PyTorch)
- Infrastructure Setup (hardware, cloud, containerisation)
- API Development
- Deployment
### Cloud-Based Providers for LLM Deployment
- Pricing based on tokens processed
- In-house hosting vs. cloud: total cost of ownership, data privacy/security
- Amazon Web Services (AWS)
  - Amazon Bedrock (suite of foundation models, Titan, integrates with other AWS services)
  - Amazon SageMaker (end-to-end ML service, JumpStart for pre-trained models)
- Microsoft Azure
  - Azure OpenAI Service (access to OpenAI models: GPT-3.5, Codex, DALL-E, Whisper)
  - Azure Machine Learning (custom/pre-trained model deployment, MLOps)
- Google Cloud Platform (GCP)
  - Vertex AI (deployment with tools for training, tuning, serving; BERT, GPT-3)
  - Cloud AI API (NLP tasks: translation, sentiment, entity recognition)
- Hugging Face
  - Inference API (deploy/manage LLMs hosted on HF infra)
  - Spaces (collaborative environment to deploy/share models)
- Other Platforms (OpenLLM, Deepseed)
### Techniques for Optimising Model Performance During Inference
- Traditional On-Premises GPU-Based Deployments
  - Uses GPUs for parallel processing
  - Challenges: resource utilisation, scaling, single points of failure
  - Mitigation: load balancing, fallback routing, model parallelism, data parallelism, distributed inference
- Distributed LLM: Torrent-Style Deployment and Parallel Forward Passes
  - Distributing LLMs across multiple GPUs in decentralised manner (e.g., Petals library)
  - Petals: decentralised pipeline for rapid inference, partitions model into blocks across dispersed servers
  - Leverages decentralisation to distribute computational load
- WebGPU-Based Deployment of LLM
  - Utilising WebGPU (web standard) for GPU power directly in web browsers
  - High-performance computing/graphics rendering directly on client's device
- LLM on WebGPU using WebLLM
  - Clients access LLMs/chatbots directly in browser, WebGPU acceleration
  - Eliminates server dependencies, enhances privacy (e.g., PII filtering, NER on client side)
  - Additional Use Cases: Language Translation, Code Autocompletion, Customer Support Chatbots, Data Analysis/Visualisation, Personalised Recommendations, Privacy-Preserving Analytics
- Quantised LLMs
  - Reduces model size by representing parameters with fewer bits (e.g., 32-bit to 8-bit integers)
  - Reduces memory footprint, efficient for resource-constrained environments (mobile, edge devices)
  - QLoRA is a popular example
- vLLMs
  - Efficiently handles requests with block-level memory management, preemptive scheduling
  - PagedAttention algorithm for KV cache, reduces memory waste/fragmentation
  - Batches requests, shares physical blocks across samples, optimises memory/throughput
  - Improves processing of lengthy texts by dividing into segments
### Key Considerations for Deployment of LLMs
- Infrastructure Requirements (Compute Resources, Memory)
- Scalability (Horizontal Scaling, Load Balancing)
- Cost Management (Token-based Pricing, Self-Hosting vs Cloud)
- Performance Optimisation (Latency, Throughput)
- Security and Privacy (Data Security, Privacy regulations)
- Maintenance and Updates (Model Updates, System Maintenance)
- Flexibility and Customisation (Fine-Tuning, API Integration)
- User Management (Access Control, Monitoring and Logging)
- Compliance (Regulatory Compliance, Ethical Considerations)
- Support and Documentation
## Stage 7: Monitoring and Maintenance
### Steps Involved in Monitoring and Maintenance of Deployed Fine-Tuned LLMs
- Setup Initial Baselines (accuracy, latency, throughput, error rates)
- Performance Monitoring (response time, server load, token usage)
- Accuracy Monitoring (precision, recall, F1 score, cross-entropy loss)
- Error Monitoring (runtime errors, prediction errors)
- Log Analysis (input data, output predictions, response times)
- Alerting Mechanisms (automated alerts for anomalies)
- Feedback Loop (end-user insights)
- Security Monitoring (threats, unauthorised access, data breaches)
- Drift Detection (data and concept drift)
- Model Versioning
- Documentation and Reporting
- Periodic Review and Update
### Continuous Monitoring of Model Performance
- Functional Monitoring (request volume, response times, token utilisation, costs, error rates)
- Prompt Monitoring (readability, toxicity detection, embedding distances, adversarial attempts)
- Response Monitoring (relevance, coherence/hallucination, topical alignment, sentiment, toxicity, prompt leakage, embedding distance metrics, testing against evaluation datasets)
- Alerting Mechanisms and Thresholds (multivariate drift detection, false alarm rates, integration with communication tools, automated response blocking, custom metrics)
- Monitoring User Interface (UI) (time-series graphs, analysis of alert trends, visualisations of embedding spaces, data categorisation by users/projects/teams, RBAC)
### Updating LLM Knowledge
- Continued pretraining to evolve with latest knowledge
- Addresses: Factual Errors, Irrelevance, Bias Perpetuation
- Retraining Methods
  - Periodic Retraining (regular intervals)
  - Trigger-Based Retraining (based on performance thresholds)
- Additional Methods
  - Fine-Tuning (for specific tasks, domain-specific datasets)
  - Active Learning (selectively querying LLM to identify knowledge gaps)
- Key Considerations
  - Data Quality and Bias
  - Computational Cost
  - Downtime
  - Version Control
### The Future of LLM Updates
- Continuous learning (incrementally learn and adapt from new data)
- Innovations in transfer learning and meta-learning
- Improvements in hardware and computational resources
- Collaboration between academia and industry
## Industrial Fine-Tuning Platforms and Frameworks for LLMs
### Autotrain (HuggingFace)
- Automates fine-tuning, accessible to users with limited ML expertise
- Simplifies data preparation, model configuration, hyperparameter optimisation
- Steps Involved: Dataset Upload and Model Selection, Data Preparation, Model Configuration, Automated Hyperparameter Tuning, Fine-Tuning, Deployment
- Best Practices: Data Quality, Model Selection, Hyperparameter Optimisation
- Challenges: Data Privacy, Resource Constraints, Model Overfitting
- When to Use: Lack of Deep Technical Expertise, Quick Prototyping and Deployment, Resource-Constrained Environments
### Transformers Library and Trainer API (HuggingFace)
- Pivotal tool for fine-tuning LLMs (BERT, GPT-3, GPT-4)
- Wide array of pre-trained models, seamless model selection, straightforward customisation
- Trainer API: automates and manages fine-tuning complexities
- Supports distributed training, mixed precision
- Limitations: Limited Customisation for Advanced Users, Learning Curve, Integration Limitations (tied to HuggingFace ecosystem)
### Optimum (HuggingFace)
- Tool to optimise LLM deployment efficiency across various hardware
- Applies hardware-specific optimisations (quantisation, pruning, model distillation)
- Key techniques:
  - Quantisation (converts weights to lower-precision, int8/float16)
  - Pruning (removes less significant weights)
  - Model Distillation (smaller model replicates larger model's behavior)
- Best Practices: Understand Hardware Requirements, Iterative Optimisation, Validation and Testing, Documentation and Support, Continuous Monitoring
### Amazon SageMaker JumpStart
- Simplifies/expedites fine-tuning LLMs within SageMaker
- Library of pre-built models and solutions
- Architecture for fine-tuning/deployment using AWS services
- Steps Involved: Data Preparation and Preprocessing (S3, EMR Serverless Spark), Model Fine-Tuning (model selection, execution, workflow simplification), Model Deployment and Hosting (SageMaker endpoints, scalability)
- Best Practices: Robust Data Management, Cost-Effective Processing, Optimised Fine-Tuning, Continuous Monitoring and Optimisation, Integration with AWS Services
- Limitations: Limited Customisation, Dependency on AWS Ecosystem, Resource Costs
### Amazon Bedrock
- Fully managed service for accessing foundation models (FMs)
- Unified API, extensive capabilities for generative AI apps
- Supports private customisation via fine-tuning and RAG
- Serverless architecture for quick deployment
- Steps Involved: Model Selection (AWS Titan, Anthropic Claude), Fine-Tuning (API calls, manages training), Deployment (scalable, efficient), Integration and Monitoring (other AWS services)
- Limitations: Does not eliminate human expertise, not standalone (relies on S3, Lambda, SageMaker), steep learning curve for new AWS users
### OpenAI’s Fine-Tuning API
- Comprehensive platform for customising OpenAI's pre-trained LLMs
- User-friendly, for specific tasks and domains
- Steps Involved: Model Selection (GPT-4), Data Preparation and Upload, Initiating Fine-Tuning (automated), Deploying the Fine-Tuned Model (API integration)
- Limitations: Pricing Models (costly for large-scale), Data Privacy and Security (upload to OpenAI servers), Dependency on OpenAI Infrastructure, Limited Control Over Training Process
### NVIDIA NeMo Customizer
- Part of NeMo framework, facilitates LLM development/fine-tuning
- Geared toward adapting pre-trained models for specialised tasks
- Delivers enterprise-ready models with data curation, customisation, RAG, performance features
- Supports training/deploying across cloud, data center, edge
- Key Features: State-of-the-Art Training Techniques (NeMo Curator), Advanced Customisation for LLMs (model parallelism, scaling), Optimised AI Inference (NVIDIA Triton Inference Server), User-Friendly Tools, Best-in-Class Pretrained Models (Llama 2, Stable Diffusion, Nemotron-3), Optimised Retrieval-Augmented Generation (NeMo Retriever)
- Components: NeMo Core, NeMo Collections, Neural Modules, Application Scripts
- Customising LLMs Lifecycle: Model Selection or Development, Model Customisation, Inference, Guardrails, Applications
## Multimodal LLMs and their Fine-tuning
### Multimodal Models
- Process information from various modalities (images, videos, text)
- Example: Google's Gemini (analyses photo, produces recipe)
- Difference from Generative AI: Multimodal AI extends generative capabilities by processing multiple modalities
### Vision Language Model (VLMs)
- Multimodal models learning from images and text inputs
- Generative models producing textual outputs from image/text data
- Strong zero-shot capabilities, robust generalisation, handle diverse visual data
- Applications: conversational interactions, image interpretation, visual Q&A, document understanding, caption generation
- Can understand spatial attributes, generate bounding boxes/segmentation masks
- Architecture: Image Encoder, Text Encoder, Fusion Strategy
  - Model's learning process tailored to architecture/strategy
  - Modern models use transformers, pre-trained on extensive datasets
- Contrastive Learning
  - Understands differences between data points, computes similarity scores
  - Minimises contrastive loss, useful in semi-supervised learning
  - Example: CLIP model (text and image embeddings, textual/visual encoders)
  - Workflow: Pre-training, Caption Conversion, Zero-Shot Prediction
### Fine-tuning of multimodal models
- PEFT techniques (LoRA, QLoRA)
- Other tools: LLM-Adapters, (IA)³ (Infused Adapters by Inhibiting and Amplifying Inner Activations)
- Dynamic adaptation: DyLoRA (low-rank adaptation blocks across different ranks)
- LoRA-FA (freezes first low-rank matrix)
- Efficient Attention Skipping (EAS) module (parameter/computation-efficient tuning)
- MemVP (Memory-Space Visual Prompting) critiques EAS, injects visual knowledge with FFN weights
- Full-parameter Fine-Tuning
  - LOMO (Low-Memory Optimisation) uses SGD, reduces memory
  - MeZO (Memory-Efficient Zero-shot Optimiser) requires only two forward passes for gradients
- Case study of fine-tuning MLLMs for Medical domain (Visual Question Answering (VQA) task, Med-VQA)
  - Architecture: vision encoder, pre-trained LLM, single linear layer for embedding projection
  - Uses LoRA for efficient fine-tuning
  - Model Training: Fine-tuning with image captioning (ROCO dataset), Fine-tuning on VQA (Med-VQA dataset, VQA-RAD)
### Applications of Multimodal models
- Gesture Recognition (sign language translation)
- Video Summarisation
- DALL-E (generates images from text)
- Educational Tools (interactive content)
- Virtual Assistants (voice commands, visual data)
### Audio or Speech LLMs Or Large Audio Models
- Understand and generate human language based on audio inputs
- Applications: speech recognition, text-to-speech, natural language understanding
- Pre-trained on large datasets, then fine-tuned
- Leverage LLM as foundational backbone, custom audio tokens
- Discretize continuous audio signals into audio tokens (HuBERT, wav2vec)
- Autoregressive, decoder-based models, pre-trained with self-supervised tasks
- Integrate capabilities for STT, TTS, STS translation
- Tokenization and Preprocessing
  - Key aspect: tokenization of audio data into discrete representations
  - AudioLM, AudioPaLM use acoustic and semantic tokens
- Fine-Tuning Techniques
  - Full Parameter Fine-Tuning (LauraGPT, SpeechGPT)
  - Layer-Specific Fine-Tuning (LoRA, Qwen-Audio)
  - Component-Based Fine-Tuning (Whisper encoder, linear projector/adapters)
  - Multi-Stage Fine-Tuning (AudioPaLM)
- Fine-Tuning Whisper for Automatic Speech Recognition (ASR)
  - Advanced ASR model by OpenAI, Transformer architecture
  - Why Fine-Tune Whisper: enhance performance in specialised domains (vocabularies, accents)
  - Steps: Data Collection and Preparation, Data Augmentation, Preprocessing (mel spectrograms), Model Configuration, Training, Evaluation and Testing (WER, CER)
- Case Studies and Applications
  - Medical Transcription
  - Legal Document Processing
  - Customer Service Automation
## Open Challenges and Research Directions
### Scalability Issues
- Fine-tuning LLMs presents significant challenges
- Computational Resources (enormous for large models like GPT-3, PaLM)
- Memory Requirements (staggering, e.g., 7B parameter LLaMA 2 needs ~112 GB GPU memory for fine-tuning)
- Data Volume (vast amounts, loading, preprocessing, feeding at high speeds)
- Throughput and Bottlenecks (data pipelines, data packing)
- Efficient Use of Resources (financial/environmental costs, mixed-precision training, gradient checkpointing)
### Research Directions for Scalable Solutions
- Advanced PEFT Techniques and Sparse Fine-Tuning
  - LoRA and Quantised LoRA (reduces computational burden, memory)
  - Sparse fine-tuning (SpIEL): selectively updates most impactful parameters
- Data Efficient Fine-Tuning (DEFT)
  - Novel approach, data pruning to optimise fine-tuning
  - Selectively prune training data to identify most influential samples (few-shot learning principles)
  - Key Components: High Accuracy Through Influence Score, High Efficiency Through Effort Score and Surrogate Models
  - Practical Implications: Few-Shot Fine-Tuning, Reducing Computational Costs
  - Future Directions: Apply to LLM-based recommender models, address limited context window
- Hardware and Algorithm Co-Design
  - Tailored hardware/algorithms for LLMs improve efficiency
  - Custom Accelerators (optimised for sparse/low-precision computations)
  - Algorithmic Optimisation (minimise data movement, leverage hardware features)
  - Example: NVIDIA’s TensorRT (optimises deep learning models for inference)
### Ethical Considerations in Fine-Tuning LLMs
- Bias and Fairness
  - Datasets can carry biases (historical, imbalanced, cultural)
  - Google AI’s Fairness Indicators tool
  - Addressing: Diverse data, Fairness Constraints (FairBERTa framework), Example Application (healthcare diagnosis)
- Privacy Concerns
  - Sensitive/proprietary datasets, risk of information leakage
  - Critical in healthcare, finance
  - Ensuring Privacy: Differential Privacy, Federated Learning (decentralised data sources), Example Application (customer service)
- Security Risks
  - Vulnerabilities to adversarial attacks (inputs designed to exploit model weaknesses)
  - More pronounced in specialised fine-tuned models
  - Microsoft’s Adversarial ML Threat Matrix
  - Enhancing Security: Adversarial Training, Security Audits
### Accountability and Transparency
- Need for Accountability and Transparency
  - Fine-tuning alters behavior, crucial to document changes
  - Essential for trust, developer accountability
- Recent Research and Industry Practices
  - Meta’s Responsible AI framework (document fine-tuning process)
- Promoting Accountability and Transparency
  - Comprehensive Documentation
  - Transparent Reporting (Model Cards)
  - Example Application (content moderation)
- Proposed frameworks/techniques for Ethical Fine-Tuning
  - Frameworks for Mitigating Bias (FairBERTa)
  - Techniques for Privacy Preservation (Differential privacy, Federated Learning, TensorFlow Privacy, FDKT framework for SLMs)
  - Frameworks for Enhancing Security (Adversarial training, Microsoft Azure’s adversarial training tools)
  - Frameworks for Ensuring Transparency (Model Cards, AI FactSheets)
### Integration with Emerging Technologies
- Integrating LLMs with IoT and edge computing
- Opportunities
  - Enhanced Decision-Making and Automation (analyse unstructured IoT data, predictive maintenance, smart cities)
  - Personalised User Experiences (process data locally on edge devices, healthcare recommendations)
  - Improved Natural Language Understanding (IoT data enriches context understanding, smart homes)
- Challenges
  - Data Complexity and Integration (data quality, interoperability, scalability)
  - Privacy and Security (sensitive data on edge, encryption, secure communication)
  - Real-Time Processing and Reliability (low latency, accuracy, consistency)
### Future Research Areas
- Federated Learning and Edge Computing
- Real-Time Decision Support Systems
- Ethical and Regulatory Implications