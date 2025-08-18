import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Home",
  EMAIL: "solaebina@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 10,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const MARKETING: Metadata = {
  TITLE: "Marketing Projects",
  DESCRIPTION: "Marketing automation, campaigns, and digital marketing projects.",
};

export const DATA_AI: Metadata = {
  TITLE: "Data & AI Projects",
  DESCRIPTION: "Machine learning, data analysis, and artificial intelligence projects.",
};

export const PLAYGROUND: Metadata = {
  TITLE: "Playground",
  DESCRIPTION: "Experimental projects and creative explorations.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/solaebina/"
  },
];
