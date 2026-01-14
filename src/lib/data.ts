
import {
    BrainCircuit, Cloud, Code2, Database, GitMerge, Layers3, RefreshCw, Server, Webhook,
    Cpu, GitBranch, ToyBrick, BookOpen, LayoutGrid, BarChart, HardDrive, MessageCircle,
    PencilRuler, Share2, Terminal, Users, Code, Rocket, Eye, Bot, Book
  } from 'lucide-react';
import { AwsIcon, DockerIcon, KubernetesIcon, PythonIcon, ScikitLearnIcon, SqlIcon, TensorflowIcon } from "@/components/icons/brand-icons";

export const projects = [
    {
      slug: "portfolio-optimization-system",
      title: "Portfolio Optimization System",
      company: "Bank of America",
      thumbnail: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzYzMjc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "data visualization",
      problem: "Reducing investment risk and enhancing returns through advanced computational models.",
      role: "Built a hybrid system using Genetic Algorithms for diversification and Reinforcement Learning for dynamic rebalancing. Deployed via AWS SageMaker Pipelines.",
      methodology: "Leveraged Monte Carlo simulations to model over 10,000 scenarios and utilized Bayesian Optimization to maximize returns while minimizing volatility.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "15% Return Increase",
        technicalPerformance: "12% reduction in portfolio risk."
      }
    },
    {
      slug: "chronic-disease-prediction",
      title: "Chronic Disease Prediction",
      company: "Capgemini",
      thumbnail: "https://images.unsplash.com/photo-1618060932014-4deda4932554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc2MzI4MjM5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "cyber security",
      problem: "Developing a healthcare platform for early detection of diabetes and heart disease.",
      role: "Developed a healthcare platform for early detection of diabetes and heart disease. Automated retraining with Apache Airflow and utilized GANs for synthetic medical imaging.",
      methodology: "Employed GANs to generate synthetic medical images (X-rays/MRIs) to train disease prediction models when real-world labeled data was scarce.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "20% Accuracy Boost",
        technicalPerformance: "Improved early detection rates for chronic diseases."
      }
    },
];
  export const skillsColumns = [
    [
      {
        name: "ML & Deep Learning",
        skills: ["TensorFlow, PyTorch, Keras", "Scikit-learn, XGBoost", "CNN, RNN, GANs"],
      },
      {
        name: "Generative AI",
        skills: ["Agentic AI, LLMs", "Multi-agent workflows", "Transformers, Hugging Face"],
      },
    ],
    [
      {
        name: "Cloud & MLOps",
        skills: ["AWS (SageMaker), GCP, Azure", "Docker, Kubernetes, MLflow", "CI/CD"],
      },
      {
        name: "Data & Programming",
        skills: ["Python, R, SQL", "Apache Spark, Kafka", "Power BI, Tableau"],
      },
    ]
  ];

export const projectsData = [
    {
      title: "IT Anomaly Detection",
      category: "MLOps End-to-End",
      summary: "Processed 10M+ daily telemetry logs using PySpark and Isolation Forest for real-time failure prediction.",
      tools: ["PySpark", "SQL", "LSTM", "Isolation Forest", "TensorFlow"],
      links: {
      },
    },
    {
      title: "Agentic AI Systems",
      category: "Generative AI",
      summary: "Expertise in designing and deploying agentic AI and LLM-driven applications using frameworks for multi-agent workflows to enhance automation.",
      tools: ["Agentic AI", "LLM", "Multi-agent workflows"],
      links: {
      },
    },
    {
      title: "Computer Vision Diagnostics",
      category: "Computer Vision",
      summary: "Applied CNNs and transformers for complex image classification and object detection using OpenCV and YOLO.",
      tools: ["CNNs", "Transformers", "OpenCV", "YOLO"],
      links: {
      },
    },
  ];
  
export const experienceData = [
    {
      title: "AI/ML Engineer",
      company: "Bank of America",
      period: "Jun 2024 – Present, USA",
      impact: [
        "Optimized asset allocation using Reinforcement Learning and Genetic Algorithms, reducing risk by 12% and improving returns by 15%."
      ],
    },
    {
      title: "AI/ML Engineer",
      company: "Capgemini",
      period: "Oct 2021 – Jul 2023, India",
      impact: [
        "Built deep learning models in Keras & PyTorch to predict chronic disease risk, enhancing accuracy by 20%."
      ],
    },
    {
      title: "AI/ML Engineer INTERN",
      company: "SoftAge Group",
      period: "Mar 2021 – Sep 2021, India",
      impact: [
        "Developed LSTM forecasting models in TensorFlow to predict IT job failures, reducing downtime by 25%."
      ],
    },
];

export const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Sacred Heart University, Connecticut, USA",
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
    email: "mailto:rohitha5241@gmail.com",
    phone: "tel:+12032853970"
};
