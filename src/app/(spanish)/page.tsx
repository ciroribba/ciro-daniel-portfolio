import { Home } from '@/views/home';
import { pageMetadata } from '@/i18n/metadata';

export const metadata = pageMetadata('es', '/');
export default function Page() {
  return <Home locale="es" />;
}
