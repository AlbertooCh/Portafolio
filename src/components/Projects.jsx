import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects({ content, isDark }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle
        eyebrow={content.projectsSection.eyebrow}
        title={content.projectsSection.title}
        description={content.projectsSection.description}
        isDark={isDark}
      />

      <div className="grid gap-6">
        {content.projects.map((project) => (
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