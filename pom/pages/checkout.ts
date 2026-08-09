import {test, Page, Locator} from "@playwright/test"

class checkOut{

    //Properties
    firstNameField:Locator;
    lastNameField:Locator;
    postalCodeField:Locator;
    continueButton:Locator;


    //Constructor
    constructor(page:Page){
        this.firstNameField = page.locator("#first-name");
        this.lastNameField = page.locator("#last-name");
        this.postalCodeField = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        

    }



    //Behavior
    //getter methods

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


    //Actions method

    async enterFirstname(){

       await this.firstNameField.fill();

    }

    async enterLastname(){

       await this.lastNameField.fill();

    }

    async enterPostalCode(){

       await this.postalCodeField.fill();

    }



}