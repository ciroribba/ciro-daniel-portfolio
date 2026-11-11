'use client';
import { ErrorPage } from '@/views/error';
import { ui } from '@/i18n/ui';
export default function Error({ reset }: { reset: () => void }) {
  return <ErrorPage reset={reset} copy={ui.es.error} />;
}
