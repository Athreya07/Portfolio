import type { IconType } from 'react-icons';

export type SectionId = 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'resume';

export type TabItem = {
  id: SectionId;
  label: string;
  file: string;
  icon?: IconType;
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  github: string;
  live?: string;
};
