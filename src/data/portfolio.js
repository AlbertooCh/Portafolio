export const portfolioContent = {
  es: {
    personalInfo: {
      name: "Alberto Chamizo Barrio",
      role: "Ingeniero Informático de Software",
      location: "Almendralejo, Badajoz (España)",
      email: "albertochamizo05@gmail.com",
      phone: "685 608 661",
      phoneHref: "tel:+34685608661",
      github: "https://github.com/AlbertooCh",
      linkedin: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      cv: "/AlbertoChamizoBarrio.pdf",
      formEndpoint: "https://formspree.io/f/maqkoljj",
      summary:
        "Ingeniero Informático de Software con perfil junior orientado al desarrollo de software. Experiencia práctica en proyectos académicos y personales con APIs REST, bases de datos SQL, modelado de datos, control de versiones y desarrollo de aplicaciones. Interés en backend, cloud, arquitectura de software y buenas prácticas de desarrollo.",
    },

    meta: {
      title: "Alberto Chamizo Barrio | Desarrollador Software Junior",
      description:
        "Portfolio de Alberto Chamizo Barrio, Ingeniero Informático de Software con perfil junior enfocado en Java, Spring Boot, APIs REST, bases de datos, cloud y arquitectura de software.",
      locale: "es_ES",
    },

    ui: {
      skipToContent: "Saltar al contenido principal",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      switchToLight: "Cambiar a tema claro",
      switchToDark: "Cambiar a tema oscuro",
      switchLanguage: "Ver la web en inglés",
      backToTop: "Volver arriba",
      scrollProgress: "Progreso de lectura",
    },

    nav: {
      about: "Sobre mí",
      cv: "CV",
      skills: "Tecnologías",
      projects: "Proyectos",
      education: "Formación",
      experience: "Experiencia",
      contact: "Contacto",
    },

    hero: {
      badge: "Graduado en Ingeniería Informática del Software (2026)",
      viewCV: "Ver CV",
      viewProjects: "Ver proyectos",
      focusLabel: "Enfoque",
      focusValue: "Backend y software",
      stackLabel: "Stack principal",
      stackValue: "Java / Spring Boot",
      locationLabel: "Ubicación",
      statusLabel: "Disponible para oportunidades junior",
      statusValue: "Interés en backend, cloud, APIs REST y desarrollo software.",
    },

    about: {
      eyebrow: "Sobre mí",
      title: "Perfil junior orientado a construir software útil y mantenible",
      description:
        "Terminé el Grado en Ingeniería Informática del Software en 2026 y estoy centrando mi perfil en backend, APIs REST, bases de datos y arquitectura de aplicaciones. Me interesa construir sistemas claros, mantenibles y adaptados a necesidades reales.",
      card1Title: "Qué estoy buscando",
      card1Text:
        "Busco una primera oportunidad junior o trainee donde poder participar en proyectos reales, aprender de equipos con más experiencia y aportar una base técnica sólida en programación, bases de datos y desarrollo backend.",
      card2Title: "Cómo trabajo",
      card2Text:
        "Me gusta entender las decisiones técnicas, estructurar bien el código y avanzar de forma práctica. Valoro la claridad, la separación de responsabilidades, el control de versiones, las pruebas automáticas y la documentación cuando ayuda a mantener el proyecto.",
    },

    cvSection: {
      eyebrow: "Currículum",
      title: "CV actualizado",
      description:
        "Aquí puedes consultar mi currículum directamente desde la web y descargarlo en PDF si lo necesitas.",
      download: "Descargar CV",
      open: "Abrir en nueva pestaña",
      previewTitle: "Vista previa del CV",
      previewSubtitle: "Currículum en PDF integrado en el portfolio",
      fallback:
        "Tu navegador no puede mostrar el PDF incrustado. Puedes abrirlo en una nueva pestaña.",
      cards: [
        {
          icon: "📄",
          title: "CV en PDF",
          text: "Versión actualizada con formación, proyectos, tecnologías y experiencia relevante.",
        },
        {
          icon: "💻",
          title: "Perfil técnico",
          text: "Orientado a desarrollo software, backend, APIs REST, bases de datos y cloud.",
        },
        {
          icon: "🚀",
          title: "Perfil junior",
          text: "Enfocado en oportunidades junior, trainee o primeras experiencias profesionales en desarrollo.",
        },
      ],
    },

    skillsSection: {
      eyebrow: "Tecnologías",
      title: "Tecnologías con las que trabajo",
      description:
        "Mi mayor interés está en el desarrollo backend, especialmente Java, Spring Boot, APIs y bases de datos. También trabajo con frontend para construir y entender aplicaciones web completas.",
    },

    skills: [
      {
        category: "Lenguajes",
        items: ["Java", "SQL", "JavaScript", "C", "C++", "Python", "HTML", "CSS"],
      },
      {
        category: "Backend",
        items: [
          "Spring Boot",
          "Spring Framework",
          "Spring Security",
          "APIs REST",
          "JPA / Hibernate",
          "Spring Data JPA",
          "JWT",
          "Arquitectura por capas",
        ],
      },
      {
        category: "Bases de datos",
        items: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB", "Redis", "JPQL"],
      },
      {
        category: "Frontend",
        items: ["React", "Astro", "Tailwind CSS", "Vite", "HTML", "CSS"],
      },
      {
        category: "Herramientas",
        items: [
          "Git",
          "GitHub",
          "Docker",
          "Docker Compose",
          "Maven",
          "Gradle",
          "Postman",
        ],
      },
      {
        category: "Testing y documentación",
        items: ["JUnit", "Mockito", "OpenAPI", "Swagger"],
      },
      {
        category: "Otros",
        items: ["Linux", "OAuth2", "Keycloak", "Agile/Scrum"],
      },
      {
        category: "Idiomas",
        items: ["Español (nativo)", "Inglés B2 First"],
      },
    ],

    projectsSection: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Selección de proyectos centrados en backend, arquitectura, APIs, bases de datos y práctica real de ingeniería del software.",
      highlights: "Puntos clave",
      techStack: "Tecnologías",
      github: "GitHub",
      demo: "Ver web",
      filters: [
        { label: "Todos", value: "all" },
        { label: "Backend", value: "backend" },
        { label: "Java", value: "java" },
        { label: "Frontend", value: "frontend" },
        { label: "TFG", value: "tfg" },
        { label: "Microservicios", value: "microservices" },
      ],
    },

    projects: [
      {
        title: "MyMicroTools",
        subtitle: "Calculadoras online rápidas y sin registro",
        status: "En producción",
        categories: ["frontend"],
        description:
          "Proyecto propio en producción: 40 calculadoras y herramientas online repartidas en seis categorías (dinero, casa y consumo, fechas, coches, deporte y porcentajes). Cada herramienta explica de dónde sale el resultado y qué supuestos ha hecho, en lugar de dar un número sin contexto.",
        highlights: [
          "Sitio estático construido con Astro y desplegado con rutas por idioma.",
          "Todos los cálculos se ejecutan en el navegador: ningún dato del usuario sale del dispositivo.",
          "Más de 270 pruebas automáticas sobre las fórmulas, cubriendo casos límite como años bisiestos, turnos que cruzan medianoche o intereses al 0 %.",
          "Gráficas en SVG generadas a mano, sin librerías externas ni fuentes descargadas, para minimizar el JavaScript enviado.",
          "Checklist de diez criterios antes de publicar cada herramienta: cálculo verificado, validación de entradas, móvil, teclado, accesibilidad, rendimiento, metadatos y pruebas.",
        ],
        tech: ["Astro", "JavaScript", "HTML", "CSS", "SVG", "SEO", "Testing"],
        github: "",
        demo: "https://mymicrotools.com",
      },
      {
        title: "Aninga",
        subtitle: "Plataforma de seguimiento de anime y manga",
        status: "En desarrollo",
        categories: ["backend", "java"],
        description:
          "Proyecto personal para construir una plataforma web de seguimiento y recomendación de anime y manga. El backend está desarrollado con Java y Spring Boot, integrando la API de Jikan como fuente externa de datos.",
        highlights: [
          "Backend con Spring Boot y arquitectura por capas.",
          "Diseño de API REST para gestión de usuarios, medios y listas.",
          "Persistencia de datos mediante JPA/Hibernate y base de datos relacional.",
          "Integración con la API de Jikan para obtener información de anime y manga.",
          "Proyecto utilizado para reforzar buenas prácticas backend, seguridad y testing.",
        ],
        tech: ["Java", "Spring Boot", "REST API", "JPA", "Hibernate", "SQL", "Jikan API"],
        github: "https://github.com/AlbertooCh/HermoTracker",
        demo: "",
      },
      {
        title: "QCRAFT-Scheduler",
        subtitle: "TFG sobre planificación de circuitos cuánticos",
        status: "Completado · Nota 10",
        categories: ["tfg"],
        description:
          "Trabajo de Fin de Grado centrado en la incorporación de una política noise-aware a un planificador de circuitos cuánticos, con el objetivo de considerar información de ruido del hardware durante el proceso de planificación. Calificado con un 10 y mención a matrícula de honor.",
        highlights: [
          "Extensión de un planificador existente mediante una política noise-aware.",
          "Uso de información de ruido del hardware como criterio de decisión.",
          "Análisis de resultados para comparar el comportamiento de la política añadida.",
          "Documentación técnica del desarrollo como parte del TFG.",
          "Calificado con un 10 y mención a matrícula de honor.",
        ],
        tech: ["Python", "Scheduling", "Computación cuántica", "Noise-aware", "TFG"],
        github: "https://github.com/AlbertooCh/QCRAFT-Scheduler",
        demo: "",
      },
      {
        title: "Payments Service",
        subtitle: "Microservicio de pagos con Spring Boot",
        status: "Académico",
        categories: ["backend", "java", "microservices"],
        description:
          "Microservicio backend desarrollado alrededor de la gestión de pagos, persistencia, filtrado y documentación de API. El proyecto se centra en endpoints REST, DTOs, repositorios y lógica de capa de servicio.",
        highlights: [
          "API REST para creación, consulta y filtrado de pagos.",
          "Persistencia mediante Spring Data JPA y base de datos SQL.",
          "Uso de DTOs para separar la capa de API del modelo de datos.",
          "Documentación de endpoints mediante OpenAPI/Swagger.",
          "Práctica de arquitectura por capas en entorno de microservicios.",
        ],
        tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "OpenAPI", "Swagger"],
        github: "",
        demo: "",
      },
    ],

    educationSection: {
      eyebrow: "Formación",
      title: "Formación académica",
      description:
        "Mi formación me ha dado una base amplia en ingeniería del software, desde programación y bases de datos hasta modelado, sistemas y arquitectura.",
    },

    education: [
      {
        title: "Grado en Ingeniería Informática del Software",
        institution: "Universidad de Extremadura (Cáceres)",
        period: "2021 - 2026",
        description:
          "Grado finalizado, con Trabajo de Fin de Grado calificado con un 10 y mención a matrícula de honor. Formación orientada a desarrollo software, bases de datos, ingeniería web, modelado, sistemas, redes y arquitectura de aplicaciones.",
      },
    ],

    experienceSection: {
      eyebrow: "Experiencia",
      title: "Experiencia laboral",
      description:
        "Aunque busco mi primera oportunidad en desarrollo software, mi experiencia laboral me ha ayudado a desarrollar responsabilidad, comunicación y trabajo en equipo.",
    },

    experience: [
      {
        title: "Socorrista en instalaciones acuáticas",
        company: "Ayuntamiento de Almendralejo",
        period: "jul. 2026 - actualidad",
        description:
          "Temporada actual, compaginando el trabajo con el desarrollo de proyectos propios de software y la búsqueda de mi primera oportunidad en desarrollo.",
      },
      {
        title: "Socorrista en instalaciones acuáticas",
        company: "Ayuntamiento de Almendralejo",
        period: "jun. 2025 - oct. 2025",
        description:
          "Atención al público, vigilancia preventiva y aplicación de protocolos de seguridad, con responsabilidad directa y trabajo en equipo.",
      },
    ],

    contactSection: {
      eyebrow: "Contacto",
      title: "¿Hablamos?",
      description:
        "Estoy abierto a oportunidades junior o trainee relacionadas con desarrollo software, backend, APIs, bases de datos o roles técnicos donde pueda seguir creciendo profesionalmente.",
      sendEmail: "Enviar email",
      viewGithub: "Ver GitHub",
      formName: "Nombre",
      formEmail: "Email",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      formSubmit: "Enviar mensaje",
      formSending: "Enviando...",
      formSuccess: "Mensaje enviado correctamente. Te responderé lo antes posible.",
      formError: "No se ha podido enviar el mensaje. Prueba otra vez o escríbeme por email.",
      formConfigError:
        "El formulario aún no está configurado. Escríbeme directamente por email.",
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        subject: "Oferta junior backend",
        message: "Escribe aquí tu mensaje...",
      },
    },

    contactLinks: [
      {
        label: "GitHub",
        value: "github.com/AlbertooCh",
        href: "https://github.com/AlbertooCh",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/alberto-chamizo-barrio",
        href: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      },
      {
        label: "Email",
        value: "albertochamizo05@gmail.com",
        href: "mailto:albertochamizo05@gmail.com",
      },
      {
        label: "Teléfono",
        value: "685 608 661",
        href: "tel:+34685608661",
      },
    ],

    footer: {
      builtWith: "Creado con React, Vite y Tailwind CSS.",
    },
  },

  en: {
    personalInfo: {
      name: "Alberto Chamizo Barrio",
      role: "Software Engineer",
      location: "Almendralejo, Badajoz (Spain)",
      email: "albertochamizo05@gmail.com",
      phone: "+34 685 608 661",
      phoneHref: "tel:+34685608661",
      github: "https://github.com/AlbertooCh",
      linkedin: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      cv: "/AlbertoChamizoBarrio-EN.pdf",
      formEndpoint: "https://formspree.io/f/maqkoljj",
      summary:
        "Junior Software Engineer with a background in software development. Practical experience in academic and personal projects using REST APIs, SQL databases, data modeling, version control and application development. Interested in backend development, cloud computing, software architecture and best development practices.",
    },

    meta: {
      title: "Alberto Chamizo Barrio | Junior Software Developer",
      description:
        "Portfolio of Alberto Chamizo Barrio, Software Engineer with a junior profile focused on Java, Spring Boot, REST APIs, databases, cloud and software architecture.",
      locale: "en_US",
    },

    ui: {
      skipToContent: "Skip to main content",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
      switchLanguage: "View this site in Spanish",
      backToTop: "Back to top",
      scrollProgress: "Reading progress",
    },

    nav: {
      about: "About",
      cv: "CV",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      experience: "Experience",
      contact: "Contact",
    },

    hero: {
      badge: "Software Engineering graduate (2026)",
      viewCV: "View CV",
      viewProjects: "View projects",
      focusLabel: "Focus",
      focusValue: "Backend and software",
      stackLabel: "Main stack",
      stackValue: "Java / Spring Boot",
      locationLabel: "Location",
      statusLabel: "Open to junior opportunities",
      statusValue: "Interested in backend, cloud, REST APIs and software development.",
    },

    about: {
      eyebrow: "About",
      title: "Junior profile focused on building useful and maintainable software",
      description:
        "I completed my Software Engineering degree in 2026 and I am building my profile around backend development, REST APIs, databases and application architecture. I am interested in building clear, maintainable systems adapted to real needs.",
      card1Title: "What I am looking for",
      card1Text:
        "I am looking for a junior or trainee opportunity where I can work on real software projects, learn from more experienced teams and contribute a solid technical foundation in programming, databases and backend development.",
      card2Title: "How I work",
      card2Text:
        "I like understanding technical decisions, structuring code properly and moving forward in a practical way. I value clarity, separation of responsibilities, version control, automated tests and documentation when it helps maintain a project.",
    },

    cvSection: {
      eyebrow: "Resume",
      title: "Updated CV",
      description:
        "You can preview my CV directly on this website and download it as a PDF if needed.",
      download: "Download CV",
      open: "Open in new tab",
      previewTitle: "CV preview",
      previewSubtitle: "PDF resume embedded in the portfolio",
      fallback:
        "Your browser cannot display the embedded PDF. You can open it in a new tab.",
      cards: [
        {
          icon: "📄",
          title: "PDF resume",
          text: "Updated version with education, projects, technologies and relevant experience.",
        },
        {
          icon: "💻",
          title: "Technical profile",
          text: "Focused on software development, backend, REST APIs, databases and cloud.",
        },
        {
          icon: "🚀",
          title: "Junior profile",
          text: "Oriented toward junior, trainee or first professional software development opportunities.",
        },
      ],
    },

    skillsSection: {
      eyebrow: "Skills",
      title: "Technologies I work with",
      description:
        "My strongest interest is backend development, especially Java, Spring Boot, APIs and databases. I also work with frontend to build and understand complete web applications.",
    },

    skills: [
      {
        category: "Languages",
        items: ["Java", "SQL", "JavaScript", "C", "C++", "Python", "HTML", "CSS"],
      },
      {
        category: "Backend",
        items: [
          "Spring Boot",
          "Spring Framework",
          "Spring Security",
          "REST APIs",
          "JPA / Hibernate",
          "Spring Data JPA",
          "JWT",
          "Layered Architecture",
        ],
      },
      {
        category: "Databases",
        items: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB", "Redis", "JPQL"],
      },
      {
        category: "Frontend",
        items: ["React", "Astro", "Tailwind CSS", "Vite", "HTML", "CSS"],
      },
      {
        category: "Tools",
        items: [
          "Git",
          "GitHub",
          "Docker",
          "Docker Compose",
          "Maven",
          "Gradle",
          "Postman",
        ],
      },
      {
        category: "Testing and documentation",
        items: ["JUnit", "Mockito", "OpenAPI", "Swagger"],
      },
      {
        category: "Other",
        items: ["Linux", "OAuth2", "Keycloak", "Agile/Scrum"],
      },
      {
        category: "Spoken languages",
        items: ["Spanish (native)", "English B2 First"],
      },
    ],

    projectsSection: {
      eyebrow: "Projects",
      title: "Selected projects",
      description:
        "A selection of projects focused on backend development, architecture, APIs, databases and practical software engineering work.",
      highlights: "Highlights",
      techStack: "Tech stack",
      github: "GitHub",
      demo: "Visit site",
      filters: [
        { label: "All", value: "all" },
        { label: "Backend", value: "backend" },
        { label: "Java", value: "java" },
        { label: "Frontend", value: "frontend" },
        { label: "Final Degree Project", value: "tfg" },
        { label: "Microservices", value: "microservices" },
      ],
    },

    projects: [
      {
        title: "MyMicroTools",
        subtitle: "Fast online calculators, no sign-up required",
        status: "Live",
        categories: ["frontend"],
        description:
          "My own project, live in production: 40 online calculators and tools across six categories (money, home and energy, dates, cars, sport and percentages). Every tool explains where the result comes from and which assumptions it made, instead of returning a number without context.",
        highlights: [
          "Static site built with Astro and deployed with per-language routes.",
          "Every calculation runs in the browser: no user data ever leaves the device.",
          "More than 270 automated tests over the formulas, covering edge cases such as leap years, shifts crossing midnight or 0% interest rates.",
          "Hand-written SVG charts, with no external libraries or downloaded fonts, to keep the shipped JavaScript minimal.",
          "A ten-point checklist before publishing each tool: verified calculation, input validation, mobile, keyboard, accessibility, performance, metadata and tests.",
        ],
        tech: ["Astro", "JavaScript", "HTML", "CSS", "SVG", "SEO", "Testing"],
        github: "",
        demo: "https://mymicrotools.com",
      },
      {
        title: "Aninga",
        subtitle: "Anime and manga tracking platform",
        status: "In development",
        categories: ["backend", "java"],
        description:
          "Personal project focused on building a web platform for tracking and recommending anime and manga. The backend is developed with Java and Spring Boot, integrating the Jikan API as an external data source.",
        highlights: [
          "Backend built with Spring Boot and layered architecture.",
          "REST API design for users, media and list management.",
          "Data persistence using JPA/Hibernate and a relational database.",
          "Integration with the Jikan API to retrieve anime and manga information.",
          "Project used to strengthen backend best practices, security and testing.",
        ],
        tech: ["Java", "Spring Boot", "REST API", "JPA", "Hibernate", "SQL", "Jikan API"],
        github: "https://github.com/AlbertooCh/HermoTracker",
        demo: "",
      },
      {
        title: "QCRAFT-Scheduler",
        subtitle: "Final degree project on quantum circuit scheduling",
        status: "Completed · Graded 10",
        categories: ["tfg"],
        description:
          "Final Degree Project focused on incorporating a noise-aware policy into a quantum circuit scheduler, with the goal of considering hardware noise information during the scheduling process. Graded 10 out of 10 with honours.",
        highlights: [
          "Extension of an existing scheduler through a noise-aware policy.",
          "Use of hardware noise information as a decision criterion.",
          "Result analysis to compare the behaviour of the added policy.",
          "Technical documentation of the development as part of the final degree project.",
          "Graded 10 out of 10 with honours.",
        ],
        tech: ["Python", "Scheduling", "Quantum Computing", "Noise-aware", "Final Degree Project"],
        github: "https://github.com/AlbertooCh/QCRAFT-Scheduler",
        demo: "",
      },
      {
        title: "Payments Service",
        subtitle: "Payment microservice with Spring Boot",
        status: "Academic",
        categories: ["backend", "java", "microservices"],
        description:
          "Backend microservice developed around payment management, persistence, filtering and API documentation. The project focuses on REST endpoints, DTOs, repositories and service-layer logic.",
        highlights: [
          "REST API for payment creation, querying and filtering.",
          "Persistence using Spring Data JPA and an SQL database.",
          "Use of DTOs to separate the API layer from the data model.",
          "Endpoint documentation with OpenAPI/Swagger.",
          "Layered architecture practice in a microservices environment.",
        ],
        tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "OpenAPI", "Swagger"],
        github: "",
        demo: "",
      },
    ],

    educationSection: {
      eyebrow: "Education",
      title: "Academic background",
      description:
        "My academic path has given me a broad software engineering foundation, from programming and databases to modelling, systems, networks and application architecture.",
    },

    education: [
      {
        title: "Bachelor's Degree in Computer Software Engineering",
        institution: "Universidad de Extremadura (Cáceres)",
        period: "2021 - 2026",
        description:
          "Degree completed, with a Final Degree Project graded 10 out of 10 with honours. Education focused on software development, databases, web engineering, modelling, systems, networks and application architecture.",
      },
    ],

    experienceSection: {
      eyebrow: "Experience",
      title: "Work experience",
      description:
        "Although I am looking for my first software development opportunity, my work experience has helped me build responsibility, communication and teamwork habits.",
    },

    experience: [
      {
        title: "Lifeguard at aquatic facilities",
        company: "Ayuntamiento de Almendralejo",
        period: "Jul. 2026 - Present",
        description:
          "Current season, combined with building my own software projects and looking for my first opportunity in software development.",
      },
      {
        title: "Lifeguard at aquatic facilities",
        company: "Ayuntamiento de Almendralejo",
        period: "Jun. 2025 - Oct. 2025",
        description:
          "Customer service, preventive surveillance and application of safety protocols, with direct responsibility and teamwork.",
      },
    ],

    contactSection: {
      eyebrow: "Contact",
      title: "Let’s get in touch",
      description:
        "I am open to junior or trainee opportunities related to software development, backend, APIs, databases or technical roles where I can continue growing professionally.",
      sendEmail: "Send email",
      viewGithub: "View GitHub",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending...",
      formSuccess: "Message sent successfully. I will reply as soon as possible.",
      formError: "The message could not be sent. Please try again or contact me by email.",
      formConfigError:
        "The contact form is not configured yet. Please email me directly.",
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        subject: "Junior backend role",
        message: "Write your message here...",
      },
    },

    contactLinks: [
      {
        label: "GitHub",
        value: "github.com/AlbertooCh",
        href: "https://github.com/AlbertooCh",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/alberto-chamizo-barrio",
        href: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      },
      {
        label: "Email",
        value: "albertochamizo05@gmail.com",
        href: "mailto:albertochamizo05@gmail.com",
      },
      {
        label: "Phone",
        value: "+34 685 608 661",
        href: "tel:+34685608661",
      },
    ],

    footer: {
      builtWith: "Built with React, Vite and Tailwind CSS.",
    },
  },
};
