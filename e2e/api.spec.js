const { test, expect, request } = require('@playwright/test')

const payload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
let token;

test.beforeAll("api", async ({ request }) => {
    const post_response = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: payload
        }
    )
    const jsonresponse = await post_response.json()
    console.log(jsonresponse.token)
    token = jsonresponse.token
}
)

test('Login and print all the elements titles', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token)

    await page.goto('https://rahulshettyacademy.com/client')
    console.log(await page.locator('.card-body b').allTextContents())


})



test('Add zara coat to cart', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token)
    await page.goto('https://rahulshettyacademy.com/client')
    const All_products = await page.locator('.card-body')
    const product_count = await page.locator('.card-body b').count()
    const product_req = 'ZARA COAT 3'
    //console.log(All_products)
    for (let i = 0; i < product_count; i++) {
        await All_products.nth(i).textContent()
        if (await All_products.locator('b').nth(i).textContent() == product_req) {
            //console.log("Item matched")
            page.pause()
            //page.locator('.btn w-10 rounded i').click()
            await All_products.nth(i).locator('i').last().click()
            break;
        }

    }
    await page.locator('text="Cart"').click()
    await page.waitForLoadState('networkidle')

    await page.locator('.totalRow button').click()
    //await page.pause()
    await page.waitForLoadState('networkidle')
    await page.locator('[name="coupon"]').fill("sample")
    await page.locator('input[type="text"]').nth(1).fill('123')
    await page.locator('input[type="text"]').nth(2).fill('manasa')
    await page.locator('[placeholder="Select Country"]').pressSequentially("ind")

    const cnt_options = await page.locator('.ta-results')
    await cnt_options.waitFor()
    await cnt_options.locator('text=" British Indian Ocean Territory"').click()
    await page.locator('.btnn').click()
    await page.waitForLoadState('networkidle')
    await page.locator('text="Thankyou for the order"').isVisible()
    const order_id = await page.locator('label[class="ng-star-inserted"]').textContent()
    //console.log(order_id)
    await page.locator('button[routerlink="/dashboard/myorders"]').click()
    await page.locator("tbody").waitFor();

    await page.waitForLoadState('networkidle')

    const rows = await page.locator("tbody tr")

    const rows_count = await rows.count()
    console.log(rows_count)

    /*for (let i = 0; i < rows_count; ++i) {
        //console.log(await rows.nth(i).locator('th[scope="row"]').textContent())
        const order_rowid = await rows.nth(i).locator("th").textContent()
        if (order_id.includes(order_rowid)) {
            await rows.nth(i).locator("button").first().click();
            await page.waitForLoadState('networkidle')
            await page.locator('.address div').first().waitFor()
            break;
        }
    }*/
}

)
