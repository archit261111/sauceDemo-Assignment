import { test, expect, Page } from '@playwright/test';
import { Login } from '../pom/pages/login';
import { Inventory } from './../pom/pages/inventorypage';


let InventoryPage:Inventory;

test.beforeEach('Navigate to the inventory page', async ({page}) => {


    let loginPage = new Login(page);
    

    await page.goto("https://www.saucedemo.com/");


      })

    test('Navigate to the sorting button and sort the product', async ({page}) => { 
 
        let inventoryPage = new Inventory(page);
        
await test.step('Navigate to the sorting button and sort the product', async () => { 
 
    await inventoryPage.sortButton.click();

})

await test.step ('Add the cheapest and most expensive items into the cart', async ()=>{

    await inventoryPage.addToCartButtonCheapest.click();
    await inventoryPage.addToCartButtonExpensive.click();

})

await test.step('verify the cart count', async()=>{

    await inventoryPage.verifyCartCount('2');

})

})
