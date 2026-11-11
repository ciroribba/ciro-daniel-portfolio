import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { languageAlternates, siteOrigin } from '@/i18n/metadata';
import { locales, localizedPath, sections } from '@/i18n/routing';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...sections,
    ...projects.map(({ slug }) => `/projects/${slug}`),
  ].flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([locale, href]) => [
        locale,
        new URL(href, siteOrigin).href,
      ]),
    );
    return locales.map((locale) => ({
      url: new URL(localizedPath(locale, path), siteOrigin).href,
      alternates: { languages },
    }));
  });
}
