import { ui } from '@/i18n/ui';
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectExplorer } from '@/features/projects/components/project-explorer';
import { projects } from '@/content/projects';
it('filters, announces empty results and recovers by clearing filters', async () => {
  const user = userEvent.setup();
  render(
    <ProjectExplorer
      projects={projects}
      locale="es"
      copy={ui.es.explorer}
      cardCopy={ui.es.projectCard}
    />,
  );
  await user.click(screen.getByRole('button', { name: 'Angular' }));
  expect(screen.getByRole('status')).toHaveTextContent('1 proyecto');
  expect(
    screen.getByRole('link', { name: /Explorar otro/ }),
  ).toBeInTheDocument();
  await user.type(screen.getByRole('searchbox'), 'checkout');
  expect(screen.getByRole('status')).toHaveTextContent('0 proyectos');
  expect(screen.getByText('checkout')).toBeInTheDocument();
  expect(screen.getByText('Angular', { selector: 'dd' })).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Limpiar filtros' }));
  expect(screen.getByRole('status')).toHaveTextContent('3 proyectos');
  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('searchbox')).toHaveFocus();
});
