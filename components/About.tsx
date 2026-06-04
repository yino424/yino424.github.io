import type { SiteContent } from "@/locales";
import { Section } from "./Section";

export function About({ content }: { content: SiteContent }) {
  return (
    <Section id="about" title={content.about.title} tone="soft">
      <div className="ml-auto max-w-3xl space-y-5 text-lg leading-8 text-ink">
        {content.about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
