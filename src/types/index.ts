export interface Project {
  id: string;
  title: string;
  description: string;
  video: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  icon: JSX.Element;
  challenges: string;
  lessons: string;
}

export interface Skill {
  name: string;
  status: 'MASTERED' | 'TRAINING';
  icon: JSX.Element;
}

export interface Stat {
  icon: JSX.Element;
  value: string;
  label: string;
  description: string;
}

export interface NavSection {
  id: string;
  label: string;
}