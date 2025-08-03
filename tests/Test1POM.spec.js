const { test, expect } = require('@playwright/test');
const {LoginPage} = require('./PageObjects/LoginPage'); // ✅ Import the CLASS, not an object
const {HomePage} = require('./PageObjects/HomePage'); // ✅ Import the CLASS, not an object

const dataset = JSON.parse(JSON.stringify(require('./TestData/LoginTestData.json')));

for (const data of dataset) {
test(`Login Page Test for: ${data.username}`, async ({ page }) => {
  // ✅ Instantiate inside the test, where `page` exists
  const loginPage = new LoginPage(page);

  // ✅ Call methods — no need to pass `page` again
  await loginPage.goTo();

  await page.waitForTimeout(1000);   
  //await page.screenshot({ path: 'screenshot.png' });
if (data.expected === 'Login successful') {
  await loginPage.login(dataset.username, dataset.password);

  await page.waitForTimeout(2000);
  const loggedinUser = await loginPage.verifyLoginSuccess();
    expect(loggedinUser).toContain('Welcome testsingh');

      // ✅ Instantiate inside the test, where `page` exists
  const homepage = new HomePage(page);

    // ✅ Call methods — no need to pass `page` again
  await homepage.clickPhones();

      // ✅ Call methods — no need to pass `page` again
  await homepage.clickLaptops

      // ✅ Call methods — no need to pass `page` again
  await homepage.clickMonitors();

  await page.waitForTimeout(2000);

  // Optionally, you can log out after the test
  await homepage.logout();

  console.log('Test completed successfully');
}
else {
  // Handle login failure case
  await loginPage.login(data.username, data.password);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('User does not exist.');
  console.log(`Login failed for user as expected: ${data.username}`);
}
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