import Image from "next/image";
import type { SiteContent } from "@/locales";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center bg-white px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[0.58fr_0.42fr] md:items-center">
        <div className="fade-in">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {hero.lab}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl">
            {hero.name}
          </h1>
          <p className="mt-4 text-lg text-muted">{hero.localName}</p>
          <div className="mt-8 max-w-3xl text-xl leading-8 text-ink sm:text-2xl">
            {hero.role.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {hero.directions.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#research" className="button button-primary">
              {hero.primaryAction}
            </a>
            <a href="#materials" className="button button-secondary">
              {hero.secondaryAction}
            </a>
          </div>
        </div>

        <div className="fade-in-delay">
          <div className="mb-10 flex justify-center md:justify-start">
            <div className="relative h-52 w-52 overflow-hidden rounded-full border border-line bg-paper shadow-subtle sm:h-64 sm:w-64">
              <Image
                src="/images/profile/profile.jpg"
                alt="Yunuo Wu portrait"
                fill
                sizes="(min-width: 640px) 256px, 208px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <aside className="border-l border-line pl-6">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {hero.affiliationLabel}
                </dt>
                <dd className="mt-2 text-base leading-7 text-ink">
                  {hero.affiliation}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {hero.labLabel}
                </dt>
                <dd className="mt-2 text-base leading-7 text-ink">{hero.lab}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {hero.emailLabel}
                </dt>
                <dd className="mt-2 text-base leading-7 text-ink">
                  <div className="space-y-1">
                    {hero.emails.map((email) => (
                      <a
                        key={email}
                        className="block underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
