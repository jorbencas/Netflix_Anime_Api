const playwright = require("playwright");

const vgmUrl =
  "https://pluto.tv/es/on-demand/series/kochikame/season/1/episode/ryotsu-seras-ceporro-1995-1-1?utm_source=plutotv&utm_medium=share&utm_campaign=1000201&utm_content=1000735&referrer=copy-link";

const checkStock = async ({ page }) => {
  const notAvailableIcon = await page.$$("video");

  return notAvailableIcon.length === 0;
};
(async () => {
  const browser = await playwright.firefox.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  //   const links = await page.$$eval("a", (elements) =>
  //     elements
  //       .filter((element) => {
  //         const parensRegex = /^((?!\().)*$/;
  //         return (
  //           element.href.includes(".mid") && parensRegex.test(element.textContent)
  //         );
  //       })
  //       .map((element) => element.href)
  //   );
  const links = checkStock({ page });
  if (links) {
    console.log(links);
  } else {
    links = checkStock({ page });
    console.log(links);
  }
  const element = await page.waitForSelector("video");
  console.log("Loaded image: " + (await element.getAttribute("src")));
  await page.close();
  await browser.close();
})();
