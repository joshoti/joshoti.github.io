const coursePilotProject = {
	title: 'CoursePilot',
	summary:
		'I built a full-stack AI productivity platform that automates academic workflows. It features an automated ingestion pipeline using Claude Sonnet and OCR for 100% accurate calendar syncing, alongside a hallucination-free RAG assistant and a generative engine for custom flashcards.',
	bullets: [
		'Architected and deployed a full-stack AI productivity platform featuring a context-aware RAG Chat Assistant and generative study tools.',
		'Developed an automated ingestion pipeline utilizing Claude Sonnet and OCR to parse unstructured syllabi and handwritten notes into structured JSON.',
		"Integrated a 'human-in-the-loop' review interface to ensure 100% calendar event accuracy.",
		'Engineered a RAG AI Assistant capable of executing natural language UI navigation and exact document citations.',
		'Built a generative AI engine to dynamically synthesize customized, spaced-repetition flashcards directly from user-uploaded notes.'
	],
	domains: ['Generative AI', 'Software Engineering'],
	techs: ['React', 'Python', 'Claude Sonnet', 'Firebase', 'RAG', 'OCR']
};

const autonomousDataAgent = {
	title: 'Autonomous Data Agent',
	summary:
		'Engineered an agentic web application for natural-language data analysis. Using DeepSeek-R1 and Qwen3, it routes intents through a hybrid SQL/vector RAG pipeline, integrating MCP for safe execution and RAGAS to validate trajectories and ensure factual accuracy.',
	bullets: [
		'Engineered an agentic web application enabling natural-language querying, automated tool routing, and interactive data analysis over a large-scale movie dataset.',
		'Architected a hybrid search pipeline (RAG) combining structured SQL queries (SQLite) with semantic vector retrieval (ChromaDB), orchestrated by DeepSeek-R1 and Qwen3 LLMs for intent routing.',
		'Integrated Model Context Protocol (MCP) tool interfaces to enable safe, programmatic database execution and automated self-correction on complex queries.',
		'Validating agent decision trajectories and answer generation quality using the RAGAS evaluation framework to prevent model hallucinations and ensure factual accuracy.'
	],
	domains: ['Generative AI', 'Software Engineering', 'Machine Learning'],
	techs: ['Python', 'React', 'DeepSeek-R1', 'Qwen3', 'RAG', 'SQLite', 'ChromaDB', 'MCP', 'RAGAS']
};

const devPortalX = {
	title: 'DevPortalX',
	summary:
		'Engineered an enterprise developer portal and centralized Identity Provider using React and Spring Boot. I architected a custom OAuth 2.0 server for SSO, secured endpoints with JWT RBAC, and integrated DynamoDB to provide scalable API analytics and provisioning.',
	bullets: [
		'Engineered an enterprise developer portal and centralized Identity Provider (IdP) using React and Spring Boot to manage third-party API integrations.',
		'Architected a custom OAuth 2.0 authorization server utilizing Spring Security to enable Single Sign-On (SSO) for external client applications.',
		'Implemented role-based access controls (RBAC) by issuing and validating JWTs to secure API endpoints and user data.',
		'Integrated DynamoDB for highly scalable data storage alongside analytics tooling, providing end-users with actionable API usage metrics and streamlined API key provisioning.'
	],
	techs: [
		'React',
		'Java',
		'Spring Boot',
		'OAuth 2.0',
		'DynamoDB',
		'Spring Security',
		'JWT',
		'SSO',
		'RBAC'
	],
	domains: ['Software Engineering', 'Identity & Access Management (IAM)', 'API Security']
};

const distributedHealthcareNetwork = {
	title: 'Distributed Healthcare Network',
	summary:
		'Architected a multi-tier distributed healthcare network in C++ for high-throughput data routing. I managed concurrent TCP/UDP connections, secured PII with SHA-256 for HIPAA compliance, and programmed low-level Unix sockets with custom signal handlers for fault-tolerant operation.',
	bullets: [
		'Architected a multi-tier distributed network comprising a client UI, central router, and three scalable backend services to optimize high-throughput data routing.',
		'Managed concurrent TCP client connections and routed backend queries via UDP sockets, securing sensitive PII/PHI with SHA-256 cryptographic hashing for HIPAA compliance.',
		'Programmed low-level Unix socket routines and custom signal handlers to automate child process reaping, preventing memory leaks and ensuring fault-tolerant socket teardowns.'
	],
	techs: ['C++', 'Unix Sockets', 'TCP/UDP', 'SHA-256', 'Distributed Systems'],
	domains: ['Systems Engineering', 'Software Engineering']
};

