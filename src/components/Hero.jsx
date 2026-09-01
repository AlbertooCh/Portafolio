import profileImage from "../assets/profile.webp";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero({ content }) {
  const { personalInfo, hero } = content;

  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div>
        <p className="mb-5 inline-flex rounded-full border border-accent-500/30 bg-accent-50 px-4 py-2 text-sm font-medium text-accent-700 dark:border-accent-400/30 dark:bg-accent-400/10 dark:text-accent-300">
          {hero.badge}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-7xl dark:text-white">
          {personalInfo.name}
        </h1>

        <p className="mt-5 text-2xl font-semibold text-accent-500 sm:text-3xl">
          {personalInfo.role}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {personalInfo.summary}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#cv" className="btn-primary">
            {hero.viewCV}
          </a>

          <a href="#projects" className="btn-ghost">
            {hero.viewProjects}
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <InfoBox label={hero.focusLabel} value={hero.focusValue} />
          <InfoBox label={hero.stackLabel} value={hero.stackValue} />
          <InfoBox label={hero.locationLabel} value={personalInfo.location} />
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-2xl dark:shadow-accent-950/40">
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src={profileImage}
            alt={personalInfo.name}
            width={760}
            height={967}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute right-6 -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
          <p className="text-sm font-semibold text-accent-500">
            {hero.statusLabel}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {hero.statusValue}
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
      <dt className="text-sm text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="mt-1 font-semibold text-slate-950 dark:text-white">
        {value}
      </dd>
    </div>
  );
}
