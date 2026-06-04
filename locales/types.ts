export type Locale = "ja" | "en" | "zh";

export type TimelineItem = {
  institution: string;
  program: string;
  period: string;
  details?: string[];
};

export type ResearchItem = {
  title: string;
  description: string;
  points: string[];
  keywords: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    research: string;
    education: string;
    awards: string;
    skills: string;
    activities: string;
    materials: string;
    contact: string;
  };
  hero: {
    name: string;
    localName: string;
    role: string[];
    affiliationLabel: string;
    affiliation: string;
    labLabel: string;
    lab: string;
    directions: string[];
    emailLabel: string;
    emails: string[];
    primaryAction: string;
    secondaryAction: string;
  };
  about: {
    title: string;
    body: string[];
  };
  research: {
    title: string;
    intro: string;
    items: ResearchItem[];
  };
  education: {
    title: string;
    items: TimelineItem[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  awards: {
    title: string;
    items: string[];
  };
  activities: {
    title: string;
    items: TimelineItem[];
  };
  materials: {
    title: string;
    cardTitle: string;
    description: string;
    view: string;
    filePath: string;
    previewImagePath: string;
    previewFallback: string;
  };
  contact: {
    title: string;
    description: string;
    emails: string[];
  };
  footer: string;
};
