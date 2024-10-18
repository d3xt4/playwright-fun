export class LoginPage{
    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('[data-v-10d463b7].oxd-button');
        this.usernameInput = page.locator('[placeholder="Username"]');
        this.passwordInput = page.locator('[placeholder="Password"]');
        this.usernameFetch = page.locator('div[data-v-8a31f039] p').filter({ hasText: 'Username'});
        this.passwordFetch = page.locator('div[data-v-8a31f039] p').filter({ hasText: 'Password'});;
    }

    loginProcess = async () => {
        await this.usernameInput.fill('Admin');
        await this.passwordInput.fill('Admin123');
    }
};