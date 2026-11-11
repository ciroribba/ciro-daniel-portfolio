import { About } from '@/views/about';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'es',
  '/about',
  editorial.es.about.metadataTitle,
  editorial.es.about.description,
);
export default function Page() {
  return <About locale="es" />;
}
