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
        const usernameText = await this.usernameFetch.textContent();
        const passwordText = await this.passwordFetch.textContent();
        const usernameId = usernameText.slice(11);
        const passwordId = passwordText.slice(11);
        await this.usernameFetch
        await this.passwordFetch
        await this.usernameInput.fill(usernameId);
        await this.passwordInput.fill(passwordId);
        await this.loginBtn.click();
    };
};