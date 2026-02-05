import test from "@playwright/test"

test("Create Individuals", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    // await page.waitForTimeout(12000)
    
    await page.locator("//button[@title='App Launcher']").click()
    // await page.waitForTimeout(10000)


    await page.locator("//button[contains(@aria-label,'View All')]").click()
    await page.locator("//p[text()='Individuals']").click()
    

    await page.locator("(//a[@title='New']/div)[1]").click()

    await page.locator("//input[contains(@class,'lastName')]").fill("aa")

    await page.locator("//span[text()='Save']").click()

    await page.locator("(//span[text()='aa'])[1]").isVisible()

})