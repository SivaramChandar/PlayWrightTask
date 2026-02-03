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
    await page.locator("#createLeadForm_personalTitle").fill("Mr.")
    await page.locator("#createLeadForm_departmentName").fill("QAE")
    await page.locator("#createLeadForm_annualRevenue").fill("1200000")
    await page.locator("#createLeadForm_departmentName").fill("Kindle")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9786541253")
    await page.locator("#createLeadForm_departmentName").fill("Kindle")
    await page.locator('.smallSubmit').click()  
    await page.waitForTimeout(2000)
    page.close()

})
