const { test } = require('@playwright/test');
const { POManager } = require('./PageObjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('./TestData/LoginTestData.json')));

test(`VisualTesting-Regression`, async ({ page }) => {
    const poManager = new POManager(page);
    const visualTesting = poManager.getVisualTestingData();

    await visualTesting.goTo();
    await visualTesting.verifyVisualsLoginPg();
    console.log('Visual testing completed successfully on Login Page');

    const loginPage = poManager.getLoginPage();

    const data = dataset[0];
    console.log('Test Data:', data);

    await loginPage.login(data.username, data.password);
    await loginPage.verifyLoginSuccess();
    
    await visualTesting.verifyVisualsHomePg();
    console.log('Visual testing completed successfully on Home Page');
});
