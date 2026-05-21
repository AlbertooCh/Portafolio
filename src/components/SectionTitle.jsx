export default function SectionTitle({ eyebrow, title, description, isDark }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
        {eyebrow}
      </p>

      <h2
        className={
          isDark
            ? "mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            : "mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
        }
      >
        {title}
      </h2>

      {description && (
        <p
          className={
            isDark
              ? "mt-4 max-w-2xl text-base leading-7 text-slate-300"
              : "mt-4 max-w-2xl text-base leading-7 text-slate-600"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}