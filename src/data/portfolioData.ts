import { ProjectCaseStudy, StackCategory, CredentialItem, SectionScrollTarget } from '../types.ts';

export const NAVIGATION_TARGETS: SectionScrollTarget[] = [
  { id: 'hero', label: 'Overview', number: '01' },
  { id: 'statement', label: 'Thesis', number: '02' },
  { id: 'projects', label: 'Selected Work', number: '03' },
  { id: 'stack', label: 'Foundations', number: '04' },
  { id: 'credibility', label: 'Credentials', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];

export const HERO_DATA = {
  name: 'Aditya Pokkunuri',
  role: 'Agentic AI Solutions Architect',
  headline: 'Architecting Autonomous Cognitive Systems',
  subheading: 'Designing deterministic reasoning loops, multi-agent orchestrations, and resilient production infrastructure for enterprise intelligence.',
  location: 'San Francisco Bay Area & Remote',
  availability: 'Available for Select Advisory & Architecture',
  currentRole: 'OTTOBON Professional Services',
  currentRolePeriod: 'September 2025 – Present',
};

export const THESIS_DATA = {
  quote: "“I don't just prompt LLMs; I build systems that decide how to think.”",
  paragraphs: [
    "Raw frontier models are brilliant but non-deterministic reasoning engines. Without structured cognitive boundaries, self-correcting feedback loops, and deterministic state management, they remain fragile prototypes.",
    "My work bridges the chasm between experimental LLM demos and mission-critical production software. By implementing hexagonal multi-agent architectures, low-latency RAG pipelines, and deterministic guardrail layers, I engineer agentic solutions that reason reliably at scale."
  ],
  principles: [
    {
      num: '01',
      title: 'Deterministic State & Memory',
      desc: 'Decoupling LLM non-determinism from state machines, ensuring reliable multi-turn execution and replayable trace audits.'
    },
    {
      num: '02',
      title: 'Context-Aware Retrieval',
      desc: 'Engineering hybrid semantic-lexical search topologies with dynamic re-ranking to deliver precise factual grounding.'
    },
    {
      num: '03',
      title: 'Autonomous Self-Correction',
      desc: 'Embedding iterative reflection loops and automated verification passes before agent actions are committed.'
    }
  ]
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'sakhi',
    number: '01',
    title: 'Sakhi',
    subtitle: 'Maternal Health & Clinical Guidance Engine',
    clientOrOrg: 'Janmasethu Health Initiative',
    role: 'Lead — Agentic AI Solutions Architect',
    year: '2024',
    summary: 'Architected and led the design and development of a 24/7 vernacular healthcare guidance platform integrated directly into WhatsApp, delivering clinically vetted maternal and neonatal assistance across diverse regional communities.',
    architectureDetails: 'Led the end-to-end design and engineering of a multi-stage contextual RAG pipeline over verified medical literature. Implemented conversational memory with dialect-adaptive prompt routing, clinical safety fallbacks, and emergency escalation triggers.',
    keySpecs: [
      {
        label: 'Interface Channel',
        value: 'WhatsApp API',
        description: 'Zero-friction adoption on existing user devices with instant streaming responses.'
      },
      {
        label: 'Retrieval Topology',
        value: 'Hybrid Vector + Lexical',
        description: 'Sub-second search across curated medical protocols and local healthcare guidelines.'
      },
      {
        label: 'Clinical Safeguards',
        value: 'Deterministic Triage',
        description: 'Multi-layer safety filters routing high-risk symptoms to verified medical professionals.'
      }
    ],
    tags: ['Autonomous RAG', 'WhatsApp Business API', 'Multilingual Embeddings', 'Clinical Safety Guardrails', 'FastAPI'],
    liveUrl: 'https://janmasethu.com/sakhi',
    liveUrlLabel: 'janmasethu.com/sakhi',
    accentColor: '#B5502F',
    darkSection: false,
  },
  {
    id: 'talent-ops',
    number: '02',
    title: 'Talent Ops',
    subtitle: 'AI-Native HR & Operations Intelligence',
    clientOrOrg: 'OTTOBON Professional Services',
    role: 'Lead — Agentic AI Solutions Architect',
    year: 'September 2025 – Present',
    summary: 'Architected and led the development of an AI-native operations hub unifying task management, payroll automation, and real-time messaging for internal teams — currently scaling to 30+ active employees and a 25+ student cohort.',
    architectureDetails: 'Conceived and engineered the "Gatekeeper" system — an automated pipeline combining AI Vision for quality control with a behavioral performance engine, giving leadership real-time visibility into team adherence and performance.',
    keySpecs: [
      {
        label: 'Quality Control',
        value: 'Gatekeeper AI Vision',
        description: 'Automated AI Vision monitoring of team output and work quality.'
      },
      {
        label: 'Performance Engine',
        value: 'Behavioral Analytics',
        description: 'Real-time adherence and performance analytics for leadership visibility.'
      }
    ],
    tags: ['AI Vision QC', 'Behavioral Analytics', 'Operations Automation'],
    liveUrl: 'https://talent.ottobon.cloud/',
    liveUrlLabel: 'talent.ottobon.cloud',
    accentColor: '#6B7A4F',
    darkSection: true, // Alternate contrast section
  },
  {
    id: 'ottobon-jobs',
    number: '03',
    title: 'Ottobon Jobs',
    subtitle: 'Distributed Labor Market Intelligence & Hexagonal Harvester',
    clientOrOrg: 'OTTOBON Professional Services',
    role: 'Lead — Agentic AI Solutions Architect',
    year: 'September 2025 – Present',
    summary: 'Architected and led the development of a resilient job aggregation and intelligence engine with nightly ingestion from 20+ sources (job boards, ATS platforms, consulting firms), processing thousands of postings automatically with SHA-256 content-hash deduplication.',
    architectureDetails: 'Led a strict Hexagonal architecture integrating a hybrid matching engine (cosine similarity, skill-overlap, AI experience alignment), an AI career coach, and a mock interview evaluation engine. Secured by JWT authentication, Supabase RLS, and a rate-limited API gateway.',
    keySpecs: [
      {
        label: 'Source Adapters',
        value: '20+ Resilient Harvesters',
        description: 'Isolated plug-and-play adapter ecosystem resilient to dynamic DOM mutations.'
      },
      {
        label: 'Core Architecture',
        value: 'Hexagonal Domain Core',
        description: 'Strict separation of ingestion adapters, domain normalization, and query ports.'
      },
      {
        label: 'Intelligence Layer',
        value: 'Hybrid Matching Engine',
        description: 'OpenAI embeddings, skill-overlap analysis, and AI mock interview evaluations.'
      },
      {
        label: 'Infrastructure Security',
        value: 'JWT & Supabase RLS',
        description: 'Robust authentication with Row-Level Security and rate-limited API gateway.'
      }
    ],
    tags: ['Hexagonal Architecture', 'Distributed Harvesters', 'Schema Synthesis', 'pgvector', 'High-Throughput Ingestion'],
    liveUrl: 'https://jobs.ottobon.in',
    liveUrlLabel: 'jobs.ottobon.in',
    accentColor: '#B5502F',
    darkSection: false,
  }
];

