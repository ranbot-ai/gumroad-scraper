import { IIdentifier, IQueueItem } from "../../types";
const CATEGORIES =
  process.env.CATEGORIES != null ? process.env.CATEGORIES.split(",") : false;

async function scrapeIdentifier(): Promise<IQueueItem[]> {
  // Fill up queue
  let queue: IQueueItem[] = [];

  // with test items...
  if (CATEGORIES) {
    for (let i = 0; i < CATEGORIES.length; i++) {
      let identifier: IIdentifier = { category: CATEGORIES[i] };

      queue.push({ tries: 0, identifier });
    }
  }

  console.table(queue);
  return queue;
}

export { scrapeIdentifier };
