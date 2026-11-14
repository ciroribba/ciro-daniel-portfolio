import { ui } from '@/i18n/ui';
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExperienceExplorer } from '@/features/experience/components/experience-explorer';
import { experiences } from '@/content/experience';

it('filters, announces empty results and recovers by clearing filters', async () => {
  const user = userEvent.setup();
  render(
    <ExperienceExplorer
      experiences={experiences}
      locale="es"
      copy={ui.es.explorer}
      cardCopy={ui.es.experienceCard}
    />,
  );
  await user.click(screen.getByRole('button', { name: 'Angular' }));
  expect(screen.getByRole('status')).toHaveTextContent('1 experiencia');
  expect(
    screen.getByRole('link', { name: /Explorar otro/ }),
  ).toBeInTheDocument();
  await user.type(screen.getByRole('searchbox'), 'checkout');
  expect(screen.getByRole('status')).toHaveTextContent('0 experiencias');
  expect(screen.getByText('checkout')).toBeInTheDocument();
  expect(screen.getByText('Angular', { selector: 'dd' })).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Limpiar filtros' }));
  expect(screen.getByRole('status')).toHaveTextContent('3 experiencias');
  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('searchbox')).toHaveFocus();
});
