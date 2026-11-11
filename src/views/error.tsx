'use client';
import type { Ui } from '@/i18n/ui';
import { Button } from '@/components/ui/button';
export function ErrorPage({
  reset,
  copy,
}: {
  reset: () => void;
  copy: Ui['error'];
}) {
  return (
    <section className="page-heading">
      <h1>{copy.title}</h1>
      <p>{copy.detail}</p>
      <Button onClick={reset}>{copy.retry}</Button>
    </section>
  );
}
