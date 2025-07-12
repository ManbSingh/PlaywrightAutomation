const { test, expect } = require('@playwright/test');
const {POManager} = require('./PageObjects/POManager'); // ✅ Import the CLASS, not an object
//const dataset = JSON.parse(JSON.stringify('./TestData/LoginTestData.json'));
const dataset = JSON.parse(JSON.stringify(require('./TestData/LoginTestData.json')));

//const dataset = JSON.parse(JSON.stringify(require('./TestData/LoginTestData.json')));

for (const data of dataset) {
  test(`Login Page Test for: ${data.username}`, async ({ page }) => {
    // ✅ Instantiate inside the test, where `page` exists
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const homePage = poManager.getHomePage();

  // ✅ Call methods — no need to pass `page` again
  await loginPage.goTo();

  await page.waitForTimeout(1000);   
  //await page.screenshot({ path: 'screenshot.png' });

  await loginPage.login(data.username, data.password);

  await page.waitForTimeout(2000);
  const loggedinUser = await loginPage.verifyLoginSuccess();
    expect(loggedinUser).toContain('Welcome testsingh');

    // ✅ Call methods — no need to pass `page` again
  await homePage.clickPhones();
 // ✅ Call methods — no need to pass `page` again
  await homePage.clickLaptops();
      // ✅ Call methods — no need to pass `page` again
  await homePage.clickMonitors();

  await page.waitForTimeout(2000);

    // Optionally, you can log out after the test  
    await homePage.logout();

  console.log('Test completed successfully');
});

// test('Second test: HomePage Category Test', async ({ page }) => {
//   // ✅ Instantiate inside the test, where `page` exists
//   const homepage = new HomePage(page);

//     // ✅ Call methods — no need to pass `page` again
//   await homepage.clickPhones();

//   await page.waitForTimeout(2000);
//   console.log('Test completed successfully');
// });

}