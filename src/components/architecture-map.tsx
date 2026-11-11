import type { Locale } from '@/i18n/routing';
import { ui } from '@/i18n/ui';
export function ArchitectureMap({ locale }: { locale: Locale }) {
  const copy = ui[locale].map;
  return (
    <figure className="architecture-map">
      <figcaption className="eyebrow">{copy.caption}</figcaption>
      <div className="map-row">
        <span>{copy.intent}</span>
        <span aria-hidden="true">↗</span>
        <span>{copy.interface}</span>
      </div>
      <div className="map-core">
        <span className="eyebrow">FRONTEND ENGINEERING</span>
        <strong>
          {copy.first}
          <br />
          <em>{copy.second}</em>
        </strong>
        <div className="map-tags">
          {copy.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="map-row">
        <span>{copy.architecture}</span>
        <span aria-hidden="true">↘</span>
        <span>{copy.evolution}</span>
      </div>
      <p className="map-caption">{copy.note}</p>
    </figure>
  );
}
