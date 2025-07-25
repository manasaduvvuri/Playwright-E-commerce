const { test, expect } = require('@playwright/test')

test('Invalid login error message', async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
	await page.locator('#username').fill("manasatest");
	await page.locator('#password').fill("invalid");
	await page.locator('[name="signin"]').click();
	console.log(await page.locator("[style*='display: block;']").textContent());



})

test('Valid login', async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await page.locator('#username').fill("rahulshettyacademy");
	await page.locator('#password').fill("learning");
	await page.locator('#terms').check("true")
	await page.locator('[name="signin"]').click();
	await console.log("test passed")
})

test('Changing dropdown', async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await page.locator('#username').fill("rahulshettyacademy");
	await page.locator('#password').fill("learning");
	await page.locator('select.form-control').selectOption("consult")
	await page.locator('#terms').check("true")
	await page.locator('[name="signin"]').click();
	await console.log("drop down selected")
})

test('change from admin to user', async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await page.locator('#username').fill("rahulshettyacademy");
	await page.locator('#password').fill("learning");
	await page.locator('.radiotextsty').last().click()
	await page.locator('#okayBtn').click()
	await page.pause()
	
})

test('admin to user', async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await page.locator('#username').fill("rahulshettyacademy");
	await page.locator('#password').fill("learning");
	await page.locator('.radiotextsty').last().click()
	await page.locator('#okayBtn').click()
	await page.pause()

})

test('first assertion using expect', async({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await page.locator('#username').fill("rahulshettyacademy");
	await page.locator('#password').fill("learning");
	await page.locator('.radiotextsty').last().click()
	await expect(page.locator('.radiotextsty').last()).toBeChecked()
	await page.locator('#okayBtn').click()
	

})

test('to check blinking text', async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await expect(page.locator('.blinkingText')).toHaveAttribute('class','blinkingText')
})


test.only('checking new page handling', async ({ browser }) => {
	const context = await browser.newContext()
	const page = await context.newPage()
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	console.log(await page.locator('.blinkingText').textContent())
	//const [page2] = await Promise.all([
	//	page.locator('.blinkingText').click(),
	//	context.waitForEvent('page')
	//])
	
	//await page2.locator('[href="mailto:mentor@rahulshettyacademy.com"]').click()
	//console.log(await page2.locator('.inner-box').textContent())
	
	const [newPage] = await Promise.all(
		[
			context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
			page.locator('.blinkingText').click(),

		])//new page is opened


	const text = await newPage.locator(".red").textContent();
	console.log(text)

	await newPage.locator('[href="mailto:mentor@rahulshettyacademy.com"]').click()

})

	