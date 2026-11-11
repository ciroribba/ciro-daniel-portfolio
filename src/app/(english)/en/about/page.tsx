import { About } from '@/views/about';
import { pageMetadata } from '@/i18n/metadata';
import { editorial } from '@/i18n/editorial';
export const metadata = pageMetadata(
  'en',
  '/about',
  editorial.en.about.metadataTitle,
  editorial.en.about.description,
);
export default function Page() {
  return <About locale="en" />;
}
