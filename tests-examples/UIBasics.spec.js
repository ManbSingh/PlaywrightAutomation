const{test,expect}= require('@playwright/test');

//playwright test
test('First test', async ({browser}) =>
{

    //playwright code
    const context = await browser.newContext();
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/locatorspractice/');
    await page.waitForTimeout(1000);   
    await page.screenshot({ path: 'screenshot.png' });
    const title = await page.title();
    console.log('Page title:', await page.title());
    await expect(page).toHaveTitle('Rahul Shetty Academy - Login page');
    //await page.locator('#input').fill('Playwright');
    await page.fill('input#inputUsername', 'Playwrighttutorial');
    await page.fill('[type="password"]', 'Test@123');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(2000); 
    await page.close();
    await context.close();
    await browser.close();
    console.log('Test completed successfully');
    //expect(true).toBeTruthy();


});

// test.only('Second test', async ({browser}) =>
// {
//     //playwright code
//     const context = await browser.newContext();
//     const page = await browser.newPage();

//     await page.goto('https://www.bing.com/');
//     await page.waitForTimeout(1000);
//     await page.screenshot({ path: 'screenshot2.png' });
//     await page.close();
//     await context.close();
//     await browser.close();
//     console.log('Second test completed successfully');
// }
// );
