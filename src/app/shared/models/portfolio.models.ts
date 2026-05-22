export interface Profile {
  name: string;
  role: string;
  headline: string;
  about: string;
  image: string;
}

export interface Project {
  name: string;
  descrption: string;
  problem: string;
  solution: string;
  impact: string;
  summary: string;
  stack: string[];
  image: string;
  liveUrl: string;
}

export interface AboutForMe {
  title: string;
  text1: string;
  text2: string;
  numberProjects: number;
  yearsLearning: number;
  cards: Cards[];
}

export interface Cards {
  title: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}
