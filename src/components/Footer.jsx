export default function Footer({ content, isDark }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={
        isDark
          ? "border-t border-white/10 px-5 py-8"
          : "border-t border-slate-200 px-5 py-8"
      }
    >
      <div
        className={
          isDark
            ? "mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
            : "mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        }
      >
        <p>© {currentYear} Alberto Chamizo Barrio.</p>
        <p>{content.footer.builtWith}</p>
      </div>
    </footer>
  );
}