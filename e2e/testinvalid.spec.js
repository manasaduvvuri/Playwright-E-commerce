const { test } = require('@playwright/test')

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

test.only('change from admin to user', async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
	await page.locator('#username').fill("rahulshettyacademy");
	await page.locator('#password').fill("learning");
	await page.locator('.radiotextsty').last().click()
	await page.locator('#okayBtn').click()
	await page.pause()
	
})