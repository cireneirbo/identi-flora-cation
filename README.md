# identi-flora-cation
A web-app that allows users to find out which South Florida plant they are looking at.

This is a web application that displays multiple plants that are native to the southwest Florida, USA area and allows users to search for unique characteristics to narrow down the number of listed plants. The aim of this is to help people find out what plant they are looking at while out on the hiking trail. The app displays key information for identifying plants, descriptions, several pictures, and even a custom drawn image for each plant that may help some users focus more on the specific properties of a plant. 

The app uses a ReactJS frontend and an ExpressJS backend. The frontend handles all user interactions, and requests data from the backend when a search is made or the list all page loads. The backend is an API that I made that returns plant data to the frontend upon request. During a search request, the backend parses through the plant data using the search parameters, and only returns the plants that match the search request's parameters.

## Getting Started
* Clone or fork this repo
* Install dependencies with `npm install`

### Start the web app
* Navigate to the project's top directory in the terminal.
* Open a second terminal instance in the same location.
* Start the api in the first terminal using `cd api/ && npm start`
* Start the client in the second terminal using `cd client/ && npm start`
* Navigate to [http://localhost:3000/](http://localhost:3000/) if it does not automatically open for you.

## Dependencies
* [Express.js](https://expressjs.com/) - a light-weight framework for Node.js.
* [React.js](https://reactjs.org/) - a frontend framework for JavaScript.
* [Async](https://www.npmjs.com/package/async) - Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript.
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
