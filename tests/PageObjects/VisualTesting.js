const { expect } = require('@playwright/test');
// ...existing code...
class VisualTesting {
  constructor(page) {
    this.page = page;
    this.navbar_lgpg = 'div#navbarExample';
    this.logo_lgpg = 'a#nava';
    this.sideMenu_lgpg = 'div.col-lg-3:has-text("CATEGORIES")';
    this.prodlist_lgpg = 'div.col-lg-9';
    this.footer_lgpg = 'div#footc';
    this.navbar_hmpg = 'div#navbarExample';
    this.logo_hmpg = 'a#nava';
    this.sideMenu_hmpg = 'div.col-lg-3:has-text("CATEGORIES")';
    this.prodlist_hmpg = 'div.col-lg-9';
    this.footer_hmpg = 'div#footc';

   this.errorMessage = '.error-message';
  }

  async goTo() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async verifyVisualsLoginPg() {
    expect(await this.page.locator(this.navbar_lgpg).screenshot()).toMatchSnapshot('navbar.png');
    expect(await this.page.locator(this.logo_lgpg).screenshot()).toMatchSnapshot('logo.png');
    expect(await this.page.locator(this.sideMenu_lgpg).screenshot()).toMatchSnapshot('side-menu.png');
    expect(await this.page.locator(this.prodlist_lgpg).screenshot()).toMatchSnapshot('productlist.png');
    expect(await this.page.locator(this.footer_lgpg).screenshot()).toMatchSnapshot('footer.png'); 
  }

  async verifyVisualsHomePg() {
    expect(await this.page.locator(this.navbar_hmpg).screenshot()).toMatchSnapshot('navbar_home.png');
    expect(await this.page.locator(this.logo_hmpg).screenshot()).toMatchSnapshot('logo_home.png');
    expect(await this.page.locator(this.sideMenu_hmpg).screenshot()).toMatchSnapshot('side-menu_home.png');
    expect(await this.page.locator(this.prodlist_hmpg).screenshot()).toMatchSnapshot('productlist_home.png');
    expect(await this.page.locator(this.footer_hmpg).screenshot()).toMatchSnapshot('footer_home.png');
  }  
  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }

}

module.exports = { VisualTesting };
