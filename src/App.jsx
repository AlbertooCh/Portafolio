import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioContent } from "./data/portfolio";

const DEFAULT_LANGUAGE = "es";
const DEFAULT_THEME = "dark";

export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") || DEFAULT_LANGUAGE;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || DEFAULT_THEME;
  });

  const content = useMemo(() => portfolioContent[language], [language]);
  const isDark = theme === "dark";

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
  }, [theme, isDark]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "es" ? "en" : "es"));
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <div
        className={
          isDark
            ? "fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%)]"
            : "fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_30%)]"
        }
      />

      <Navbar
        content={content}
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero content={content} isDark={isDark} />
        <About content={content} isDark={isDark} />
        <Skills content={content} isDark={isDark} />
        <Projects content={content} isDark={isDark} />
        <Education content={content} isDark={isDark} />
        <Experience content={content} isDark={isDark} />
        <Contact content={content} isDark={isDark} />
      </main>

      <Footer content={content} isDark={isDark} />
    </div>
  );
}