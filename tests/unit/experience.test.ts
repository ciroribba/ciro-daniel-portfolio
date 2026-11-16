import { describe, expect, it } from 'vitest';
import { experiences } from '@/content/experience';
import { filterExperiences } from '@/features/experience/domain/experience';

describe('experience discovery', () => {
  it('combines technology and a case-insensitive concept query', () => {
    expect(
      filterExperiences(experiences, 'React', '  REDUX  ').map((p) => p.slug),
    ).toEqual(['operations-backoffice', 'kala']);
  });
  it('matches by role or company', () => {
    expect(
      filterExperiences(experiences, null, 'tuti').map((p) => p.slug),
    ).toEqual(['ticketing-checkout']);
  });
  it('does not match concepts in another technology', () => {
    expect(filterExperiences(experiences, 'Angular', 'checkout')).toEqual([]);
  });
  it('treats whitespace as an empty search', () => {
    expect(filterExperiences(experiences, null, '  ')).toHaveLength(4);
  });
  it('uses confirmed results without claiming repository verification', () => {
    expect(
      experiences.every(
        (p) =>
          p.repository === null &&
          p.result.length > 0 &&
          p.evidence === 'self-reported',
      ),
    ).toBe(true);
  });
});
