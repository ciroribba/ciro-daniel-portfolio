export const sample = [
  { id: 'A', complexity: 1, duration: 120 },
  { id: 'B', complexity: 2, duration: 185 },
  { id: 'C', complexity: 3, duration: 160 },
  { id: 'D', complexity: 4, duration: 310 },
  { id: 'E', complexity: 5, duration: 280 },
  { id: 'F', complexity: 6, duration: 430 },
] as const;
export function summarize(maxComplexity: number) {
  const rows = sample.filter((row) => row.complexity <= maxComplexity);
  return {
    rows,
    mean: rows.length
      ? Math.round(
          rows.reduce((sum, row) => sum + row.duration, 0) / rows.length,
        )
      : null,
  };
}
