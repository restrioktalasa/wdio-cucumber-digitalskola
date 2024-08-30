import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import homePage from '../pageobjects/home.page.js';
import cartPage from '../pageobjects/cart.page.js';

// Background
Given('user on the login page', async () => {
    await LoginPage.open(); 
});

// Positive case - Login Successful
When('user login with {string} as username and {string} as password', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('user should be directed to homepage', async () => {
    await homePage.validateOnHomePage(); 
});

// Negative case - Login Unsuccessful
Then('user should see error message {string}', async (errorMessage) => {
    await expect(LoginPage.errorMessage).toHaveText(errorMessage); 
});

// Positive case - Add item to cart
When('user adds an item to the cart', async () => {
    await homePage.open();
    await homePage.AddtoCartButton.click(); 
});

Then('user should see the item in the cart', async () => {
    await cartPage.validateItemAdded();
});


// Positive case - Remove item from cart
When('user remove the item from cart', async () => {
    await homePage.open();
    await homePage.AddtoCartButton.click(); 
    await cartPage.open();
    await cartPage.removeButton.click();
  });

Then('cart should be empty', async () => {
  await cartPage.validateCartisEmpty();
})
