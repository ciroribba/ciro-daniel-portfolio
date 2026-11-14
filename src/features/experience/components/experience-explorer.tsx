'use client';
import type { Locale } from '@/i18n/routing';
import type { Ui } from '@/i18n/ui';
import { useRef, useState } from 'react';
import { Check, Search } from 'lucide-react';
import {
  technologies,
  filterExperiences,
  type WorkExperience,
  type Technology,
} from '@/features/experience/domain/experience';
import { ExperienceCard } from './experience-card';
import { Button } from '@/components/ui/button';

export function ExperienceExplorer({
  experiences,
  projects,
  locale,
  copy,
  cardCopy,
  showConcepts = false,
}: {
  experiences?: readonly WorkExperience[];
  projects?: readonly WorkExperience[];
  locale: Locale;
  copy: Ui['explorer'];
  cardCopy: Ui['experienceCard'];
  showConcepts?: boolean;
}) {
  const items = experiences ?? projects ?? [];
  const [technology, setTechnology] = useState<Technology | null>(null);
  const [query, setQuery] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);
  const searchTerm = query.trim();
  const filtered = filterExperiences(items, technology, query, locale);

  return (
    <section className="project-explorer experience-explorer" aria-label={copy.label}>
      <div className="explorer-controls">
        <div role="group" aria-label={copy.filter} className="filter-buttons">
          {[null, ...technologies].map((t) => (
            <Button
              key={t ?? 'all'}
              variant={technology === t ? 'default' : 'outline'}
              size="sm"
              className="technology-filter"
              aria-pressed={technology === t}
              onClick={() => setTechnology(t)}
            >
              {technology === t && <Check size={15} aria-hidden="true" />}
              {t ?? copy.all}
            </Button>
          ))}
        </div>
        <label className="search-field">
          <Search aria-hidden="true" size={16} />
          <span className="sr-only">{copy.search}</span>
          <input
            ref={searchInput}
            type="search"
            value={query}
            placeholder={copy.placeholder}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <p className="result-count" role="status">
          {filtered.length} {filtered.length === 1 ? copy.one : copy.other}
        </p>
      </div>
      {filtered.length > 0 && (
        <div className="project-list experience-list">
          {filtered.map((item) => (
            <div className="project-result experience-result" key={item.slug}>
              <ExperienceCard experience={item} locale={locale} copy={cardCopy} />
              {showConcepts && (
                <div className="concept-list">
                  <span className="eyebrow">{copy.concepts}</span>
                  <ul className="tags">
                    {item.concepts.map((concept) => (
                      <li key={concept}>{concept}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {filtered.length === 0 && (
        <div className="empty-state">
          <h2>{copy.empty}</h2>
          <dl className="empty-criteria">
            {technology && (
              <div>
                <dt>{copy.selectedTechnology}</dt>
                <dd>{technology}</dd>
              </div>
            )}
            {searchTerm && (
              <div>
                <dt>{copy.searchTerm}</dt>
                <dd>{searchTerm}</dd>
              </div>
            )}
          </dl>
          <p>{copy.retry}</p>
          <Button
            variant="outline"
            onClick={() => {
              setTechnology(null);
              setQuery('');
              searchInput.current?.focus();
            }}
          >
            {copy.clear}
          </Button>
        </div>
      )}
    </section>
  );
}

export const ProjectExplorer = ExperienceExplorer;
