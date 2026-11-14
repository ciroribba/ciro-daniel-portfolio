import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { localizedPath, type Locale } from '@/i18n/routing';
import type { Ui } from '@/i18n/ui';
import type { WorkExperience } from '@/features/experience/domain/experience';

export function ExperienceCard({
  experience,
  locale,
  copy,
  heading: Heading = 'h2',
}: {
  experience: WorkExperience;
  locale: Locale;
  copy: Ui['experienceCard'];
  heading?: 'h2' | 'h3';
}) {
  return (
    <article className="project-row experience-row">
      <div className="project-description experience-description">
        <p className="eyebrow">
          {experience.role} · {experience.company}
          {experience.period ? ` · ${experience.period}` : ''}
        </p>
        <Heading className="project-title experience-title">
          <Link href={localizedPath(locale, `/experience/${experience.slug}`)}>
            {experience.title}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Heading>
        <p className="project-summary experience-summary">{experience.summary}</p>
      </div>
      <div className="project-meta experience-meta">
        <p className="project-kind experience-kind">{copy[experience.kind]}</p>
        <p className="project-evidence experience-evidence">{copy[experience.evidence]}</p>
        <ul className="tags" aria-label={copy.technologies}>
          {experience.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export const ProjectCard = ExperienceCard;
