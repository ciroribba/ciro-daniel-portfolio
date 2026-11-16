import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes = [
  '/',
  '/engineering/',
  '/experience/',
  '/technology/',
  '/credentials/',
  '/lab/',
  '/about/',
  '/en/',
  '/en/engineering/',
  '/en/experience/',
  '/en/technology/',
  '/en/credentials/',
  '/en/lab/',
  '/en/about/',
];
for (const path of routes) {
  test(`route and accessibility: ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('main')).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const scan = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(scan.violations).toEqual([]);
  });
}
test('technology filter and case navigation', async ({ page }) => {
  await page.goto('/technology/');
  await page.getByRole('button', { name: 'Angular', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText('1 experiencia');
  await page
    .getByRole('link', { name: /Gestión de gastos corporativos/ })
    .click();
  await expect(page).toHaveURL(/mendel/);
  await expect(page.getByRole('heading', { name: 'Resultados' })).toBeVisible();
});
test('theme persists after navigation and reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page
    .getByRole('button', { name: 'Cambiar tema claro u oscuro' })
    .click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  const scan = await new AxeBuilder({ page }).withTags(['wcag2aa']).analyze();
  expect(scan.violations).toEqual([]);
});
test('mobile navigation is operable', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile disclosure only');
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Abrir navegación' });
  const theme = page.getByRole('button', {
    name: 'Cambiar tema claro u oscuro',
  });
  await theme.focus();
  await page.keyboard.press('Tab');
  await expect(menu).toBeFocused();
  expect((await menu.boundingBox())!.x).toBeGreaterThan(
    (await theme.boundingBox())!.x,
  );
  await page.keyboard.press('Enter');
  await expect(
    page.getByRole('link', { name: 'Inicio', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Credenciales' })
    .click();
  await expect(page).toHaveURL(/credentials/);
  await expect(
    page.getByRole('button', { name: 'Abrir navegación' }),
  ).toHaveAttribute('aria-expanded', 'false');
});
test('synthetic lab responds to keyboard and exposes table', async ({
  page,
}) => {
  await page.goto('/lab/');
  const slider = page.getByRole('slider');
  await slider.focus();
  await page.keyboard.press('Home');
  await expect(page.getByRole('status')).toContainText('1 muestra');
  await page.getByText('Ver tabla de datos accesible').click();
  await expect(page.getByRole('table')).toBeVisible();
});
test('unknown route has a return path', async ({ page }) => {
  await page.goto('/unknown-route');
  await expect(
    page.getByRole('heading', { name: 'Este camino todavía no existe.' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Volver al inicio →' }).click();
  await expect(page).toHaveURL(/\/$/);
});

test('switches languages on a case and preserves the URL on reload', async ({
  page,
}) => {
  await page.goto('/experience/mendel/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  const english = page.getByRole('link', { name: 'English', exact: true });
  await expect(english).toHaveAttribute('href', '/en/experience/mendel/');
  await english.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/en\/experience\/mendel\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'Results' })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /\/en\/experience\/mendel\/$/,
  );
  await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
    'href',
    /\/experience\/mendel\/$/,
  );
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(
    page.getByRole('link', { name: '← All experience' }),
  ).toHaveAttribute('href', '/en/experience/');
  await page.getByRole('link', { name: 'Español', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { name: 'Resultados' })).toBeVisible();
});

test('English filters use English copy and open English cases', async ({
  page,
}) => {
  await page.goto('/en/technology/');
  await page
    .getByRole('searchbox', { name: 'Search by role, technology or context' })
    .fill('receipt processing');
  await expect(page.getByRole('status')).toHaveText('1 experience');
  await expect(
    page.getByRole('link', {
      name: /Corporate expenses and receipt processing/,
    }),
  ).toHaveAttribute('href', '/en/experience/mendel/');
});

test('the language switch works without JavaScript', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  try {
    const page = await context.newPage();
    await page.goto('/credentials/');
    await page.getByRole('link', { name: 'English', exact: true }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(
      page.getByRole('heading', {
        name: 'Higher technical qualification in data science',
      }),
    ).toBeVisible();
  } finally {
    await context.close();
  }
});
