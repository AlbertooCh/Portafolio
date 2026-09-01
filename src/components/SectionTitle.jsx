import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-10">
      <p className="text-sm font-semibold tracking-[0.25em] text-accent-500 uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
