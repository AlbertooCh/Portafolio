import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects({ content }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return content.projects;

    return content.projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter, content.projects]);

  return (
    <Section id="projects" heading={content.projectsSection}>
      <div
        role="tablist"
        aria-label={content.projectsSection.title}
        className="mb-8 flex flex-wrap gap-3"
      >
        {content.projectsSection.filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter.value)}
              className={
                isActive
                  ? "rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-500/20"
                  : "rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/15 dark:text-slate-300 dark:hover:border-white/30 dark:hover:bg-white/5"
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
          />
        ))}
      </div>
    </Section>
  );
}
