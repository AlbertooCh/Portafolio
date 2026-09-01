import { useEffect } from "react";

const SITE_URL = "https://alberto-chamizo.vercel.app/";

function setMeta(selector, content) {
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute("content", content);
}

/**
 * Mantiene el <head> sincronizado con el idioma y el tema activos: título,
 * descripción, Open Graph, Twitter Card y color de la barra del navegador.
 */
export function useDocumentMeta({ language, theme, meta }) {
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = meta.title;

    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:locale"]', meta.locale);
    setMeta('meta[property="og:url"]', SITE_URL);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
  }, [language, meta]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    setMeta(
      'meta[name="theme-color"]',
      theme === "dark" ? "#020617" : "#f8fafc"
    );
  }, [theme]);
}
