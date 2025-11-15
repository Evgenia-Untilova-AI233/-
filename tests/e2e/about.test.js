const { test, expect } = require('@playwright/test');

test('Відкриття about.html', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page.locator('h1')).toHaveText('Про нас');
});

test('Перевірка тексту абзацу', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page.locator('#info')).toContainText('друга сторінка');
});

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page).toHaveTitle(/Про сторінку/);
});

test('Перевірка наявності елемента info', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page.locator('#info')).toBeVisible();
});
