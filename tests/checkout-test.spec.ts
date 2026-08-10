import {test, Page, expect, Download} from '@playwright/test'
import { Login } from '../pom/pages/login';
import { Cart } from '../pom/pages/cart';
import { Checkout } from '../pom/pages/checkout';
import { Helper } from './autoHelper/helper';
import * as fs from 'node:fs';
import { PDFParse } from 'pdf-parse';
import userdata from '../test-data/userdata.json'



let loginPage:Login;
let cartPage:Cart;
let checkoutPage:Checkout;


  test.beforeEach('Login and add product to cart', async ({page}) => {

    //objects
    let helper = new Helper(page);
    loginPage = new Login(page);
    cartPage = new Cart(page);
    checkoutPage = new Checkout(page);

    //login to the site
    await helper.login();

    //Add product to cart
    
  })



  test("Verify end-to-end checkout completion", async ({page}) =>{

    await test.step("User click on the checkout button on cart page", async ()=>{

        await cartPage.clickCheckoutButton();


    })

    await test.step("User enter checkout details", async ()=>{

        await checkoutPage.enterFirstname(userdata.firstname);
        await checkoutPage.enterLastname(userdata.lastname);
        await checkoutPage.enterPostalCode(userdata.postalcode);
        await checkoutPage.clickContinueButton();

    })

    await test.step("User click on finish to complete checkout", async ()=>{

        await checkoutPage.clickFinishButton();

    })

    test.step("Validate checkout completed successfully", async ()=>{

        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");

    })

  })



test("Validate the PDF order summary", async ({ page }) => {

    // Variable used to store the downloaded PDF object.
    let download: Download;

    // Variable used to store the extracted text from the PDF.
    let pdfText: string;

    await test.step('Click on generate PDF order button', async () => {

        // Start listening for the browser download event.
        const downloadPromise = page.waitForEvent('download');

        // Click the button that generates and downloads the PDF.
        await checkoutPage.clickOnGeneratePdfOrderButton();

        // Wait until the PDF download is completed.
        download = await downloadPromise;

    });

    await test.step('Save and read downloaded PDF', async () => {

        // Define the location where the PDF will be saved.
        const pdfPath = 'test-results/order-summary.pdf';

        // Save the downloaded PDF to the specified location.
        await download.saveAs(pdfPath);

        // Read the PDF file as a Buffer.
        const pdfBuffer = fs.readFileSync(pdfPath);

        // Create a PDF parser using the PDF buffer.
        const parser = new PDFParse({ data: pdfBuffer });

        // Extract text from the PDF.
        const pdfData = await parser.getText();

        // Store the extracted PDF text so it can be used in the next test step.
        pdfText = pdfData.text;

        // Print the PDF text in the terminal for debugging.
        console.log(pdfText);

        // Release the parser resources.
        await parser.destroy();

    });

    await test.step('Verify PDF contains expected order info', async () => {

      for(let productName of await checkoutPage.getSelectedProductNames()){

         // Verify that the PDF contains products.
        
         expect(pdfText).toContain(productName);

      }
        // Verify that the expected customer's first name is present.
        expect(pdfText).toContain(userdata.firstname);

        // Verify that the expected customer's last name is present.
        expect(pdfText).toContain(userdata.lastname);

        // Verify that the postal code is present.
        expect(pdfText).toContain(userdata.postalcode);

    });

});
