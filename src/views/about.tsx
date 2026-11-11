import { type Locale } from '@/i18n/routing';
import { editorial } from '@/i18n/editorial';
import { ui } from '@/i18n/ui';
import { ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/page-heading';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/button';
export function About({ locale }: { locale: Locale }) {
  const copy = editorial[locale].about;
  return (
    <>
      <PageHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="about-grid">
        <div className="monogram" aria-hidden="true">
          cr<span>.</span>
          <small>{copy.monogram}</small>
        </div>
        <div className="prose">
          <h2>{copy.interfaceTitle}</h2>
          <p>{copy.experience}</p>
          <p>{copy.documentation}</p>
          <p>{copy.learning}</p>
          <h2>{copy.conversation}</h2>
          <p>{copy.contact}</p>
          <div className="hero-actions">
            <Button asChild>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.linkedin} <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> {ui[locale].shell.newTab}</span>
              </a>
            </Button>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.github} ↗
              <span className="sr-only"> {ui[locale].shell.newTab}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
