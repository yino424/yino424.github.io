import type { SiteContent } from "@/locales";
import { Section } from "./Section";

export function Awards({ content }: { content: SiteContent }) {
  return (
    <Section id="awards" title={content.awards.title} tone="soft">
      <ul className="ml-auto grid max-w-4xl gap-3">
        {content.awards.items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-accent bg-white px-5 py-4 text-sm leading-6 text-ink shadow-[0_1px_0_rgba(35,39,47,0.05)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
