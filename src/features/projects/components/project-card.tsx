import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { localizedPath, type Locale } from '@/i18n/routing';
import type { Ui } from '@/i18n/ui';
import type { Project } from '@/features/projects/domain/project';

export function ProjectCard({
  project,
  locale,
  copy,
  heading: Heading = 'h2',
}: {
  project: Project;
  locale: Locale;
  copy: Ui['projectCard'];
  heading?: 'h2' | 'h3';
}) {
  return (
    <article className="project-row">
      <div className="project-description">
        <p className="eyebrow">{project.category}</p>
        <Heading className="project-title">
          <Link href={localizedPath(locale, `/projects/${project.slug}`)}>
            {project.title}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Heading>
        <p className="project-summary">{project.summary}</p>
      </div>
      <div className="project-meta">
        <p className="project-kind">{copy[project.kind]}</p>
        <p className="project-evidence">{copy[project.evidence]}</p>
        <ul className="tags" aria-label={copy.technologies}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
