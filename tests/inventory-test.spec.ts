import { test, expect, Page } from '@playwright/test';
import { Helper } from './autoHelper/helper';
import { Login } from '../pom/pages/login';
import { Inventory } from './../pom/pages/inventorypage';


let InventoryPage:Inventory;

test.beforeEach('Navigate to the inventory page', async ({page}) => {

    let helper = new Helper(page);
    let login = new Login(page);
   // await page.goto("https://www.saucedemo.com/");

    await helper.login();

})

    test('Verify the card count after adding products to the cart', async ({page}) => { 
 
        let inventoryPage = new Inventory(page);
        
     await test.step('Sort the product from low to high', async () => { 
 
        await inventoryPage.sortButton.selectOption("lohi");

})

    await test.step ('Add the cheapest and most expensive items into the cart', async ()=>{

    await inventoryPage.addToCartButtonCheapest.click();
    await inventoryPage.addToCartButtonExpensive.click();

})

await test.step('Validate the cart count', async()=>{

    expect(await inventoryPage.getCartCount()).toEqual('2');

})

})
