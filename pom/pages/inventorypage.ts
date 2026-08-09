import { test, Page, Locator } from "@playwright/test";

class Inventory {

    //Properties
    sortButton:Locator
    addtocartButton:Locator
    cartContainor:Locator



    // Constructors
    constructor(page:Page){

        this.sortButton = page.locator('[data-test="product-sort-container"]');
        this.addtocartButton = page.locator("#add-to-cart-sauce-labs-onesie");
        this.cartContainor = page.locator("#shopping_cart_container");

    }

    

    //Behavior
    //getter methods

    getSortButton() {

        return this.sortButton;
    }


    getAddtocartButton(){
        return this.addtocartButton
    }


    getCartContainorButton(){

        return this.cartContainor;

    }

    //Actions method

    async clicksortButton(){
        await this.sortButton.click();

    }

    async clickaddToCart(){
      await  this.addtocartButton.click();

    }

    async clickcartContainor(){
        await this.cartContainor.click();

    }

}