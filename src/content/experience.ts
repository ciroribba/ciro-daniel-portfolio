import type { Locale } from '@/i18n/routing';
import type { WorkExperience } from '@/features/experience/domain/experience';

export const experiences = [
  {
    slug: 'ticketing-checkout',
    kind: 'experience',
    role: 'Sr. Software Engineer',
    company: 'ITTI / Tuti Digital',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Zustand',
      'Zod',
      'Tailwind CSS',
      'shadcn/ui',
      'Hotjar',
      'GitHub Actions',
    ],
    period: 'oct. 2024 – actualidad',
    title: 'Venta de entradas y checkout de eventos',
    category: 'Venta de entradas',
    summary:
      'Desarrollé el flujo de compra para eventos deportivos y culturales, desde la selección de entradas y el carrito hasta la integración de medios de pago.',
    concepts: [
      'SSR',
      'Renderizado en el cliente',
      'Estado del carrito',
      'Integración de pagos',
    ],
    result: 'Reducción del 25 % en el tiempo hasta el primer byte (TTFB).',
    evidence: 'self-reported',
    repository: null,
  },
  {
    slug: 'operations-backoffice',
    kind: 'experience',
    role: 'Sr. Frontend Developer',
    company: 'Disperso',
    technologies: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Ant Design',
      'Ant Charts',
      'Vitest',
      'React Testing Library',
      'Mock Service Worker',
      'Burp Suite',
    ],
    period: 'oct. 2023 – ago. 2024',
    title: 'Seguimiento de pagos masivos y operaciones contables',
    category: 'Pagos y backoffice',
    summary:
      'Desarrollé dashboards para una plataforma de pagos masivos y su backoffice contable. Los equipos podían filtrar por empresa y consultar transacciones completadas, pendientes y rechazadas.',
    concepts: [
      'Dashboards',
      'Accesibilidad',
      'Pruebas de frontend',
      'Backend for Frontend',
    ],
    result:
      'Reducción del 30 % en reclamos de soporte tras mejoras de accesibilidad. La cobertura de pruebas del frontend superó el 85 %.',
    evidence: 'self-reported',
    repository: null,
  },
  {
    slug: 'kala',
    kind: 'experience',
    role: 'Sr. Frontend Developer',
    company: 'Kala',
    technologies: [
      'React',
      'TypeScript',
      'Ant Design',
      'Ant Design Charts',
      'Redux Toolkit',
      'Vitest',
      'Amazon Cognito',
      'Sentry',
      'Figma',
    ],
    period: 'ago. 2022 – oct. 2023',
    title: 'Formularios financieros de alta complejidad',
    category: 'Interfaces financieras',
    summary:
      'Desarrollé y optimicé formularios de hasta 180 campos, con componentes complejos, carga de archivos y captura de imágenes. Junto con Diseño, acordamos usar los mismos componentes de Ant Design en Figma y en el frontend.',
    concepts: [
      'Formularios complejos',
      'Componentes reutilizables',
      'Caché de respuestas',
    ],
    result:
      'El ciclo de desarrollo y pruebas hasta QA de estos formularios bajó de tres semanas a una.',
    evidence: 'self-reported',
    repository: null,
  },
  {
    slug: 'mendel',
    kind: 'experience',
    role: 'Frontend Developer',
    company: 'Mendel',
    technologies: [
      'Angular',
      'NG-Zorro',
      'Ant Design Charts',
      'Socket.IO',
      'WebSockets',
      'Hotjar',
      'Sentry',
      'NGINX',
    ],
    period: 'oct. 2020 – ago. 2022',
    title: 'Gestión de gastos corporativos y comprobantes',
    category: 'Gastos corporativos',
    summary:
      'Desarrollé dashboards para consultar gastos por servicio y período, pantallas para configurar límites de tarjetas y flujos de validación de comprobantes para el backoffice.',
    concepts: ['Dashboards', 'Comprobantes', 'Notificaciones en tiempo real'],
    result: 'Reducción del 35 % en los tiempos operativos del backoffice.',
    evidence: 'self-reported',
    repository: null,
  },
] as const satisfies readonly WorkExperience[];

const english = {
  'ticketing-checkout': {
    period: 'Oct 2024 – present',
    title: 'Event ticketing and checkout',
    category: 'Ticketing',
    summary:
      'I built the purchase flow for sports and cultural events, from selecting tickets and building a cart to integrating payment methods.',
    concepts: [
      'SSR',
      'Client-side rendering',
      'Cart state',
      'Payment integration',
    ],
    result: 'Reduced time to first byte (TTFB) by 25%.',
  },
  'operations-backoffice': {
    period: 'Oct 2023 – Aug 2024',
    title: 'Bulk payments and accounting operations',
    category: 'Payments and back office',
    summary:
      'I built dashboards for a bulk payments platform and its accounting back office. Teams could filter by company and review completed, pending, and rejected transactions.',
    concepts: [
      'Dashboards',
      'Accessibility',
      'Frontend testing',
      'Backend for Frontend',
    ],
    result:
      'Support complaints fell by 30% after accessibility improvements. Frontend test coverage exceeded 85%.',
  },
  kala: {
    period: 'Aug 2022 – Oct 2023',
    title: 'Complex financial forms',
    category: 'Financial interfaces',
    summary:
      'I built and optimized forms with up to 180 fields, including complex components, file uploads, and image capture. We agreed with Design to use the same Ant Design components in Figma and the frontend.',
    concepts: ['Complex forms', 'Reusable components', 'Response caching'],
    result:
      'The development and testing cycle through QA for these forms dropped from three weeks to one.',
  },
  mendel: {
    period: 'Oct 2020 – Aug 2022',
    title: 'Corporate expenses and receipt processing',
    category: 'Corporate expenses',
    summary:
      'I built dashboards to review expenses by service and period, interfaces for configuring card limits, and receipt validation flows for back-office teams.',
    concepts: ['Dashboards', 'Receipt processing', 'Real-time notifications'],
    result: 'Back-office processing times fell by 35%.',
  },
} satisfies Record<
  (typeof experiences)[number]['slug'],
  Pick<
    WorkExperience,
    'period' | 'title' | 'category' | 'summary' | 'concepts' | 'result'
  >
>;

export function getExperiences(locale: Locale): readonly WorkExperience[] {
  return locale === 'en'
    ? experiences.map((item) => ({ ...item, ...english[item.slug] }))
    : experiences;
}

// Aliases for compatibility and expressive naming
export const experienceData = experiences;
export const getExperienceData = getExperiences;
export const projects = experiences;
export const getProjects = getExperiences;
