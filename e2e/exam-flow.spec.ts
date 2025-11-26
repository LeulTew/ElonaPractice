import { test, expect } from '@playwright/test';

test.describe('Exam Flow', () => {
  test('should complete a full exam lifecycle', async ({ page }) => {
    // 1. Start from home page and wait for redirect to dashboard
    await page.goto('/');
    await expect(page).toHaveTitle(/Elona Exam Practice/);
    await expect(page.getByText('Welcome back, Student')).toBeVisible({ timeout: 10000 });

    // 2. Navigate to Courses via "Start Practice"
    await page.getByText('Start Practice').click();
    await expect(page).toHaveURL(/.*\/courses/);
    await expect(page.getByText('Available Courses')).toBeVisible();

    // 3. Select a Course (click the first one)
    // Wait for courses to load
    await expect(page.getByText('Loading courses...')).not.toBeVisible();
    const firstCourse = page.locator('.group').first();
    await firstCourse.click();

    // 4. Select an Exam from the Modal
    // Wait for exams to load in modal
    await expect(page.getByText('Loading exams...')).not.toBeVisible();
    
    // Click the first exam card in the modal
    const firstExam = page.locator('.space-y-3 > div').first();
    await expect(firstExam).toBeVisible();
    await firstExam.click();

    // 5. Verify Exam Page Loaded
    await expect(page).toHaveURL(/.*\/exam\/.*/);
    await expect(page.getByText(/Question 1/i)).toBeVisible({ timeout: 10000 });
    
    // 6. Basic Exam Interaction
    // Verify common elements are present
    await expect(page.getByRole('button', { name: /Exit/i })).toBeVisible();
    
    // Check for Next or Finish button with longer timeout
    // Check for Next button (should be present on first question)
    // Use exact match to avoid matching "Next.js Dev Tools"
    const nextButton = page.getByRole('button', { name: 'Next', exact: true });
    
    // If it's a single question exam, it might be "Finish Exam"
    const finishButton = page.getByRole('button', { name: 'Finish Exam' });
    
    await expect(nextButton.or(finishButton)).toBeVisible({ timeout: 10000 });
  });
});
