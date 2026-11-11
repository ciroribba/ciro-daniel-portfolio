import { Credentials } from '@/views/credentials';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'en',
  '/credentials',
  editorial.en.credentials.metadataTitle,
  editorial.en.credentials.description,
);
export default function Page() {
  return <Credentials locale="en" />;
}
