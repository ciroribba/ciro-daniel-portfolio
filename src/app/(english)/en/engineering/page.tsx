import { Engineering } from '@/views/engineering';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'en',
  '/engineering',
  editorial.en.engineering.metadataTitle,
  editorial.en.engineering.description,
);
export default function Page() {
  return <Engineering locale="en" />;
}
