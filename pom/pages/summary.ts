import {test, Page, Locator} from "@playwright/test";

export class Summary {

    //Properties
    finishButton:Locator;


    //Constructors

    constructor(page:Page){

         this.finishButton = page.locator("#finish");
    }
   

    //Behavior
    // getter method
    getFinishButton(){

        return this.finishButton;
    }

    //Actions method
    async clickFinishButton(){
        await this.finishButton.click();
    }

}