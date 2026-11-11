import { describe, expect, it } from 'vitest';
import { projects } from '@/content/projects';
import { filterProjects } from '@/features/projects/domain/project';
describe('project discovery', () => {
  it('combines technology and a case-insensitive concept query', () => {
    expect(
      filterProjects(projects, 'React', '  REDUX  ').map((p) => p.slug),
    ).toEqual(['operations-backoffice']);
  });
  it('does not match concepts in another technology', () => {
    expect(filterProjects(projects, 'Angular', 'checkout')).toEqual([]);
  });
  it('treats whitespace as an empty search', () => {
    expect(filterProjects(projects, null, '  ')).toHaveLength(3);
  });
  it('does not invent repository URLs or measured results', () => {
    expect(
      projects.every(
        (p) =>
          p.repository === null &&
          p.result === null &&
          p.evidence === 'self-reported',
      ),
    ).toBe(true);
  });
});
