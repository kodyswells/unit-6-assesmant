const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    expect()
  });

  test("Draw button displays div with id 'choices'", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
    await driver.wait(until.elementIsVisible(driver.findElement(By.id( 'choices'))), 5000)
    expect(await driver.findElement(By.id("choices")).isDisplayed()).toBe(true)
    await driver.sleep(2000)
  })

  test("Clicking Add to Duo button displays the div with id 'player-duo'", async () => {
    try {
      await driver.findElement(By.className("bot-btn")).click()
  
      await driver.wait(until.elementIsVisible(driver.findElement(By.id("player-duo"))), 5000);
  
      const playerDuoDiv = await driver.findElement(By.id("player-duo"))
      const isDisplayed = await playerDuoDiv.isDisplayed()
      expect(isDisplayed).toBe(true)
    } catch (error) {
      console.error("Error:", error)
    }
  })

});