export class SideMenu{
    constructor(page) {
        this.page = page;
        this.searchButton = page.getByLabel('Sidepanel').locator('div').filter({ hasText: 'AdminPIMLeaveTimeRecruitmentMy' }).locator('div').nth(1);
        this.firstSideListItem = page.locator('ul.oxd-main-menu li').first();
    };

    getFirstSideListItemText = async () =>  {
        return await this.firstSideListItem.textContent();
    }

    searchFunction = async () => {
        const searchValue = await this.getFirstSideListItemText();
        await this.searchButton.click();
        await this.searchButton.type(searchValue);
    }
};