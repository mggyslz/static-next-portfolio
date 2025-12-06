import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  video: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  icon: ReactNode; // fixed
  challenges: string;
  lessons: string;
}

export interface Skill {
  name: string;
  status: 'MASTERED' | 'TRAINING';
  icon: ReactNode; // fixed
}

export interface Stat {
  icon: ReactNode; // fixed
  value: string;
  label: string;
  description: string;
}

export interface NavSection {
  id: string;
  label: string;
}
