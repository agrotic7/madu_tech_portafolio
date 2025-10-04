export interface Hero {
  tagline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface About {
  title: string;
  story: string;
  philosophy: {
    curiosity: string;
    rigor: string;
    collaboration: string;
    innovation: string;
  };
  vision: string;
  looking: string;
}

export interface SkillCategory {
  title: string;
  description: string;
}

export interface Skills {
  title: string;
  intro: string;
  backend: SkillCategory;
  frontend: SkillCategory;
  mobile: SkillCategory;
  tools: SkillCategory;
  conclusion: string;
}

export interface Project {
  id: number;
  title: string;
  challenge: string;
  stack: string[];
  result: string;
}

export interface Contact {
  title: string;
  message: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface PortfolioData {
  hero: Hero;
  about: About;
  skills: Skills;
  projects: Project[];
  contact: Contact;
  metaDescription: string;
}

