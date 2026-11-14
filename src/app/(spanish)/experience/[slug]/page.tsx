import { CaseStudy } from '@/views/case-study';
import { getExperiences, experiences } from '@/content/experience';
import { pageMetadata } from '@/i18n/metadata';

const locale = 'es';
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperiences(locale).find((entry) => entry.slug === slug);
  return pageMetadata(
    locale,
    `/experience/${slug}`,
    experience?.title,
    experience?.summary,
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudy slug={slug} locale={locale} />;
}
