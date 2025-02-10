"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeIdentifier = void 0;
const CATEGORIES = process.env.CATEGORIES != null ? process.env.CATEGORIES.split(",") : false;
async function scrapeIdentifier() {
    // Fill up queue
    let queue = [];
    // with test items...
    if (CATEGORIES) {
        for (let i = 0; i < CATEGORIES.length; i++) {
            let identifier = { category: CATEGORIES[i] };
            queue.push({ tries: 0, identifier });
        }
    }
    console.table(queue);
    return queue;
}
exports.scrapeIdentifier = scrapeIdentifier;
