import Ticketing from '@/content/case-studies/ticketing-checkout.mdx';
import Operations from '@/content/case-studies/operations-backoffice.mdx';
import Angular from '@/content/case-studies/angular-learning.mdx';
import EnglishTicketing from '@/content/case-studies/en/ticketing-checkout.mdx';
import EnglishOperations from '@/content/case-studies/en/operations-backoffice.mdx';
import EnglishAngular from '@/content/case-studies/en/angular-learning.mdx';
import type { projects } from '@/content/projects';
import type { Locale } from '@/i18n/routing';

// Explicit, trusted local imports. Never compile user-submitted MDX.
const caseStudies = {
  'ticketing-checkout': { es: <Ticketing />, en: <EnglishTicketing /> },
  'operations-backoffice': { es: <Operations />, en: <EnglishOperations /> },
  'angular-learning': { es: <Angular />, en: <EnglishAngular /> },
} satisfies Record<
  (typeof projects)[number]['slug'],
  Record<Locale, React.ReactElement>
>;

export function getCaseStudy(slug: string, locale: Locale) {
  return Object.hasOwn(caseStudies, slug)
    ? caseStudies[slug as keyof typeof caseStudies][locale]
    : null;
}
