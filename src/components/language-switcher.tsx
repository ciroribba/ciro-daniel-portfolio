'use client';

import { usePathname } from 'next/navigation';
import { locales, localizedPath, type Locale } from '@/i18n/routing';

const names = { es: 'Español', en: 'English' } satisfies Record<Locale, string>;

export function LanguageSwitcher({
  locale,
  label,
  missing,
}: {
  locale: Locale;
  label: string;
  missing: boolean;
}) {
  const pathname = usePathname();
  const path =
    locale === 'en' ? pathname.replace(/^\/en(?=\/|$)/, '') : pathname;

  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {locales.map((language) =>
        language === locale ? (
          <span key={language} lang={language} aria-current="true">
            {names[language]}
          </span>
        ) : (
          <a
            key={language}
            href={localizedPath(language, missing ? '/' : path)}
            lang={language}
            hrefLang={language}
          >
            {names[language]}
          </a>
        ),
      )}
    </div>
  );
}
