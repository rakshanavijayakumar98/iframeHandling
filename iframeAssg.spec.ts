import test from '@Playwright/test';

test ("Iframe and Alert Handling", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.once("dialog",alertType =>{  //page.once method for accept
        alertType.accept()

    })
    await page.frameLocator("//iframe[@name='iframeResult']").locator("//button[text()='Try it']").click() //frame locator
    console.log("Pressed OK")
})
