export interface ProjectSection {
  id: string;
  title: string;
  content: string[];
}

export interface ProjectData {
  slug: string;
  number: string;
  name: string;
  title: string;
  shortDescription: string;
  role: string;
  previewBg: string; // Tailored subtle background matching mockup
  accentColor: string;
  summary: string;
  context: string[];
  responsibility: string[];
  decisions: {
    title: string;
    paragraphs: string[];
  };
  validation: string[];
  takeaway: string[];
  cautionNote?: string;
  diagramType: 'talent-ops' | 'ottobon-jobs' | 'sakhi' | 'fsm';
  prevSlug: string;
  prevName: string;
  nextSlug: string;
  nextName: string;
}

export const PROJECTS: ProjectData[] = [
  {
    slug: 'talent-ops',
    number: '01',
    name: 'TALENT OPS',
    title: 'Connecting workflows. Governing AI.',
    shortDescription: 'Operational workflows and a local-model gateway.',
    role: 'Technical direction + team delivery',
    previewBg: '#E8EFE9', // Pale sage
    accentColor: '#14685D',
    summary:
      'Connecting operational workflows with an intelligent model gateway, balancing internal local execution with external reasoning fallback.',
    context: [
      'Talent Ops began with existing workflows spread across spreadsheets, payroll records, and communication channels.',
      'The challenge was to bring these activities together while preserving the relationships between employee records, attendance, tasks, compensation, and reporting responsibilities.'
    ],
    responsibility: [
      'I led the product’s technical direction and worked alongside my team to connect these workflows through task management, attendance-linked payroll, messaging, and performance tracking.',
      'Changes to attendance or task records could affect downstream calculations, while access needed to reflect each user’s responsibilities.'
    ],
    decisions: {
      title: 'Model gateway decision',
      paragraphs: [
        'We introduced a model gateway combining OpenAI with a locally hosted Llama model. Initially, approximately 90% of queries went to OpenAI and 10% to the local model.',
        'The external-model path used retrieval over organizational knowledge with configured guardrails. Recurring operational queries were progressively handled within the local environment, while more complex ambiguities retained an external-model path.'
      ]
    },
    validation: [
      'Every two to three weeks, we reviewed recurring queries and updated the local-model setup. Before expanding its responsibility, we checked each iteration against a standardized benchmark of internal operational prompts for answer relevance and guardrail adherence.',
      'Over approximately two and a half months, the local model’s share grew to around 65–70% of queries. We made it the primary path and retained OpenAI as a fallback.',
      'Monthly observability reviews supported continued performance assessment.'
    ],
    takeaway: [
      'This introduced an ongoing product decision: how to expand the local model’s responsibilities while keeping a fallback available.',
      'The reported percentage describes traffic distribution, not a verified reduction in cost or an independent answer-quality benchmark.'
    ],
    cautionNote:
      'User-reported operational figure. Traffic share does not establish equivalent cost savings. Technical wording adheres to verified locally hosted Llama model configuration.',
    diagramType: 'talent-ops',
    prevSlug: 'fsm',
    prevName: 'FSM',
    nextSlug: 'ottobon-jobs',
    nextName: 'Ottobon Jobs'
  },
  {
    slug: 'ottobon-jobs',
    number: '02',
    name: 'OTTOBON JOBS',
    title: 'Reliable ingestion. Relevant matches.',
    shortDescription: 'Source adapters, deduplication, candidate matching.',
    role: 'Technical direction + team delivery',
    previewBg: '#E5EFF5', // Pale blue
    accentColor: '#1B6899',
    summary:
      'Unifying job discovery and candidate preparation through coordinated source adapters, distributed deduplication, and hybrid matching.',
    context: [
      'Ottobon Jobs connected job discovery, candidate matching, career guidance, and interview preparation. Its usefulness depended on information arriving from multiple external systems.'
    ],
    responsibility: [
      'I led the architecture and worked with my team to connect job ingestion, enrichment, candidate matching, career guidance, and interview preparation.'
    ],
    decisions: {
      title: 'Pipeline decisions and candidate matching',
      paragraphs: [
        'The ingestion pipeline collected postings through more than 20 source adapters. Distributed locking coordinated concurrent ingestion, while SHA-256 content-hash deduplication identified recurring postings.',
        'External sources introduced dependencies, including changing page structures, rate limits, and availability. Locking and deduplication addressed specific parts of that pipeline: coordinating work and controlling duplicate records.',
        'For candidate matching, we combined embedding similarity, skill overlap, and AI-based experience assessment. My role was to connect the stages into a coherent product—from incoming source data to candidate-facing guidance.'
      ]
    },
    validation: [
      'The ingestion pipeline operated across 20+ adapter sources nightly, ensuring clean deduplicated postings reached the enrichment and matching layers without overlapping duplicates or concurrent race conditions.',
      'Matching outputs were systematically reviewed against candidate profiles to ensure skill overlap and experience scores reflected domain criteria.'
    ],
    takeaway: [
      'Evaluating a user-facing feature also means understanding the upstream systems and data it depends on.'
    ],
    cautionNote:
      'System scope reflects verified architecture of 20+ source adapters, distributed locking, and SHA-256 deduplication.',
    diagramType: 'ottobon-jobs',
    prevSlug: 'talent-ops',
    prevName: 'Talent Ops',
    nextSlug: 'sakhi',
    nextName: 'Sakhi'
  },
  {
    slug: 'sakhi',
    number: '03',
    name: 'SAKHI',
    title: 'Extending an existing application.',
    shortDescription: 'Confidence-based escalation within a patient workflow.',
    role: 'Inherited system extension',
    previewBg: '#F0EBF5', // Pale lilac
    accentColor: '#7A5299',
    summary:
      'Introducing confidence-based doctor escalation within an existing healthcare companion workflow while preserving patient session continuity.',
    context: [
      'Sakhi was an existing healthcare companion application built by another developer.',
      'The application operated over a managed relational data layer using AWS RDS PostgreSQL.'
    ],
    responsibility: [
      'My contribution was to introduce confidence-based doctor escalation within the established communication workflow while preserving existing patient session states.'
    ],
    decisions: {
      title: 'Confidence evaluation and doctor escalation',
      paragraphs: [
        'The configured confidence score relied mainly on retrieval relevance. When confidence fell below the configured threshold, the application initiated a doctor handoff within the existing patient session.',
        'This gave queries with insufficient retrieval confidence a human escalation path.',
        'The extension needed to fit the existing application’s behavior and patient-data boundaries. This required understanding the current flow before introducing the new decision point.'
      ]
    },
    validation: [
      'The escalation workflow was tested across boundary cases to ensure low-confidence retrieval triggers the handoff seamlessly while patient context and conversation history remain intact for attending medical staff.'
    ],
    takeaway: [
      'This was a focused extension within an inherited system. Retrieval confidence supported escalation; it was not a standalone measure of clinical safety.'
    ],
    cautionNote:
      'Retrieval confidence supported escalation as an operational threshold within an inherited workflow; it is not a clinical certification.',
    diagramType: 'sakhi',
    prevSlug: 'ottobon-jobs',
    prevName: 'Ottobon Jobs',
    nextSlug: 'fsm',
    nextName: 'FSM'
  },
  {
    slug: 'fsm',
    number: '04',
    name: 'FSM',
    title: 'Ownership beyond launch.',
    shortDescription: 'Field operations, access controls, route improvements.',
    role: 'Architecture + production support',
    previewBg: '#F5EFE6', // Pale sand
    accentColor: '#8C673B',
    summary:
      'Connecting field activities, organizational hierarchies, and post-launch route optimizations with deep database-level security.',
    context: [
      'FSM connected field activity, organizational hierarchy, and manager approvals with core organizational records.',
      'It combined HR workflows with geofenced attendance, location-verified visits, manager review, and live field visibility.'
    ],
    responsibility: [
      'I led architecture, developed alongside my team, handled deployment, and provided production support.'
    ],
    decisions: {
      title: 'Access boundaries and the routing problem',
      paragraphs: [
        'Access followed organizational responsibilities and enterprise CRM role mappings, with database-level Row-Level Security enforcing those boundaries. Field reporting and approval flows connected mobile activity back to organizational records.',
        'When an agent selected a location, the initial routing behavior did not consistently provide a suitable route for the journey.',
        'I investigated the implementation and introduced an A* approach to improve route selection.'
      ]
    },
    validation: [
      'We manually compared resulting distances as a team and observed improvements in the cases checked.',
      'This was a practical check of those cases, not a formal travel-time benchmark or proof of optimality across all routes.'
    ],
    takeaway: [
      'Production ownership meant staying involved after release, investigating a problem affecting field users, and checking whether a change improved their experience.'
    ],
    cautionNote:
      'Evaluation reflects verified team distance comparisons on investigated cases without unverified road-network benchmarking claims.',
    diagramType: 'fsm',
    prevSlug: 'sakhi',
    prevName: 'Sakhi',
    nextSlug: 'talent-ops',
    nextName: 'Talent Ops'
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
