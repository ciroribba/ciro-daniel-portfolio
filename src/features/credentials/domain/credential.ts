import type { Locale } from '@/i18n/routing';
export type Credential = {
  id: string;
  title: string;
  type: 'academic' | 'course';
  institution: string | null;
  date: string;
  skills: readonly string[];
  verificationUrl: string | null;
  source: string;
};
export function formatCredentialDate(date: string, locale: Locale = 'es') {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(date + 'T12:00:00Z'));
}
