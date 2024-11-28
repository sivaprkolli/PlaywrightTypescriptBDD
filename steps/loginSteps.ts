import { Given, When, Then  } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from "../pages/loginPage";

Given('User on launch page', async function () {
    await console.log("User on launch page")
    await pageFixture.page.goto("https://www.saucedemo.com/");
  
  });

When('User login using valid credentials', async function (page) {
  const loginPage = new LoginPage(page);
  await console.log("User login using valid credentials")
  await loginPage.enterUserName("standard_user");
  await loginPage.enterPassword("secret_sauce");
  await loginPage.clickOnLoginButton();
  });

Then('User enter valid {string} and {string}', async function (username, password) {
  const loginPage = new LoginPage(pageFixture.page);
  await loginPage.enterUserName(username);
  await loginPage.enterPassword(password);
  await loginPage.clickOnLoginButton();
  });