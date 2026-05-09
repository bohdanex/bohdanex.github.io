export type Link = { text: string; url: string };

export type Company = string | { name: string; logo?: string | null; url?: string | null };

export interface Project {
  name: string;
  description?: string;
  stack: string[];
  company?: Company;
  links?: Link[];
  isNDA?: boolean;
}

export interface Startup {
  name: string;
  role?: string;
  status?: string;
  description: string;
  links?: Link[];
}

export interface EducationDetail {
  text: string;
  period: string;
}

export interface EducationItem {
  institution: string;
  details: EducationDetail[];
}

export type SkillItem = string | { name: string; highlight?: boolean };

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface CoreTechnology {
  name: string;
  icon: string;
}
