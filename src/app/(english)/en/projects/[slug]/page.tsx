import { CaseStudy } from '@/views/case-study';
import { getProjects, projects } from '@/content/projects';
import { pageMetadata } from '@/i18n/metadata';

const locale = 'en';
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjects(locale).find((entry) => entry.slug === slug);
  return pageMetadata(
    locale,
    `/projects/${slug}`,
    project?.title,
    project?.summary,
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudy slug={slug} locale={locale} />;
}
