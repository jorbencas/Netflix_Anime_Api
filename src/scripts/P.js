// nodejs scraping plutotv to download anime
//
const puppeteer = require("puppeteer");
const fs = require("fs");
const url = "https://plutotv.com/anime/";
const anime = [];
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(1000);
  const animeList = await page.evaluate(() => {
    const animeList = document.querySelectorAll(".anime-list-item");
    return Array.from(animeList).map((anime) => {
      return {
        title: anime.querySelector(".anime-list-item-title").innerText,
        link: anime.querySelector(".anime-list-item-title").href,
        image: anime.querySelector(".anime-list-item-image").src,
      };
    });
  });
  await browser.close();
  anime.push(...animeList);
  fs.writeFileSync("anime.json", JSON.stringify(anime));
})();
