export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  subRoles?: {
    role: string;
    description: string[];
  }[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  category: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}
