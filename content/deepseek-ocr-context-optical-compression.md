---
title: DeepSeek-OCR
description: Contexts Optical Compression via Vision-Language Models
tags: [OCR, VLM, Compression, Long Context]
created_at: 2024-XX-XX
markmap:
  colorFreezeLevel: 2
  maxWidth: 300
---
# DeepSeek-OCR: Contexts Optical Compression
## Overview & Motivation
* Initial investigation into feasibility of compressing long contexts via optical 2D mapping
* Addresses LLM challenge of quadratic scaling with sequence length
* Goal: Leverage visual modality as an efficient compression medium
* Demonstrates significant token reduction (7-20×)
* Promising for historical long-context compression and memory forgetting mechanisms in LLMs
## Core Architecture
### Model Components
* Unified end-to-end VLM architecture (Encoder + Decoder)
* DeepEncoder (Vision Encoder)
- Core engine for compression
- Parameters: Approximately 380M
- Architecture
 * SAM-base (80M) for perception (window attention)
 * CLIP-large (300M) for knowledge (dense global attention)
 * 16× token compressor (2-layer convolutional module) bridges components
- Features: High resolution processing, low activation, few vision tokens
* Decoder
- DeepSeek3B-MoE-A570M
- Inference efficiency of a 500M model with expressive capability of a 3B model
- Reconstructs text representation from compressed latent vision tokens
### Multiple Resolution Support
* Enables testing performance under different compression ratios
* Native Resolution Modes
- Tiny (512×512, 64 tokens)
- Small (640×640, 100 tokens)
- Base (1024×1024, 256 tokens)
- Large (1280×1280, 400 tokens)
* Dynamic Resolution Modes (Tiling for ultra-high resolution)
- Gundam: n×640 tiles + 1024 global view
- Gundam-M: n×1024 tiles + 1280 global view
## Training Data Engine
* Complex and diverse training data constructed
* OCR 1.0 Data (Traditional Tasks)
- Document data: 30M pages (~100 languages)
- Document Ground Truth: Coarse annotations (fitz) and Fine annotations (detection/recognition interleaved)
- Natural scene OCR: 10M samples each for Chinese/English
* OCR 2.0 Data (Complex Parsing Tasks)
- Charts: Image-to-HTML-table conversion (10M images)
- Chemical formulas: SMILES format (5M pairs)
- Plane geometry: Slow Perception method (1M samples)
* General Vision Data
- Used to inject general image understanding (caption, detection, grounding)
- Accounts for 20% of total data
* Text-only Data
- In-house pretrain data (8192 token length)
- Accounts for 10% of total data
## Evaluation and Performance
### Vision-text Compression Study (Fox Benchmark)
* Compression ratio < 10×: Precision ~97%
* Compression ratio 20×: Accuracy ~60%
* Indicates optical contexts compression is promising
### OCR Practical Performance (OmniDocBench)
* Achieves state-of-the-art performance among end-to-end models with fewest vision tokens
* Outperforms GOT-OCR2.0 (256 tokens) using only 100 vision tokens
* Outperforms MinerU2.0 (~7000 tokens) using fewer than 800 tokens (Gundam mode)
* Token requirements vary by document type
- Slides: 64 tokens
- Newspapers: Requires Gundam or Gundam-M mode (4-5k text tokens)
### Qualitative Study (Deep Parsing)
* Possesses layout and OCR 2.0 capabilities
* Deep parsing examples
- Charts (Structured results)
- Chemical formulas (to SMILES format)
- Simple planar geometric figures
- Natural images (Dense captions)
* Multilingual Recognition: Handles nearly 100 languages
* General Vision Understanding: Image description, object detection, grounding
## Discussion and Future Work
* Optical processing for dialogue histories (10× compression efficiency)
* Simulating Forgetting Mechanism
- Progressively downsizing rendered images
- Achieves multi-level compression (token count decreases, text blurs)
* Future Research: Digital-optical text interleaved pretraining, needle-in-a-haystack testing
* Practical Value: Capable of generating training data (200k+ pages per day per A100-40G)