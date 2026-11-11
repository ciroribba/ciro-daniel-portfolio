import type { Locale } from '@/i18n/routing';
import type { Project } from '@/features/projects/domain/project';
// Experiences described by Ciro. Repository, scope and results remain unverified.
export const projects = [
  {
    slug: 'ticketing-checkout',
    kind: 'experience',
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
    evidence: 'self-reported',
    repository: null,
    result: null,
  },
  {
    slug: 'operations-backoffice',
    kind: 'experience',
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
    evidence: 'self-reported',
    repository: null,
    result: null,
  },
  {
    slug: 'angular-learning',
    kind: 'learning',
    title: 'Explorar otro modelo mental.',
    category: 'APRENDIZAJE · ANGULAR',
    summary:
      'Una línea de aprendizaje práctico de Angular moderno: servicios, inyección de dependencias, signals y consumo de APIs.',
    technologies: ['Angular', 'TypeScript'],
    concepts: ['Signals', 'RxJS', 'Inyección de dependencias', 'HttpClient'],
    evidence: 'self-reported',
    repository: null,
    result: null,
  },
] as const satisfies readonly Project[];

const english = {
  'ticketing-checkout': {
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
  },
  'operations-backoffice': {
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
  },
  'angular-learning': {
    title: 'Exploring a different mental model.',
    category: 'LEARNING · ANGULAR',
    summary:
      'Hands-on learning with modern Angular, including services, dependency injection, signals and consuming APIs.',
    concepts: ['Signals', 'RxJS', 'Dependency injection', 'HttpClient'],
  },
} satisfies Record<
  (typeof projects)[number]['slug'],
  Pick<Project, 'title' | 'category' | 'summary' | 'concepts'>
>;

export function getProjects(locale: Locale): readonly Project[] {
  return locale === 'en'
    ? projects.map((project) => ({ ...project, ...english[project.slug] }))
    : projects;
}
