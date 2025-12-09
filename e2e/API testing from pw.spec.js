const { test,expect } = require('@playwright/test')
test("first api hit from pw", async ({ request }) => {
    //const requestapi = await request.newContext()
    const postresp = await request.get("https://simple-grocery-store-api.click", {})
    const jsonresp = await postresp.json()
    //expect(jsonresp).toContain("Simple Grocery Store API")
    console.log(jsonresp)
    console.log(postresp)
    expect(postresp).toBeOK()
    expect(jsonresp.message).toContain("Simple Grocery Store API")
    console.log(jsonresp.message)


})

test('test', async ({ request }) => {
        //const apiRequest = await request.newContext();
        const response = await request.get('https://simple-grocery-store-api.click');
        console.log(await response.json());
});




