import { Engineering } from '@/views/engineering';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'es',
  '/engineering',
  editorial.es.engineering.metadataTitle,
  editorial.es.engineering.description,
);
export default function Page() {
  return <Engineering locale="es" />;
}
