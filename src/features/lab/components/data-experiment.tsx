'use client';
import type { Ui } from '@/i18n/ui';
import { useState } from 'react';
import { summarize } from '@/features/lab/domain/experiment';
export function DataExperiment({ copy }: { copy: Ui['experiment'] }) {
  const [complexity, setComplexity] = useState(6);
  const { rows, mean } = summarize(complexity);
  return (
    <section className="experiment" aria-labelledby="experiment-title">
      <div>
        <p className="eyebrow">{copy.label}</p>
        <h2 id="experiment-title">{copy.title}</h2>
        <p>{copy.description}</p>
        <label htmlFor="complexity">
          {copy.max}: <strong>{complexity}</strong>
        </label>
        <input
          id="complexity"
          type="range"
          min="1"
          max="6"
          step="1"
          value={complexity}
          onChange={(event) => setComplexity(Number(event.target.value))}
        />
        <p role="status">
          {rows.length} {rows.length === 1 ? copy.one : copy.other} ·{' '}
          {copy.mean}: <strong>{mean} ms</strong>
        </p>
      </div>
      <div className="experiment-data">
        <div className="bars" aria-hidden="true">
          {rows.map((row) => (
            <div key={row.id}>
              <div
                className="bar"
                style={{ height: `${row.duration / 2}px` }}
              />
              <span>{row.id}</span>
            </div>
          ))}
        </div>
        <details>
          <summary>{copy.table}</summary>
          <table>
            <caption>{copy.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{copy.sample}</th>
                <th scope="col">{copy.complexity}</th>
                <th scope="col">{copy.duration}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <th scope="row">{row.id}</th>
                  <td>{row.complexity}</td>
                  <td>{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
    </section>
  );
}
