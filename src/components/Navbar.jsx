import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { SECTION_IDS } from "../data/sections";

const toggleClass =
  "grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5";

export default function Navbar({
  content,
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  const isDark = theme === "dark";
  const { nav, ui } = content;

  const navItems = [
    { label: nav.about, href: "#about", id: "about" },
    { label: nav.cv, href: "#cv", id: "cv" },
    { label: nav.skills, href: "#skills", id: "skills" },
    { label: nav.projects, href: "#projects", id: "projects" },
    { label: nav.education, href: "#education", id: "education" },
    { label: nav.experience, href: "#experience", id: "experience" },
  ];

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    if (!isMenuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const linkClass = (id) =>
    `text-sm transition ${
      activeSection === id
        ? "font-semibold text-accent-600 dark:text-accent-300"
        : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-slate-950 dark:text-white"
        >
          Alberto<span className="text-accent-500">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={linkClass(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
            aria-label={ui.switchLanguage}
            title={ui.switchLanguage}
          >
            {language === "es" ? "ES" : "EN"}
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className={toggleClass}
            aria-label={isDark ? ui.switchToLight : ui.switchToDark}
            title={isDark ? ui.switchToLight : ui.switchToDark}
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full border border-accent-500/40 px-4 py-2 text-sm font-medium text-accent-700 transition hover:border-accent-500 hover:bg-accent-50 sm:inline-flex dark:border-accent-400/40 dark:text-accent-300 dark:hover:border-accent-300 dark:hover:bg-accent-400/10"
          >
            {nav.contact}
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`${toggleClass} lg:hidden`}
            aria-label={isMenuOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-5 pb-6 lg:hidden dark:border-white/10 dark:bg-slate-950"
        >
          <ul className="flex flex-col py-2">
            {[...navItems, { label: nav.contact, href: "#contact", id: "contact" }].map(
              (item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    className={`block border-b border-slate-100 py-3 dark:border-white/5 ${linkClass(
                      item.id
                    )}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      <div
        role="progressbar"
        aria-label={ui.scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent-500"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </header>
  );
}