const concurrentRequestOrchestrator = {
	title: 'Concurrent Request Orchestrator',
	summary:
		'Engineered a multithreaded C resource orchestrator with a React dashboard to visualize OS-level task scheduling. Using POSIX threads, mutexes, and condition variables, I prevented race conditions, ensured atomic queue access, and enabled real-time monitoring of pipeline bottlenecks.',
	bullets: [
		'Engineered a multithreaded resource orchestrator in C with a React frontend to visualize and optimize OS-level task scheduling and concurrency control.',
		'Programmed POSIX threads (pthreads), mutexes, and condition variables to manage thread synchronization, preventing race conditions and guaranteeing atomic access to shared job queues.',
		'Developed a real-time React dashboard to monitor system throughput, buffer occupancy, and thread activity, enabling the rapid identification and resolution of pipeline bottlenecks.'
	],
	techs: ['C', 'React', 'POSIX', 'pthreads'],
	domains: ['Systems Engineering', 'Software Engineering']
};

const llmFineTuningBiasOptimization = {
	title: 'LLM Fine-Tuning & Bias Optimization',
	summary:
		'Benchmarked Llama 3.2-3B architectures to quantify trade-offs between sentiment accuracy and social safety. I engineered custom LoRA adapters with 0.18% trainable parameters for efficient A100 fine-tuning, and evaluated bias shifts using StereoSet metrics to discover prompt safety maximizations.',
	bullets: [
		'Benchmarked and optimized decoder (Llama 3.2-3B) and encoder (RoBERTa/DeBERTa) architectures to quantify and evaluate trade-offs between sentiment accuracy and social safety.',
		'Engineered custom LoRA adapters targeting 7 projection layers with 0.18% trainable parameters, enabling highly efficient fine-tuning on A100 GPUs.',
		'Evaluated language model stability and bias shifts using StereoSet metrics (ICAT, LMS, SS) across multiple in-context learning techniques, discovering that 8-shot prompting optimally maximized safety scores.'
	],
	techs: ['PyTorch', 'Transformers', 'Llama 3.2', 'LoRA', 'NLP', 'StereoSet'],
	domains: ['Generative AI', 'Machine Learning']
};

const appliedMachineLearningPortfolio = {
	title: 'Applied Machine Learning Portfolio',
	summary:
		'Developed a comprehensive machine learning portfolio tackling high-dimensional data challenges. I engineered specialized pipelines spanning regularized linear models, tree-based ensembles with SMOTE for class imbalances, and deep learning architectures like transfer-learning networks for image classification.',
	bullets: [
		'Architected a comprehensive portfolio of machine learning solutions across diverse problem spaces, spanning the full ML lifecycle from foundational statistical models to advanced deep learning architectures.',
		'Established robust predictive baselines and feature extraction frameworks, implementing regularized linear models (Logistic, LASSO, Ridge) and time-domain processing for multi-sensor data.',
		'Overcame class imbalances and complex distributions in specialized datasets by engineering ensemble systems (Random Forests, XGBoost) with SMOTE oversampling and cost-complexity pruning to prevent overfitting.',
		'Built active learning and semi-supervised self-training pipelines using L1-penalized SVMs and Monte Carlo simulations, benchmarking label efficiency against unsupervised Spectral Clustering.',
		'Applied transfer learning to pre-trained vision models (EfficientNetV2, ResNet-50), optimizing feature extraction to achieve high classification accuracy on image datasets.'
	],
	techs: [
		'TensorFlow',
		'Scikit-Learn',
		'Statsmodels',
		'Deep Learning',
		'Transfer Learning',
		'XGBoost',
		'Random Forests',
		'SVM',
		'Time Series',
		'SMOTE'
	],
	domains: ['Applied Machine Learning', 'Deep Learning', 'Computer Vision']
};

