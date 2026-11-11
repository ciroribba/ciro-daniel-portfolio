import { SiteLayout } from '@/components/site-layout';
import { siteMetadata } from '@/i18n/metadata';
import '@/app/globals.css';

export const metadata = siteMetadata();

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
