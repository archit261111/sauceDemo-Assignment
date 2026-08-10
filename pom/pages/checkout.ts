import {test, Page, Locator} from "@playwright/test"

export class Checkout{


    //Properties
    firstNameField:Locator;
    lastNameField:Locator;
    postalCodeField:Locator;
    continueButton:Locator;
    checkoutOverviewHeaderText:Locator;
    finishButton:Locator;
    generatePdfOrderButton:Locator;
    selectedProductNames;
    page:Page;


    //Constructor
    constructor(page:Page){

        this.page = page;

        //checkout step one page locators
        this.firstNameField = page.locator("#first-name");
        this.lastNameField = page.locator("#last-name");
        this.postalCodeField = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        

        //Checkout step two page locators
        this.checkoutOverviewHeaderText = page.getByText("Checkout: Overview");
        this.finishButton = page.locator("#finish");
        this.selectedProductNames = page.locator('.inventory_item_name');


        //checkout completion page locator
        this.generatePdfOrderButton = page.locator("#generate-pdf-order");


        

    }



    //Behavior
    //getter methods

    getPage(){
        return this.page;
    }

    getfirstName (){

        return this.firstNameField;

    }

    getlastName(){
        return this.lastNameField;

    }


    getpostalCode(){
    return this.postalCodeField;

    }

    getcontinueButton(){

        return this.continueButton;

    }

    getcheckoutOverviewHeaderText(){


        return this.checkoutOverviewHeaderText;

    }

    getSelectedProductNames(){

        return this.selectedProductNames.allTextContents();
    }

    //Actions method- checkout step one page

    async enterFirstname(firstName:string){

       await this.firstNameField.fill(firstName);

    }

    async enterLastname(lastName:string){

       await this.lastNameField.fill(lastName);

    }

    async enterPostalCode(code:string){

       await this.postalCodeField.fill(code);

    }

     async clickContinueButton(){

       await this.continueButton.click();

    }

    //checkout step two page action method.

    async clickFinishButton(){

       await this.finishButton.click();

    }

    async clickOnGeneratePdfOrderButton(){

       await this.generatePdfOrderButton.click();

    }


}

    
