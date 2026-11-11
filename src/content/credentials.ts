import type { Locale } from '@/i18n/routing';
import type { Credential } from '@/features/credentials/domain/credential';
// Transcribed from documents provided by the owner. No identity numbers or PDFs are published.
// Skills are editorial subject tags, not an assertion of the complete course syllabus.
export const credentials = [
  {
    id: 'data-science',
    title: 'Técnico Superior en Ciencia de Datos',
    type: 'academic',
    institution: 'Teclab',
    date: '2026-10-14',
    skills: ['Ciencia de datos'],
    verificationUrl: null,
    source:
      'titulo_ds.pdf · diploma revisado; institución aportada por el titular',
  },
  {
    id: 'sdd',
    title: 'Curso Completo de Spec Driven Development (SDD) y Agentes IA',
    type: 'course',
    institution: 'Udemy',
    date: '2026-10-14',
    skills: ['SDD', 'Agentes IA'],
    verificationUrl: 'https://ude.my/UC-4108b159-5d71-4c2d-a2f9-6d78c8dfb339',
    source: 'Certificado de finalización revisado',
  },
  {
    id: 'react',
    title: 'React Desde Cero',
    type: 'course',
    institution: 'Udemy',
    date: '2026-10-13',
    skills: ['React'],
    verificationUrl: 'https://ude.my/UC-08730dcf-9a3d-460f-ac63-ddd42db44827',
    source: 'Certificado de finalización revisado',
  },
  {
    id: 'angular',
    title: 'Angular: De cero a experto',
    type: 'course',
    institution: 'Udemy',
    date: '2026-10-09',
    skills: ['Angular'],
    verificationUrl: 'https://ude.my/UC-9f6fdfbd-21a2-49e5-815a-4ff7cae59a17',
    source: 'Certificado de finalización revisado',
  },
  {
    id: 'gherkin',
    title: 'Gherkin para Product Owner. Aprende la sintaxis de Gherkin',
    type: 'course',
    institution: 'Udemy',
    date: '2026-09-28',
    skills: ['Gherkin', 'Criterios de aceptación'],
    verificationUrl: 'https://ude.my/UC-eb11de9a-86a7-4eb4-9580-1d60b02e323f',
    source: 'Certificado de finalización revisado',
  },
] as const satisfies readonly Credential[];
export const futureEducation = {
  title: 'Licenciatura en Inteligencia Artificial',
  status: 'Formación futura',
  institution: null,
  startDate: null,
} as const;

const english = {
  'data-science': {
    title: 'Higher technical qualification in data science',
    skills: ['Data science'],
  },
  sdd: {
    title: 'Complete Course on Spec-Driven Development (SDD) and AI Agents',
    skills: ['SDD', 'AI agents'],
  },
  react: { title: 'React From Scratch', skills: ['React'] },
  angular: { title: 'Angular: From Beginner to Expert', skills: ['Angular'] },
  gherkin: {
    title: 'Gherkin for Product Owners: Learn Gherkin Syntax',
    skills: ['Gherkin', 'Acceptance criteria'],
  },
} satisfies Record<
  (typeof credentials)[number]['id'],
  Pick<Credential, 'title' | 'skills'>
>;

export function getCredentials(locale: Locale): readonly Credential[] {
  return locale === 'en'
    ? credentials.map((credential) => ({
        ...credential,
        ...english[credential.id],
      }))
    : credentials;
}

export function getFutureEducation(locale: Locale) {
  return locale === 'en'
    ? {
        ...futureEducation,
        title: 'Bachelor’s degree in artificial intelligence',
        status: 'Planned education',
      }
    : futureEducation;
}
