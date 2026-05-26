import SectionTitle from "./SectionTitle";

export default function CVSection({ content, isDark }) {
  const { cvSection, personalInfo } = content;

  return (
    <section id="cv" className="mx-auto max-w-6xl px-5 py-20">
      <div
        className={
          isDark
            ? "rounded-3xl border border-blue-400/20 bg-blue-400/[0.06] p-7 md:p-10"
            : "rounded-3xl border border-blue-200 bg-blue-50 p-7 md:p-10"
        }
      >
        <SectionTitle
          eyebrow={cvSection.eyebrow}
          title={cvSection.title}
          description={cvSection.description}
          isDark={isDark}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div className="space-y-5">
            {cvSection.cards.map((card) => (
              <article
                key={card.title}
                className={
                  isDark
                    ? "rounded-2xl border border-white/10 bg-slate-950/50 p-5"
                    : "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
                }
              >
                <p className="text-2xl">{card.icon}</p>

                <h3
                  className={
                    isDark
                      ? "mt-4 font-semibold text-white"
                      : "mt-4 font-semibold text-slate-950"
                  }
                >
                  {card.title}
                </h3>

                <p
                  className={
                    isDark
                      ? "mt-2 text-sm leading-6 text-slate-300"
                      : "mt-2 text-sm leading-6 text-slate-600"
                  }
                >
                  {card.text}
                </p>
              </article>
            ))}

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={personalInfo.cv}
                download
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                {cvSection.download}
              </a>

              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noreferrer"
                className={
                  isDark
                    ? "rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                    : "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                }
              >
                {cvSection.open}
              </a>
            </div>
          </div>

          <div
            className={
              isDark
                ? "overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-slate-950/40"
                : "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
            }
          >
            <div
              className={
                isDark
                  ? "flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3"
                  : "flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-3"
              }
            >
              <div>
                <p
                  className={
                    isDark
                      ? "text-sm font-semibold text-white"
                      : "text-sm font-semibold text-slate-950"
                  }
                >
                  {cvSection.previewTitle}
                </p>
                <p
                  className={
                    isDark
                      ? "text-xs text-slate-400"
                      : "text-xs text-slate-500"
                  }
                >
                  {cvSection.previewSubtitle}
                </p>
              </div>

              <span
                className={
                  isDark
                    ? "rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"
                    : "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                }
              >
                PDF
              </span>
            </div>

            <div className="h-[680px] bg-slate-200">
              <object
                data={`${personalInfo.cv}#toolbar=0&navpanes=0&scrollbar=1`}
                type="application/pdf"
                className="h-full w-full"
              >
                <div
                  className={
                    isDark
                      ? "flex h-full flex-col items-center justify-center gap-4 bg-slate-900 p-8 text-center text-slate-300"
                      : "flex h-full flex-col items-center justify-center gap-4 bg-slate-100 p-8 text-center text-slate-600"
                  }
                >
                  <p>{cvSection.fallback}</p>
                  <a
                    href={personalInfo.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    {cvSection.open}
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}