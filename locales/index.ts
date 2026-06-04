import { en } from "./en";
import { ja } from "./ja";
import { zh } from "./zh";
import type { Locale, SiteContent } from "./types";

export const locales: Record<Locale, SiteContent> = {
  ja,
  en,
  zh,
};

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
};

export type {
  Locale,
  ResearchItem,
  SiteContent,
  SkillGroup,
  TimelineItem,
} from "./types";
