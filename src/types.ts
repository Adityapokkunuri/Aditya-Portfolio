export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  clientOrOrg: string;
  role: string;
  year: string;
  summary: string;
  architectureDetails: string;
  keySpecs: {
    label: string;
    value: string;
    description: string;
  }[];
  tags: string[];
  liveUrl?: string;
  liveUrlLabel?: string;
  accentColor?: string;
  darkSection?: boolean;
}

export interface StackCategory {
  category: string;
  number: string;
  description: string;
  skills: {
    name: string;
    role: string;
    context: string;
  }[];
}

export interface CredentialItem {
  number: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export interface SectionScrollTarget {
  id: string;
  label: string;
  number: string;
}
