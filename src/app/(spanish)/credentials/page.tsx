import { Credentials } from '@/views/credentials';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'es',
  '/credentials',
  editorial.es.credentials.metadataTitle,
  editorial.es.credentials.description,
);
export default function Page() {
  return <Credentials locale="es" />;
}
