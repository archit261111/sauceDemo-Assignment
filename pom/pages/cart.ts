import {test, Page, Locator} from "@playwright/test"

class cart{


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

    async clickcheckoutButton(){

       await this.checkoutButton.click();

    }




}