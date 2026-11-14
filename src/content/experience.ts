import type { Locale } from '@/i18n/routing';
import type { WorkExperience } from '@/features/experience/domain/experience';

// Experiences described by Ciro. Repository, scope and results remain unverified.
export const experiences = [
  {
    slug: 'ticketing-checkout',
    kind: 'experience',
    role: 'Frontend Engineer',
    company: 'Live Events Platform',
    period: '2023 – 2024',
    title: 'Del evento al checkout.',
    category: 'COMMERCE · FLUJOS TRANSACCIONALES',
    summary:
      'Selección de entradas, carrito y checkout: una experiencia que exige coordinar reglas de negocio, formularios y estado.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    concepts: [
      'Arquitectura por features',
      'Estado de carrito',
      'Formularios',
      'Integración de APIs',
    ],
    highlights: [
      'Arquitectura por features',
      'Flujo transaccional',
      'Validación de formularios',
    ],
    evidence: 'self-reported',
    repository: null,
    result: null,
  },
  {
    slug: 'operations-backoffice',
    kind: 'experience',
    role: 'Frontend Developer',
    company: 'Financial & Operations Backoffice',
    period: '2022 – 2023',
    title: 'Operaciones con contexto.',
    category: 'INTERNAL TOOLS · BACKOFFICE',
    summary:
      'Herramientas internas y dashboards para equipos contables, con foco en la lectura de información y los flujos operativos.',
    technologies: ['React', 'TypeScript'],
    concepts: [
      'Dashboards',
      'Redux Toolkit',
      'Ant Design',
      'Documentación técnica',
    ],
    highlights: [
      'Dashboards analíticos',
      'Flujos operativos',
      'Diseño de sistemas internos',
    ],
    evidence: 'self-reported',
    repository: null,
    result: null,
  },
  {
    slug: 'angular-learning',
    kind: 'learning',
    role: 'Investigación y Desarrollo Frontend',
    company: 'Especialización Técnica',
    period: '2024',
    title: 'Explorar otro modelo mental.',
    category: 'APRENDIZAJE · ANGULAR',
    summary:
      'Una línea de aprendizaje práctico de Angular moderno: servicios, inyección de dependencias, signals y consumo de APIs.',
    technologies: ['Angular', 'TypeScript'],
    concepts: ['Signals', 'RxJS', 'Inyección de dependencias', 'HttpClient'],
    highlights: [
      'Signals y reactividad',
      'Inyección de dependencias',
      'Servicios desacoplados',
    ],
    evidence: 'self-reported',
    repository: null,
    result: null,
  },
] as const satisfies readonly WorkExperience[];

const english = {
  'ticketing-checkout': {
    role: 'Frontend Engineer',
    company: 'Live Events Platform',
    period: '2023 – 2024',
    title: 'From event to checkout.',
    category: 'COMMERCE · TRANSACTION FLOWS',
    summary:
      'Ticket selection, cart and checkout bring together business rules, forms and state.',
    concepts: [
      'Feature-based architecture',
      'Cart state',
      'Forms',
      'API integration',
    ],
    highlights: [
      'Feature-based architecture',
      'Transactional flow',
      'Form validation',
    ],
  },
  'operations-backoffice': {
    role: 'Frontend Developer',
    company: 'Financial & Operations Backoffice',
    period: '2022 – 2023',
    title: 'Operations with context.',
    category: 'INTERNAL TOOLS · BACK OFFICE',
    summary:
      'Internal tools and dashboards for accounting teams, with a focus on making information and operational workflows easier to understand.',
    concepts: [
      'Dashboards',
      'Redux Toolkit',
      'Ant Design',
      'Technical documentation',
    ],
    highlights: [
      'Analytical dashboards',
      'Operational workflows',
      'Internal design systems',
    ],
  },
  'angular-learning': {
    role: 'Frontend Architecture / R&D',
    company: 'Technical Specialization',
    period: '2024',
    title: 'Exploring a different mental model.',
    category: 'LEARNING · ANGULAR',
    summary:
      'Hands-on learning with modern Angular, including services, dependency injection, signals and consuming APIs.',
    concepts: ['Signals', 'RxJS', 'Dependency injection', 'HttpClient'],
    highlights: [
      'Signals and reactivity',
      'Dependency injection',
      'Decoupled services',
    ],
  },
} satisfies Record<
  (typeof experiences)[number]['slug'],
  Pick<
    WorkExperience,
    | 'role'
    | 'company'
    | 'period'
    | 'title'
    | 'category'
    | 'summary'
    | 'concepts'
    | 'highlights'
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
