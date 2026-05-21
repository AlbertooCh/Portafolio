import SectionTitle from "./SectionTitle";

export default function About({ content, isDark }) {
  const { about } = content;

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
        isDark={isDark}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <AboutCard title={about.card1Title} text={about.card1Text} isDark={isDark} />
        <AboutCard title={about.card2Title} text={about.card2Text} isDark={isDark} />
      </div>
    </section>
  );
}

function AboutCard({ title, text, isDark }) {
  return (
    <div
      className={
        isDark
          ? "rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          : "rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
      }
    >
      <h3 className={isDark ? "text-xl font-semibold text-white" : "text-xl font-semibold text-slate-950"}>
        {title}
      </h3>

      <p className={isDark ? "mt-4 leading-7 text-slate-300" : "mt-4 leading-7 text-slate-600"}>
        {text}
      </p>
    </div>
  );
}