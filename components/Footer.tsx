import type { SiteContent } from "@/locales";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer id="contact" className="bg-ink px-5 py-16 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.45fr_0.55fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">
            {content.contact.title}
          </h2>
          <p className="mt-5 max-w-2xl text-2xl leading-9 md:text-3xl md:leading-[1.45]">
            {content.contact.description}
          </p>
        </div>
        <div className="md:text-right">
          <div className="space-y-3">
            {content.contact.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="block text-xl underline decoration-accent-soft/50 underline-offset-4 transition-colors hover:text-accent-soft"
              >
                {email}
              </a>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/50">
            © {new Date().getFullYear()} {content.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
