const { test } = require('@playwright/test')
const testData = require('../TestData/testdata')



test('Login and print all the elements titles', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill(testData.email)
    console.log(testData.email)
    await page.locator('#userPassword').fill("Iamking@000")
    await page.locator('[value="Login"]').click()
    await page.waitForLoadState('networkidle')
    console.log(await page.locator('.card-body b').allTextContents())


})
