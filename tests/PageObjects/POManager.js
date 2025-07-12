class POManager{
    constructor(page) {
        this.page = page;
        this.loginPage = null;
        this.homePage = null;
        this.productPage = null;
        this.cartPage = null;
    }
    
    getLoginPage() {
        if (this.loginPage === null) {
        const {LoginPage} = require('./LoginPage');
        this.loginPage = new LoginPage(this.page); // Instantiate the class with the page
        }
        return this.loginPage;
    }
    getHomePage() {
        if (this.homePage === null) {
        const {HomePage} = require('./HomePage');
        this.homePage = new HomePage(this.page); // Instantiate the class with the page
        }
        return this.homePage;
    }
    getProductPage() {
        if (this.productPage === null) {
        const {ProductPage} = require('./ProductPage');
        this.productPage = new ProductPage(this.page); // Instantiate the class with the page
        }
        return this.productPage;
    }   
    getCartPage() {
        if (this.cartPage === null) {
        const {CartPage} = require('./CartPage');
        this.cartPage = new CartPage(this.page); // Instantiate the class with the page
        }
        return this.cartPage;
    }
}
module.exports = { POManager };