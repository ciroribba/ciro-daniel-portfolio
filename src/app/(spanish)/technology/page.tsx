import { Technology } from '@/views/technology';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'es',
  '/technology',
  editorial.es.technology.metadataTitle,
  editorial.es.technology.description,
);
export default function Page() {
  return <Technology locale="es" />;
}
