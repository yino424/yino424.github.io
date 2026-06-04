import type { SiteContent } from "@/locales";
import { Section } from "./Section";

export function Activities({ content }: { content: SiteContent }) {
  return (
    <Section id="activities" title={content.activities.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {content.activities.items.map((item) => (
          <article
            key={`${item.program}-${item.period}`}
            className="border-t border-line pt-5"
          >
            <p className="text-sm font-semibold text-accent">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold leading-7 text-ink">
              {item.program}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.institution}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
