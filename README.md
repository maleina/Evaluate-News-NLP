# Project Instructions

This project was undertaken as part of Udacity's Front End Developer Nanodegree program.

The goals of this project were to practice:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Use Natural Language Processing technology

## Development - Getting started

Once you clone this repository, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Aylien API is used for natural language processing and it requires that you install a node module to run certain commands, which will simplify the requests that are necessary from the node/express backend.

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. At the time of writing, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Install the SDK
Next you'll need to install the Aylien SDK for Node. It is available [here](https://docs.aylien.com/textapi/sdks/#sdks).

### Step 3: Require the SDK package
Install the SDK in your project and then you'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

- [ ] Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

### Step 4: Environment Variables
You will need to declare your API keys in your code in order to use the API. However, it is strongly recommended that you not do so directly, but that you use environment variables to access them instead.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary. 
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
```

### Step 5: Using the API

The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). 
