import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export default function BackToTop({ label }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
      title={label}
      className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
