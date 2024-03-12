import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "@playwright/test";
import { pageFixture} from "./pageFixture";

let browser: Browser;

let context : BrowserContext;

BeforeAll(async function ()  {
    browser = await chromium.launch({headless : false});
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;

});

Before(async function() {

});

After(async function({pickle, result}){
    if(result?.status == Status.FAILED){
        const img =  await pageFixture.page.screenshot({path : `./screenshots/${pickle.name}.png`, type: "png"});
        await this.attach(img, "image/png");
    }
   
    // await pageFixture.page.close();
    // await context.close();
})

AfterAll(async function ()  {
   await browser.close();
});