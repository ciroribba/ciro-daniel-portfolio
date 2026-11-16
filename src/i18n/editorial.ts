const es = {
  home: {
    heroDescription:
      'Diseño y construyo interfaces y arquitectura frontend para dashboards, herramientas internas y flujos de compra.',
    explore: 'Explorar experiencia',
    engineering: 'Cómo pienso la ingeniería',
    ecosystem: 'Tecnologías',
    location: 'Ubicación',
    practiceTitle: 'Experiencia destacada',
    allProjects: 'Toda la experiencia',
    perspective: 'Mi enfoque',
    perspectiveFirst: 'Una buena interfaz empieza',
    perspectiveSecond: 'antes del primer componente.',
    perspectiveDescription:
      'Entender el dominio. Hacer visibles los estados. Acordar los contratos. Documentar las decisiones para que el equipo pueda seguir construyendo.',
    nextChapter: 'Datos e inteligencia artificial',
    labFirst: 'Frontend, con una',
    labSecond: 'mirada hacia los datos.',
    labDescription:
      'Técnico Superior en Ciencia de Datos (2026). Un espacio para conectar interfaces, exploración de datos y futuras experiencias con IA.',
    labLink: 'Entrar al laboratorio',
  },
  about: {
    portraitAlt: 'Retrato de Ciro Zeballo Ribba',
    interfaceTitle: 'La interfaz es el punto de encuentro.',
    experience:
      'Mi experiencia incluye aplicaciones con React, Next.js y TypeScript, dashboards, backoffices y flujos de compra de entradas. Me interesa entender tanto la experiencia de quien usa el producto como las decisiones que permiten mantenerlo.',
    documentation:
      'La documentación técnica también forma parte de ese trabajo: revisar contratos de APIs, representar flujos y colaborar con producto, backend y QA para convertir requerimientos en comportamientos claros.',
    learning:
      'Exploro Angular moderno como otra manera de pensar aplicaciones frontend. En 2026 completé la Tecnicatura Superior en Ciencia de Datos; mi próximo paso de formación previsto es una Licenciatura en Inteligencia Artificial.',
    conversation: 'Una conversación técnica empieza con contexto.',
    contact:
      'Podés conocer mis repositorios o conectar conmigo para conversar sobre frontend, arquitectura y producto.',
    linkedin: 'Conectar en LinkedIn',
    github: 'Explorar GitHub',
    eyebrow: 'ABOUT',
    title: 'Soy Ciro. Construyo desde el frontend.',
    description:
      'Senior Frontend Engineer, con foco en ingeniería, arquitectura y experiencia de usuario. Vivo en Córdoba, Argentina.',
    metadataTitle: 'Sobre mí',
  },
  credentials: {
    next: 'PRÓXIMA ETAPA',
    futureDescription:
      'Inicio e institución por confirmar. No se presenta como una carrera iniciada ni como un título obtenido.',
    notes:
      'Las habilidades son etiquetas temáticas. Los enlaces corresponden a los certificados aportados; el diploma académico no tiene todavía un enlace público de verificación.',
    eyebrow: 'CREDENTIALS',
    title: 'Aprender. Aplicar. Profundizar.',
    description:
      'Formación académica y cursos complementarios, distinguidos por su alcance. Información contrastada con los documentos aportados.',
    metadataTitle: 'Credenciales',
  },
  engineering: {
    principlesNote:
      'Principios de trabajo. Cada caso requiere contrastarlos con sus restricciones y su contexto.',
    docsTitle: 'Cómo trabajo en una funcionalidad',
    before: 'Refinar el requerimiento',
    beforeDescription:
      'Participo en sesiones de refinamiento con las personas involucradas para acordar el alcance, las reglas de negocio y los casos límite. En Jira, uso escenarios Gherkin (Dado / Cuando / Entonces) para describir el comportamiento esperado.',
    during: 'Documentar y acordar la integración',
    duringDescription:
      'Escribo especificaciones técnicas por funcionalidad en Markdown dentro de Atlassian. Uso diagramas UML en draw.io o Excalidraw para explicar flujos y coordino los contratos de API con Backend mediante documentación y Swagger.',
    delivery: 'Preparar la validación',
    deliveryDescription:
      'Dejo en las historias de Jira los casos que QA debe verificar. Desarrollo y QA comparten los criterios de aceptación y los casos límite para comprobar el mismo comportamiento.',
    cases: 'Explorar trayectoria y casos',
    principles: [
      [
        '01',
        'El dominio organiza el código.',
        'Separar por capacidades del producto hace explícitas las responsabilidades. Los componentes compartidos aparecen cuando hay una necesidad real de reutilización.',
      ],
      [
        '02',
        'El estado tiene un dueño.',
        'Estado local para interacción; estado de servidor para recursos remotos; estado compartido cuando varias partes del flujo lo necesitan. Cada dato debe tener una fuente de verdad.',
      ],
      [
        '03',
        'Los contratos preceden a la integración.',
        'Swagger/OpenAPI, diagramas de secuencia y criterios Given / When / Then ayudan a alinear frontend, backend, producto y QA antes de implementar.',
      ],
      [
        '04',
        'La calidad también es experiencia.',
        'Estados vacíos, errores recuperables, navegación por teclado y rendimiento forman parte de la solución. Los tests cubren comportamiento y riesgos concretos.',
      ],
    ],
    eyebrow: 'ENGINEERING & ARCHITECTURE',
    title: 'Decisiones que sostienen la experiencia.',
    description:
      'Mi enfoque: hacer comprensible el sistema para quienes lo usan y para quienes lo construyen.',
    metadataTitle: 'Ingeniería y arquitectura',
  },
  lab: {
    proposals: 'LÍNEAS PROPUESTAS · AÚN NO IMPLEMENTADAS',
    proposal: 'Propuesta',
    dataTitle: 'Exploración de datos',
    dataDescription:
      'Transformar un dataset en una interfaz que ayude a formular preguntas. Documentar fuente, limpieza y límites del análisis.',
    aiTitle: 'Interfaces para IA',
    aiDescription:
      'Explorar incertidumbre, revisión humana y estados de espera en una experiencia asistida por modelos.',
    future: 'Formación futura',
    futureTitle: 'Inteligencia Artificial',
    futureDescription:
      'Licenciatura prevista. Institución y fecha de inicio pendientes de confirmar.',
    credentials: 'Ver formación',
    eyebrow: 'DATA SCIENCE & AI LAB',
    title: 'Una nueva perspectiva, en construcción.',
    description:
      'La ingeniería frontend es mi especialidad principal. Ciencia de Datos e Inteligencia Artificial son las áreas con las que estoy ampliando esa mirada.',
    metadataTitle: 'Laboratorio de datos e IA',
  },
  experience: {
    eyebrow: 'WORK EXPERIENCE',
    title: 'Trabajo, contexto y decisiones.',
    description:
      'Trayectoria profesional y roles desempeñados. Cada caso detalla contexto operativo, arquitectura, tecnologías aplicadas y evidencia documentada.',
    metadataTitle: 'Experiencia',
  },
  projects: {
    eyebrow: 'WORK EXPERIENCE',
    title: 'Trabajo, contexto y decisiones.',
    description:
      'Trayectoria profesional y roles desempeñados. Cada caso detalla contexto operativo, arquitectura, tecnologías aplicadas y evidencia documentada.',
    metadataTitle: 'Experiencia',
  },
  technology: {
    eyebrow: 'TECHNOLOGY EXPLORER',
    title: 'Más allá de una lista de tecnologías.',
    description:
      'Conocé mi stack de trabajo y explorá cómo apliqué estas herramientas en distintos proyectos.',
    metadataTitle: 'Explorador de tecnologías',
    stackTitle: 'Mi stack de trabajo',
    experienceTitle: 'Tecnologías en la práctica',
    labLink: 'Explorar el Lab de datos e IA',
    groups: {
      frontend: 'Frontend y lenguajes web',
      interface: 'UI y visualización',
      state: 'Estado y datos remotos',
      forms: 'Formularios y validación',
      backend: 'Backend y diagnóstico HTTP',
      data: 'Datos y machine learning',
    },
  },
};

