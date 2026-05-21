export const portfolioContent = {
  es: {
    personalInfo: {
      name: "Alberto Chamizo Barrio",
      role: "Desarrollador Backend Junior",
      location: "Extremadura, España",
      email: "albertochamizo05@gmail.com",
      github: "https://github.com/AlbertooCh",
      linkedin: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      cv: "/AlbertoChamizoBarrio.pdf",
      formEndpoint:"https://formspree.io/f/maqkoljj",
      summary:
        "Estudiante de último año de Ingeniería Informática del Software, enfocado en desarrollo backend, APIs REST, bases de datos, testing y arquitectura de software. Busco mi primera oportunidad junior o trainee donde poder aportar, aprender en entornos reales y seguir creciendo como desarrollador.",
    },

    nav: {
      about: "Sobre mí",
      skills: "Tecnologías",
      projects: "Proyectos",
      education: "Formación",
      contact: "Contacto",
    },

    hero: {
      badge: "Estudiante de Ingeniería del Software orientado a backend",
      viewProjects: "Ver proyectos",
      focusLabel: "Enfoque",
      focusValue: "Desarrollo backend",
      stackLabel: "Stack principal",
      stackValue: "Java / Spring Boot",
      locationLabel: "Ubicación",
    },

    about: {
      eyebrow: "Sobre mí",
      title: "Perfil orientado a backend con mentalidad práctica",
      description:
        "Estoy construyendo mi perfil alrededor del desarrollo backend, APIs, bases de datos, testing y arquitectura de software. Prefiero sistemas claros, mantenibles y bien estructurados antes que complejidad innecesaria.",
      card1Title: "Qué estoy buscando",
      card1Text:
        "Busco una oportunidad junior o trainee donde poder trabajar en proyectos reales, aprender de desarrolladores con más experiencia y seguir mejorando mis habilidades backend en un entorno profesional.",
      card2Title: "Cómo trabajo",
      card2Text:
        "Me gusta entender por qué las cosas se construyen de una determinada forma, no solo copiar código. Me importa la estructura legible, la separación de responsabilidades, probar la lógica importante y documentar decisiones cuando tienen impacto.",
    },

    skillsSection: {
      eyebrow: "Tecnologías",
      title: "Tecnologías con las que trabajo",
      description:
        "Mi mayor interés está en el desarrollo backend, especialmente Java, Spring Boot, APIs y bases de datos. También tengo conocimientos básicos de frontend para construir y entender aplicaciones web completas.",
    },

    skills: [
      {
        category: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "APIs REST",
          "JPA / Hibernate",
          "JWT",
          "Testing unitario",
          "DTOs",
          "Arquitectura por capas",
        ],
      },
      {
        category: "Bases de datos",
        items: [
          "SQL",
          "MySQL",
          "PostgreSQL",
          "Oracle",
          "Diseño de BD",
          "JPQL",
        ],
      },
      {
        category: "Herramientas",
        items: [
          "Git",
          "GitHub",
          "Docker",
          "Maven",
          "Gradle",
          "IntelliJ IDEA",
          "VS Code",
        ],
      },
      {
        category: "Frontend básico",
        items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      },
      {
        category: "Otros",
        items: [
          "Python",
          "OpenAPI",
          "Linux básico",
          "Arquitectura de software",
          "Trabajo en equipo",
        ],
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
      demo: "Demo",
    },

    projects: [
      {
        title: "HermoTracker",
        subtitle: "Plataforma de seguimiento de anime y manga",
        description:
          "Proyecto personal centrado en construir una plataforma backend para seguimiento de anime y manga, usando la API de Jikan como fuente externa de datos. El proyecto está pensado como una forma práctica de mejorar en Spring Boot, autenticación, testing y diseño de APIs.",
        highlights: [
          "Backend con Spring Boot y arquitectura por capas.",
          "Autenticación y seguridad basada en JWT.",
          "Tests unitarios para servicios de autenticación.",
          "Integración con datos externos de anime/manga mediante la API de Jikan.",
          "Funcionalidades planificadas de seguimiento y recomendación.",
        ],
        tech: ["Java", "Spring Boot", "JWT", "JPA", "JUnit", "Jikan API"],
        github: "https://github.com/AlbertooCh/HermoTracker",
        demo: "",
      },
      {
        title: "QCRAFT-Scheduler",
        subtitle: "Scheduler de circuitos cuánticos consciente del ruido",
        description:
          "Trabajo de fin de grado centrado en extender un scheduler de circuitos cuánticos con políticas conscientes de la topología y del ruido. El sistema considera restricciones de hardware, mapas de conectividad, métricas de fidelidad y distintas estrategias de planificación.",
        highlights: [
          "Políticas de scheduling conscientes del ruido.",
          "Modelado de topología hardware usando grafos.",
          "Métricas de fiabilidad para circuitos cuánticos.",
          "Comparación entre distintas estrategias de planificación.",
          "Arquitectura de software orientada a investigación.",
        ],
        tech: ["Python", "NetworkX", "Computación cuántica", "Grafos", "Scheduling"],
        github: "https://github.com/AlbertooCh/QCRAFT-Scheduler",
        demo: "",
      },
      {
        title: "Payments Service",
        subtitle: "Microservicio de pagos con Spring Boot",
        description:
          "Microservicio backend desarrollado alrededor de la gestión de pagos, filtrado, persistencia y documentación de API. El proyecto se centra en endpoints REST, DTOs, repositorios y lógica de capa de servicio.",
        highlights: [
          "API REST para creación y consulta de pagos.",
          "Filtrado por artista, fecha, estado e importe.",
          "Comunicación basada en DTOs.",
          "Persistencia en base de datos con JPA.",
          "Documentación OpenAPI.",
        ],
        tech: ["Java", "Spring Boot", "MySQL", "JPA", "OpenAPI"],
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
        institution: "Universidad de Extremadura",
        period: "Último curso",
        description:
          "Grado centrado en desarrollo software, bases de datos, sistemas, modelado, aplicaciones web y prácticas de ingeniería del software.",
      },
    ],

    experienceSection: {
      eyebrow: "Experiencia",
      title: "Experiencia laboral",
      description:
        "Aunque busco mi primera oportunidad en desarrollo software, mi experiencia laboral previa me ha ayudado a desarrollar responsabilidad, comunicación y trabajo en equipo.",
    },

    experience: [
      {
        title: "Socorrista de temporada",
        company: "Ayuntamiento de Almendralejo",
        period: "Experiencia de temporada",
        description:
          "Experiencia laboral que implica responsabilidad, comunicación con el público, trabajo en equipo y cumplimiento de procedimientos de seguridad.",
      },
    ],

    contactSection: {
      eyebrow: "Contacto",
      title: "Hablemos",
      description:
        "Estoy abierto a oportunidades junior o trainee relacionadas con desarrollo backend, ingeniería del software y roles técnicos donde el conocimiento de programación aporte valor.",
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
    ],

    footer: {
      builtWith: "Creado con React, Vite y Tailwind CSS.",
    },
  },

  en: {
    personalInfo: {
      name: "Alberto Chamizo Barrio",
      role: "Backend Junior Developer",
      location: "Extremadura, Spain",
      email: "albertochamizo05@gmail.com",
      github: "https://github.com/AlbertooCh",
      linkedin: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      cv: "/AlbertoChamizoBarrio.pdf",
      formEndpoint:"https://formspree.io/f/maqkoljj",
      summary:
        "Final-year Software Engineering student focused on backend development, REST APIs, databases, testing and clean software architecture. I am looking for my first junior or trainee opportunity where I can contribute, learn from real production environments and keep improving as a software developer.",
    },

    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },

    hero: {
      badge: "Backend-focused Software Engineering student",
      viewProjects: "View projects",
      focusLabel: "Focus",
      focusValue: "Backend development",
      stackLabel: "Main stack",
      stackValue: "Java / Spring Boot",
      locationLabel: "Location",
    },

    about: {
      eyebrow: "About",
      title: "Backend-oriented profile with a practical mindset",
      description:
        "I am building my profile around backend development, APIs, databases, testing and software architecture. I prefer clear, maintainable systems over unnecessary complexity.",
      card1Title: "What I am looking for",
      card1Text:
        "I am looking for a junior or trainee opportunity where I can work on real software projects, learn from more experienced developers and keep improving my backend skills in a professional environment.",
      card2Title: "How I work",
      card2Text:
        "I like understanding why things are built in a certain way, not just copying code. I care about readable structure, clear responsibilities, testing important logic and documenting decisions when they matter.",
    },

    skillsSection: {
      eyebrow: "Skills",
      title: "Technologies I work with",
      description:
        "My strongest interest is backend development, especially Java, Spring Boot, APIs and databases. I also have basic frontend knowledge to build and understand complete web applications.",
    },

    skills: [
      {
        category: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "REST APIs",
          "JPA / Hibernate",
          "JWT",
          "Unit Testing",
          "DTOs",
          "Layered Architecture",
        ],
      },
      {
        category: "Databases",
        items: ["SQL", "MySQL", "PostgreSQL", "Oracle", "Database Design", "JPQL"],
      },
      {
        category: "Tools",
        items: ["Git", "GitHub", "Docker", "Maven", "Gradle", "IntelliJ IDEA", "VS Code"],
      },
      {
        category: "Frontend basics",
        items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      },
      {
        category: "Other",
        items: [
          "Python",
          "OpenAPI",
          "Linux basics",
          "Software Architecture",
          "Agile teamwork",
        ],
      },
    ],

    projectsSection: {
      eyebrow: "Projects",
      title: "Selected work",
      description:
        "A selection of projects focused on backend development, architecture, APIs, databases and software engineering practice.",
      highlights: "Highlights",
      techStack: "Tech stack",
      github: "GitHub",
      demo: "Demo",
    },

    projects: [
      {
        title: "HermoTracker",
        subtitle: "Anime and manga tracking platform",
        description:
          "Personal project focused on building a backend platform for tracking anime and manga, using the Jikan API as an external data source. The project is designed as a practical way to improve backend skills with Spring Boot, authentication, testing and API design.",
        highlights: [
          "Spring Boot backend with layered architecture.",
          "Authentication and JWT-based security.",
          "Unit tests for authentication services.",
          "Integration with external anime/manga data through the Jikan API.",
          "Planned recommendation and tracking features.",
        ],
        tech: ["Java", "Spring Boot", "JWT", "JPA", "JUnit", "Jikan API"],
        github: "https://github.com/AlbertooCh/HermoTracker",
        demo: "",
      },
      {
        title: "QCRAFT-Scheduler",
        subtitle: "Noise-aware quantum circuit scheduler",
        description:
          "Final degree project focused on extending a quantum circuit scheduler with topology-aware and noise-aware policies. The system considers hardware constraints, coupling maps, fidelity metrics and different scheduling strategies.",
        highlights: [
          "Noise-aware scheduling policies.",
          "Hardware topology modelling using graphs.",
          "Reliability metrics for quantum circuits.",
          "Comparison between different scheduling strategies.",
          "Research-oriented software architecture.",
        ],
        tech: ["Python", "NetworkX", "Quantum Computing", "Graphs", "Scheduling"],
        github: "https://github.com/AlbertooCh/QCRAFT-Scheduler",
        demo: "",
      },
      {
        title: "Payments Service",
        subtitle: "Spring Boot payment microservice",
        description:
          "Backend microservice developed around payment management, filtering, persistence and API documentation. The project focuses on REST endpoints, DTOs, repositories and service-layer logic.",
        highlights: [
          "REST API for payment creation and querying.",
          "Filtering by artist, date, status and amount.",
          "DTO-based communication.",
          "Database persistence with JPA.",
          "OpenAPI documentation.",
        ],
        tech: ["Java", "Spring Boot", "MySQL", "JPA", "OpenAPI"],
        github: "",
        demo: "",
      },
    ],

    educationSection: {
      eyebrow: "Education",
      title: "Academic background",
      description:
        "My academic path has given me a broad software engineering foundation, from programming and databases to modelling, systems and software architecture.",
    },

    education: [
      {
        title: "Software Engineering Degree",
        institution: "University of Extremadura",
        period: "Final year",
        description:
          "Degree focused on software development, databases, systems, modelling, web applications and software engineering practices.",
      },
    ],

    experienceSection: {
      eyebrow: "Experience",
      title: "Work experience",
      description:
        "Although I am looking for my first software development opportunity, previous work experience has helped me build responsibility, communication and teamwork habits.",
    },

    experience: [
      {
        title: "Seasonal Lifeguard",
        company: "Ayuntamiento de Almendralejo",
        period: "Seasonal experience",
        description:
          "Work experience involving responsibility, public-facing communication, teamwork and adherence to safety procedures.",
      },
    ],

    contactSection: {
      eyebrow: "Contact",
      title: "Let’s get in touch",
      description:
        "I am open to junior or trainee opportunities related to backend development, software engineering and technical support roles where programming knowledge is valuable.",
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
    ],

    footer: {
      builtWith: "Built with React, Vite and Tailwind CSS.",
    },
  },
};