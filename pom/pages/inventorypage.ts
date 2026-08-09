import { test, Page, Locator, expect} from "@playwright/test";

export class Inventory {

    //Properties
    sortButton:Locator
    addToCartButtonCheapest:Locator
    addToCartButtonExpensive:Locator
    cartCount:Locator
    cartContainor:Locator




    // Constructors
    constructor(page:Page){

        this.sortButton = page.locator('[data-test="product-sort-container"]');
        this.addToCartButtonCheapest = page.locator("#add-to-cart-sauce-labs-onesie");
        this.addToCartButtonExpensive = page.locator("#add-to-cart-sauce-labs-fleece-jacket")
        this.cartCount = page.locator('[data-test="shopping-cart-badge"]');
        this.cartContainor = page.locator("#shopping_cart_container");

    }

    

    //Behavior
    //getter methods

    getSortButton() {

        return this.sortButton;
    }


    getAddtocartButtonCheapest(){
        return this.addToCartButtonCheapest;
    }

    getAddToCartButtonExpensive(){
        return this.addToCartButtonExpensive;

    }

    getCartCount(){

        return this.cartCount;


    }


    getCartContainorButton(){

        return this.cartContainor;

    }

    //Actions method

    async clicksortButton(){
        await this.sortButton.click();

    }

    async clickAddToCartCheapest(){
      await  this.addToCartButtonCheapest.click();

    }

    async clickAddToCartExpensive(){
        await this.addToCartButtonExpensive.click();

    }

        async verifyCartCount(expectedCount: string) {
    await expect(this.cartCount).toHaveText(expectedCount);
    
    }

    async clickcartContainor(){
        await this.cartContainor.click();

    }

}