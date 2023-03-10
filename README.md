# Twitcher

## Project Overview

Developing a full stack web application using the MERN stack to enable users to record animals sighting and views facts.

## Approach

- **Agile:** adopting an Agile workflow for this solo project. Breaking down the project into a series of sprints, with each sprint having a series of user stories.

- **Version Control:** using Git branching to work on the individual tickets, pushing to main on complication.

- **TDD and OOP:** following a Test Driven Development method and Object Oriented Programming approach to write clean, maintainable and efficient code.

## Current Progress

### Sprint 1 - Complete

[Click to see view details of Sprint 1 with screen shots of components](docs/sprint1.md)

# Set-up and Testing

## Installation

To download and initialise the project:

```js
$ git clone https://github.com/ChrisHutchinson1982/twitcher.git
$ cd twitcher
$ cd frontend
$ npm install
$ cd ..
$ cd api
$ npm install
```

Register and get API keys for the following:

1. [API Ninjas](https://api-ninjas.com)

Create a new .env file in the api folder:

```js
$ cd api
$ touch  .env
```

Copy the below code into the .env file and update:

```js
# .env

API_NINJAS_KEY = "add your API key here"

```

## Using the App

From the main project directory...

Start running the front-end server:

```js
$ cd frontend
$ npm run start
```

Open a new terminal and start running the back-end server:

```js
$ cd api
$ npm run start
```

Open http://localhost:3000 to view and use the Ecoliday app in your browser.

## Testing the App

From the main project directory...

### Front-end

```js
$ cd frontend
$ npm run test
```

**Important:** Ensure you are running both front-end and back-end servers before running the tests.

### Back-end

```js
$ cd api
$ npm run test
```

# Technologies

Here's an overview of the technologies used to build the application.

- **M** - MongoDB
- **E** - Express
- **R** - React
- **N** - Node

Also using...

- [Jest](https://jestjs.io/) for unit testing on the back-end.
- [Cypress](https://www.cypress.io/) for end-to-end testing and component testing, on the front-end.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [Prettier](https://prettier.io) for code formatting.
- [Tailwind](https://tailwindcss.com) and [DaisyUi](https://daisyui.com) for styling.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [PostMan](https://www.postman.com) for testing http requests.
