import test, { expect } from "@playwright/test"

test("Create Individuals", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    
    await page.locator("//button[@title='App Launcher']").click()


    await page.locator("//button[contains(@aria-label,'View All')]").click()


    // await page.getByPlaceholder("Search apps or items...").click()
    await page.getByPlaceholder("Search apps or items...").fill("Opportunities")
    await page.locator("//mark[text()='Opportunities']").click()
    await page.locator("(//div[text()='New'])[1]").click()
    await page.getByRole("textbox",{name:'Name'}).fill('Siva')

    await page.locator("[id='combobox-input-1019']").click()
    await page.locator("//span[@title='martz']").click()
    
    await page.locator("//input[@name='CloseDate']").click()
    await page.locator("//td[@class='slds-is-today']").click()

    await page.locator("[id='combobox-button-964']").click()
    await page.getByRole('option', { name: 'Needs Analysis' }).waitFor({ state: 'visible' });
    await page.getByRole('option', { name: 'Needs Analysis' }).click();
    // await page.locator("//span[text()='Needs Analysis']").click()
    await page.locator("//button[@name='SaveEdit']").click()
    await expect(page.locator("//lightning-formatted-text[text()='Siva']")).toBeVisible()




})