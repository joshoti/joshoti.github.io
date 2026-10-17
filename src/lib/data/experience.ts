const ringExperience = {
	company: 'Amazon Ring',
	role: 'Failure Analysis Engineer',
	date: '09/2026 - Present',
	summary:
		'Conduct failure analysis on returned smart home devices to identify root causes and drive corrective actions. Utilize advanced electrical and physical FA tools to troubleshoot consumer electronics at the PCB level, partnering with contract manufacturers to improve quality.',
	bullets: [
		'Perform electrical fault isolation and physical failure analysis (including precision cross-sectioning, parallel lapping, and chemical deprocessing) using advanced tools like SEM, EDX, XRF, FTIR, and X-ray-CT to identify failure locations and root causes.',
		'Troubleshoot consumer electronics—such as smart doorbell cameras, motion sensors, and security cameras—at the PCB and component level by reading circuit schematics, reviewing layouts, and driving cases from discovery to corrective action.',
		'Collaborate with contract manufacturers (CM) and OEMs to implement corrective actions, enhance manufacturing processes, and leverage deep knowledge of reliability stress tests, CMOS devices, and IC assembly.'
	],
	techs: [
		'Failure Analysis',
		'Electrical Fault Isolation',
		'SEM / EDX',
		'PCB Troubleshooting',
		'X-ray',
		'Consumer Electronics',
		'Circuit Analysis',
		'Reliability Testing'
	],
	domains: ['Hardware Engineering', 'Failure Analysis']
};

const easleyDunnExperience = {
	company: 'Easley-Dunn Productions Inc.',
	role: 'Software Development Engineer',
	date: '07/2026 - 09/2026',
	summary:
		'Develop user interfaces, core gameplay systems, and backend integrations for the game Robot Race. Working primarily in Unity, I build and debug the supporting systems that connect frontend game client mechanics with backend services.',
	bullets: [
		'Implement user interface screens, HUD elements, and core gameplay mechanics for the Robot Race title using Unity.',
		'Develop supporting systems that connect the frontend game client with backend servers for data persistence and remote services.',
		'Debug cross-stack gameplay features, ensuring reliable performance and synchronization between the client logic and backend infrastructure.'
	],
	techs: [
		'Unity',
		'C#',
		'Gameplay Programming',
		'Backend Integration',
		'UI Implementation',
		'Game Architecture'
	],
	domains: ['Software Engineering', 'Game Development']
};

const autodeskExperience = {
	company: 'Autodesk',
	role: 'Machine Learning Engineer Intern',
	date: '05/2025 - 08/2025',
	summary:
		'Owned an enterprise GenAI platform using FastAPI, Azure OpenAI, and AWS S3 to automate workflows. I designed agentic LLM pipelines to optimize reasoning and engineered a gamified Vue.js frontend with SSO, driving a 20% increase in user participation.',
	bullets: [
		'Owned the end-to-end lifecycle of an enterprise GenAI content platform using a FastAPI backend, Azure OpenAI, and AWS S3, automating workflows to save 10+ hours weekly.',
		'Designed dynamic LLM pipelines incorporating few-shot prompting strategies to significantly optimize generative model reasoning and image output quality.',
		'Engineered a responsive Vue.js gamified frontend with enterprise SSO integration, driving a 20% increase in user participation through seamless, multi-device accessibility.'
	],
	techs: [
		'FastAPI',
		'Vue.js',
		'Azure AI Foundry',
		'Azure OpenAI (GPT-4o, GPT-Image-2)',
		'AWS S3',
		'Enterprise SSO'
	],
	domains: ['Generative AI', 'Software Engineering'],
	linkUrl:
		'https://www.linkedin.com/posts/nancyj95_autodesklife-ugcPost-7472403423410257920-w5L7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLVX9gBSR259XhkSu6xtnwBGy8QgMZ11Jg',
	linkLabel: 'View Launch Post'
};

const phasecurveExperience = {
	company: 'Phasecurve Technologies Ltd',
	role: 'Software Engineer',
	date: '11/2022 - 09/2024',
	summary:
		'Architected a cloud-based ETL backend and event-driven data pipelines using Azure, Flask, and serverless functions. I automated Docker CI/CD deployments and optimized asynchronous content processing, reducing backend latency by 80% while autoscaling to handle 3x traffic bursts.',
	bullets: [
		'Architected a cloud-based ETL and analytics backend using Azure SQL and Flask microservices on Azure App Services, implementing autoscaling to absorb sudden 3x traffic spikes on a fintech platform.',
		'Engineered event-driven data pipelines using Azure Serverless Functions and Azure Queues for asynchronous social media data extraction, implementing exponential backoff to reliably handle strict third-party API rate limits.',
		'Automated CI/CD pipelines leveraging GitHub Actions and Docker, containerizing services to ensure reliable deployments and cutting deployment time by 50%.',
		'Optimized content uploads with multi-threading and asynchronous processing, reducing backend response latency by 80%, and integrated Azure Application Insights for telemetry monitoring to rapidly diagnose pipeline failures.',
		'Led the migration from Mailgun API to Gmail API, optimizing the email routing service and significantly reducing operational costs.'
	],
	techs: [
		'Azure App Services',
		'Azure Serverless',
		'Flask',
		'ETL',
		'Docker',
		'GitHub Actions',
		'CI/CD'
	],
	domains: ['Cloud Architecture', 'Software Engineering', 'Data Engineering']
};

const rehboxExperience = {
	company: 'ReHboX',
	role: 'Machine Learning Engineer',
	date: '06/2021 - 02/2022',
	summary:
		'Developed real-time computer vision algorithms for edge devices using Python and OpenCV. I built predictive Scikit-learn models alongside interactive data dashboards to analyze market opportunities, and coauthored technical design documents to streamline engineering sprint workflows.',
	bullets: [
		'Developed and deployed a real-time computer vision algorithm for edge devices to analyze human pose from camera inputs utilizing Python and OpenCV.',
		'Built a predictive machine learning model using Scikit-learn alongside an interactive data dashboard, providing actionable insights on the Total Addressable Market (TAM).',
		'Coauthored 6 technical design documents, aligning engineering workflows with user stories to streamline development sprints and cut meeting times by 15%.'
	],
	techs: ['Python', 'OpenCV', 'Computer Vision', 'Scikit-learn', 'Edge Computing'],
	domains: ['HealthTech', 'Machine Learning', 'Software Engineering']
};

export {
	ringExperience,
	easleyDunnExperience,
	autodeskExperience,
	phasecurveExperience,
	rehboxExperience
};
