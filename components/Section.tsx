import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  intro?: string;
  tone?: "white" | "soft";
};

export function Section({
  id,
  title,
  children,
  intro,
  tone = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={tone === "soft" ? "section bg-paper" : "section bg-white"}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 grid gap-5 border-t border-line pt-8 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {title}
          </h2>
          {intro ? (
            <p className="max-w-3xl text-xl leading-8 text-ink md:text-2xl">
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
