import test, { chromium, webkit } from "@playwright/test"

test ("Launching redbus(Edge) and Launching Flipkart(webkit)", async()=>{

    const browser = await chromium.launch({channel:"msedge", headless:false})
    
    const context = await browser.newContext()

    const page = await context.newPage()    
    
    await page.goto("https://www.redbus.in/")

    console.log(await page.title())
    console.log(await page.url())

    const browser1 =await webkit.launch({channel:"webkit", headless:false})

    const context1 = await browser1.newContext()
    
    const page1 = await context1.newPage()
    
    await page1.goto("https://www.flipkart.com/")
    
    console.log(await page1.title())
    console.log(await page1.url())

    await browser.close();
    await browser1.close();
})