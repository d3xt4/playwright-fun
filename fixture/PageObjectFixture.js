import { test as base} from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { SideMenu } from "../page-objects/SideMenu";
import { DashboardPage } from "../page-objects/dashboardPage";

export const test = base.extend({
    page: async({ baseURL, page }, use) => {
        await page.goto(baseURL);
        await use(page);
    },

    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    sideMenu: async ({page}, use) => {
        await use(new SideMenu(page));
    },

    dashboardPage: async ({page}, use) => {
        await use(new DashboardPage(page));
    }
});

exports.expect = test.expect;