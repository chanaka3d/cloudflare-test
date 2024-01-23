/* eslint-disable testing-library/prefer-screen-queries */
import { test } from '@playwright/test';
const BASE_URL = process.env.URL;

test('poc', async ({ page }) => {
  await page.goto(BASE_URL || 'http://localhost:3000');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('chanaka');
  await page.getByRole('button', { name: 'Set Name' }).click();
});