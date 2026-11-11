import { Lab } from '@/views/lab';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'en',
  '/lab',
  editorial.en.lab.metadataTitle,
  editorial.en.lab.description,
);
export default function Page() {
  return <Lab locale="en" />;
}
