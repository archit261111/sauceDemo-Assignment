import {test, Page, Locator} from '@playwright/test'



export class  Login  {


    //properties

    usernameField:Locator 
    passwordField:Locator
    loginButton:Locator



    //constructor

     constructor(page:Page){

    this.usernameField =  page.locator("#user-name "); 
    this.passwordField =  page.locator("#password"); 
    this.loginButton = page.getByRole( 'button', {name: 'Login'});

    }



    //behavior

    getUsernameField(){

        return this.usernameField;

    }

    getPasswordField(){

        return this.passwordField;

    }
    getLoginButton(){

        return this.loginButton;

    }

    //Action methods


    async enterUserName(username:string){

       await this.usernameField.fill(username)

    }

    async enterPassword(pass:string){

       await this.passwordField.fill(pass)

    }


     async clickLoginButton(){

       await this.loginButton.click()

    }


    




}