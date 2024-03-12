import { Given, When, Then  } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";

Given('User on launch page', async function () {
    await console.log("User on launch page")

    await pageFixture.page.goto("https://www.saucedemo.com/");
  });

When('User login using valid credentials', async function () {
  await console.log("User login using valid credentials")
  await pageFixture.page.locator("#user-name").fill("standard_user");
  await pageFixture.page.locator("#password").fill("secret_sauce")
  await pageFixture.page.locator(".submit-button.btn_action").click();
  });

Then('User enter valid {string} and {string}', async function (username, password) {

    await pageFixture.page.locator("#user-name").fill(username);
    await pageFixture.page.locator("#password").fill(password)
    await pageFixture.page.locator(".submit-button.btn_action").click();
  });