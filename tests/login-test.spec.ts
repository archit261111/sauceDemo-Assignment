import { test, expect } from '@playwright/test';
import { Login } from '../pom/pages/login';
import creds from '../test-data/creds.json';




  let loginPage:Login;


  test.beforeEach('Navigate to the site', async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    loginPage = new Login(page);

  })


  for(let data of creds){

  test(`Verify the inventory page displayed with ${data.username}`, async ({page})=>{


    if(data.usertype == "valid"){

    await test.step("Enter username & password", async ()=>{

      await loginPage.enterUserName(data.username);
      await loginPage.enterPassword(data.password);

    })

  await test.step("Click on Login button", async ()=>{

    await loginPage.clickLoginButton();

  })

    await test.step("Validate inventory page displayed", async ()=>{

      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    })



  }else{

    console.log(`The ${data.username} is not valid for login`)

  }

  }  )








}




