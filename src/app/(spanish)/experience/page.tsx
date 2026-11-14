import { Experience } from '@/views/experience';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';

export const metadata = pageMetadata(
  'es',
  '/experience',
  editorial.es.experience.metadataTitle,
  editorial.es.experience.description,
);

export default function Page() {
  return <Experience locale="es" />;
}
