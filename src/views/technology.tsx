import { type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import { PageHeading } from '@/components/page-heading';
import { ProjectExplorer } from '@/features/projects/components/project-explorer';
import { getProjects } from '@/content/projects';
export function Technology({ locale }: { locale: Locale }) {
  const copy = editorial[locale].technology;
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <ProjectExplorer
        projects={getProjects(locale)}
        locale={locale}
        copy={ui[locale].explorer}
        cardCopy={ui[locale].projectCard}
        showConcepts={true}
      />
    </>
  );
}
