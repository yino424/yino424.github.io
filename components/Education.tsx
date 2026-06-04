import type { SiteContent, TimelineItem } from "@/locales";
import { Section } from "./Section";

function TimelineRow({ item }: { item: TimelineItem }) {
  return (
    <li className="grid gap-4 border-t border-line py-6 md:grid-cols-[0.28fr_0.72fr]">
      <time className="text-sm font-semibold text-accent">{item.period}</time>
      <div>
        <h3 className="text-xl font-semibold text-ink">{item.institution}</h3>
        <p className="mt-2 leading-7 text-muted">{item.program}</p>
        {item.details ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.details.map((detail) => (
              <span key={detail} className="tag-small">
                {detail}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function Education({ content }: { content: SiteContent }) {
  return (
    <Section id="education" title={content.education.title} tone="soft">
      <ol className="ml-auto max-w-4xl">
        {content.education.items.map((item) => (
          <TimelineRow key={`${item.institution}-${item.period}`} item={item} />
        ))}
      </ol>
    </Section>
  );
}
