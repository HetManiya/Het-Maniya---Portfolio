
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Education {
  degree: string;
  institute: string;
  period: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
