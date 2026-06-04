import Image from "next/image";
import type { SiteContent } from "@/locales";
import { Section } from "./Section";

export function Materials({ content }: { content: SiteContent }) {
  const { materials } = content;

  return (
    <Section id="materials" title={materials.title} tone="soft">
      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="border-t border-line pt-6">
          <h3 className="text-2xl font-semibold text-ink">{materials.cardTitle}</h3>
          <p className="mt-4 leading-7 text-muted">{materials.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={materials.filePath}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              {materials.view}
            </a>
          </div>
        </div>
        <a
          href={materials.filePath}
          target="_blank"
          rel="noreferrer"
          className="group block bg-white transition duration-200 hover:-translate-y-1"
        >
          <div className="aspect-[16/10] overflow-hidden bg-white">
            <Image
              src={materials.previewImagePath}
              alt={materials.cardTitle}
              width={1200}
              height={750}
              className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            {materials.previewFallback}
          </p>
        </a>
      </div>
    </Section>
  );
}
