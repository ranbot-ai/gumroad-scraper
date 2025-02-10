# Gumroad Scraper | 2025

- A Nodejs script that scrapes products from gumroad.

## Technology

- Node
  - Scraper running node version: (v14, v18, v20)
  - Node Version Manager [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Puppeteer](https://pptr.dev/)
  - Node library which provides a high-level API to control Chrome
- Typescript
  - TypeScript is JavaScript with syntax for types. [Doc](https://www.typescriptlang.org/)
  - [Node.Js With TypeScript](https://nodejs.dev/en/learn/nodejs-with-typescript/)

## Structure

```
➜  gumroad-scraper git:(main) ✗ tree -I 'node_modules|build'
.
├── README.md
├── config
│   └── config.json
├── nodemon.json
├── package.json
├── src
│   ├── environment
│   │   └── config.ts
│   ├── index.ts
│   ├── pages
│   │   ├── identifiers.ts
│   │   └── index.ts
│   └── utils
│       └── index.ts
├── tsconfig.json
└── types
    └── index.d.ts

7 directories, 11 files
```

- `build`: The latest generated javascript code.
- `config`: Deployment and proxy configuration.
- `src`: The main coding part of the scraper, written by typescript.
- `types`: Type or Interface definition.

## Scripts Overview

```NodeJS
npm run start:dev
```

Starts the application in development using nodemon and ts-node to do cold reloading.

```NodeJS
npm run build
```

Builds the app at build, cleaning the folder first.

```NodeJS
npm run start
```

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

## Usage Examples

```NodeJS
env CATEGORIES=music-and-sound-design/instruments/guitar node build/index.js
```

## Response

```
>> Starting Gumroad Scraper ......
┌─────────┬───────┬───────────────────────────────────────────────────────────┐
│ (index) │ tries │                        identifier                         │
├─────────┼───────┼───────────────────────────────────────────────────────────┤
│    0    │   0   │ { category: 'music-and-sound-design/instruments/guitar' } │
└─────────┴───────┴───────────────────────────────────────────────────────────┘
>> Queue Size: 1
{
  tries: 0,
  identifier: { category: 'music-and-sound-design/instruments/guitar' }
}
// Visiting: https://gumroad.com/music-and-sound-design/instruments/guitar
// -> Page Loaded
// Data: {
  "sourceUrl": "https://gumroad.com/music-and-sound-design/instruments/guitar",
  "responseCode": 200,
  "title": "Gumroad",
  "finalUrl": "https://gumroad.com/music-and-sound-design/instruments/guitar",
  "allCategoryLinks": [
    "/",
    "/design",
    "/design/architecture",
    "/design/branding",
    "/design/entertainment-design",
    "/design/fashion-design",
    "/design/fonts",
    "/design/graphics",
    "/design/icons",
    "/design/industrial-design",
    "/design/interior-design",
    "/design/print-and-packaging",
    "/design/ui-and-web",
    "/design/wallpapers",
    "/drawing-and-painting",
    "/drawing-and-painting/artwork-and-commissions",
    "/drawing-and-painting/digital-illustration",
    "/drawing-and-painting/traditional-art",
    "/3d",
    "/3d/3d-assets",
    "/3d/3d-modeling",
    "/3d/animating",
    "/3d/arvr",
    "/3d/avatars",
    "/3d/character-design",
    "/3d/rigging",
    "/3d/textures",
    "/3d/vrchat",
    "/self-improvement",
    "/self-improvement/cooking",
    "/self-improvement/crafts-and-dyi",
    "/self-improvement/dating-and-relationships",
    "/self-improvement/outdoors",
    "/self-improvement/philosophy",
    "/self-improvement/productivity",
    "/self-improvement/psychology",
    "/self-improvement/spirituality",
    "/self-improvement/travel",
    "/self-improvement/weddings",
    "/self-improvement/wellness",
    "/music-and-sound-design",
    "/music-and-sound-design/dance-and-theater",
    "/music-and-sound-design/instruments",
    "/music-and-sound-design/sound-design",
    "/music-and-sound-design/vocal",
    "/films",
    "/films/comedy",
    "/films/dance",
    "/films/documentary",
    "/films/movie",
    "/films/performance",
    "/films/short-film",
    "/films/sports-events",
    "/films/theater",
    "/films/video-production-and-editing",
    "/films/videography",
    "/software-development",
    "/software-development/app-development",
    "/software-development/hardware",
    "/software-development/programming",
    "/software-development/software-and-plugins",
    "/software-development/web-development",
    "/business-and-money",
    "/business-and-money/accounting",
    "/business-and-money/entrepreneurship",
    "/business-and-money/gigs-and-side-projects",
    "/business-and-money/investing",
    "/business-and-money/management-and-leadership",
    "/business-and-money/marketing-and-sales",
    "/business-and-money/networking-careers-and-jobs",
    "/business-and-money/personal-finance",
    "/business-and-money/real-estate",
    "/education",
    "/education/classroom",
    "/education/english",
    "/education/history",
    "/education/math",
    "/education/science",
    "/education/social-studies",
    "/education/specialties",
    "/education/test-prep",
    "/gaming",
    "/gaming/gambling",
    "/gaming/streaming",
    "/photography",
    "/photography/cosplay",
    "/photography/photo-courses",
    "/photography/photo-presets-and-actions",
    "/photography/reference-photos",
    "/photography/stock-photos",
    "/writing-and-publishing",
    "/writing-and-publishing/courses",
    "/writing-and-publishing/resources",
    "/comics-and-graphic-novels",
    "/fitness-and-health",
    "/fitness-and-health/exercise-and-workout",
    "/fitness-and-health/running",
    "/fitness-and-health/sports",
    "/fitness-and-health/weight-loss-and-dieting",
    "/fitness-and-health/yoga",
    "/audio",
    "/audio/asmr",
    "/audio/healing",
    "/audio/hypnosis",
    "/audio/sleep-and-meditation",
    "/audio/subliminal-messages",
    "/audio/voiceover",
    "/fiction-books",
    "/fiction-books/childrens-books",
    "/fiction-books/fantasy",
    "/fiction-books/mystery",
    "/fiction-books/romance",
    "/fiction-books/science-fiction",
    "/fiction-books/teen-and-young-adult",
    "/recorded-music",
    "/recorded-music/albums",
    "/recorded-music/singles",
    "/other",
    "#"
  ],
  "products": [
    {
      "product_pic_url": "https://public-files.gumroad.com/0v6lfjx4roy3k6yxw65y9ihya2ce",
      "product_name": "Chords, Scales and Progressions Guitar Ebooks Bundle - 20% off",
      "product_url": "https://fachords.gumroad.com/l/giubc?layout=discover&recommended_by=search",
      "product_price": "$43",
      "user_name": "FaChords Guitar",
      "user_avatar": "https://public-files.gumroad.com/q6wyo5hsgsksuav2on96m4euur2l"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/pyknxupyo4p72xhnsoifylly3fvu",
      "product_name": "CAGED Conversion Therapy ",
      "product_url": "https://guitarmalade.gumroad.com/l/wdcty?layout=discover&recommended_by=search",
      "product_price": "$44",
      "product_rating_views": "(4)",
      "user_name": "Guitarmalade",
      "user_avatar": "https://public-files.gumroad.com/icjoehrqupawhwb955417cvt39mj"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/y9nj3zv13e1gmffcgxyo24phirti",
      "product_name": "Pod Go PLUG AND PLAY Presets",
      "product_url": "https://johnnathancordy.gumroad.com/l/pvqfr?layout=discover&recommended_by=search",
      "product_price": "£2+",
      "product_rating_views": "(4)",
      "user_name": "John Nathan Cordy",
      "user_avatar": "https://public-files.gumroad.com/vbsdke6p9trosdu5x0z0cygcoaby"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/p72eeeai06lx61po9bwb8286p0qt",
      "product_name": "Chords Domination | Play Any Chord You Want Across All The Fretboard",
      "product_url": "https://fachords.gumroad.com/l/tvXjF?layout=discover&recommended_by=search",
      "product_price": "$18",
      "product_rating_views": "(33)",
      "user_name": "FaChords Guitar",
      "user_avatar": "https://public-files.gumroad.com/q6wyo5hsgsksuav2on96m4euur2l"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/6q8wkg99ia0rfz0388nf0uzbtuwd",
      "product_name": "Sketchy Setups Bundle 1 (Guide Nos. 1, 2, 3, 4)",
      "product_url": "https://hazeguitars.gumroad.com/l/uSxrK?layout=discover&recommended_by=search",
      "product_price": "$20",
      "product_rating_views": "(15)",
      "user_name": "Gerry Hayes",
      "user_avatar": "https://public-files.gumroad.com/2kashy8rby4fun85mcxd5op0wsil"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/oy0zhahi17dad08bmxa29mfeymip",
      "product_name": "Guitar Chord Dictionary - PDF Method With Diagrams and Theory",
      "product_url": "https://jazzguitarlicks.gumroad.com/l/SXJyE?layout=discover&recommended_by=search",
      "product_price": "$20+",
      "product_rating_views": "(8)",
      "user_name": "Jazz Guitar Licks.com",
      "user_avatar": "https://public-files.gumroad.com/yfc0f968umtdvtvskkp16ff5tv3l"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/h600pscqq1lwqsqfa040yc3y7mva",
      "product_name": "Kemper Rigs",
      "product_url": "https://johnnathancordy.gumroad.com/l/ajabb?layout=discover&recommended_by=search",
      "product_price": "£5",
      "product_rating_views": "(2)",
      "user_name": "John Nathan Cordy",
      "user_avatar": "https://public-files.gumroad.com/vbsdke6p9trosdu5x0z0cygcoaby"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/scq2l0kv8zdyvl76i9o1ifbuxv1g",
      "product_name": "Guitar Scale Dictionary - Printable PDF Method With Diagrams and Formula Charts",
      "product_url": "https://jazzguitarlicks.gumroad.com/l/znoyd?layout=discover&recommended_by=search",
      "product_price": "$30+",
      "product_rating_views": "(9)",
      "user_name": "Jazz Guitar Licks.com",
      "user_avatar": "https://public-files.gumroad.com/yfc0f968umtdvtvskkp16ff5tv3l"
    },
    {
      "product_pic_url": "https://public-files.gumroad.com/ucrutrgr7aojesri8oxa1uwz8ing",
      "product_name": "Line6 Helix Country Guitar Preset",
      "product_url": "https://steveharmsguitar.gumroad.com/l/wsopu?layout=discover&recommended_by=search",
      "product_price": "$3.99",
      "product_rating_views": "(4)",
      "user_name": "Steve Harms",
      "user_avatar": "https://public-files.gumroad.com/eoc5zltsgjv63sq5mf3u0acqeqz6"
    }
  ]
}
```

## Contributors

- [Encore Shao](https://github.com/encoreshao)
