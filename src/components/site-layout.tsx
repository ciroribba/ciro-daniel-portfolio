import { localizedPath, sections, type Locale } from '@/i18n/routing';
import { ui } from '@/i18n/ui';
import { LanguageSwitcher } from '@/components/language-switcher';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navigation } from '@/components/navigation';
export function SiteLayout({
  children,
  locale,
  missing = false,
}: Readonly<{ children: React.ReactNode; locale: Locale; missing?: boolean }>) {
  const copy = ui[locale].shell;
  const home = localizedPath(locale, '/');
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main">
            {copy.skip}
          </a>
          <header className="site-header">
            <div className="header-inner">
              <Link className="brand" href={home} aria-label={copy.home}>
                cr<span aria-hidden="true">.</span>
              </Link>
              <div className="header-actions">
                <Navigation
                  copy={{
                    navigation: copy.navigation,
                    open: copy.open,
                    close: copy.close,
                  }}
                  links={sections.map((path) => ({
                    href: localizedPath(locale, path),
                    label: copy.links[path],
                  }))}
                >
                  <LanguageSwitcher
                    locale={locale}
                    label={copy.language}
                    missing={missing}
                  />
                  <ThemeToggle label={copy.theme} />
                </Navigation>
              </div>
            </div>
          </header>
          <main id="main" tabIndex={-1} className="site-main">
            {children}
          </main>
          <footer className="site-footer">
            <div>
              <Link href={home} className="footer-name">
                Ciro Ribba<span>.</span>
              </Link>
              <p>
                Frontend Engineering & Architecture
                <br />
                Córdoba, Argentina
              </p>
            </div>
            <div className="footer-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only"> {copy.newTab}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only"> {copy.newTab}</span>
              </a>
              <Link href={localizedPath(locale, '/about')}>{copy.about}</Link>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
