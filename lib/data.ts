
import {
    BrainCircuit, Cloud, Code2, Database, GitMerge, Layers3, RefreshCw, Server, Webhook,
    Cpu, GitBranch, ToyBrick, BookOpen, LayoutGrid, BarChart, HardDrive, MessageCircle,
    PencilRuler, Share2, Terminal, Users, Code, Rocket, Eye, Bot, Book
  } from 'lucide-react';
import { AwsIcon, DockerIcon, KubernetesIcon, PythonIcon, ScikitLearnIcon, SqlIcon, TensorflowIcon } from "@/components/icons/brand-icons";

export const projects = [
    {
      slug: "portfolio-optimization-system",
      title: "Portfolio Optimization",
      company: "Bank of America",
      thumbnail: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzYzMjc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "data visualization",
      problem: "High-dimensional asset allocation for risk management and return maximization.",
      role: "Leveraged Bayesian Optimization and Genetic Algorithms for high-dimensional asset allocation.",
      methodology: "Leveraged Monte Carlo simulations to model over 10,000 scenarios and utilized AWS SageMaker Pipelines for automated training.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "15% Return Increase",
        technicalPerformance: "12% reduction in portfolio risk."
      }
    },
    {
      slug: "chronic-disease-prediction",
      title: "Disease Prediction",
      company: "Capgemini",
      thumbnail: "https://images.unsplash.com/photo-1618060932014-4deda4932554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc2MzI4MjM5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "cyber security",
      problem: "Overcoming data scarcity in training medical diagnostic models.",
      role: "Utilized GANs to generate synthetic medical images to train models when real-world labeled data was scarce.",
      methodology: "Automated ETL pipelines with Apache Airflow for data preprocessing and model retraining.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "20% Accuracy Boost",
        technicalPerformance: "Improved early detection rates."
      }
    },
];
  export const skillsColumns = [
    [
      {
        name: "Cloud & MLOps",
        skills: [
          "AWS: SageMaker, Lambda, EC2",
          "Tools: Docker, Kubernetes, MLflow",
          "Data: Spark, Kafka, SQL"
        ],
      },
    ],
    [
      {
        name: "AI & Deep Learning",
        skills: [
          "Models: CNN, RNN, Transformers, GANs",
          "Frameworks: PyTorch, TensorFlow, Keras",
          "GenAI: Agentic AI, Multi-agent workflows"
        ],
      },
    ]
  ];

export const projectsData = [
    {
      title: "IT Operations Anomaly Detection",
      category: "MLOps End-to-End",
      summary: "Processed over 10M daily telemetry logs with PySpark to derive operational features for anomaly detection.",
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
      period: "Jun 2024 – Current",
      impact: [
        "Developed a portfolio optimization system using Reinforcement Learning and Genetic Algorithms. Improved returns by 15% and reduced risk by 12% through Monte Carlo simulations."
      ],
    },
    {
      title: "AI/ML Engineer",
      company: "Capgemini",
      period: "Oct 2021 – Jul 2023",
      impact: [
        "Created a predictive analytics platform for chronic diseases. Enhanced prediction accuracy by 20% using Keras and PyTorch."
      ],
    },
    {
      title: "AI/ML Engineer INTERN",
      company: "SoftAge Group",
      period: "Mar 2021 – Sep 2021",
      impact: [
        "Predicted IT job failures using LSTM-based forecasting and Isolation Forest models in TensorFlow."
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
