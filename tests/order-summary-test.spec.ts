import { test, expect, Page } from '@playwright/test';
import { Helper } from './autoHelper/helper';
import { Login } from '../pom/pages/login';
import { Inventory } from '../pom/pages/inventorypage';
import {Summary} from '../pom/pages/summary'


let InventoryPage:Inventory;

test.beforeEach('Navigate to the inventory page', async ({page}) => {

    let helper = new Helper(page);

    await page.goto("https://www.saucedemo.com/");

    await helper.login();


      })

    test('Navigate to the sorting button and sort the product', async ({page}) => {

        let summaryPage = new Summary(page);

        test.step ('click on the finish button', async ()=>{

            await summaryPage.clickFinishButton;


        })

    })