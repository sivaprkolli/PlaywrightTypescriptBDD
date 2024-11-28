import { Given, When, Then  } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";

Given('User on products screen', async function () {
        let title = await pageFixture.page.title();
        await expect(title).toEqual("Swag Labs")
  });

Then('Verify products heading', async ()=> {
      await pageFixture.page.waitForTimeout(5000);
        let productsHeading  = await pageFixture.page.locator(".title").textContent();
        await expect(productsHeading).toEqual("Products")
  });