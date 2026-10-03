import { test, expect } from '@playwright/test';
import { Login } from '../pom/pages/login';
import creds from '../test-data/creds.json';
import fs from 'fs';
import {parse} from 'csv-parse/sync';





  let loginPage:Login;


  test.beforeEach('Navigate to the site', async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    loginPage = new Login(page);

  })


  //This is to read the csv file and covert in into the text
  const textCsv =fs.readFileSync('test-data/testData.csv',  'utf-8');

  //We have to convert the text into object

  const testData:any =parse(textCsv, {columns:true, skip_empty_lines: true}) 


  //console.log(testData)-- for practice csv.


  // for(const data of testData){


  //     test(`Verify the ${data.username} logged in with credentials`, async ({page})=>{


  //     await loginPage.enterUserName(data.username);
  //     await loginPage.enterPassword(data.password);
  //     await loginPage.clickLoginButton();

  //     //await page.waitForURL(/inventory/);
  //     if( page.url().includes('inventory')){

  //       console.log(`With ${data.username} login successful`);
  //     }
  //     else{
  //         console.log(`With ${data.username} login is un-successful`);
  //     }


  //     })
  // }








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




