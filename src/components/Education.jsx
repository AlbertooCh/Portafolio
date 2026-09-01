import Reveal from "./Reveal";
import Section from "./Section";

export default function Education({ content }) {
  return (
    <Section id="education" heading={content.educationSection}>
      <div className="grid gap-5">
        {content.education.map((item, index) => (
          <Reveal
            as="article"
            key={item.title}
            delay={index * 60}
            className="surface p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-accent-500">{item.institution}</p>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.period}
              </p>
            </div>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
