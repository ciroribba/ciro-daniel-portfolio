import { Projects } from '@/views/projects';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'en',
  '/projects',
  editorial.en.projects.metadataTitle,
  editorial.en.projects.description,
);
export default function Page() {
  return <Projects locale="en" />;
}
