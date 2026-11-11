import { SiteLayout } from '@/components/site-layout';
import { NotFound } from '@/views/not-found';
import { defaultLocale } from '@/i18n/routing';
import './globals.css';

export const metadata = { title: 'Página no encontrada · Ciro Ribba' };

export default function GlobalNotFound() {
  return (
    <SiteLayout locale={defaultLocale} missing>
      <NotFound locale={defaultLocale} />
    </SiteLayout>
  );
}
