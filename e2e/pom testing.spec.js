const { test } = require('@playwright/test')
const {LoginPage} = require('../PageObjects/LoginPage')

test('Login and print all the elements titles', async ({ page }) => {
    
    const loginPage = new LoginPage(page)
    loginPage.LoginpageNavigation()
    loginPage.Login('anshika@gmail.com', 'Iamking@000')

    await page.waitForLoadState('networkidle')
    console.log(await page.locator('.card-body b').allTextContents())
})