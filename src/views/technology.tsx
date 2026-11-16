import Link from 'next/link';
import { localizedPath, type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import { PageHeading } from '@/components/page-heading';
import { ExperienceExplorer } from '@/features/experience/components/experience-explorer';
import { getExperiences } from '@/content/experience';
import { technologyStack } from '@/content/technology-stack';

const groups = Object.keys(technologyStack) as (keyof typeof technologyStack)[];

export function Technology({ locale }: { locale: Locale }) {
  const copy = editorial[locale].technology;
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <section className="technology-overview" aria-labelledby="working-stack">
        <h2 id="working-stack">{copy.stackTitle}</h2>
        <div className="technology-stack">
          {groups.map((group) => (
            <article key={group}>
              <h3>{copy.groups[group]}</h3>
              <ul className="tags">
                {technologyStack[group].map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              {group === 'data' && (
                <Link
                  className="text-link"
                  href={localizedPath(locale, '/lab')}
                >
                  {copy.labLink} <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
      <div className="technology-overview">
        <h2>{copy.experienceTitle}</h2>
        <ExperienceExplorer
          experiences={getExperiences(locale)}
          locale={locale}
          copy={ui[locale].explorer}
          cardCopy={ui[locale].experienceCard}
          showConcepts={true}
        />
      </div>
    </>
  );
}
