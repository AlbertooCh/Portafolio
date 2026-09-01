import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills({ content }) {
  return (
    <Section id="skills" heading={content.skillsSection}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.skills.map((group, index) => (
          <Reveal
            as="article"
            key={group.category}
            delay={index * 60}
            className="surface-interactive p-6"
          >
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
              {group.category}
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
