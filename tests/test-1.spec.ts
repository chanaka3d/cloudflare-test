/* eslint-disable testing-library/prefer-screen-queries */
import { test } from '@playwright/test';
const { baseURL } = process.env;

test('poc', async ({ page }) => {
  await page.goto(baseURL || 'http://localhost:3000');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('chanaka');
  await page.getByRole('button', { name: 'Set Name' }).click();
});