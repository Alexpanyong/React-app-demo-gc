Setup:

1. run "npm install"
2. run "npm start" or "npm run start-client", at localhost:3000



To save time, I re-used the react template which is done for another code test.

The api endpoint url is stored in the constant.js inside the folder 'constant', and is imported for the page.

The functions for 'filtering by year', 'get first 21 entries' and 'ascending sort' are put in the Functions.js inside the folder 'utils'. So whenever I need, I just import them.



Currently each page will call the api endpoint when it is loaded. So if got more time, maybe this could be improved by just call once and pass down the json to each page.


