export default function ProjectCard({ project, labels, isDark }) {
  return (
    <article
      className={
        isDark
          ? "rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05] md:p-8"
          : "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md md:p-8"
      }
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-500">{project.subtitle}</p>

          <h3 className={isDark ? "mt-2 text-2xl font-bold text-white" : "mt-2 text-2xl font-bold text-slate-950"}>
            {project.title}
          </h3>

          <p className={isDark ? "mt-4 max-w-3xl leading-7 text-slate-300" : "mt-4 max-w-3xl leading-7 text-slate-600"}>
            {project.description}
          </p>
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={
                isDark
                  ? "rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                  : "rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              }
            >
              {labels.github}
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              {labels.demo}
            </a>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h4 className={isDark ? "text-sm font-semibold uppercase tracking-[0.2em] text-slate-400" : "text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"}>
            {labels.highlights}
          </h4>

          <ul className="mt-4 space-y-3">
            {project.highlights.map((item) => (
              <li key={item} className={isDark ? "flex gap-3 text-slate-300" : "flex gap-3 text-slate-600"}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={isDark ? "text-sm font-semibold uppercase tracking-[0.2em] text-slate-400" : "text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"}>
            {labels.techStack}
          </h4>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={
                  isDark
                    ? "rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm text-blue-200"
                    : "rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700"
                }
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}