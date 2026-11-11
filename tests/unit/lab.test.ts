import { expect, it } from 'vitest';
import { summarize } from '@/features/lab/domain/experiment';
it('recomputes only selected observations', () => {
  expect(summarize(2).mean).toBe(153);
  expect(summarize(2).rows).toHaveLength(2);
});
it('handles an empty selection without NaN', () => {
  expect(summarize(0)).toEqual({ rows: [], mean: null });
});
