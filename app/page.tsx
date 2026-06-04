"use client";

import { useEffect, useMemo, useState } from "react";
import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Awards } from "@/components/Awards";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Materials } from "@/components/Materials";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { locales, type Locale } from "@/locales";

const defaultLocale: Locale = "en";

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const content = useMemo(() => locales[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;
  }, [content.meta.title, locale]);

  return (
    <>
      <Header
        content={content}
        locale={locale}
        onLocaleChange={(nextLocale) => setLocale(nextLocale)}
      />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Education content={content} />
        <Awards content={content} />
        <Research content={content} />
        <Materials content={content} />
        <Activities content={content} />
        <Skills content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
