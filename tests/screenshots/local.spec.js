const { test, expect } = require('@playwright/test');

test('Перевірка сторінки (скриншот)', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot()).toMatchSnapshot('local-page.png');
});

test('Порівняння елемента H1 (скриншот)', async ({ page }) => {
  await page.goto('/');
  const h1 = page.locator('h1');
  expect(await h1.screenshot()).toMatchSnapshot('local-h1.png');
});
