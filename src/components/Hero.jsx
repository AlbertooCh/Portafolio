import profileImage from "../assets/profile.png";

export default function Hero({ content, isDark }) {
  const { personalInfo, hero } = content;

  return (
    <section className="mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p
          className={
            isDark
              ? "mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300"
              : "mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          }
        >
          {hero.badge}
        </p>

        <h1
          className={
            isDark
              ? "text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
              : "text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-7xl"
          }
        >
          {personalInfo.name}
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-blue-500 sm:text-3xl">
          {personalInfo.role}
        </h2>

        <p
          className={
            isDark
              ? "mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              : "mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          }
        >
          {personalInfo.summary}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#cv"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            {hero.viewCV}
          </a>

          <a
            href="#projects"
            className={
              isDark
                ? "rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                : "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            }
          >
            {hero.viewProjects}
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className={
              isDark
                ? "rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                : "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            }
          >
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className={
              isDark
                ? "rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                : "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            }
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <InfoBox
            label={hero.focusLabel}
            value={hero.focusValue}
            isDark={isDark}
          />
          <InfoBox
            label={hero.stackLabel}
            value={hero.stackValue}
            isDark={isDark}
          />
          <InfoBox
            label={hero.locationLabel}
            value={personalInfo.location}
            isDark={isDark}
          />
        </div>
      </div>

      <div
        className={
          isDark
            ? "relative mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-blue-950/40"
            : "relative mx-auto w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl"
        }
      >
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src={profileImage}
            alt={personalInfo.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className={
            isDark
              ? "absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-xl backdrop-blur"
              : "absolute -bottom-6 left-6 right-6 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur"
          }
        >
          <p className="text-sm font-semibold text-blue-500">
            {hero.statusLabel}
          </p>
          <p
            className={
              isDark
                ? "mt-1 text-sm text-slate-300"
                : "mt-1 text-sm text-slate-600"
            }
          >
            {hero.statusValue}
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoBox({ label, value, isDark }) {
  return (
    <div
      className={
        isDark
          ? "rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          : "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
      }
    >
      <p
        className={
          isDark ? "text-sm text-slate-400" : "text-sm text-slate-500"
        }
      >
        {label}
      </p>
      <p
        className={
          isDark
            ? "mt-1 font-semibold text-white"
            : "mt-1 font-semibold text-slate-950"
        }
      >
        {value}
      </p>
    </div>
  );
}