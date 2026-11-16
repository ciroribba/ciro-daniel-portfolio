import Ticketing from '@/content/case-studies/ticketing-checkout.mdx';
import Operations from '@/content/case-studies/operations-backoffice.mdx';
import Kala from '@/content/case-studies/kala.mdx';
import Mendel from '@/content/case-studies/mendel.mdx';
import EnglishTicketing from '@/content/case-studies/en/ticketing-checkout.mdx';
import EnglishOperations from '@/content/case-studies/en/operations-backoffice.mdx';
import EnglishKala from '@/content/case-studies/en/kala.mdx';
import EnglishMendel from '@/content/case-studies/en/mendel.mdx';
import type { experiences } from '@/content/experience';
import type { Locale } from '@/i18n/routing';

// Explicit, trusted local imports. Never compile user-submitted MDX.
const caseStudies = {
  'ticketing-checkout': { es: <Ticketing />, en: <EnglishTicketing /> },
  'operations-backoffice': { es: <Operations />, en: <EnglishOperations /> },
  kala: { es: <Kala />, en: <EnglishKala /> },
  mendel: { es: <Mendel />, en: <EnglishMendel /> },
} satisfies Record<
  (typeof experiences)[number]['slug'],
  Record<Locale, React.ReactElement>
>;

export function getCaseStudy(slug: string, locale: Locale) {
  return Object.hasOwn(caseStudies, slug)
    ? caseStudies[slug as keyof typeof caseStudies][locale]
    : null;
}
