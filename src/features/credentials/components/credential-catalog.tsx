'use client';
import type { Locale } from '@/i18n/routing';
import type { Ui } from '@/i18n/ui';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  formatCredentialDate,
  type Credential,
} from '@/features/credentials/domain/credential';
import { Button } from '@/components/ui/button';
export function CredentialCatalog({
  credentials,
  locale,
  copy,
}: {
  credentials: readonly Credential[];
  locale: Locale;
  copy: Ui['credentials'];
}) {
  const [type, setType] = useState('all');
  const filtered = credentials.filter((c) => type === 'all' || c.type === type);
  return (
    <section aria-label={copy.label}>
      <div className="filter-buttons" role="group" aria-label={copy.filter}>
        {[
          { id: 'all', label: copy.all },
          { id: 'academic', label: copy.academic },
          { id: 'course', label: copy.course },
        ].map((t) => (
          <Button
            key={t.id}
            size="sm"
            variant={type === t.id ? 'default' : 'outline'}
            aria-pressed={type === t.id}
            onClick={() => setType(t.id)}
          >
            {t.label}
          </Button>
        ))}
      </div>
      <p className="result-count" role="status">
        {filtered.length} {filtered.length === 1 ? copy.one : copy.other}
      </p>
      <div>
        {filtered.map((c) => (
          <article className="credential-row" key={c.id}>
            <div>
              <p className="eyebrow">
                {c.type === 'academic' ? copy.academicType : copy.courseType}
              </p>
              <h2>{c.title}</h2>
              <p>
                {c.institution ?? copy.institution} ·{' '}
                <time dateTime={c.date}>
                  {formatCredentialDate(c.date, locale)}
                </time>
              </p>
              <ul className="tags" aria-label={copy.skills}>
                {c.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              {c.verificationUrl ? (
                <a
                  className="text-link"
                  href={c.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.certificate}{' '}
                  <span className="sr-only">
                    {copy.certificateFor} {c.title} {copy.newTab}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : (
                <span className="muted text-sm">{copy.pending}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
