export default function Navbar({
  content,
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}) {
const navItems = [
  { label: content.nav.about, href: "#about" },
  { label: content.nav.cv, href: "#cv" },
  { label: content.nav.skills, href: "#skills" },
  { label: content.nav.projects, href: "#projects" },
  { label: content.nav.education, href: "#education" },
];

  const isDark = theme === "dark";

  return (
    <header
      className={
        isDark
          ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
          : "sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl"
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#"
          className={isDark ? "text-sm font-semibold tracking-wide text-white" : "text-sm font-semibold tracking-wide text-slate-950"}
        >
          Alberto<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                isDark
                  ? "text-sm text-slate-300 transition hover:text-white"
                  : "text-sm text-slate-600 transition hover:text-slate-950"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className={
              isDark
                ? "rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                : "rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            }
            aria-label="Change language"
          >
            {language === "es" ? "ES" : "EN"}
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className={
              isDark
                ? "rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                : "rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            }
            aria-label="Change theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <a
            href="#contact"
            className={
              isDark
                ? "hidden rounded-full border border-blue-400/40 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-300 hover:bg-blue-400/10 sm:inline-flex"
                : "hidden rounded-full border border-blue-500/40 px-4 py-2 text-sm font-medium text-blue-700 transition hover:border-blue-500 hover:bg-blue-50 sm:inline-flex"
            }
          >
            {content.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}