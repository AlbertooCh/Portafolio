import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { DownloadIcon, ExternalIcon } from "./Icons";

export default function CVSection({ content }) {
  const { cvSection, personalInfo } = content;

  return (
    <section id="cv" className="mx-auto max-w-6xl px-5 py-20">
      <div className="rounded-3xl border border-accent-200 bg-accent-50 p-7 md:p-10 dark:border-accent-400/20 dark:bg-accent-400/[0.06]">
        <SectionTitle
          eyebrow={cvSection.eyebrow}
          title={cvSection.title}
          description={cvSection.description}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div className="space-y-5">
            {cvSection.cards.map((card, index) => (
              <Reveal
                as="article"
                key={card.title}
                delay={index * 60}
                className="rounded-2xl border border-accent-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/50 dark:shadow-none"
              >
                <p className="text-2xl" aria-hidden="true">
                  {card.icon}
                </p>

                <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {card.text}
                </p>
              </Reveal>
            ))}

            <div className="flex flex-wrap gap-4 pt-2">
              <a href={personalInfo.cv} download className="btn-primary">
                <DownloadIcon className="h-4 w-4" />
                {cvSection.download}
              </a>

              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <ExternalIcon className="h-4 w-4" />
                {cvSection.open}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-950/60 dark:shadow-2xl dark:shadow-slate-950/40">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-3 dark:border-white/10 dark:bg-slate-900">
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">
                  {cvSection.previewTitle}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {cvSection.previewSubtitle}
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                PDF
              </span>
            </div>

            <div className="h-[680px] bg-slate-200 dark:bg-slate-900">
              <object
                data={`${personalInfo.cv}#toolbar=0&navpanes=0&scrollbar=1`}
                type="application/pdf"
                aria-label={cvSection.previewTitle}
                className="h-full w-full"
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-slate-100 p-8 text-center text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  <p>{cvSection.fallback}</p>
                  <a
                    href={personalInfo.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
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
