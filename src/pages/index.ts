import { IIdentifier, IQueueItem } from "../../types";
import { config } from "./../environment/config";

async function extractAllCategoryLinks(page: any): Promise<any> {
  const categoryLinks = await page.$$eval(
    `div[class='nested-menu'] a`,
    (elements: any[]) =>
      elements.map((el: { getAttribute: (arg0: string) => any }) =>
        el.getAttribute("href")
      )
  );

  return [...new Set(categoryLinks)];
}

async function extractCategoryProducts(page: any): Promise<any> {
  const categoryLinks = await page.$$eval(
    `div[class='product-card-grid'] article[class='product-card']`,
    (elements: any[]) =>
      elements.map((el: any) => {
        const product_pic_url = el.querySelector("figure img")?.src;
        const product_name = el.querySelector("header h4")?.textContent;
        const product_url = el
          .querySelector("header a[class='stretched-link']")
          ?.getAttribute("href");
        const product_price = el.querySelector(
          "footer div[class='price']"
        )?.textContent;
        const product_rating = el.querySelector(
          "div[class='rating'] span[class='rating-average]"
        )?.textContent;
        const product_rating_views = el.querySelector(
          "div[class='rating'] span:last-child"
        )?.textContent;
        const user_name = el.querySelector("header a[class='user']")?.innerText;
        const user_avatar = el.querySelector(
          "header img[class='user-avatar']"
        )?.src;

        return {
          product_pic_url,
          product_name,
          product_url,
          product_price,
          product_rating,
          product_rating_views,
          user_name,
          user_avatar,
        };
      })
  );

  return [...new Set(categoryLinks)];
}

// scrape page metadata and social links
async function scrapePublicPage(
  browser: any,
  queue: IQueueItem[]
): Promise<void> {
  // Go through every item in the queue and open page in the browser
  while (queue.length > 0) {
    let queueItem: IQueueItem = queue.shift() as IQueueItem;
    console.log(queueItem);
    let identifier: IIdentifier = queueItem.identifier;

    const context = browser.defaultBrowserContext();
    let page = await browser.newPage();

    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(config.timeout);

    let uri = identifier.category;
    let response: any = null;
    let error: any = null;
    let success = false;
    let data: any = {};

    let url = config.domain + "/" + uri;

    try {
      data["sourceUrl"] = url;
      console.log("// Visiting: " + url);

      await context.overridePermissions(url, ["geolocation", "notifications"]);
      response = await page.goto(url, { waitUntil: "networkidle2" });

      console.log("// -> Page Loaded");
      success = true;
    } catch (err: any) {
      response = null;
      error = err;
      console.error("// -> Error: " + err.message);
    }

    if (success === false) {
      if (error !== null) data["error"] = error.message;
    } else {
      if (response !== null) data["responseCode"] = response.status();

      await page.bringToFront();

      data["title"] = await page.evaluate(() => document.title);
      data["finalUrl"] = await page.evaluate(() => document.location.href);
      data["allCategoryLinks"] = await extractAllCategoryLinks(page);
      data["products"] = await extractCategoryProducts(page);
    }

    console.log(`// Data: ${JSON.stringify(data, null, 2)}`);

    await page.close();
  }

  await browser.close();
}

export { scrapePublicPage };
