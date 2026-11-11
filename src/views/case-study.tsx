import { localizedPath, type Locale } from '@/i18n/routing';
import { ui } from '@/i18n/ui';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjects } from '@/content/projects';
import { getCaseStudy } from '@/features/projects/case-study-registry';
export function CaseStudy({ slug, locale }: { slug: string; locale: Locale }) {
  const project = getProjects(locale).find((p) => p.slug === slug);
  const content = getCaseStudy(slug, locale);
  if (!project || !content) notFound();
  const copy = ui[locale].caseStudy;
  return (
    <>
      <Link
        className="text-link back-link"
        href={localizedPath(locale, '/projects')}
      >
        {copy.back}
      </Link>
      <header className="page-heading">
        <p className="eyebrow">
          {ui[locale].projectCard[project.kind]} · {project.category}
        </p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <ul className="tags">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>
      <div className="case-layout">
        <aside className="case-note">
          <p className="eyebrow">{copy.status}</p>
          <h2>{copy.title}</h2>
          <p>{copy.source}</p>
          <p>{copy.pending}</p>
        </aside>
        <article className="prose">{content}</article>
      </div>
    </>
  );
}
