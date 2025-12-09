const { test, expect } = require('@playwright/test')

test('validate home page for Flight booking page', async ({ page }) => {
    await page.goto("https://www.expedia.com/")
    const logo = await page.locator(".uitk-header-brand-logo")
    await expect(logo).toBeVisible()
})

test('goto Flights page', async ({ page }) => {
    await page.goto("https://www.expedia.com/")
    await page.getByAltText("Flights").click()
    await page.waitForLoadState("networkidle")
    const containers = await page.locator(".egds-tabs-custom-container")
    await expect(containers).toBeVisible()
    const flightseaarch = await page.locator("div[id = 'FlightSearchForm_ROUND_TRIP']")
    await expect(flightseaarch).toBeVisible()
})

test.only('change types of trips options', async ({ page }) => {
    await page.goto("https://www.expedia.com/")
    await page.getByAltText("Flights").click()
    //await page.waitForLoadState("networkidle")
    await page.getByText("One-way").click()
    //await page.waitForLoadState("networkidle")
    await page.getByText("Multi-city").click()
    const ragain = await page.locator('.uitk-layout-flex-gap-three div ul li[role="presentation"]  a span')
    
    const tabcount = await ragain.count()
    for (let i = 0; i <= tabcount; ++i) {
        if (await ragain.nth(i).textContent() === "Roundtrip") {
            console.log(1)

        }
        else if (await ragain.nth(i).textContent() === "One-way") {
            console.log(2)

        }
        else if (await ragain.nth(i).textContent() === "Multi-city") {
            console.log(3)

        }
        else { console.log("nothing") }
    }
    page.close()

    //const roletab = await page.locator('li[role="presentation"] a span')
   // console.log(await roletab.count())

})

test("Hover and click", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    //await page.pause()
    await page.locator("#mousehover").hover()
    const hoveroptions = await page.locator(".mouse-hover-content a")
    await hoveroptions.first().click()
    await page.waitForLoadState("networkidle")



})

test("handling frames", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const frames = await page.frameLocator("#courses-iframe")
    const split = await frames.locator(".col-md-6 h3 span ").textContent()
    const list = await split.split(" ")
    console.log(list[0])
    await expect(list).toContain("manasaS")
})




