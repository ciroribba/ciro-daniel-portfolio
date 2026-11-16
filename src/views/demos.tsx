import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHeading } from '@/components/page-heading';
import { demos, getDemo } from '@/content/demos';
import { demoCopy } from '@/i18n/demos';
import { localizedPath, type Locale } from '@/i18n/routing';
import { ui } from '@/i18n/ui';

type Demo = (typeof demos)[number];

function DemoLinks({ demo, locale }: { demo: Demo; locale: Locale }) {
  const copy = demoCopy[locale];
  const links = [
    { href: demo.liveUrl, label: copy.live },
    { href: demo.repositoryUrl, label: copy.repository },
  ];

  return (
    <div className="demo-links">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
          <ArrowUpRight size={14} aria-hidden="true" />
          <span className="sr-only">
            {' '}
            {demo.title} {ui[locale].shell.newTab}
          </span>
        </a>
      ))}
    </div>
  );
}

function DemoTechnologies({ demo, locale }: { demo: Demo; locale: Locale }) {
  return (
    <ul className="tags" aria-label={demoCopy[locale].technologies}>
      {demo.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

export function Demos({ locale }: { locale: Locale }) {
  const copy = demoCopy[locale];

  return (
    <>
      <PageHeading
        eyebrow={copy.section}
        title={copy.title}
        description={copy.description}
      />
      <div className="project-list demo-list">
        {demos.map((demo) => (
          <article className="project-row" key={demo.slug}>
            <div>
              <p className="eyebrow">{demo[locale].kind}</p>
              <h2 className="project-title">
                <Link href={localizedPath(locale, `/demos/${demo.slug}`)}>
                  {demo.title}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </h2>
              <p className="project-summary">{demo[locale].summary}</p>
              <DemoLinks demo={demo} locale={locale} />
            </div>
            <div className="project-meta">
              <DemoTechnologies demo={demo} locale={locale} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function DemoDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const demo = getDemo(slug);
  if (!demo) notFound();

  const copy = demoCopy[locale];
  const { kind, summary, flow, design, decisions } = demo[locale];

  return (
    <>
      <Link
        className="text-link back-link"
        href={localizedPath(locale, '/demos')}
      >
        {copy.back}
      </Link>
      <header className="page-heading">
        <p className="eyebrow">{kind}</p>
        <h1>{demo.title}</h1>
        <p className="lede">{summary}</p>
        <DemoTechnologies demo={demo} locale={locale} />
      </header>
      <div className="case-layout">
        <aside className="case-note" aria-labelledby="demo-links">
          <h2 id="demo-links">{copy.links}</h2>
          <DemoLinks demo={demo} locale={locale} />
        </aside>
        <article className="prose">
          <h2>{copy.flow}</h2>
          <ol className="demo-walkthrough">
            {flow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h2>{copy.design}</h2>
          <p>{design}</p>
          <h2>{copy.engineering}</h2>
          <ul>
            {decisions.map(({ technology, reason }) => (
              <li key={technology}>
                <strong>{technology}.</strong> {reason}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
