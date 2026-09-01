import Reveal from "./Reveal";
import { ExternalIcon, GithubIcon } from "./Icons";

export default function ProjectCard({ project, labels }) {
  return (
    <Reveal as="article" className="surface-interactive p-6 md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-accent-500">
              {project.subtitle}
            </p>

            {project.status && (
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
            {project.title}
          </h3>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${labels.github} — ${project.title}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
            >
              <GithubIcon className="h-4 w-4" />
              {labels.github}
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${labels.demo} — ${project.title}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-400"
            >
              <ExternalIcon className="h-4 w-4" />
              {labels.demo}
            </a>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
            {labels.highlights}
          </h4>

          <ul className="mt-4 space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-slate-600 dark:text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
            {labels.techStack}
          </h4>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className="chip-accent">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
