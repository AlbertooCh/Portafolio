import { useEffect, useRef, useState } from "react";

/**
 * Muestra su contenido con una animación de entrada la primera vez que
 * aparece en pantalla. La animación se desactiva sola cuando el sistema
 * pide `prefers-reduced-motion` (ver src/index.css).
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${isVisible ? "animate-fade-up" : "opacity-0"} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
