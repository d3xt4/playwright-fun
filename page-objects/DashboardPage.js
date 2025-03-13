export class DashboardPage{
    constructor(page){
        this.page = page;
        this.dashboardCards = page.locator('.oxd-grid-3.orangehrm-dashboard-grid .oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget');
    }
}