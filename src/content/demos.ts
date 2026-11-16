import type { Locale } from '@/i18n/routing';

type DemoCopy = {
  kind: string;
  summary: string;
  flow: readonly string[];
  design: string;
  decisions: readonly { technology: string; reason: string }[];
};

export const demos = [
  {
    slug: 'estudio-zeballo',
    title: 'Estudio Zeballo',
    liveUrl: 'https://portfolioarquitecto.cirodaniel.com/',
    repositoryUrl: 'https://github.com/ciroribba/portfolio_arquitecto',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    es: {
      kind: 'Portfolio de arquitectura',
      summary:
        'Sitio de estudio que presenta cuatro obras y ayuda a potenciales clientes a conocer el trabajo y tomar contacto.',
      flow: [
        'Recorré la presentación del estudio y elegí una obra en la galería.',
        'Abrí su ficha para ver los renders, una planta esquemática y la memoria. Podés recorrer las imágenes con el teclado.',
        'Completá el formulario de contacto. La validación ocurre en el navegador y el mensaje se prepara en tu cliente de correo.',
      ],
      design:
        'Una grilla de proporciones sobrias, fondos que evocan el papel y una sola familia tipográfica dejan que los renders y los planos ocupen el centro de la página. El tema claro u oscuro conserva esa jerarquía.',
      decisions: [
        {
          technology: 'Next.js y React',
          reason:
            'Generan una única página estática para el contenido público. React resuelve la interacción de las fichas, la galería y el formulario.',
        },
        {
          technology: 'TypeScript',
          reason:
            'Modela las obras, galerías y plantas en archivos de datos para actualizar el contenido sin editar los componentes de presentación.',
        },
        {
          technology: 'Tailwind CSS y Base UI',
          reason:
            'Tailwind aplica los mismos tokens visuales a ambos temas. Base UI aporta la primitiva de diálogo para consultar cada obra dentro de la página.',
        },
      ],
    },
    en: {
      kind: 'Architecture portfolio',
      summary:
        'A studio website that presents four architectural projects and gives prospective clients a way to explore the work and get in touch.',
      flow: [
        'Read the studio introduction and choose a project from the gallery.',
        'Open its details to view renders, a schematic floor plan, and the project narrative. Use the keyboard to move between images.',
        'Fill out the contact form. The browser validates the fields and prepares the message in your email client.',
      ],
      design:
        'A restrained grid, paper-like surfaces, and a single typeface give renders and plans the most space on the page. Both themes preserve the same hierarchy.',
      decisions: [
        {
          technology: 'Next.js and React',
          reason:
            'Generate a single static page for the public content. React handles interactions in the project dialogs, gallery, and contact form.',
        },
        {
          technology: 'TypeScript',
          reason:
            'Models projects, galleries, and floor plans in data files so content can be updated independently of the presentation components.',
        },
        {
          technology: 'Tailwind CSS and Base UI',
          reason:
            'Tailwind applies shared design tokens to both themes. Base UI provides the dialog primitive for exploring a project within the page.',
        },
      ],
    },
  },
  {
    slug: 'castpro-agency',
    title: 'CastPro Agency',
    liveUrl: 'https://castproagency.cirodaniel.com/',
    repositoryUrl: 'https://github.com/ciroribba/casting_pro',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Random User API',
    ],
    es: {
      kind: 'Panel operativo de casting',
      summary:
        'Aplicación de agencia para explorar perfiles, revisar asignaciones de campaña y calcular cotizaciones en euros.',
      flow: [
        'Entrá con el acceso de muestra. Filtrá el catálogo por nombre, edad, género o ciudad y abrí una ficha para consultar el perfil o preseleccionarlo.',
        'Revisá las campañas por fase y ajustá las etapas de los talentos asignados durante la sesión de demo.',
        'Abrí el cotizador y ajustá variables como duración, exclusividad y cantidad de talentos. Podés imprimir el desglose o guardarlo como PDF desde el navegador.',
      ],
      design:
        'La grilla facilita comparar perfiles y las pestañas agrupan las campañas por fase. Los paneles laterales muestran la ficha o el cotizador manteniendo a la vista el contexto de trabajo.',
      decisions: [
        {
          technology: 'React y Vite',
          reason:
            'Organizan el catálogo, las campañas y el cotizador como módulos de una aplicación de página única que se puede desplegar en hosting estático. El acceso demo y sus cambios viven en la sesión del navegador.',
        },
        {
          technology: 'TypeScript',
          reason:
            'Define los modelos de talento y campaña. Los filtros y el cálculo de la cotización se ejecutan en funciones separadas de la interfaz.',
        },
        {
          technology: 'Tailwind CSS y Random User API',
          reason:
            'Tailwind adapta la grilla y los paneles al tamaño de pantalla. Random User permite ampliar el catálogo bajo demanda y deja disponibles los perfiles iniciales si la consulta falla.',
        },
      ],
    },
    en: {
      kind: 'Casting operations dashboard',
      summary:
        'An agency app for browsing talent profiles, reviewing campaign assignments, and calculating quotes in euros.',
      flow: [
        'Sign in with the demo access. Filter by name, age, gender, or city, then open a profile to review it or mark it as shortlisted.',
        'Browse campaigns by phase and update the stages of assigned talent during the demo session.',
        'Open the quote calculator and adjust variables like duration, exclusivity, and headcount. Use the browser to print the breakdown or save it as a PDF.',
      ],
      design:
        'A grid makes profiles easy to compare, while tabs group campaigns by phase. Side panels show profile details or quote options while keeping the work in context.',
      decisions: [
        {
          technology: 'React and Vite',
          reason:
            'Structure the catalog, campaigns, and quote calculator as modules in a single-page app that can be deployed to static hosting. Demo access and changes live in the browser session.',
        },
        {
          technology: 'TypeScript',
          reason:
            'Defines the talent and campaign models. Separate functions handle filtering and quote calculations independently of the interface.',
        },
        {
          technology: 'Tailwind CSS and Random User API',
          reason:
            'Tailwind adapts the grid and panels to the screen size. Random User extends the catalog on demand, while the initial profiles remain available if the request fails.',
        },
      ],
    },
  },
  {
    slug: 'inti-raymi',
    title: 'Inti Raymi',
    liveUrl: 'https://intiraymi.cirodaniel.com/',
    repositoryUrl: 'https://github.com/ciroribba/inti_raymi',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Web Audio API',
      'React Hook Form',
      'Zod',
    ],
    es: {
      kind: 'Festival y venta de entradas',
      summary:
        'Experiencia promocional para un festival conceptual de música electrónica en los Andes, con exploración de la programación y compra simulada de entradas.',
      flow: [
        'Explorá la programación por noche o escenario y abrí la ficha de un artista.',
        'Compará pases, elegí la cantidad y revisá el total antes de avanzar al checkout.',
        'Completá el formulario con datos de prueba y recorré la simulación de pago hasta la confirmación del pase.',
      ],
      design:
        'El fondo oscuro, la tipografía de gran escala y los acentos neón dan al festival una identidad visual propia. La animación y el sonido opcional acompañan la exploración y las acciones de compra.',
      decisions: [
        {
          technology: 'React, TypeScript y Vite',
          reason:
            'React comparte la selección, el carrito y los modales entre componentes. TypeScript modela artistas, escenarios y pases. Vite genera los archivos para publicar la demo como sitio estático.',
        },
        {
          technology: 'Tailwind CSS, Framer Motion y Web Audio API',
          reason:
            'Tailwind define los estilos adaptables. Framer Motion anima las transiciones y Web Audio API sintetiza el feedback sonoro en el navegador.',
        },
        {
          technology: 'React Hook Form y Zod',
          reason:
            'Gestionan el formulario de compra y validan sus datos contra un esquema antes de simular el procesamiento del pago.',
        },
      ],
    },
    en: {
      kind: 'Festival and ticketing',
      summary:
        'A promotional experience for a conceptual electronic music festival in the Andes, with a browsable lineup and simulated ticket checkout.',
      flow: [
        'Explore the lineup by night or stage and open an artist profile.',
        'Compare passes, choose a quantity, and review the total before proceeding to checkout.',
        'Complete the form with test data and follow the simulated payment through to the pass confirmation.',
      ],
      design:
        'A dark palette, oversized type, and neon accents give the festival its visual identity. Motion and optional sound accompany browsing and ticket interactions.',
      decisions: [
        {
          technology: 'React, TypeScript, and Vite',
          reason:
            'React shares the selection, cart, and dialog state across components. TypeScript models artists, stages, and passes. Vite generates files for static deployment.',
        },
        {
          technology: 'Tailwind CSS, Framer Motion, and Web Audio API',
          reason:
            'Tailwind handles responsive styling. Framer Motion animates transitions, and Web Audio API synthesizes sound feedback in the browser.',
        },
        {
          technology: 'React Hook Form and Zod',
          reason:
            'Manage the checkout form and validate the data against a schema before the payment simulation begins.',
        },
      ],
    },
  },
] satisfies readonly ({
  slug: string;
  title: string;
  liveUrl: string;
  repositoryUrl: string;
  technologies: readonly string[];
} & Record<Locale, DemoCopy>)[];

export function getDemo(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}
