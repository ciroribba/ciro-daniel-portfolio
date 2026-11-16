import { demos, getDemo } from '@/content/demos';
import { pageMetadata } from '@/i18n/metadata';
import { DemoDetail } from '@/views/demos';

const locale = 'es';
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return demos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const demo = getDemo(slug);
  return pageMetadata(
    locale,
    `/demos/${slug}`,
    demo?.title,
    demo?.[locale].summary,
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <DemoDetail slug={slug} locale={locale} />;
}
