import { localizedPath, type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import Link from 'next/link';
import { PageHeading } from '@/components/page-heading';
import { DataExperiment } from '@/features/lab/components/data-experiment';
export function Lab({ locale }: { locale: Locale }) {
  const copy = editorial[locale].lab;
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <DataExperiment copy={ui[locale].experiment} />
      <section className="section">
        <p className="eyebrow">{copy.proposals}</p>
        <div className="three-columns">
          <article>
            <span className="status">{copy.proposal}</span>
            <h2>{copy.dataTitle}</h2>
            <p>{copy.dataDescription}</p>
          </article>
          <article>
            <span className="status">{copy.proposal}</span>
            <h2>{copy.aiTitle}</h2>
            <p>{copy.aiDescription}</p>
          </article>
          <article>
            <span className="status">{copy.future}</span>
            <h2>{copy.futureTitle}</h2>
            <p>{copy.futureDescription}</p>
            <Link
              className="text-link"
              href={localizedPath(locale, '/credentials')}
            >
              {copy.credentials} →
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
