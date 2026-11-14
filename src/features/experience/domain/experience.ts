import type { Locale } from '@/i18n/routing';

export const technologies = [
  'React',
  'Next.js',
  'Angular',
  'TypeScript',
] as const;

export type Technology = (typeof technologies)[number];

export interface WorkExperience {
  slug: string;
  kind: 'experience' | 'learning';
  role: string;
  company: string;
  period: string;
  title: string;
  category: string;
  summary: string;
  technologies: readonly Technology[];
  concepts: readonly string[];
  highlights?: readonly string[];
  evidence: 'self-reported' | 'repository-verified';
  repository: string | null;
  result: string | null;
}

export type Experience = WorkExperience;
export type Project = WorkExperience;

export function filterExperiences(
  experiences: readonly WorkExperience[],
  technology: Technology | null,
  query: string,
  locale: Locale = 'es',
) {
  const normalized = query.trim().toLocaleLowerCase(locale);
  return experiences.filter(
    (entry) =>
      (technology === null ||
        entry.technologies.some((t) => t === technology)) &&
      [
        entry.title,
        entry.summary,
        entry.role,
        entry.company,
        entry.period,
        entry.category,
        ...(entry.highlights ?? []),
        ...entry.concepts,
        ...entry.technologies,
      ]
        .join(' ')
        .toLocaleLowerCase(locale)
        .includes(normalized),
  );
}

export const filterProjects = filterExperiences;
