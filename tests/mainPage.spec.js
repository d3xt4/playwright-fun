import { test, expect } from "../fixture/PageObjectFixture";

test('Just a test for loading base page', async ({page, loginPage}) => {
    await page.goto('auth/login');
    await expect(loginPage.loginBtn).toBeVisible();
    await loginPage.loginProcess();
});