import { demoCopy } from '@/i18n/demos';
import { pageMetadata } from '@/i18n/metadata';
import { Demos } from '@/views/demos';

const locale = 'en';
const copy = demoCopy[locale];

export const metadata = pageMetadata(
  locale,
  '/demos',
  copy.title,
  copy.description,
);

export default function Page() {
  return <Demos locale={locale} />;
}
