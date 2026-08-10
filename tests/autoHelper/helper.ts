import { Page, test, expect } from '@playwright/test'
import { Login } from '../../pom/pages/login';

export class Helper {
    
    private loginPage: Login;
    page:Page;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new Login(page);
    }

 

    async login(){

     await this.page.goto("https://www.saucedemo.com/");
        await this.loginPage.enterUserName("standard_user");
         await this.loginPage.enterPassword("secret_sauce");
         await this.loginPage.clickLoginButton();

    }


}
