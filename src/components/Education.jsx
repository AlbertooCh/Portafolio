import SectionTitle from "./SectionTitle";

export default function Education({ content, isDark }) {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle
        eyebrow={content.educationSection.eyebrow}
        title={content.educationSection.title}
        description={content.educationSection.description}
        isDark={isDark}
      />

      <div className="grid gap-5">
        {content.education.map((item) => (
          <article
            key={item.title}
            className={
              isDark
                ? "rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                : "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            }
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className={isDark ? "text-xl font-semibold text-white" : "text-xl font-semibold text-slate-950"}>
                  {item.title}
                </h3>

                <p className="mt-1 text-blue-500">{item.institution}</p>
              </div>

              <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                {item.period}
              </p>
            </div>

            <p className={isDark ? "mt-4 leading-7 text-slate-300" : "mt-4 leading-7 text-slate-600"}>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}