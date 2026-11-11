export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const sections = [
  '/',
  '/engineering',
  '/projects',
  '/technology',
  '/credentials',
  '/lab',
  '/about',
] as const;

export function localizedPath(locale: Locale, path: string) {
  const normalized = path.replace(/\/$/, '');
  return `${locale === defaultLocale ? '' : '/' + locale}${normalized}/`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}
