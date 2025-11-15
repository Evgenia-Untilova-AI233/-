const { test, expect } = require('@playwright/test');

test('Скріншот сторінки about', async ({ page }) => {
  await page.goto('/about.html');
  expect(await page.screenshot()).toMatchSnapshot('about-page.png');
});

test('Скріншот заголовка', async ({ page }) => {
  await page.goto('/about.html');
  const h1 = page.locator('h1');
  expect(await h1.screenshot()).toMatchSnapshot('about-h1.png');
});
