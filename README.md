# ConnectVibe

## Challenge 18 NoSQL

My challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, I'll may also optionally use a JavaScript date library of my choice or the native JavaScript Date object to format timestamps.

No seed data is provided, so I’ll need to create my own data using Insomnia after you’ve created your API.
Because this application won’t be deployed, I’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. I’ll need to submit a link to the video and add it to the README of my project.

 
## API Documentation
This document provides a comprehensive guide on how to set up, run, and test the Social Network API. The API is designed to manage a social network system where users can post thoughts, react to thoughts, and add friends.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

 - Node.js: Download & Install Node.js and the npm package manager.
 - MongoDB: Ensure MongoDB is installed and running on your machine. Install MongoDB.

## Installation

Follow these steps to set up the project locally  using bash:

1 - Clone the Repository

- git clone git@github.com:Marisol514/ConnectVibe.git

- cd your-repository

2 - Install Dependencies

- Navigate to the project directory and run:

```
npm install
```

3 - Environment Setup

## Running the Server

To start the server, run the following command in the terminal at the project root:

```
npm start

```

This will start the server on http://localhost:3001. The server must be running to handle API requests.

## Testing API Endpoints Using Insomnia

To test the API endpoints, follow these steps using Insomnia REST Client:

1 - Open Insomnia

2 - Create a New Request Collection named "Social Network API".

3 - Set Up Requests

    - Get All Users

        - Method: GET

        - URL: http://localhost:3001/api/users


        - Click Send to view the response.

    - Get All Thoughts

        - Method: GET

        - URL: http://localhost:3001/api/thoughts

        -Click Send to view the response.

Additional endpoints for creating, updating, and deleting users and thoughts, and for managing reactions and friends, can be set up in a similar manner.

## API Endpoints

### Users

GET /api/users - Retrieve all users

POST /api/users - Create a new user

GET /api/users/:userId - Retrieve a single user by ID

PUT /api/users/:userId - Update a user by ID

DELETE /api/users/:userId - Delete a user by ID

### Thoughts

GET /api/thoughts - Retrieve all thoughts

POST /api/thoughts - Create a new thought

GET /api/thoughts/:id - Retrieve a thought by ID

PUT /api/thoughts/:id - Update a thought by ID

DELETE /api/thoughts/:id - Delete a thought by ID

### Reactions
POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought

DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought

### Friends
POST /api/users/:userId/friends/:friendId - Add a friend

DELETE /api/users/:userId/friends/:friendId - Remove a friend

## Support

For additional information or support, please contact Marisol514@gmail.com.

## Links: 
 
 GitHub: https://github.com/Marisol514/ConnectVibe

 Recording Link: https://drive.google.com/file/d/1KSlipqw1R4MZJgBtAnd8ZQXWgFzrimEF/view

 ## Resources

MongoDB Documentation: https://www.mongodb.com/docs/

Mongoose Documentation: https://mongoosejs.com/docs/guide.html

MongoDB University: https://university.mongodb.com/

Installing MongoDB on Various Systems: https://docs.mongodb.com/manual/administration/install-community/

Node.js: https://nodejs.org/en/

Express Documenatation: https://expressjs.com/en/starter/installing.html

RESTful API with Node.js Express & MongoDB: https://www.freecodecamp.org/news/building-a-simple-crud-application-with-express-and-mongodb/

https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1

Test with Insomnia: https://support.insomnia.rest/

Java Script Date Library - Date-fns: https://date-fns.org/

Java Script Date Library - Moments.js: https://momentjs.com/
