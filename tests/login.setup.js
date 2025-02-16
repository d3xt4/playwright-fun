import { expect, test as setup} from "../fixture/PageObjectFixture";

setup('Login and save the session', async ({page, loginPage}) => {
    await page.goto('auth/login');
    await expect(loginPage.loginBtn).toBeVisible();
    await loginPage.loginProcess();
    await page.context().storageState({ path: "./auth/login.json" });
});
