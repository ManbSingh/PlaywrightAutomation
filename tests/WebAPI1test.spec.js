const { test, expect, request } = require('@playwright/test');

// test('API Test 1', async ({ request }) => {
//   // Create new API context
//   const response = await request.get('https://automationexercise.com/api/productsList');
//   expect(response.ok()).toBeTruthy();
//     const body = await response.json();
//     console.log(body);
//   });

//   test('API Test 2', async ({ request }) => {
//   // Create new API context
//   const response = await request.post('https://automationexercise.com/api/productsList');
//   expect(response.ok()).toBeTruthy();
//     const body = await response.json();
//     console.log(body);
//   });

//    test('API Test 3: Get All Brand List', async ({ request }) => {
//   // Create new API context
//   const response = await request.get('https://automationexercise.com/api/brandsList');
//   expect(response.ok()).toBeTruthy();
//     const body = await response.json();
//     console.log(body);
//   });

//     test('API Test 4: Put All Brand List', async ({ request }) => {
//   // Create new API context
//   const response = await request.put('https://automationexercise.com/api/brandsList');
//   expect(response.ok()).toBeTruthy();
//     const body = await response.json();
//     console.log(body);
//   });

//     test('API Test 5: POST To Search Product', async ({ request }) => {
//   // Create new API context
//   const response = await request.post('https://automationexercise.com/api/searchProduct', {
//     form: {
//       search_product: 'jean'
//     },
//   });
//     expect(response.ok()).toBeTruthy();
//         const body = await response.json();
//         console.log(body);
//     });
  
//     test('API Test 6: POST To Verify User Exist', async ({ request }) => {
//   // Create new API context
//   const response = await request.post('https://automationexercise.com/api/verifyLogin', {
//     form: {
//       email:'test@test.com',
//       password: 'test123'
//     },
//   });
//     expect(response.ok()).toBeTruthy();
//         const body = await response.json();
//         console.log(body);
//     });
  
    test('API Test 7: POST To create New User if does not Exist', async ({ request }) => {
  // Create new API context
  // Generate unique email
  const randomSuffix = Date.now();
  const email = `testing_${randomSuffix}@test.com`;
    // Use the generated email in the request
  const response = await request.post('https://automationexercise.com/api/createAccount', {
    form: {
      name:'test1',
      email:email,
      //email:'test@test.com',
      password: 'test123',
      firstname: 'Test',
      lastname: 'User',
        mobile_number: '1234567890',
        address1: '123 Test St',
        address2: 'Apt 1',
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country',
        zipcode: '12345'

    },
  });
    expect(response.ok()).toBeTruthy();
        const body = await response.json();
        console.log(body);
        
        // Check if the user was created successfully
        // If the user already exists, the API will return a different message
    expect(body.message==='User created!').toBeTruthy();
        
    if (body.message === 'User created!') {
        const body = await response.json();
        console.log(`User created successfully with email: ${email}`);
    } else if (body.message === 'Email address already exist!') {
        console.log(`Email address already exists: ${email}`);
      }
    
    });
  
  