import { Lab } from '@/views/lab';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'es',
  '/lab',
  editorial.es.lab.metadataTitle,
  editorial.es.lab.description,
);
export default function Page() {
  return <Lab locale="es" />;
}
