import type { Metadata } from 'next';
import {
  alternateLocale,
  defaultLocale,
  localizedPath,
  type Locale,
} from './routing';
import { ui } from './ui';

export const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
);
const siteTitle = 'Ciro Ribba — Frontend Engineering & Architecture';
const openGraphLocale = { es: 'es_AR', en: 'en_US' } satisfies Record<
  Locale,
  string
>;

export function languageAlternates(path: string) {
  return {
    es: localizedPath('es', path),
    en: localizedPath('en', path),
    'x-default': localizedPath(defaultLocale, path),
  };
}

export function siteMetadata(): Metadata {
  return {
    metadataBase: siteOrigin,
    title: { default: siteTitle, template: '%s · Ciro Ribba' },
    robots: { index: true, follow: true },
  };
}

export function pageMetadata(
  locale: Locale,
  path: string,
  title?: string,
  description = ui[locale].shell.description,
): Metadata {
  const canonical = localizedPath(locale, path);
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      locale: openGraphLocale[locale],
      alternateLocale: openGraphLocale[alternateLocale(locale)],
      siteName: 'Ciro Ribba',
      title: title ? `${title} · Ciro Ribba` : siteTitle,
      description,
      url: canonical,
    },
  };
}
