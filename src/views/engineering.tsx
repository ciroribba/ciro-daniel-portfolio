import { localizedPath, type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import Link from 'next/link';
import { PageHeading } from '@/components/page-heading';
import { ArchitectureMap } from '@/components/architecture-map';
export function Engineering({ locale }: { locale: Locale }) {
  const copy = editorial[locale].engineering;
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="engineering-grid">
        <div>
          {copy.principles.map(([number, title, body]) => (
            <article className="principle" key={number}>
              <span className="eyebrow">{number}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <aside>
          <ArchitectureMap locale={locale} />
          <p className="aside-note">{copy.principlesNote}</p>
        </aside>
      </div>
      <section className="section">
        <p className="eyebrow">{copy.docs}</p>
        <h2>{copy.docsTitle}</h2>
        <div className="three-columns">
          <article>
            <h3>{copy.before}</h3>
            <p>{copy.beforeDescription}</p>
          </article>
          <article>
            <h3>{copy.during}</h3>
            <p>{copy.duringDescription}</p>
          </article>
          <article>
            <h3>{copy.delivery}</h3>
            <p>{copy.deliveryDescription}</p>
          </article>
        </div>
        <Link href={localizedPath(locale, '/projects')} className="text-link">
          {copy.cases} →
        </Link>
      </section>
    </>
  );
}