export const STACK_CATEGORIES: StackCategory[] = [
  {
    category: 'Agent Orchestration & Cognitive State',
    number: '01',
    description: 'Frameworks for multi-agent choreography, cyclic state graphs, and deterministic tool execution.',
    skills: [
      { name: 'LangGraph & StateGraph', role: 'Cyclic Agent Choreography', context: 'Used in complex multi-step evaluation pipelines and self-correcting loops.' },
      { name: 'LangChain & LlamaIndex', role: 'Context Routing & Retrieval', context: 'Core pipeline abstractions for document indexing and ingestion.' },
      { name: 'CrewAI & AutoGen', role: 'Multi-Agent Collaboration', context: 'Role-specialized agent swarms with delegated task execution.' },
      { name: 'Deterministic State Machines', role: 'State Isolation', context: 'Decoupling reasoning non-determinism from mission-critical control flow.' },
    ]
  },
  {
    category: 'Frontier Models & Multimodal Reasoning',
    number: '02',
    description: 'Strategic model selection, prompt distillation, vision parsing, and latency-optimized routing.',
    skills: [
      { name: 'Claude 3.5 Sonnet / Opus', role: 'Complex Code & Deep Reasoning', context: 'Primary engine for nuanced architectural synthesis and multi-turn planning.' },
      { name: 'Gemini 1.5 / 2.0 Pro & Flash', role: 'Long-Context & Multimodal Analysis', context: 'Massive context windows for codebase-wide analysis and video evaluation.' },
      { name: 'GPT-4o & Specialized LLMs', role: 'Structured Outputs & Speed', context: 'Pydantic schema validation and rapid json tool-calling.' },
      { name: 'DeepSeek & Open Source Models', role: 'Local / Self-Hosted Inference', context: 'Cost-efficient offline batch processing and privacy-first deployments.' },
    ]
  },
  {
    category: 'Vector Memory & High-Performance RAG',
    number: '03',
    description: 'Hybrid search topologies, re-ranking models, and distributed vector storage.',
    skills: [
      { name: 'Qdrant & pgvector (PostgreSQL)', role: 'Vector Database Engine', context: 'Scalable dense vector search with payload metadata filtering.' },
      { name: 'Pinecone & FastEmbed', role: 'Serverless Indexing', context: 'Low-latency embeddings generation and instant cosine similarity retrieval.' },
      { name: 'Cohere & Cross-Encoder Rerankers', role: 'Context Re-ranking', context: 'Precision scoring to eliminate noise before context window ingestion.' },
      { name: 'Redis / Distributed Cache', role: 'Semantic & State Caching', context: 'Sub-millisecond query deduplication and active conversation state.' },
    ]
  },
  {
    category: 'Evaluation, Observability & Guardrails',
    number: '04',
    description: 'Continuous evaluation metrics, production trace logging, and deterministic safety enforcement.',
    skills: [
      { name: 'Ragas & DeepEval', role: 'Autonomous Evaluation Metrics', context: 'Continuous scoring of faithfulness, answer relevancy, and context precision.' },
      { name: 'Langfuse & OpenTelemetry', role: 'Production Tracing & Spans', context: 'Granular step-by-step latency, cost, and hallucination monitoring.' },
      { name: 'Guardrails AI & NeMo Guardrails', role: 'Input/Output Safety Rails', context: 'Deterministic PII sanitization, jailbreak protection, and topic boundaries.' },
      { name: 'Pydantic & Type-Safe Output', role: 'Structured Schema Enforcers', context: 'Strict typing for automated downstream database and API execution.' },
    ]
  }
];

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    number: '01',
    title: 'Claude Certified Architect (Professional)',
    issuer: 'Anthropic — Professional Certification',
    date: 'Verified Credential',
    description: 'Frontier Anthropic certification validating advanced mastery of Claude 3.5 model architectures, structured reasoning loops, context caching protocols, type-safe tool schemas, and production-grade agentic orchestration.',
    link: 'https://www.credly.com/badges/404f4376-8981-4eb3-bdab-a7ba941db24e/public_url',
    linkLabel: 'Verify on Credly'
  },
  {
    number: '02',
    title: 'Claude Code Partner',
    issuer: 'Anthropic — Partner Distinction',
    date: 'Verified Credential',
    description: 'Official Anthropic distinction recognizing verified technical excellence in Claude Code tooling, autonomous developer workflows, terminal & CLI orchestration, repository-scale context ingestion, and production code synthesis.',
    link: 'https://www.credly.com/badges/e8f72cdc-5c58-435a-9dfd-4a470e52c1e4/public_url',
    linkLabel: 'Verify on Credly'
  },
  {
    number: '03',
    title: 'Machine Learning Specialization',
    issuer: 'Duke University',
    date: 'Verified Certificate',
    description: 'Rigorous coursework spanning statistical learning, deep neural network optimization, vector embeddings, and mathematical foundations of modern AI.',
    link: 'https://www.coursera.org',
    linkLabel: 'View Duke ML Certification'
  },
  {
    number: '04',
    title: 'University Hackathon Champion',
    issuer: 'Collegiate AI Competitions',
    date: 'Verified Distinction',
    description: 'Won 2 of 3 university-wide hackathons, ranking in the top 35 among 190+ competing teams.'
  }
];

export const CONTACT_INFO = {
  email: 'adityapokkunuri@gmail.com',
  github: 'https://github.com/adityapokkunuri',
  linkedin: 'https://www.linkedin.com/in/adityapokkunuri',
  credlyArchitect: 'https://www.credly.com/badges/404f4376-8981-4eb3-bdab-a7ba941db24e/public_url',
  credlyCodePartner: 'https://www.credly.com/badges/e8f72cdc-5c58-435a-9dfd-4a470e52c1e4/public_url',
  credly: 'https://www.credly.com/badges/404f4376-8981-4eb3-bdab-a7ba941db24e/public_url',
  location: 'San Francisco, CA • Open to Global Engagements',
};
