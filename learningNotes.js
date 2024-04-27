/*This file contains a daily summary of topics or subjects I practiced while learning.
I originally decided to try to code up an app as a hobby for my wife and I to use for meal planning. At the time I knew nothing 
about programming. I thought programming was boring solo work for introverts who just sit in front of a computer 
by themselves with headphones on. I had no idea how much I could enjoy it.  I've learned that programming is quite social and team oriented, which is cool to me. I'm now looking for some projects to collaborate and contribute to on github, not only 
to enrich my skills but to be part of a community to help and learn from others  

*/

const learningNotes = [
  {
    uuid: "9654a534-7d5d-4590-9ce7-ea088ede0d28",
    date: "2024-03-13",
    tags: [],
    comment:
      "When I started to learn programming I began with learning Python and Django so I could work on building out a meal planning web app for my wife and I to use. When I finally got to where I could build out a simple backend with database I realized that I'm not that good at making thing look nice on the front end. I'm taking a few months to practice using front-end technologies. Then I'm going to get back into the database and server side frameworks. I built a website for my wife's home based business but I had to use a template to make it. Eventually I'm going to rewrite all aof this code, html, JS, and CSS, so I can customize it the way we like it.",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "e1853763-ab78-45fc-88dd-6422be0f14e4",
    date: "2024-03-14",
    tags: ["arrays", "objects", "js", " .join", ".map", "forEach", ".map"],
    comment:
      " Today I worked on a fairly challenging exercise where as I needed to import data int he form of an object array that held real estate data and render it to the dom in the form of div cards. The exercise was designed for me to use  the following JS : import/export, .map(), .join(), Object destructuring,  .reduce(),  Default parameters. I found it a little challenging because I had to iterate an array of js objects to build the html, but the default parameter passed when there was not an array of objects was a single object. I built a function that renders the html string from an object. So for the array to work I had to iterate that array on each object. I used the .map method and the .join method to join all the arrays generated from the .map method into a single array",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },

  {
    uuid: "561d9b54-e94f-41a5-a706-0e4c28356b93",
    date: "2024-03-15",
    tags: [
      "ternary",
      "rest parameter",
      "spread operator",
      "short circuit",
      "switch statements",
      "constructors",
    ],
    comment:
      "This morning I worked on js exercises utilizing ternary operator, rest parameter, short circuiting, switch statement, and started to build constructors ",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "22c05c9a-3f71-40bd-bbad-5bd3d6c0580a",
    date: "2024-03-18",
    tags: ["constructor", "this keyword"],
    comment:
      "This morning I practiced more with constructors and the .this keyword",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "cac6a992-9589-4956-93f7-4c4363b1bc1e",
    date: "2024-03-19",
    tags: [".map", "data-sets", ".join", ""],
    comment:
      "Began working on an exercise to build a mock food ordering app. The app takes an array from an external data file and renders a list of menu items using JS. An eventlistener listens for clicks on an order button and adds the item to an order. You can then check out, where a modal opens to take your name and payment information. Building te design from scratch without starter css and html is slightly challenging since I'm still not the fastest at styling html. I'm trying to conform as close as possible to the given figma design",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:
      "https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [],
  },
  {
    uuid: "8b8376d2-92db-4e4e-ae4b-0546111e09c5",
    date: "2024-03-20",
    tags: ["data set attributes", "css", "copy array"],
    comment:
      "I had a hell of a time this morning getting the remove function of my cart to work. I finally realized that the cartId I was trying to include in items added to my cart array was actually changing the original menu array values and I was some how getting items with the same cartID in my array. I got around this by making a copy of the original object and assigning my id to the copy not the original object in the array, before pushing it to my new cart array. This is the code i used, let addedItem = Object.assign({}, item);..... I spent the rest of my time this morning jacking around with css. I really am annoyed with css because I'm not quick with it yet, but I'm trying to get this project to match the design perfectly. I want to be able to just throw css on elements and have them work the first time instead of playing with it so long.",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:
      "https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [],
  },
  {
    uuid: "377da39a-7e53-4abd-889b-2bfc0be9e6bf",
    date: "2024-03-21",
    tags: ["css", "flexbox", "flex-grow"],
    comment:
      "Spent my early morning coding practice on building out the 'check out' and 'payment' modals for this restaurant ordering exercise. Again, getting myself really annoyed with css. I'm glad to have the modals and page layout pretty much completed now so I can get back into practicing some logic with JS instead of just fooling around with the layout. I'm hoping to wrap this exercise up by the end of week so I can move into my next topic of study. However that looks to be responsive design, so I'll be back messing around with css again.",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:
      "https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [],
  },
  {
    uuid: "f694ce3b-adc9-4d84-8cb1-87516d4e4d44",
    date: "2024-03-22",
    tags: ["cart", "JavaScript", "CSS"],
    comment:
      "This morning I wrapped up the restaurant ordering app. I'm still going to clean up the code. It's a little messy from all the tinkering, especially the CSS file. Those things get so long ",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:
      "https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [
      "./images/orderApp01.png",
      "./images/orderApp02.png",
      "./images/orderApp03.png",
    ],
  },
  {
    uuid: "f4919448-749a-431e-8506-e82eafae69a8",
    date: "2024-03-23",
    tags: ["responsive design", "media queries"],
    comment:
      "worked on exercises adjusting display for multiple screen sizes, focusing on mobile first design",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "ed4b9c00-d493-42d7-b1b6-b3b5ab0767d1",
    date: "2024-03-25",
    tags: ["flex-wrap", "flex-grow", "flex-basis"],
    comment: "Practiced formatting an exercise using flexbox properties",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "3ebfa1a6-5e49-410a-9c2b-524a01b3a20a",
    date: "2024-03-26",
    tags: [flexbox],
    comment: "This morning I worked on more practice of css flexbox",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "8bc9c709-3531-4a95-8cc4-02fc347e6f03",
    date: "2024-03-27",
    tags: ["css-grid"],
    comment:
      " Worked on Scrimba css grid tutorial. Practiced exercises on the css-grid, using a site called codingfantasy.com. Finished 28 of 80 levels",
    liveUrl: "https://codingfantasy.com/",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "94aa866f-4c80-4716-bf5a-76cb5be8e5e1",
    date: "2024-03-30",
    tags: ["css grid", "responsive design"],
    comment:
      "Started the module 6 solo project on Scrimba. It involves building a fully responsive blog of a learning journal. I intend to use flexbox, css grid, and probably media queries. I am going to attempt to build it to specs in the design file. Afterwards I could probably use it to post the notes I've been putting in this object array",
    liveUrl: "https://steady-begonia-a2480f.netlify.app/",
    repo: "https://github.com/csalsgiver007/learningJournal",
    designFile:
      "https://www.figma.com/file/hE5klIn1AEQ9XWZWmurs7y/Learning-Journal%2FBlog?type=design&node-id=1-433&mode=design&t=i4CJxM6iB7HMT34p-0",
    images: [],
  },
  {
    uuid: "6bcae0ad-b6bd-4d6d-8fde-82f24087bf5c",
    date: "2024-04-01",
    tags: ["scrimba", "mobile-first", "css-grid", "flexbox"],
    comment:
      "Got up late today and was'nt able to get anything done on my learning journal project. However I did get a lot accomplished after work this evening. I had been struggling trying to get an image to span my grid without it overflowing. I changed it to a background image for the grid instead and it worked out. This was not my first choice for this method, because the background image is supposedly less effective for accessibility. I may come back and revisit this at another time, but it was holding me back with the res of the project trying to get it to work by spanning. I've pretty much finished the index page for mobile. Tomorrow I may work on the media queries for desktop. I see the project only requires desktop and 400px mobile, but I may add a breakpoint for tablet. I just deployed what I have so far to netlify and it looks pretty nice on my Samsung Galaxy. Did I mention how cool Netlify is? It's  awesome that I can just link it to my github and throw stuff up there. ",
    liveUrl: "https://steady-begonia-a2480f.netlify.app/",
    repo: "https://github.com/csalsgiver007/learningJournal",
    designFile:
      "https://www.figma.com/file/hE5klIn1AEQ9XWZWmurs7y/Learning-Journal%2FBlog?type=design&node-id=1-433&mode=design&t=i4CJxM6iB7HMT34p-0",
    images: [],
  },
  {
    uuid: "945563ad-8f6c-4b87-bc63-51110c51f5e7",
    date: "2024-04-03",
    tags: ["api", "fetch"],
    comment:
      "Began working on exercises to familiarize myself with fetching data from an api",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "db652ac3-5128-424a-8602-c8ed898c81b4",
    date: "2024-04--10",
    tags: ["css", "js", "responsive design", "flexbox", "css grid"],
    comment:
      "I've been working on rewriting Rachel's website, from scratch without using the template so I can make changes to it easier in the future. I'm employing flexbox and css grid to make it responsive and building it out using a mobile first approach The site has an intro, products, events, news, and contacts pages. These pages will eventually be home to dynamic data which will pull through server side rendering with Django and postgres database. I intend to use the Django inbuilt CMS so Rachel can update the site herself. I've so far included a little JS event listeners for rendering and closing the sections",
    liveUrl: "https://ephemeral-nougat-6f4a0a.netlify.app/",
    repo: "https://github.com/csalsgiver007/AAnaturtalsRewrite",
    designFile: "",
    images: [],
  },
  {
    uuid: "1411b1a5-e76c-48c8-868f-7dbe2ad32a41",
    date: "2024-04-12",
    tags: ["api", "fetch", "geolocation API"],
    comment:
      "This morning I worked on a project to fetch data from openweather api and display the weather data in the dom. I used the geolocation api to retrieve the current location and pass the long and lat to the open weather api.",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "e1106632-08d0-4dc5-95d4-030b843767a3",
    date: "2024-04-17",
    tags: ["django", "cloudflare r2"],
    comment:
      "Ive been making good progress this week converting the html site to django for Rachel's Website. The weeks I've been working on html, css, and js I have not touched python or django. It is taking me a little bit to remember some of the aspects of django, but I've nearly gotten the entire site built out now and we can use the admin panel to add updates to it. It still needs to be restyled for larger screens, but I figured making it mobile friendly is important since most people use their phone first nowadays. Ive not yet pushed it to github, because i forget to get the secret keys and stuff out of it first. I want to make sure it's good to go before committing it. Oh, something cool I did yesterday was hook it up to Cloudflare R2 for hosting media files",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "980f279f-ab84-40b9-80b8-1e2a610c4085",
    date: "2024-04-22",
    tags: ["heroku", "deployment", "python-dotenv", "Docker"],
    comment:
      "After building up Rachel's site and backend I started the deployment process on Heroku. Although a straightforward process in itself there are many aggravating and annoying things a ran across. I kept getting heroku errors, database errors, etc. I spent a lot of time reading logs, stackoverflow and documentation. Since I had to change the database, hide the environmental variables, etc now the local code doesn't work since I had to change all those thing for it to work in production. This a problem, because I'm going to be continuously tinkering on it. For instance I still need to build out media queries for larger screens. I read a bit about docker this weekend, tried out spinning up a docker image, but Docker seems to be a subject in itself. In the future, after I know a bit about docker I think it would be beneficial to build my development copy as a docker image with all the aspects of production already set on it, like database, media bucket api keys, etc. For this project I found out about python-dotenv which I installed in the requirements. It allows me to save the environmental variables in a file not tracked by github so I can use the same variables on local development as well as production. I think Docker is the way to go for this, but I want to get back to writing code and improving her site. Docker seems like it will take me on a big detour",
    liveUrl: "https://a-a-naturals-a5177831409d.herokuapp.com/",
    repo: "",
    designFile: "",
    images: [],
  },
  {
    uuid: "a204dc1a-091a-42f5-946b-d6734e7e8c5b",
    date: "2024-04-23",
    tags: ["heroku", "ssl", "dns"],
    comment:
      "This morning I migrated the dns target for Rachel's site to point to the actual heroku app. She's using hover.com as the dns registration because that's what Etsy had when we opened her Etsy shop. Heroku does not provide an ip address for you to register in dns. They give you a host name that ends in herokudns.com. In order to register an A level record it has to point to an actual ip address. I mapped a CNAME record to www.allaroundnaturals.com and another one to the root domain. The SSL cert  wasn't working on the root domain earlier and I read something in heroku support, that ssl won't work if the root domain is mapped as a CNAME, it needs to be an ALIAS record. So I'm thinking about transferring the domain to something that heroku recommends, probably namescheap or cloudflare. However, in the meantime it seems to have started working. I don't know if it's picking up caching from my browsers from the www record but I'll test it some more. This evening I'm going to work on building a template and view for her individual blog posts. The index and models are already done.    ",
    liveUrl: "www.allaroundnaturals.com",
    repo: "",
    designFile: "",
    images: [],
  },  {
    uuid: "82fe1db0-b0d5-4084-90da-d7f71fcb5f74",
    date: "2024-04-24",
    tags: ["react", "css"],
    comment:"This evening I worked on rendering more details on the product cards for Rachel's site. I also began working on beginner React modules from Bob Ziroll on Scrimba",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },  {
    uuid: "a447d5c5-1436-402d-a4da-ca8b89c2d963",
    date: "2024-04-25",
    tags: ["scrimba", "react"],
    comment:"Finished up the first React module this morning and started the solo project this evening",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },  {
    uuid: "72578141-5022-434e-b81d-19857fe6c7f5",
    date: "2024-04-26",
    tags: ["react", "scrimba", "bob ziroll"],
    comment:"Finished the digital business card solo project from Scrimba's react module with Bob Ziroll",
    liveUrl: "",
    repo: "https://scrimba.com/scrim/co7b841ea86212c591361ec7d",
    designFile: "",
    images: [],
  },  {
    uuid: "",
    date: "2024-04-22",
    tags: [""],
    comment:
      "",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },  {
    uuid: "",
    date: "2024-04-22",
    tags: [""],
    comment:
      "",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },  {
    uuid: "",
    date: "2024-04-22",
    tags: [""],
    comment:
      "",
    liveUrl: "",
    repo: "",
    designFile: "",
    images: [],
  },
];
