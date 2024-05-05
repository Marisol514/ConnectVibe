# ConnectVibe
 
## API Documentation
This document provides a comprehensive guide on how to set up, run, and test the Social Network API. The API is designed to manage a social network system where users can post thoughts, react to thoughts, and add friends.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

 - Node.js: Download & Install Node.js and the npm package manager.
 - MongoDB: Ensure MongoDB is installed and running on your machine. Install MongoDB.

## Installation

Follow these steps to set up the project locally  using bash:

1 - Clone the Repository

git clone https://github.com/your-username/your-repository.git

cd your-repository

2 - Install Dependencies

Navigate to the project directory and run:

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