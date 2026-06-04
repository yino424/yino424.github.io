"use client";

import type { Locale, SiteContent } from "@/locales";
import { localeLabels } from "@/locales";

type HeaderProps = {
  content: SiteContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

const navItems = [
  ["about", "about"],
  ["education", "education"],
  ["awards", "awards"],
  ["research", "research"],
  ["materials", "materials"],
  ["activities", "activities"],
  ["skills", "skills"],
  ["contact", "contact"],
] as const;

export function Header({ content, locale, onLocaleChange }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="text-sm font-semibold text-ink sm:text-base">
          Yunuo Wu
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map(([key, href]) => (
            <a
              key={key}
              href={`#${href}`}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {content.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex rounded-full border border-line bg-paper p-1">
          {(Object.keys(localeLabels) as Locale[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onLocaleChange(item)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                locale === item
                  ? "bg-ink text-white"
                  : "text-muted hover:bg-white hover:text-ink"
              }`}
              aria-pressed={locale === item}
            >
              {localeLabels[item]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
