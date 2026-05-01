using Microsoft.Playwright;

public class PlaywrightCrawlerService
{
    public async Task<string> GetCleanContentAsync(string url)
    {
        // På Mac er det vigtigt at Playwright findes i stien
        using var playwright = await Playwright.CreateAsync();
        
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions 
        { 
            Headless = true // Sæt til false under demo for at se det ske!
        });

        // Tip: Set viewport så det ligner en rigtig browser
        var page = await browser.NewPageAsync(new BrowserNewPageOptions {
            ViewportSize = new ViewportSize { Width = 1280, Height = 800 }
        });
        
        await page.GotoAsync(url, new PageGotoOptions { WaitUntil = WaitUntilState.NetworkIdle });

        // Vent på Vue - led efter et element jeres Vue app altid danner
        // await page.WaitForSelectorAsync("#app", new PageWaitForSelectorOptions { State = WaitForSelectorState.Attached });

        // Hiv teksten ud
        var content = await page.InnerTextAsync("body");
        
        return content;
    }
}