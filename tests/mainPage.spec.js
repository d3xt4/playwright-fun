import { test, expect } from "../fixture/PageObjectFixture";

test('Menu Search function', async ({ page, sideMenu }) =>{
    await sideMenu.searchFunction();
    const sideMenuExpectedText = await sideMenu.getFirstSideListItemText();
    await expect(sideMenu.firstSideListItem).toHaveText(sideMenuExpectedText);   
});