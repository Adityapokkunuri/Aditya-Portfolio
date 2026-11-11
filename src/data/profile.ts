export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  type: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const PROFILE = {
  name: "Aditya Pokkunuri",
  monogram: "AP.",
  positioning: "Technical Product Owner | AI Systems & Enterprise Solutions",
  shortBio:
    "I’m Aditya, a Technical Product Owner working with engineering teams from architecture and development through deployment and production support.",
  aboutCopy:
    "My experience spans operational software, AI integration, and hands-on delivery with engineering teams. I’ve worked on new applications, extended an inherited system, and stayed involved through deployment and production support.",
  email: "adityapokkunuri@gmail.com",
  phone: "+91-7207180691",
  location: "Visakhapatnam, India",
  linkedInUrl: "https://www.linkedin.com/in/adityapokkunuri",
  githubUrl: "https://github.com/adityapokkunuri",
  resumePath: "/resume/Aditya-Pokkunuri-Resume.pdf",
  domains: ["Operations", "Recruitment", "Healthcare", "Field mobility"],
  responsibilities: ["Architecture", "Team delivery", "Deployment", "Production support"],
  
  experience: [
    {
      company: "OTTOBON Professional Services",
      role: "Agentic AI Engineer & Technical Product Owner",
      period: "July 2025 – Present",
      location: "Visakhapatnam, India",
      description:
        "Architect and deliver agentic AI systems across HR operations, field-force management, healthcare communication, and recruitment, combining RAG pipelines, dual-LLM routing, and multi-agent orchestration.",
      achievements: [
        "Designed a dual-LLM routing architecture — Meta-Llama 3 (8B) for low-latency local governance paired with OpenAI GPT-4o for complex reasoning — balancing cost, latency, and accuracy in production.",
        "Built full-stack HR modules (task management, payroll automation, real-time messaging) and a RAG-powered WhatsApp healthcare chatbot with semantic search over the WhatsApp Business API.",
        "Architected a configurable, multi-tenant Enterprise HRMS & Field Force Management platform with geofenced attendance, GPS-verified field visits, and live operations tracking, deployable across industries.",
        "Architected an AI-native job platform automating nightly ingestion from 20+ sources, AI-driven job enrichment, hybrid résumé-to-job matching, and AI mock interview evaluation.",
        "Engineered AI Vision-based quality control and behavioral performance analytics, scaling platforms to 30+ employees, a 25+ student cohort, and thousands of automatically processed job postings."
      ]
    }
  ],

  credentials: [
    {
      title: "Claude Certified Architect – Professional",
      issuer: "Anthropic",
      type: "Certification",
      description: "Partner Program credential for architecting and leading enterprise-scale Claude deployments, integrations, and responsible AI governance."
    },
    {
      title: "Claude Certified Developer – Foundations",
      issuer: "Anthropic",
      type: "Certification",
      description: "Credential for building applications with Claude, covering the API, prompt engineering, and tool use."
    },
    {
      title: "Machine Learning Certification: Introduction to Machine Learning",
      issuer: "Duke University",
      type: "Course Credential",
      description: "Foundational machine learning techniques, model evaluation, and computational theory."
    },
    {
      title: "University Hackathon Champion",
      issuer: "GITAM University",
      type: "Honor",
      description: "Won 2 of 3 university-wide hackathons; Top 35 rank among 190+ competing teams."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "GITAM University",
      location: "Visakhapatnam, India",
      period: "Oct 2021 – Apr 2025"
    }
  ]
};
