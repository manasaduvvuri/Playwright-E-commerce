const { test, expect } = require('@playwright/test');
//const { assert } = require('node:test');
//import { test, expect } from '@playwright/test';
test('sample test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    const title = await page.title()
    expect(title).toContain('Google')
    console.log(title)
    console.log(page)
    
});

test('Another from Manasa', async ({ page }) => {

    await page.goto('https://www.udemy.com/');


});

test('Invalid login error message', async ({ browser }) => {
    const cont = await browser.newContext();
    const page = await cont.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("manasatest");
    await page.locator('#password').fill("invalid");
    await page.locator('[name="signin"]').click();
    console.log(await page.locator("[style*='display: block;']").textContent());



});


