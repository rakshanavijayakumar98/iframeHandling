import test, { expect } from '@Playwright/test'

test("iFrame Handling in Leafground", async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml")
    const frameCount= page.frames()
    const frameValue= frameCount.length
    console.log("Total frame value is: "+frameValue)

    const TextContent = frameCount[1].locator("(//button[@id='Click'])[1]") //First frame
    await TextContent.click()
    await page.waitForTimeout(4000)
    await expect(TextContent).toHaveText("Hurray! You Clicked Me.")

    const NestedFrame= page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click") //nested frame
    await NestedFrame.click()
    await expect(NestedFrame).toHaveText("Hurray! You Clicked Me.")

})