"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapePublicPage = void 0;
const config_1 = require("./../environment/config");
async function extractAllCategoryLinks(page) {
    const categoryLinks = await page.$$eval(`div[class='nested-menu'] a`, (elements) => elements.map((el) => el.getAttribute("href")));
    return [...new Set(categoryLinks)];
}
async function extractCategoryProducts(page) {
    const categoryLinks = await page.$$eval(`div[class='product-card-grid'] article[class='product-card']`, (elements) => elements.map((el) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const product_pic_url = (_a = el.querySelector("figure img")) === null || _a === void 0 ? void 0 : _a.src;
        const product_name = (_b = el.querySelector("header h4")) === null || _b === void 0 ? void 0 : _b.textContent;
        const product_url = (_c = el
            .querySelector("header a[class='stretched-link']")) === null || _c === void 0 ? void 0 : _c.getAttribute("href");
        const product_price = (_d = el.querySelector("footer div[class='price']")) === null || _d === void 0 ? void 0 : _d.textContent;
        const product_rating = (_e = el.querySelector("div[class='rating'] span[class='rating-average]")) === null || _e === void 0 ? void 0 : _e.textContent;
        const product_rating_views = (_f = el.querySelector("div[class='rating'] span:last-child")) === null || _f === void 0 ? void 0 : _f.textContent;
        const user_name = (_g = el.querySelector("header a[class='user']")) === null || _g === void 0 ? void 0 : _g.innerText;
        const user_avatar = (_h = el.querySelector("header img[class='user-avatar']")) === null || _h === void 0 ? void 0 : _h.src;
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
    }));
    return [...new Set(categoryLinks)];
}
// scrape page metadata and social links
async function scrapePublicPage(browser, queue) {
    // Go through every item in the queue and open page in the browser
    while (queue.length > 0) {
        let queueItem = queue.shift();
        console.log(queueItem);
        let identifier = queueItem.identifier;
        const context = browser.defaultBrowserContext();
        let page = await browser.newPage();
        // Configure the navigation timeout
        await page.setDefaultNavigationTimeout(config_1.config.timeout);
        let uri = identifier.category;
        let response = null;
        let error = null;
        let success = false;
        let data = {};
        let url = config_1.config.domain + "/" + uri;
        try {
            data["sourceUrl"] = url;
            console.log("// Visiting: " + url);
            await context.overridePermissions(url, ["geolocation", "notifications"]);
            response = await page.goto(url, { waitUntil: "networkidle2" });
            console.log("// -> Page Loaded");
            success = true;
        }
        catch (err) {
            response = null;
            error = err;
            console.error("// -> Error: " + err.message);
        }
        if (success === false) {
            if (error !== null)
                data["error"] = error.message;
        }
        else {
            if (response !== null)
                data["responseCode"] = response.status();
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
exports.scrapePublicPage = scrapePublicPage;
