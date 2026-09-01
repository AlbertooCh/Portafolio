import Reveal from "./Reveal";
import Section from "./Section";

export default function About({ content }) {
  const { about } = content;

  return (
    <Section id="about" heading={about}>
      <div className="grid gap-6 md:grid-cols-2">
        <AboutCard title={about.card1Title} text={about.card1Text} />
        <AboutCard title={about.card2Title} text={about.card2Text} delay={80} />
      </div>
    </Section>
  );
}

function AboutCard({ title, text, delay }) {
  return (
    <Reveal as="article" delay={delay} className="surface p-7">
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </Reveal>
  );
}