const en = {
  home: {
    heroDescription:
      'I design and build frontend interfaces and architecture for dashboards, internal tools and purchase flows.',
    explore: 'Explore experience',
    engineering: 'My approach to engineering',
    ecosystem: 'Technologies',
    location: 'Location',
    practiceTitle: 'Featured experience',
    allProjects: 'All experience',
    perspective: 'My approach',
    perspectiveFirst: 'A good interface starts',
    perspectiveSecond: 'before the first component.',
    perspectiveDescription:
      'Understand the domain. Make states visible. Agree on contracts. Document decisions so the team can keep building.',
    nextChapter: 'Data and artificial intelligence',
    labFirst: 'Frontend, with an',
    labSecond: 'eye toward data.',
    labDescription:
      'I completed a higher technical qualification in data science in 2026. This is a space to connect interfaces, data exploration and future AI experiences.',
    labLink: 'Visit the lab',
  },
  about: {
    portraitAlt: 'Portrait of Ciro Zeballo Ribba',
    interfaceTitle: 'The interface is where it all comes together.',
    experience:
      'My experience includes React, Next.js and TypeScript applications, dashboards, back-office tools and ticket purchase flows. I care about how people use a product and the decisions that make it maintainable.',
    documentation:
      'Technical documentation is part of that work. I review API contracts, map flows and collaborate with product, backend and QA to turn requirements into clear behaviors.',
    learning:
      "I explore modern Angular as another way to think about frontend applications. In 2026 I completed a higher technical qualification in data science. My next planned step is a bachelor's degree in artificial intelligence.",
    conversation: 'A technical conversation starts with context.',
    contact:
      'Browse my repositories or get in touch to talk about frontend engineering, architecture and product.',
    linkedin: 'Connect on LinkedIn',
    github: 'Browse GitHub',
    eyebrow: 'ABOUT',
    title: 'I’m Ciro. I build for the frontend.',
    description:
      'I’m a Senior Frontend Engineer focused on engineering, architecture and user experience. I live in Córdoba, Argentina.',
    metadataTitle: 'About',
  },
  credentials: {
    next: 'NEXT STEP',
    futureDescription:
      'The start date and institution are pending confirmation. This program is planned.',
    notes:
      'Skills are topic tags. Links point to the supplied certificates. Public verification for the academic diploma is pending.',
    eyebrow: 'CREDENTIALS',
    title: 'Learn. Apply. Go deeper.',
    description:
      'Academic qualifications and complementary courses, organized by scope. Information checked against the supplied documents.',
    metadataTitle: 'Credentials',
  },
  engineering: {
    principlesNote:
      'These are working principles. Each case has its own context and constraints.',
    docsTitle: 'How I work on a feature',
    before: 'Refine the requirements',
    beforeDescription:
      'I take part in refinement sessions with stakeholders to agree on scope, business rules, and edge cases. In Jira, I use Gherkin scenarios (Given / When / Then) to describe expected behavior.',
    during: 'Document and agree on integration',
    duringDescription:
      'I write feature-level technical specifications in Markdown in Atlassian. I use UML diagrams in draw.io or Excalidraw to explain flows and coordinate API contracts with backend engineers through documentation and Swagger.',
    delivery: 'Prepare for QA',
    deliveryDescription:
      'I document the cases QA should verify in Jira stories. Engineering and QA share acceptance criteria and edge cases so both can verify the same behavior.',
    cases: 'Explore professional experience',
    principles: [
      [
        '01',
        'The domain organizes the code.',
        'Organizing code around product capabilities makes responsibilities explicit. Shared components emerge when there is a real need for reuse.',
      ],
      [
        '02',
        'State has an owner.',
        'Use local state for interaction, server state for remote resources and shared state when several parts of a flow need it. Every piece of data should have a source of truth.',
      ],
      [
        '03',
        'Contracts come before integration.',
        'Swagger/OpenAPI, sequence diagrams and Given / When / Then criteria help align frontend, backend, product and QA before implementation.',
      ],
      [
        '04',
        'Quality is part of the experience.',
        'Empty states, recoverable errors, keyboard navigation and performance are part of the solution. Tests cover behavior and specific risks.',
      ],
    ],
    eyebrow: 'ENGINEERING & ARCHITECTURE',
    title: 'Decisions that support the experience.',
    description:
      'My approach is to make the system understandable to the people who use it and those who build it.',
    metadataTitle: 'Engineering & Architecture',
  },
  lab: {
    proposals: 'PROPOSED AREAS · NOT YET IMPLEMENTED',
    proposal: 'Proposal',
    dataTitle: 'Data exploration',
    dataDescription:
      'Turn a dataset into an interface that helps people ask questions. Document its source, cleaning steps and the limits of the analysis.',
    aiTitle: 'AI interfaces',
    aiDescription:
      'Explore uncertainty, human review and waiting states in a model-assisted experience.',
    future: 'Planned education',
    futureTitle: 'Artificial Intelligence',
    futureDescription:
      "Planned bachelor's degree. The institution and start date are pending confirmation.",
    credentials: 'View education',
    eyebrow: 'DATA SCIENCE & AI LAB',
    title: 'A new perspective in the making.',
    description:
      'Frontend engineering is my main specialty. Data science and artificial intelligence are expanding how I approach it.',
    metadataTitle: 'Data Science & AI Lab',
  },
  experience: {
    eyebrow: 'WORK EXPERIENCE',
    title: 'Work, context and decisions.',
    description:
      'Professional background and technical roles. Each entry details operational context, architecture, applied technologies, and documented evidence.',
    metadataTitle: 'Experience',
  },
  projects: {
    eyebrow: 'WORK EXPERIENCE',
    title: 'Work, context and decisions.',
    description:
      'Professional background and technical roles. Each entry details operational context, architecture, applied technologies, and documented evidence.',
    metadataTitle: 'Experience',
  },
  technology: {
    eyebrow: 'TECHNOLOGY EXPLORER',
    title: 'Beyond a list of technologies.',
    description:
      'Browse my working stack and see how I used these tools across projects.',
    metadataTitle: 'Technology Explorer',
    stackTitle: 'My working stack',
    experienceTitle: 'Tools in practice',
    labLink: 'Explore the Data & AI Lab',
    groups: {
      frontend: 'Frontend and web languages',
      interface: 'UI and visualization',
      state: 'State and remote data',
      forms: 'Forms and validation',
      backend: 'Backend and HTTP diagnostics',
      data: 'Data and machine learning',
    },
  },
} satisfies typeof es;

export const editorial = { es, en };