const buildr = {
	title: 'Buildr',
	summary:
		'Developed a cloud-native construction platform unifying 360° hardware capture with automated QA/QC workflows. I built a serverless visual pipeline on Google Cloud using Python, React, PostgreSQL, and Docker to analyze site imagery and accurately detect building errors.',
	bullets: [
		'Developed a cloud-native construction platform that unified hardware data capture with automated QA/QC workflows, improving user satisfaction by 50%.',
		'Engineered the visual data pipeline, evolving a custom image-stitching process into a streamlined integration with specialized 360° camera hardware.',
		'Built full-stack features using Python, React, and PostgreSQL to ingest site imagery and automate building error detection.',
		'Deployed a highly scalable, serverless architecture on Google Cloud utilizing Docker, Cloud Run, and Cloud Storage for persistent image management.'
	],
	techs: [
		'Python',
		'React',
		'PostgreSQL',
		'GCP',
		'Docker',
		'Cloud Run',
		'Cloud Storage',
		'Image Stitching'
	],
	domains: ['Software Engineering', 'Hardware Engineering']
};

const biometricPOS = {
	title: 'Biometric POS System',
	summary:
		'Engineered a biometric-authenticated Point of Sale system on Google Cloud, reducing checkout times by 72%. I integrated edge-device biometrics with banking APIs for instantaneous transactions, and built a QML/Python UI bridging high-level logic with C++ hardware scanning.',
	bullets: [
		'Engineered a biometric-authenticated, cloud-connected Point of Sale (POS) system on GCP, reducing average cafeteria checkout times by 72% and eliminating physical currency dependencies.',
		'Integrated edge-device student biometric data with external banking APIs to facilitate seamless, secure, and instantaneous transaction settlements.',
		'Developed a highly responsive user interface using QML and Python, bridging high-level logic with optimized C++ hardware integration for rapid biometric scanning and data processing.'
	],
	techs: ['Python', 'C++', 'QML', 'Google Cloud', 'Biometrics'],
	domains: ['Systems Engineering', 'Software Engineering', 'Hardware Engineering']
};

const electricalInstrumentationPortfolio = {
	title: 'Electrical Design & Instrumentation',
	summary:
		'Developed practical expertise in the hardware prototyping lifecycle, from PCB schematic capture to CNC machining and precision soldering. I utilized oscilloscopes and logic analyzers to verify signal integrity, bridging theoretical electrical principles with physical implementation.',
	bullets: [
		'Designed and prototyped custom electronic circuits, translating concepts into physical hardware via PCB schematic capture, CNC machining, and precision soldering.',
		'Validated signal integrity and debugged hardware architectures using diagnostic equipment, including oscilloscopes and logic analyzers.',
		'Bridged theoretical electrical principles with practical application by executing the hardware lifecycle from design and physical fabrication to testing and measurement.'
	],
	techs: [
		'PCB Schematic Capture',
		'Soldering',
		'Oscilloscopes',
		'Logic Analyzers',
		'CNC Machining',
		'Instrumentation'
	],
	domains: ['Hardware Engineering', 'Electronics']
};

const allProjects = [
	coursePilotProject,
	autonomousDataAgent,
	devPortalX,
	distributedHealthcareNetwork,
	concurrentRequestOrchestrator,
	llmFineTuningBiasOptimization,
	appliedMachineLearningPortfolio,
	buildr,
	biometricPOS,
	electricalInstrumentationPortfolio
];

const featuredProjects = [
	autonomousDataAgent,
	llmFineTuningBiasOptimization,
	devPortalX,
	distributedHealthcareNetwork
];

const genAiProjects = allProjects.filter((p) => p.domains.includes('Generative AI'));
const softwareProjects = allProjects.filter((p) => p.domains.includes('Software Engineering'));
const machineLearningProjects = allProjects.filter((p) => p.domains.includes('Machine Learning'));
const systemsProjects = allProjects.filter((p) => p.domains.includes('Systems Engineering'));
const hardwareProjects = allProjects.filter((p) => p.domains.includes('Hardware Engineering'));

export const featuredCategory = { name: 'Featured Projects', projects: featuredProjects };
export const projectCategories = [
	{ name: 'Generative AI', projects: genAiProjects },
	{ name: 'Software Engineering', projects: softwareProjects },
	{ name: 'Machine Learning', projects: machineLearningProjects },
	{ name: 'Systems Engineering', projects: systemsProjects },
	{ name: 'Hardware', projects: hardwareProjects }
];
