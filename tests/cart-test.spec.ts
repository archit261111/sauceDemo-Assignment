import {test, Page, expect} from '@playwright/test'
import { Login } from '../pom/pages/login';
import { Cart } from '../pom/pages/cart';
import { Helper } from './autoHelper/helper';



let loginPage:Login;
let cartPage:Cart;


  test.beforeEach('Login and add product to cart', async ({page}) => {

    //objects
    let helper = new Helper(page);
    loginPage = new Login(page);
    cartPage = new Cart(page);

    //login to the site
    await helper.login();

    //Add product to cart
    



    
  })



  test("Verify order confirmation page displayed when user do checkout", async ({page}) =>{

    await test.step("User click on the checkout button", async ()=>{

        await cartPage.clickCheckoutButton();


    })


    test.step("Validate user redirected on the confirmation page", async ()=>{

        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");

    })



  })