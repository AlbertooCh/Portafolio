import SectionTitle from "./SectionTitle";

/** Contenedor común de todas las secciones: ancho, espaciado y cabecera. */
export default function Section({ id, heading, className = "", children }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 ${className}`}>
      {heading && (
        <SectionTitle
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
      )}

      {children}
    </section>
  );
}
