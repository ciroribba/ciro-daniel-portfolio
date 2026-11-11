import { localizedPath, type Locale } from '@/i18n/routing';
import { ui } from '@/i18n/ui';
import Link from 'next/link';
export function NotFound({ locale }: { locale: Locale }) {
  const copy = ui[locale].notFound;
  return (
    <section className="page-heading">
      <p className="eyebrow">{copy.label}</p>
      <h1>{copy.title}</h1>
      <Link href={localizedPath(locale, '/')} className="text-link">
        {copy.home}
      </Link>
    </section>
  );
}
