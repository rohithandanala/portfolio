import {
    BrainCircuit, Cloud, Code2, Database, GitMerge, Layers3, RefreshCw, Server, Webhook,
    Cpu, GitBranch, ToyBrick, BookOpen, LayoutGrid, BarChart, HardDrive, MessageCircle,
    PencilRuler, Share2, Terminal, Users, Code, Rocket, Eye, Bot, Book
  } from 'lucide-react';
import { AwsIcon, DockerIcon, KubernetesIcon, PythonIcon, ScikitLearnIcon, SqlIcon, TensorflowIcon } from "@/components/icons/brand-icons";

export const projects = [
    {
      slug: "healthcare-document-intelligence",
      title: "Healthcare Document Intelligence & Generative AI",
      company: "The Cigna Group",
      thumbnail: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzYzMjc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "data visualization",
      problem: "Automating claim intake using document intelligence to overcome manual effort and data accuracy issues.",
      role: "Built AI pipelines integrating OCR, NLP, and LLM-based parsing. Integrated OpenAI GPT & Amazon Bedrock for clinical note summarization and OCR auto-correction. Designed large-scale ML pipelines to process 10M+ monthly claims on AWS (SageMaker, Lambda, S3).",
      methodology: "Developed RAG pipelines to verify extracted entities (ICD-10, CPT codes) against policy databases. Fine-tuned BERT for entity extraction, increasing accuracy by 23%. Deployed containerized ML/GenAI microservices using Docker and Amazon ECS.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "Enabled automation of 60% of claim intake processes, generating $2.3M in annual cost savings. Reduced manual document review time by 55%.",
        technicalPerformance: "Improved data accuracy by 92% and achieved 99.7% uptime for deployed microservices."
      }
    },
    {
      slug: "supply-chain-pricing-optimization",
      title: "Supply Chain Pricing Optimization",
      company: "Infosys",
      thumbnail: "https://images.unsplash.com/photo-1618060932014-4deda4932554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc2MzI4MjM5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "cyber security",
      problem: "Strengthening bid accuracy and revenue forecasting through predictive analytics for 50M+ transactions.",
      role: "Processed and harmonized 50M+ records using PySpark and SQL. Built ensemble regression models (XGBoost, LightGBM). Automated end-to-end workflows using AWS SageMaker and Databricks. Containerized models with Docker and deployed as Flask APIs on AWS ECS.",
      methodology: "Applied Bayesian optimization and SHAP for explainability and tuning. Integrated MLflow for experiment tracking and versioning. Implemented automated retraining and drift monitoring via Airflow.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "Achieved R² of 0.87 and reduced RMSE by 27%. Reduced model refresh time by 35%.",
        technicalPerformance: "Maintained >85% predictive accuracy during market fluctuations."
      }
    },
];

export type SkillCategory = {
  name: string;
  skills: Skill[];
};
export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const skillsData: SkillCategory[] = [
    {
      name: "Cloud & MLOps",
      skills: [
        { name: "AWS (SageMaker, Bedrock, Lambda, S3)", icon: AwsIcon },
        { name: "GCP Vertex AI", icon: Cloud },
        { name: "Docker", icon: DockerIcon },
        { name: "Kubernetes", icon: KubernetesIcon },
        { name: "MLflow", icon: GitMerge },
        { name: "CI/CD (GitHub Actions, Jenkins)", icon: RefreshCw },
      ]
    },
    {
      name: "Generative AI & LLMs",
      skills: [
        { name: "OpenAI GPT (3.5/4)", icon: BrainCircuit },
        { name: "Hugging Face Transformers", icon: ToyBrick },
        { name: "LangChain", icon: Webhook },
        { name: "LlamaIndex", icon: BookOpen },
        { name: "Prompt Engineering", icon: PencilRuler },
        { name: "RAG", icon: Layers3 },
        { name: "Fine-tuning & Embedding", icon: GitBranch },
        { name: "API Deployment", icon: Server },
      ]
    },
    {
      name: "Machine Learning & Deep Learning",
      skills: [
        { name: "TensorFlow", icon: TensorflowIcon },
        { name: "PyTorch", icon: Cpu },
        { name: "Scikit-learn", icon: ScikitLearnIcon },
        { name: "Keras", icon: Code },
        { name: "CNNs/RNNs", icon: LayoutGrid },
        { name: "Transfer Learning", icon: GitBranch },
        { name: "Feature Engineering", icon: PencilRuler },
        { name: "Model Evaluation", icon: BarChart }
      ]
    },
    {
      name: "Natural Language Processing (NLP)",
      skills: [
        { name: "Text Classification", icon: Code2 },
        { name: "Named Entity Recognition (NER)", icon: Code2 },
        { name: "Sentiment Analysis", icon: MessageCircle },
        { name: "Summarization", icon: Book },
        { name: "Conversational AI", icon: MessageCircle },
        { name: "Document Parsing & Q&A", icon: Code2 },
      ]
    },
    {
      name: "Databases & Data Engineering",
      skills: [
        { name: "PostgreSQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: HardDrive },
        { name: "ElasticSearch", icon: HardDrive },
        { name: "Pinecone (Vector DB)", icon: Database },
        { name: "Apache Spark", icon: Code2 },
        { name: "ETL Pipelines", icon: Code2 },
      ]
    },
    {
      name: "APIs & Integrations",
      skills: [
        { name: "RESTful APIs", icon: Webhook },
        { name: "OpenAI API", icon: BrainCircuit },
        { name: "Hugging Face API", icon: ToyBrick },
        { name: "FastAPI", icon: Webhook },
        { name: "Flask", icon: Webhook },
        { name: "Microservices", icon: Share2 },
      ]
    },
    {
      name: "Programming & Scripting",
      skills: [
        { name: "Python", icon: PythonIcon },
        { name: "SQL", icon: SqlIcon },
        { name: "R", icon: Terminal },
      ]
    },
    {
      name: "Collaboration & Dev Tools",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Code },
        { name: "GitLab", icon: Code },
        { name: "Jira", icon: Users },
        { name: "Confluence", icon: BookOpen },
        { name: "VS Code", icon: Code },
        { name: "Jupyter Notebook", icon: Book },
        { name: "Agile/Scrum", icon: Users },
      ]
    },
    {
      name: "Data Visualization & BI Tools",
      skills: [
        { name: "Tableau", icon: BarChart },
        { name: "Power BI", icon: BarChart },
        { name: "Matplotlib", icon: BarChart },
        { name: "Seaborn", icon: BarChart },
        { name: "Plotly", icon: BarChart },
      ]
    },
    {
        name: "Embedded Platform & Protocols",
        skills: [
          { name: "Arduino", icon: Cpu },
          { name: "Raspberry Pi", icon: Cpu },
          { name: "ESP32", icon: Cpu },
          { name: "Jetson Nano", icon: Cpu },
          { name: "I2C", icon: Share2 },
          { name: "SPI", icon: Share2 },
          { name: "UART", icon: Share2 },
        ],
      },
  ];

