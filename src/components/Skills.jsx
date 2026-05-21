import SectionTitle from "./SectionTitle";

export default function Skills({ content, isDark }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle
        eyebrow={content.skillsSection.eyebrow}
        title={content.skillsSection.title}
        description={content.skillsSection.description}
        isDark={isDark}
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.skills.map((group) => (
          <article
            key={group.category}
            className={
              isDark
                ? "rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]"
                : "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            }
          >
            <h3 className={isDark ? "text-lg font-semibold text-white" : "text-lg font-semibold text-slate-950"}>
              {group.category}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={
                    isDark
                      ? "rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                      : "rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}