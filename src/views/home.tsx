import { localizedPath, type Locale } from '@/i18n/routing';
import { demoCopy } from '@/i18n/demos';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/content/profile';
import { technologies } from '@/features/experience/domain/experience';
import { ExperienceCard } from '@/features/experience/components/experience-card';
import { getExperiences } from '@/content/experience';

export function Home({ locale }: { locale: Locale }) {
  const copy = editorial[locale].home;
  const demos = demoCopy[locale];
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">{profile.name}</p>
          <h1>{profile.role}</h1>
          <p className="hero-copy">{copy.heroDescription}</p>
        </div>
        <section className="home-demos" aria-labelledby="featured-demos">
          <h2 id="featured-demos">{demos.title}</h2>
          <p className="lede">{demos.homeDescription}</p>
          <Button asChild>
            <Link href={localizedPath(locale, '/demos')}>
              {demos.browse} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Button>
        </section>
        <div>
          <div className="hero-actions">
            <Link
              className="text-link"
              href={localizedPath(locale, '/experience')}
            >
              {copy.explore} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              className="text-link"
              href={localizedPath(locale, '/engineering')}
            >
              {copy.engineering} <ArrowRight size={16} aria-hidden="true" />
            </Link>
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
        </div>
      </section>
      <section className="home-projects home-experience" aria-labelledby="featured-experience">
        <div className="section-heading">
          <h2 id="featured-experience">{copy.practiceTitle}</h2>
          <Link className="text-link" href={localizedPath(locale, '/experience')}>
            {copy.allProjects} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-list experience-list">
          {getExperiences(locale)
            .slice(0, 2)
            .map((item) => (
              <ExperienceCard
                key={item.slug}
                experience={item}
                locale={locale}
                copy={ui[locale].experienceCard}
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