export const projectsData = [
    {
      title: "Fake News Detection Platform",
      category: "MLOps End-to-End",
      summary: "Built a fully operational fake news detection system leveraging NLP. Developed and deployed classification models using Amazon SageMaker, automating data ingestion via AWS Lambda and EventBridge to fetch real-time headlines every three days. The inference pipeline was served through a FastAPI backend on EC2, with performance tracked in MLflow. The frontend, crafted in Vue.js and Bootstrap, is hosted on GitHub Pages.",
      tools: ["AWS SageMaker", "Lambda", "EventBridge", "EC2", "FastAPI", "MLflow", "Vue.js", "Bootstrap", "GitHub Actions"],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "YOLOv5 Pothole Detection System",
      category: "Computer Vision",
      summary: "Designed and deployed a computer vision system using YOLOv5 to detect potholes in road images. Trained the model on over 2000 custom-labeled images using RTX 4060 GPU acceleration. Included a Tkinter-based GUI for image upload and real-time bounding box predictions.",
      tools: ["YOLOv5", "PyTorch", "OpenCV", "Tkinter", "NumPy", "RTX 4060 GPU"],
      links: {
        github: "#",
      },
    },
    {
      title: "GAN for Handwritten Digit Generation",
      category: "Generative AI",
      summary: "Implemented a Generative Adversarial Network (GAN) to generate synthetic handwritten digits using the MNIST dataset. The model was trained over 50,000 epochs, resulting in significantly improved image quality. Project showcases understanding of adversarial learning and generator-discriminator dynamics.",
      tools: ["TensorFlow", "Keras", "MNIST", "NumPy", "Matplotlib"],
      links: {
        medium: "#",
      },
    },
    {
      title: "LSTM Stock Price Predictor",
      category: "Time-Series & RNNs",
      summary: "Developed an LSTM-based recurrent neural network to predict Google stock prices using historical timestamp data. The model architecture utilized multiple LSTM layers with dropout regularization. Demonstrated effective time-series forecasting with a low Mean Squared Error (0.0015).",
      tools: ["TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
      links: {
        github: "#",
      },
    },
  ];
  
export const experienceData = [
    {
      title: "Software Engineer – AI/ML",
      company: "The Cigna Group",
      period: "Jun 2024 – Present, USA",
      impact: [
        "Enabled automation of 60% of claim intake, generating $2.3M in annual cost savings.",
        "Integrated GenAI (GPT/Bedrock) for clinical note summarization, reducing manual review by 55%.",
        "Deployed containerized ML/GenAI microservices using Docker/Amazon ECS, achieving 99.7% uptime."
      ],
    },
    {
      title: "AI/ML Engineer",
      company: "Infosys",
      period: "Apr 2022 – Jul 2023, Hyderabad, India",
      impact: [
        "Built ensemble regression models reducing pricing error (RMSE) by 27% (R²=0.87).",
        "Automated model workflows via AWS SageMaker/Databricks, cutting refresh time by 35%.",
        "Used MLflow for governance and Airflow for drift monitoring."
      ],
    },
    {
      title: "AI/ML Engineer INTERN",
      company: "SoftAge Group",
      period: "Sep 2021 – Mar 2022, Hyderabad, India",
      impact: [
        "Developed ML models predicting IT job failures, reducing downtime incidents by 25%.",
        "Used TensorFlow (LSTM/Isolation Forest) and MLflow.",
      ],
    },
];

export const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Fairfield University, Connecticut, USA",
      period: "2023-2024",
    },
    {
      degree: "Bachelor of Metallurgical and Materials Science",
      institution: "Mahatma Gandhi Institution of Technology, India",
      period: "2017-2021",
    },
];

export const socialLinks = {
    linkedin: "https://www.linkedin.com/in/rohithandanala357/",
    github: "https://github.com/rohithandanala",
};
