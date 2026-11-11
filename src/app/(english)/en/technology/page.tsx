import { Technology } from '@/views/technology';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'en',
  '/technology',
  editorial.en.technology.metadataTitle,
  editorial.en.technology.description,
);
export default function Page() {
  return <Technology locale="en" />;
}
