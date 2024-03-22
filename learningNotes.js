/*This file contains a daily summmary of topics or subjects I practiced while learning.
I originally decided to try to codeup an app as a hobby for my wife and I to use for meal planning. At the time I knew nothing 
aboout programing. I thought programming was boring solo work for introverts who just sit in front of a computer 
by themselves with headphones on. I had no idea how much I could enjoy it.  I've learned that programming is quite social and team oriented, which is cool to me. I'm now looking for some projects to collaborate and contribute to on github, not only 
to enrich my skills but to be part of a community to help and learn from others  

*/

const learningNotes = [
  {
    date: "2024-03-13",
    tags: [ ],
    comment: "When I started to learn programming I began with learning Python and Django so I could work on building out a meal planning web app for my wife and I to use. When I finally got to where I could buildout a simple backend with database I realized that I'm not that good at making thing look nice on the front end. I'm taking a few months to practice using front-end technologies. Then I'm going to get back into the database and serverside frameworks. I built a website for my wife's home based business but I had to use a template to make it. Eventually I'm going to rewrite all aof this code, html, JS, and CSS, so I can costumize it the way we like it.",
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },
  {
    date: "2024-03-14",
    tags: ["arrays", "objects", "js"," .join", ".map", "forEach", ".map" ],
    comment: " Today I worked on a fairly challenging exercise where as I needed to import data int he form of an object array that held real estate data and render it to the dom in the form of div cards. The exercse was designed for me to use  the folowwing JS : import/export, .map(), .join(), Object destructuring,  .reduce(),  Default parameters. I found it a little challenging becuase I had to itterate an array of js objects to build the html, but the default parameter passed when there was not an array of objects was a single object. I built a function that renders the html string from an object. So for the array to work I had to itterate that array on each object. I used the .map method and the .join method to join all the arrays generated from the .map nethod into a single array" ,
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },

  {
    date: "2024-03-15",
    tags: [ "ternary", "rest parameter", "spread operator", "short circuit", "switch statements", "constructors"],
    comment: "This morning I worked on js exercises utilizing ternary operator, rest parameter, short circuiting, switch statement, and started to build constructors ",
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },
  {
    date: "2024-03-18",
    tags: ["constructor", "this keyword" ],
    comment: "This morning I practiced more with constructors and the .this keyword",
    liveUrl: "",
    repo: "",
    designFile:"",
    images:[],
  },
  {
    date: "2024-03-19",
    tags: [".map", "data-sets", ".join", "" ],
    comment: "Began working on an exercise to build a mock food ordering app. The app takes an array from an external data file and renders a list of menu items using JS. An eventlistener listens for clicks on an order button and adds the item to an order. You can then check out, where a modal opens to take your name and payment information. Building te design from scratch without starter css and html is slightly challenging since I'm still not the fastest at styling html. I'm trying to conform as close as possible to the given figma design",  
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:"https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [],

  },
  {
    date: "2024-03-20",
    tags: ["data set attributes", "css", "copy array" ],
    comment: "I had a hell of a time this morning getting the remove function of my cart to work. I finally realized that the cartId I was trying to include in items added to my cart array was actually changing the original menu array values and I was some how getting items with the same cartID in my array. I got around this by making a copy of the original object and assigning my id to the copy not the original object in the array, before pushing it to my new cart array. This is the code i used, let addedItem = Object.assign({}, item);..... I spent the rest of my time this morning jacking around with css. I really am annoyed with css because I'm not quick with it yet, but I'm trying to get this project to match the design perfectly. I want to be able to just throw css on elements and have them work the first time instead of playing with it so long.",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:"https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [],
  },
  {
    date: "2024-03-21",
    tags: ["css", "flexbox", "flex-grow" ],
    comment: "Spent my early morning coding practice on building out the 'check out' and 'payment' modals for this restaurant ordering exercise. Again, getting myself really annoyed with css. I'm glad to have the modals and page layout pretty much completed now so I can get back into practicing some logic with JS instead of just fooling around with the layout. I'm hoping to wrap this exercise up by the end of week so I can move into my next topic of study. However that looks to be responsive design, so I'll be back messing around with css again.",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:"https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images: [],
  },
  {
    date: "2024-03-22",
    tags: ["cart", "JavaScript", "CSS" ],
    comment: "This morning I wrapped up the restaurant ordering app. I'm still going to clean up the code. It's a little messy from all the tinkering, especially the CSS file. Those things get so long ",
    liveUrl: "",
    repo: "https://github.com/csalsgiver007/restaurantOrderingApp",
    designFile:"https://www.figma.com/file/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?type=design&node-id=0-1&mode=design&t=aAhmX1JIeL5BX4ms-0",
    images:["./images/orderApp01.png", "./images/orderApp02.png", "./images/orderApp03.png"],
  },
  {
    date: "2024-03-21",
    tags: [ ],
    comment: "",
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },
  {
    date: "2024-03-21",
    tags: [ ],
    comment: "",
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },  {
    date: "2024-03-21",
    tags: [ ],
    comment: "",
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },
  {
    date: "2024-03-21",
    tags: [ ],
    comment: "",
    liveUrl: "",
    repo: "",
    designFile:"",
    images: [],
  },
];
