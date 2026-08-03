const { test, expect } = require('@playwright/test');

test('homepage has title and links', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Create a locator.
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('basic navigation test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toContainText('Example Domain');
});
