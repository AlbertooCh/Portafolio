import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects({ content, isDark }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return content.projects;

    return content.projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter, content.projects]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle
        eyebrow={content.projectsSection.eyebrow}
        title={content.projectsSection.title}
        description={content.projectsSection.description}
        isDark={isDark}
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {content.projectsSection.filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={
                isActive
                  ? "rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
                  : isDark
                    ? "rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-white/30 hover:bg-white/5"
                    : "rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              }
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            labels={content.projectsSection}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}