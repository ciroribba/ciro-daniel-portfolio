import type { Locale } from '@/i18n/routing';
export const technologies = [
  'React',
  'Next.js',
  'Angular',
  'TypeScript',
] as const;
export type Technology = (typeof technologies)[number];
export interface Project {
  slug: string;
  kind: 'experience' | 'learning';
  title: string;
  category: string;
  summary: string;
  technologies: readonly Technology[];
  concepts: readonly string[];
  evidence: 'self-reported' | 'repository-verified';
  repository: string | null;
  result: string | null;
}
export function filterProjects(
  projects: readonly Project[],
  technology: Technology | null,
  query: string,
  locale: Locale = 'es',
) {
  const normalized = query.trim().toLocaleLowerCase(locale);
  return projects.filter(
    (project) =>
      (technology === null ||
        project.technologies.some((t) => t === technology)) &&
      [
        project.title,
        project.summary,
        ...project.concepts,
        ...project.technologies,
      ]
        .join(' ')
        .toLocaleLowerCase(locale)
        .includes(normalized),
  );
}
