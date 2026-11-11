import { Projects } from '@/views/projects';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'es',
  '/projects',
  editorial.es.projects.metadataTitle,
  editorial.es.projects.description,
);
export default function Page() {
  return <Projects locale="es" />;
}
