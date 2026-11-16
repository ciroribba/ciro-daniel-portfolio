import { localizedPath, type Locale } from '@/i18n/routing';
import { ui } from '@/i18n/ui';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getExperiences } from '@/content/experience';
import { getCaseStudy } from '@/features/experience/case-study-registry';

export function CaseStudy({ slug, locale }: { slug: string; locale: Locale }) {
  const experience = getExperiences(locale).find((p) => p.slug === slug);
  const content = getCaseStudy(slug, locale);
  if (!experience || !content) notFound();
  const copy = ui[locale].caseStudy;

  return (
    <>
      <Link
        className="text-link back-link"
        href={localizedPath(locale, '/experience')}
      >
        {copy.back}
      </Link>
      <header className="page-heading">
        <p className="eyebrow">
          {experience.role} · {experience.company} · {experience.period}
        </p>
        <h1>{experience.title}</h1>
        <p className="lede">{experience.summary}</p>
        <ul
          className="tags"
          aria-label={ui[locale].experienceCard.technologies}
        >
          {experience.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>
      <div className="case-layout">
        {experience.result && (
          <aside
            className="case-note experience-results"
            aria-labelledby="case-results"
          >
            <h2 id="case-results">{copy.results}</h2>
            <p>{experience.result}</p>
          </aside>
        )}
        <article className="prose">{content}</article>
      </div>
    </>
  );
}
