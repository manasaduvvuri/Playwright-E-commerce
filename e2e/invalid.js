const { test } = require('@playwright/test')

test('Invalid login error message', async ({ browser}) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
	await page.locator('#username').fill("manasatest");
	await page.locator('#password').fill("invalid");
	await page.locator('[name="signin"]').click();



})