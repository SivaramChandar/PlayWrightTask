import {test} from "@playwright/test"

test("Create a Lead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator("input[value='Login']").click()

    await page.locator("text='CRM/SFA'").click()

    await page.locator("text='Leads'").click()

    await page.locator(`text="Create Lead"`).click()

    await page.locator("#createLeadForm_companyName").fill("Amazon")
    await page.locator("#createLeadForm_firstName").fill("Siva")
    await page.locator("#createLeadForm_lastName").fill("Venkat")
    await page.locator('.smallSubmit').click()  

    await page.locator("//a[text()='Edit']").click()
    await page.locator("//input[@id='updateLeadForm_companyName']").clear
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("Microsoft")


    await page.locator("(//input[@name='submitButton'])[1]").click()

    page.close()
})