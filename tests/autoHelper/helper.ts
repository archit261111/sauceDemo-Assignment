import { Page, test, expect } from '@playwright/test'
import { Login } from '../../pom/pages/login';
import { Inventory } from '../../pom/pages/inventorypage';
import { Checkout } from '../../pom/pages/checkout';
import { Cart } from '../../pom/pages/cart';
import userdata from '../../test-data/userdata.json'

export class Helper {
    
    private loginPage: Login;
    page:Page;
    inventoryPage:Inventory;
    checkoutPage: Checkout;
    cartPage: Cart;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new Login(page);
        this.inventoryPage = new Inventory(page);
        this.checkoutPage = new Checkout(page);
        this.cartPage = new Cart(page);
    }

 

    async login(){

     await this.page.goto("https://www.saucedemo.com/");
        await this.loginPage.enterUserName("standard_user");
         await this.loginPage.enterPassword("secret_sauce");
         await this.loginPage.clickLoginButton();

    }

    async addProductToCart(){
        await this.inventoryPage.sortButton.selectOption("lohi");
      await this.inventoryPage.addToCartButtonCheapest.click();
      await this.inventoryPage.addToCartButtonExpensive.click();
      await this.inventoryPage.clickcartContainor();
    }

    async completeCheckoutProcess(){

        await this.cartPage.clickCheckoutButton();
        await this.checkoutPage.enterFirstname(userdata.firstname);
        await this.checkoutPage.enterLastname(userdata.lastname);
        await this.checkoutPage.enterPostalCode(userdata.postalcode);
        await this.checkoutPage.clickContinueButton();
        await this.checkoutPage.clickFinishButton();
    }




}
