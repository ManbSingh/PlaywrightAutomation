class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginlink = 'a#login2';
    this.usernameField = 'input#loginusername';
    this.passwordField = 'input#loginpassword';
    this.loginButton =   'button[onclick="logIn()"]';
    this.loggedInUser = 'a#nameofuser';
    
    this.errorMessage = '.error-message';
  }

  async goTo() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async login(username, password) {
    await this.page.click(this.loginlink);
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }
  

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }

  async verifyLoginSuccess() {
    const loggedInUserText = await this.page.textContent(this.loggedInUser);
    console.log('Logged in user text:', loggedInUserText);
    // Verify that the logged-in user text contains the expected username
    //expect(loggedInUserText).toContain('Welcome testsingh');
return loggedInUserText;    
  }
}

module.exports = { LoginPage };
