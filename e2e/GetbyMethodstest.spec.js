const { test } = require('@playwright/test')
const { workerData } = require('node:worker_threads')

test('GetBymethods_first', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/angularpractice/')
	const cl = await page.locator('.form-group')
	//await page.locator('.form-control').locator('input[name="name"]').fill("manasa")
	await cl.locator('input[name="name"]').fill("manasa")
	await cl.locator('input[name="email"]').fill("anything@gmail.com")
	await page.getByPlaceholder("Password").fill("isit?") //worked
	//await page.getByText('Check me out if you Love IceCreams!').check('true') //worked
	await page.getByLabel('Check me out if you Love IceCreams!').check('true') //worked
	await page.getByLabel('Gender').selectOption('Female')
	//await page.getByLabel('Employment Status: ')
	const empstatus = await page.locator('.form-group div')
	await empstatus.getByLabel('Student').click()

	await page.pause()







})