import playwright from "playwright";
const vgmUrl =
  "https://pluto.tv/es/on-demand/series/kochikame/season/1/episode/ryotsu-seras-ceporro-1995-1-1?utm_source=plutotv&utm_medium=share&utm_campaign=1000201&utm_content=1000735&referrer=copy-link";
(async () => {
  const browser = await playwright.firefox.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(vgmUrl);
  await page.$$("video");
  const element = await page.waitForSelector("video");
  console.log("Loaded image: " + (await element.getAttribute("src")));
  await page.close();
  await browser.close();
})();
