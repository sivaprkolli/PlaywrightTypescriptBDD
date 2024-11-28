import {Page} from "@playwright/test";

export default class LoginPage{
    
    constructor(public page:Page){

    }

     async enterUserName(userName: string){
         await this.page.locator("#user-name");
    }

   async enterPassword(password: string){
    await this.page.locator("secret_sauce")
    }

    async clickOnLoginButton(){
        await this.page.locator(".submit-button.btn_action")
    }

//     await pageFixture.page.locator("#user-name").fill("standard_user");
//   await pageFixture.page.locator("#password").fill("secret_sauce")
//   await pageFixture.page.locator(".submit-button.btn_action").click();

}