import { Home } from '@/views/home';
import { pageMetadata } from '@/i18n/metadata';

export const metadata = pageMetadata('en', '/');
export default function Page() {
  return <Home locale="en" />;
}
