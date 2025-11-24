import { test, expect } from '@playwright/test';

test.describe('Elona Exam App', () => {
  test('should load home page and display questions', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Elona Exam Practice/);
    
    // Check header
    await expect(page.getByRole('heading', { name: 'Elona Exam Practice' })).toBeVisible();
    
    // Check question card presence
    await expect(page.getByText('Slide')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ask AI' })).toBeVisible();
  });

  test('should navigate between questions', async ({ page }) => {
    await page.goto('/');
    
    // Get initial question text
    const initialText = await page.locator('.text-lg').innerText();
    
    // Click Next
    await page.getByRole('button', { name: 'Next' }).click();
    
    // Verify text changed
    await expect(page.locator('.text-lg')).not.toHaveText(initialText);
    
    // Click Previous
    await page.getByRole('button', { name: 'Previous' }).click();
    
    // Verify back to initial
    await expect(page.locator('.text-lg')).toHaveText(initialText);
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');
    
    // Open theme dropdown
    await page.getByRole('button', { name: 'Toggle theme' }).click();
    
    // Click Dark
    await page.getByRole('menuitem', { name: 'Dark' }).click();
    
    // Verify dark mode class on html element
    await expect(page.locator('html')).toHaveClass(/dark/);
    
    // Switch back to light
    await page.getByRole('button', { name: 'Toggle theme' }).click();
    await page.getByRole('menuitem', { name: 'Light' }).click();
    
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });
});
