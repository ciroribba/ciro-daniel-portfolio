import { Experience } from '@/views/experience';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';

export const metadata = pageMetadata(
  'en',
  '/experience',
  editorial.en.experience.metadataTitle,
  editorial.en.experience.description,
);

export default function Page() {
  return <Experience locale="en" />;
}
