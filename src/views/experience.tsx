import { type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import { PageHeading } from '@/components/page-heading';
import { ExperienceExplorer } from '@/features/experience/components/experience-explorer';
import { getExperiences } from '@/content/experience';

export function Experience({ locale }: { locale: Locale }) {
  const copy = editorial[locale].experience;
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <ExperienceExplorer
        experiences={getExperiences(locale)}
        locale={locale}
        copy={ui[locale].explorer}
        cardCopy={ui[locale].experienceCard}
        showConcepts={false}
      />
    </>
  );
}

export const Projects = Experience;
