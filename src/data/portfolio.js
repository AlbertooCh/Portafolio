export const portfolioContent = {
  es: {
    personalInfo: {
      name: "Alberto Chamizo Barrio",
      role: "Desarrollador Software Junior",
      location: "Extremadura, España",
      email: "albertochamizo05@gmail.com",
      github: "https://github.com/AlbertooCh",
      linkedin: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      cv: "/AlbertoChamizoBarrio.pdf",
      formEndpoint: "https://formspree.io/f/maqkoljj",
      summary:
        "Perfil junior orientado al desarrollo de software, con especial interés en backend, APIs REST, bases de datos, cloud y arquitectura de aplicaciones. Actualmente estoy en la fase final del Grado en Ingeniería Informática del Software y trabajo en proyectos personales para reforzar mi experiencia práctica.",
    },

    nav: {
      about: "Sobre mí",
      cv: "CV",
      skills: "Tecnologías",
      projects: "Proyectos",
      education: "Formación",
      contact: "Contacto",
    },

    hero: {
      badge: "Perfil junior en fase final de Ingeniería Informática del Software",
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
        "Estoy centrando mi perfil en el desarrollo de software, especialmente backend, APIs REST, bases de datos y arquitectura de aplicaciones. Me interesa aprender a construir sistemas claros, mantenibles y adaptados a necesidades reales.",
      card1Title: "Qué estoy buscando",
      card1Text:
        "Busco una primera oportunidad junior o trainee donde poder participar en proyectos reales, aprender de equipos con más experiencia y aportar una base técnica sólida en programación, bases de datos y desarrollo backend.",
      card2Title: "Cómo trabajo",
      card2Text:
        "Me gusta entender las decisiones técnicas, estructurar bien el código y avanzar de forma práctica. Valoro la claridad, la separación de responsabilidades, el control de versiones y la documentación cuando ayuda a mantener el proyecto.",
    },

    skillsSection: {
      eyebrow: "Tecnologías",
      title: "Tecnologías con las que trabajo",
      description:
        "Mi mayor interés está en el desarrollo backend, especialmente Java, Spring Boot, APIs y bases de datos. También tengo conocimientos básicos de frontend para construir y entender aplicaciones web completas.",
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
        items: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB básico", "Redis básico", "JPQL"],
      },
      {
        category: "Herramientas",
        items: ["Git", "GitHub", "Docker", "Docker Compose", "Maven", "Gradle", "Postman"],
      },
      {
        category: "Testing y documentación",
        items: ["JUnit", "Mockito", "OpenAPI", "Swagger"],
      },
      {
        category: "Otros",
        items: ["Linux básico", "OAuth2", "Keycloak", "Cloud en preparación", "Agile/Scrum"],
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
        period: "2021 - 2026",
        description:
          "En fase final del grado, pendiente de defensa del TFG. Formación orientada a desarrollo software, bases de datos, ingeniería web, modelado, sistemas, redes y arquitectura de aplicaciones.",
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
        period: "jun. 2025 - oct. 2025",
        description:
          "Experiencia laboral basada en responsabilidad directa, atención al público, vigilancia preventiva, cumplimiento de protocolos de seguridad y trabajo en equipo.",
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

      projects: [
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
        status: "TFG",
        categories: ["tfg"],
        description:
          "Trabajo de Fin de Grado centrado en la incorporación de una política noise-aware a un planificador de circuitos cuánticos, con el objetivo de considerar información de ruido del hardware durante el proceso de planificación.",
        highlights: [
          "Extensión de un planificador existente mediante una política noise-aware.",
          "Uso de información de ruido del hardware como criterio de decisión.",
          "Análisis de resultados para comparar el comportamiento de la política añadida.",
          "Documentación técnica del desarrollo como parte del TFG.",
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

      projectsSection: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Selección de proyectos centrados en backend, arquitectura, APIs, bases de datos y práctica real de ingeniería del software.",
      highlights: "Puntos clave",
      techStack: "Tecnologías",
      github: "GitHub",
      demo: "Demo",
      filters: [
        { label: "Todos", value: "all" },
        { label: "Backend", value: "backend" },
        { label: "Java", value: "java" },
        { label: "TFG", value: "tfg" },
        { label: "Microservicios", value: "microservices" },
      ],
    },
  },

  en: {
    personalInfo: {
      name: "Alberto Chamizo Barrio",
      role: "Junior Software Developer",
      location: "Extremadura, Spain",
      email: "albertochamizo05@gmail.com",
      github: "https://github.com/AlbertooCh",
      linkedin: "https://www.linkedin.com/in/alberto-chamizo-barrio-21b605286",
      cv: "/AlbertoChamizoBarrio.pdf",
      formEndpoint: "https://formspree.io/f/maqkoljj",
      summary:
        "Junior profile focused on software development, with a strong interest in backend, REST APIs, databases, cloud and application architecture. I am currently in the final stage of my Software Engineering degree and building personal projects to strengthen my practical experience.",
    },

    nav: {
      about: "About",
      cv: "CV",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },  

    hero: {
      badge: "Junior profile in the final stage of a Software Engineering degree",
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

    cvSection: {
      eyebrow: "Resume",
      title: "Updated CV ready to view or download",
      description:
        "I have prepared an updated version of my CV with education, projects, technologies and relevant experience. You can view it directly or download it as a PDF.",
      view: "View CV",
      download: "Download CV",
      cards: [
        {
          icon: "📄",
          title: "PDF format",
          text: "Resume prepared for quick review by recruiters and companies.",
        },
        {
          icon: "💻",
          title: "Technical profile",
          text: "Includes projects, backend technologies, databases, tools and education.",
        },
        {
          icon: "🚀",
          title: "Junior profile",
          text: "Focused on junior software development, backend or trainee opportunities.",
        },
      ],
    },
};