import { type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import { PageHeading } from '@/components/page-heading';
import { CredentialCatalog } from '@/features/credentials/components/credential-catalog';
import { getCredentials, getFutureEducation } from '@/content/credentials';
export function Credentials({ locale }: { locale: Locale }) {
  const copy = editorial[locale].credentials;
  const futureEducation = getFutureEducation(locale);
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <CredentialCatalog
        credentials={getCredentials(locale)}
        locale={locale}
        copy={ui[locale].credentials}
      />
      <section className="future-study">
        <p className="eyebrow">
          {copy.next} · {futureEducation.status}
        </p>
        <h2>{futureEducation.title}</h2>
        <p>{copy.futureDescription}</p>
      </section>
      <p className="aside-note">{copy.notes}</p>
    </>
  );
}
