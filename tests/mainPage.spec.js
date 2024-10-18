import { test, expect } from "@playwright/test";

test('Just a test for loading base page', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});