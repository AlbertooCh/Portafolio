import { useCallback, useMemo } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CVSection from "./components/CVSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { usePersistentState } from "./hooks/usePersistentState";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { portfolioContent } from "./data/portfolio";

const LANGUAGES = ["es", "en"];
const THEMES = ["light", "dark"];

const isLanguage = (value) => LANGUAGES.includes(value);
const isTheme = (value) => THEMES.includes(value);

/** Idioma inicial: el del navegador si lo tenemos traducido, si no español. */
function detectLanguage() {
  const preferred = window.navigator.languages ?? [window.navigator.language];

  for (const tag of preferred) {
    const code = String(tag).slice(0, 2).toLowerCase();
    if (isLanguage(code)) return code;
  }

  return "es";
}

/** Tema inicial: el que pida el sistema operativo. */
function detectTheme() {
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function App() {
  const [language, setLanguage] = usePersistentState(
    "portfolio-language",
    detectLanguage,
    isLanguage
  );

  const [theme, setTheme] = usePersistentState(
    "portfolio-theme",
    detectTheme,
    isTheme
  );

  const content = useMemo(() => portfolioContent[language], [language]);

  useDocumentMeta({ language, theme, meta: content.meta });

  const toggleLanguage = useCallback(
    () => setLanguage((current) => (current === "es" ? "en" : "es")),
    [setLanguage]
  );

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    [setTheme]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-accent-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        {content.ui.skipToContent}
      </a>

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%)]"
      />

      <Navbar
        content={content}
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />

      <main id="main">
        <Hero content={content} />
        <About content={content} />
        <CVSection content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <Education content={content} />
        <Experience content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} />
      <BackToTop label={content.ui.backToTop} />

      {/* Analítica de Vercel: sin cookies, solo se activa en el despliegue. */}
      <Analytics />
    </div>
  );
}
