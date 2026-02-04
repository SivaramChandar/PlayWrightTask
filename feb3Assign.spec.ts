import {test} from "@playwright/test"

test("Create Lead", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    //input[@id='username']
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(12000)
    
    await page.locator("//button[@title='App Launcher']").click()
    await page.waitForTimeout(10000)


    await page.locator("//button[contains(@aria-label,'View All')]").click()
    await page.locator("//div[@data-name='Sales']").click()    
    

    await page.locator("//a[@title='Leads']").click()

    await page.locator("//div[@title='New']").click()


    await page.locator("//button[contains(@class,'lds-input_faux']").click()
    await page.locator("//span[@text()='Mr.']").click()

    await page.locator("//[@name='lastName']").fill("Venkat")
    await page.locator("//[@name='Company']").fill("Amazon")
    await page.locator("//[@name='SaveEdit']").click()


    await page.locator("//[@slot='primaryField']").isVisible()



})