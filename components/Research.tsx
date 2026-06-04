import type { SiteContent } from "@/locales";
import { Section } from "./Section";

export function Research({ content }: { content: SiteContent }) {
  return (
    <Section
      id="research"
      title={content.research.title}
      intro={content.research.intro}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {content.research.items.map((item) => (
          <article key={item.title} className="research-card">
            <p className="text-sm font-semibold text-accent">{item.description}</p>
            <h3 className="mt-4 text-2xl font-semibold leading-8 text-ink">
              {item.title}
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {item.keywords.map((keyword) => (
                <span key={keyword} className="tag-small">
                  {keyword}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
