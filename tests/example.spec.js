import { test, expect } from '@playwright/test';

test('exemplo de teste passando', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});