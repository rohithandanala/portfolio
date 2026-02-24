import { AwsIcon, DockerIcon, KubernetesIcon, PythonIcon, ScikitLearnIcon, SqlIcon, TensorflowIcon } from "@/components/icons/brand-icons";

export const projects = [
    {
      slug: "portfolio-optimization-system",
      title: "Portfolio Optimization",
      company: "Bank of America",
      thumbnail: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzYzMjc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailHint: "data visualization",
      problem: "High-dimensional asset allocation for risk management and return maximization.",
      role: "Production-grade AI pipelines and MLOps using Docker and Kubernetes for intelligent decision automation.",
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
      problem: "Bridging the gap between legacy EPIC systems and modern AI using FHIR-compliant Dataflow pipelines.",
      role: "Architected clinical risk stratification models on Vertex AI and integrated EPIC EHR data using FHIR and HL7 protocols.",
      methodology: "Automated ETL pipelines with Google Cloud Dataflow for scalable healthcare data transformations.",
      architectureImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG93JTIwY2hhcnR8ZW58MHx8fHwxNzYzMzAzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      architectureImageHint: "flow chart",
      results: {
        businessImpact: "20% Accuracy Boost",
        technicalPerformance: "Improved early detection rates using Vertex AI clinical risk stratification."
      }
    },
];

export const skillsColumns = [
    [
      {
        name: "Healthcare & AI",
        skills: [
          "▸ Standards: FHIR, HL7, EPIC",
          "▸ ML Stack: Vertex AI, PyTorch",
          "▸ GenAI: Agentic AI, Gemini, RAG",
          "▸ Logic: LangChain, Multi-agent"
        ],
      },
    ],
    [
      {
        name: "Core Engineering",
        skills: [
          "▸ ETL: Google Cloud Dataflow",
          "▸ MLOps: Kubeflow, MLflow, CI/CD",
          "▸ Cloud: GKE, Cloud Run, Cloud Build",
          "▸ Data: BigQuery, SQL, Spark"
        ],
      },
    ]
  ];

export const projectsData = [
    {
      title: "Healthcare Interoperability",
      category: "Healthcare AI",
      summary: "Bridging the gap between legacy EPIC systems and modern AI using FHIR-compliant Dataflow pipelines.",
      tools: ["Vertex AI", "Dataflow", "FHIR", "EPIC"],
      links: {},
    },
    {
      title: "Portfolio Optimization",
      category: "MLOps End-to-End",
      summary: "Reinforcement Learning for dynamic asset rebalancing and portfolio management.",
      tools: ["SageMaker", "Docker", "Kubernetes", "RL"],
      links: {},
    },
    {
      title: "Agentic AI Systems",
      category: "Generative AI",
      summary: "Designing multi-agent workflows to automate enterprise data processing and document intelligence.",
      tools: ["Agentic AI", "LLM", "Multi-agent"],
      links: {},
    },
  ];
  
export const experienceData = [
    {
      title: "AI/ML Engineer",
      company: "Bank of America",
      period: "Jun 2024 – Current",
      impact: [
        "Production-grade AI pipelines and MLOps using Docker and Kubernetes for intelligent decision automation.",
        "Optimized asset allocation using Reinforcement Learning and Genetic Algorithms, reducing risk by 12%."
      ],
    },
    {
      title: "AI/ML Engineer",
      company: "Capgemini",
      period: "Oct 2021 – Jul 2023",
      impact: [
        "Data Interoperability: Built secure pipelines for EPIC integration using FHIR and HL7 standards.",
        "ETL Engineering: Designed high-throughput medical data processing exclusively using Google Cloud Dataflow.",
        "Production AI: Deployed clinical decision support models on Vertex AI, focused on patient risk stratification."
      ],
    },
    {
      title: "AI/ML Engineer INTERN",
      company: "SoftAge Group",
      period: "Mar 2021 – Sep 2021",
      impact: [
        "Predicted IT job failures using LSTM-based forecasting and Isolation Forest models in TensorFlow.",
        "Processed over 10M daily telemetry logs with PySpark to derive operational features for anomaly detection."
      ],
    },
];

export const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Sacred Heart University, USA",
      period: "2023-2024",
    },
    {
      degree: "Bachelor of Metallurgical and Materials Science",
      institution: "MGIT, India",
      period: "2017-2021",
    },
];

export const socialLinks = {
    linkedin: "https://www.linkedin.com/in/rohithandanala357/",
    github: "https://github.com/rohithandanala",
    email: "mailto:rohitha5241@gmail.com",
    phone: "tel:+12032853970"
};
