import { ui } from '@/i18n/ui';
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CredentialCatalog } from '@/features/credentials/components/credential-catalog';
import { credentials, futureEducation } from '@/content/credentials';
it('separates academic degrees from course certificates', async () => {
  const user = userEvent.setup();
  render(
    <CredentialCatalog
      credentials={credentials}
      locale="es"
      copy={ui.es.credentials}
    />,
  );
  await user.click(screen.getByRole('button', { name: 'Títulos académicos' }));
  expect(
    screen.getByRole('heading', {
      name: 'Técnico Superior en Ciencia de Datos',
    }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('link', { name: /Ver certificado/ }),
  ).not.toBeInTheDocument();
  expect(screen.getByText('Enlace público pendiente')).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Cursos' }));
  expect(screen.getAllByRole('link', { name: /Ver certificado/ })).toHaveLength(
    4,
  );
});
it('keeps planned AI education outside earned credentials', () => {
  expect(futureEducation.startDate).toBeNull();
  expect(futureEducation.status).toBe('Formación futura');
  expect(
    credentials.some((c) => c.title === String(futureEducation.title)),
  ).toBe(false);
});
