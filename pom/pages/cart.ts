import {test, Page, Locator} from "@playwright/test"

export class Cart{

    //Properties

    checkoutButton:Locator;

    //Constructor

    constructor(page:Page){

        this.checkoutButton = page.locator("#checkout");

    }


    //Behavior
    //getter method

    getCheckoutButton(){

        return this.checkoutButton

    }

    //Actions method

    async clickCheckoutButton(){

       await this.checkoutButton.click();

    }




}