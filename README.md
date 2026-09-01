# Alberto Chamizo Barrio — Portfolio

Portfolio personal desarrollado con React 19, Vite 8 y Tailwind CSS 4.

🔗 **https://alberto-chamizo.vercel.app/**

## Descripción

Web de una sola página que presenta mi perfil como desarrollador software junior:
formación, proyectos, tecnologías, CV descargable y formas de contacto.
Todo el contenido está disponible en **español e inglés** y la interfaz soporta
**tema claro y oscuro**.

## Características

- **Bilingüe (ES/EN)** con detección automática del idioma del navegador. El
  título, la descripción y las etiquetas Open Graph se actualizan al cambiar de
  idioma.
- **Tema claro/oscuro** que arranca con la preferencia del sistema
  (`prefers-color-scheme`), se recuerda en `localStorage` y se aplica antes del
  primer pintado para evitar parpadeos.
- **Navegación con scroll spy**: el enlace de la sección visible se resalta, con
  barra de progreso de lectura y menú desplegable en móvil.
- **Accesibilidad**: enlace para saltar al contenido, foco visible, `aria-*` en
  controles interactivos, mensajes del formulario en una región `aria-live` y
  soporte de `prefers-reduced-motion`.
- **Rendimiento**: imágenes optimizadas (WebP), animaciones de entrada con
  `IntersectionObserver` y bundle sin dependencias de UI externas.
- **SEO**: metadatos Open Graph y Twitter Card, datos estructurados
  `schema.org/Person`, `sitemap.xml` y `robots.txt`.
- **Formulario de contacto** contra Formspree, con trampa antispam y endpoint
  configurable por variables de entorno.

## Tecnologías

| Área          | Stack                                   |
| ------------- | --------------------------------------- |
| UI            | React 19                                |
| Build         | Vite 8                                  |
| Estilos       | Tailwind CSS 4 (`@tailwindcss/vite`)    |
| Calidad       | ESLint 10 (flat config)                 |
| Formulario    | Formspree                               |
| Despliegue    | Vercel                                  |

## Secciones

Inicio · Sobre mí · CV · Tecnologías · Proyectos · Formación · Experiencia · Contacto

## Estructura del proyecto

```
public/              CV en PDF, favicon, imagen Open Graph, robots y sitemap
src/
  assets/            Imágenes importadas por el bundle
  components/        Componentes de UI (uno por sección + primitivas)
  data/
    portfolio.js     Todo el contenido, en español e inglés
    sections.js      Ids de las secciones con ancla
  hooks/             useActiveSection, useDocumentMeta, usePersistentState,
                     useScrollProgress
  App.jsx            Composición de la página, idioma y tema
  index.css          Tema de Tailwind, estilos base y utilidades propias
```

## Ejecutar en local

Requiere Node.js 20+ y [pnpm](https://pnpm.io/).

```bash
pnpm install
```

```bash
pnpm run dev
```

Otros scripts disponibles:

```bash
pnpm run build
```

```bash
pnpm run preview
```

```bash
pnpm run lint
```

## Configuración

Copia `.env.example` a `.env.local` para sobrescribir el endpoint del formulario
de contacto sin tocar el código:

```bash
cp .env.example .env.local
```

| Variable              | Descripción                                            |
| --------------------- | ------------------------------------------------------ |
| `VITE_FORM_ENDPOINT`  | Endpoint del formulario. Por defecto, el de `portfolio.js`. |

## Personalizar el contenido

Todos los textos, proyectos, tecnologías y enlaces viven en
[`src/data/portfolio.js`](src/data/portfolio.js), con una entrada por idioma
(`es` y `en`). No hace falta tocar los componentes para actualizar el portfolio.

El color de marca se define una sola vez en las variables `--color-accent-*` de
[`src/index.css`](src/index.css).

## Despliegue

El proyecto se despliega en Vercel a partir de la rama `main`:

- Build command: `pnpm run build`
- Output directory: `dist`

Cada push a `main` y cada pull request ejecutan además lint y build en GitHub
Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

## Contacto

- GitHub: [@AlbertooCh](https://github.com/AlbertooCh)
- LinkedIn: [Alberto Chamizo Barrio](https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286)
- Email: albertochamizo05@gmail.com
