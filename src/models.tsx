export enum Filter {
  ALL = "ALL",
  EXPERIENCE = "EXPERIENCE",
  PROJECTS = "PROJECTS",
  EDUCATION = "EDUCATION",
  HACKATHONS = "HACKATHONS"
}

export enum Language {
  en = "en",
  ru = "ru"
}

export interface SocialMedia {
  name: string;
  link: string;
}
