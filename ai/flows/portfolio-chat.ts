'use server';

/**
 * @fileOverview This file defines a RAG (Retrieval-Augmented Generation) flow for a portfolio chatbot.
 * It uses a predefined knowledge base about a professional's experience, skills, and projects
 * to answer user questions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PortfolioChatInputSchema = z.object({
  history: z.array(z.any()).optional(),
  query: z.string().describe('The user\'s question about the portfolio.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user\'s question.'),
});
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;


const KNOWLEDGE_BASE = `
  About Rohith Andanala:
  - Role: AI/ML Engineer specializing in Scalable Predictive Modeling, MLOps, and Generative AI across Healthcare and Enterprise IT.
  - Key Achievements: Delivered $2.3M in annual savings, improved data accuracy by 92%, and has over 3 years of end-to-end ML & MLOps experience.
  - Introduction: "Hi! I am a testament to the fact that passion, persistence, and a dash of curiosity can lead to groundbreaking innovations. My name is Rohith Andanala, and I am an AI/ML Engineer with a relentless drive to transform complex business challenges into scalable, production-ready AI solutions. My work has spanned from developing intelligent document processing pipelines that saved millions in the healthcare sector to building sophisticated predictive models for supply chain optimization. With a deep-rooted expertise in MLOps, generative AI, and classical machine learning, I don’t just build models—I build systems that learn, adapt, and deliver measurable business value. Whether it's architecting a CI/CD pipeline for a deep learning model or fine-tuning a large language model for a specific enterprise use case, I am committed to pushing the boundaries of what's possible. Feel free to explore my portfolio and ask me anything about my work!"

  Case Studies:
  1. Healthcare Document Intelligence & Generative AI (The Cigna Group):
    - Problem: High manual effort and data inaccuracies in claim intake.
    - Solution: Built AI pipelines with OCR, NLP, and LLMs (OpenAI GPT & Amazon Bedrock) to automate intake. Designed pipelines for 10M+ monthly claims on AWS. Developed RAG to verify entities (ICD-10, CPT codes). Fine-tuned BERT for 23% higher entity extraction accuracy. Deployed containerized microservices using Docker and Amazon ECS.
    - Results: Automated 60% of claim intake, saving $2.3M annually. Reduced manual review by 55%. Achieved 99.7% uptime and 92% data accuracy.

  2. Supply Chain Pricing Optimization (Infosys):
    - Problem: Needed better bid accuracy and revenue forecasting for 50M+ transactions.
    - Solution: Processed 50M+ records with PySpark and SQL. Built ensemble regression models (XGBoost, LightGBM). Automated workflows with AWS SageMaker and Databricks. Deployed as Flask APIs on AWS ECS using Docker.
    - Techniques: Used Bayesian optimization and SHAP for explainability. Integrated MLflow for versioning and Airflow for drift monitoring.
    - Results: Achieved R² of 0.87, reduced RMSE by 27%, and cut model refresh time by 35%.

  Projects:
  - Fake News Detection Platform: End-to-end MLOps project using NLP. Deployed on AWS SageMaker with a FastAPI backend and Vue.js frontend.
  - YOLOv5 Pothole Detection: Computer vision system trained on 2000+ custom images.
  - GAN for Handwritten Digits: Generative Adversarial Network implementation.
  - LSTM Stock Price Predictor: Time-series forecasting model using an RNN.

  Skills:
  - Cloud & MLOps: AWS (SageMaker, Bedrock, Lambda, S3), GCP Vertex AI, Docker, Kubernetes, MLflow, CI/CD (GitHub Actions, Jenkins).
  - Generative AI: OpenAI GPT, Hugging Face Transformers, LangChain, LlamaIndex, RAG, Fine-tuning.
  - ML/DL: TensorFlow, PyTorch, Scikit-learn, Keras.
  - Data Engineering: PostgreSQL, MongoDB, Pinecone, Apache Spark, ETL.
  - Other: Python, SQL, FastAPI, Git, Agile.

  Experience:
  - Software Engineer – AI/ML at The Cigna Group (Jun 2024 – Present).
  - AI/ML Engineer at Infosys (Apr 2022 – Jul 2023).
  - AI/ML Engineer INTERN at SoftAge Group (Sep 2021 – Mar 2022).

  Education:
  - Master of Computer Science from Fairfield University, USA.
  - Bachelor of Metallurgical and Materials Science from Mahatma Gandhi Institution of Technology, India.
`;


export async function portfolioChat(input: PortfolioChatInput): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}

const portfolioChatPrompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: PortfolioChatInputSchema },
  output: { schema: PortfolioChatOutputSchema },
  prompt: `You are an AI assistant for Rohith Andanala's portfolio.
Your goal is to answer questions about Rohith's skills, experience, and projects based ONLY on the provided knowledge base.
If the user says "hi" or "hello", respond with the introduction from the knowledge base.
For all other questions, be concise and professional. If the answer is not in the knowledge base, say "I can only answer questions about Rohith's portfolio. Please ask me about his skills, projects, or experience."

Knowledge Base:
${KNOWLEDGE_BASE}
---
Here is the conversation history:
{{#if history}}
  {{#each history}}
    {{#if (eq role 'user')}}User: {{text}}{{/if}}
    {{#if (eq role 'model')}}AI: {{text}}{{/if}}
  {{/each}}
{{/if}}

New Question: {{{query}}}
Answer:
  `,
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async (input) => {
    const { output } = await portfolioChatPrompt(input);
    return output!;
  }
);
