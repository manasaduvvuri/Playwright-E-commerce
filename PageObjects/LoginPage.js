class LoginPage {

    constructor(page) {

        this.page = page
      this.email =  page.locator('#userEmail')
       this.password = page.locator('#userPassword')
       this.loginbtn = page.locator('[value="Login"]')

    }

    async LoginpageNavigation() {
        await this.page.goto('https://rahulshettyacademy.com/client')
    }

    async Login(userName, Password) {

        await this.email.fill(userName)
       await this.password.fill(Password)
        await this.loginbtn.click()


    }

    
}

module.exports = { LoginPage }