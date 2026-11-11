import { localizedPath, type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/content/profile';
import { technologies } from '@/features/projects/domain/project';
import { ProjectCard } from '@/features/projects/components/project-card';
import { getProjects } from '@/content/projects';
export function Home({ locale }: { locale: Locale }) {
  const copy = editorial[locale].home;
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">{profile.name}</p>
          <h1>{profile.role}</h1>
          <p className="hero-copy">{copy.heroDescription}</p>
          <div className="hero-actions">
            <Button asChild>
              <Link href={localizedPath(locale, '/projects')}>
                {copy.explore} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
            <Link
              className="text-link"
              href={localizedPath(locale, '/engineering')}
            >
              {copy.engineering} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <dl className="hero-details">
          <div>
            <dt>{copy.ecosystem}</dt>
            <dd>
              <ul className="tags">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>{copy.location}</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </section>
      <section className="home-projects" aria-labelledby="featured-projects">
        <div className="section-heading">
          <h2 id="featured-projects">{copy.practiceTitle}</h2>
          <Link className="text-link" href={localizedPath(locale, '/projects')}>
            {copy.allProjects} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-list">
          {getProjects(locale)
            .slice(0, 2)
            .map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                copy={ui[locale].projectCard}
                heading="h3"
              />
            ))}
        </div>
      </section>
      <section className="perspective">
        <p className="eyebrow">{copy.perspective}</p>
        <div>
          <h2>
            {copy.perspectiveFirst}
            <br />
            <em>{copy.perspectiveSecond}</em>
          </h2>
          <p>{copy.perspectiveDescription}</p>
          <Link
            className="text-link"
            href={localizedPath(locale, '/engineering')}
          >
            Engineering & Architecture{' '}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="lab-teaser">
        <div>
          <p className="eyebrow">{copy.nextChapter}</p>
          <h2>
            {copy.labFirst}
            <br />
            <em>{copy.labSecond}</em>
          </h2>
        </div>
        <div>
          <p>{copy.labDescription}</p>
          <Link className="text-link" href={localizedPath(locale, '/lab')}>
            {copy.labLink} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
