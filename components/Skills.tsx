import type { SiteContent } from "@/locales";
import { Section } from "./Section";

export function Skills({ content }: { content: SiteContent }) {
  return (
    <Section id="skills" title={content.skills.title}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {content.skills.groups.map((group) => (
          <section key={group.title} className="border-t border-line pt-5">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
