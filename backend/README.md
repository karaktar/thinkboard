# Backend Documentation

This document provides a detailed overview of the backend for the ThinkBoard application.

## Technologies Used

-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Web framework for Node.js.
-   **MongoDB**: NoSQL database for storing notes.
-   **Mongoose**: ODM library for MongoDB and Node.js.
-   **Upstash**: Serverless Redis provider for rate limiting.
-   **dotenv**: Module for loading environment variables from a `.env` file.

## Project Structure

```
backend/
└───src/
    ├───server.js               # Main entry point, server setup
    ├───config/
    │   ├───config.js           # MongoDB connection logic
    │   └───upstash.js          # Upstash Redis rate limiter configuration
    ├───controllers/
    │   └───notesControllers.js # Functions to handle business logic for notes
    ├───middleware/
    │   └───rateLimiter.js      # Rate limiting middleware
    ├───models/
    │   └───Note.js             # Mongoose schema for the Note model
    └───routes/
        └───notesRoutes.js      # API routes for notes
```

## Key Files and Functions

### `server.js`

This is the main entry point for the backend application. It performs the following actions:
-   Initializes the Express app.
-   Applies middleware:
    -   `cors`: Enables Cross-Origin Resource Sharing.
    -   `express.json()`: Parses incoming JSON requests.
    -   `rateLimiter`: Applies rate limiting to all API requests.
    -   A custom logger middleware to log the request method and URL.
-   Serves the static frontend build in a production environment.
-   Connects to the MongoDB database via the `connectDB` function.
-   Starts the server on the specified `PORT`.

### `config/config.js`

-   **`connectDB()`**: An asynchronous function that connects to the MongoDB database using the connection string from the environment variables. It logs a success message or exits the process on a connection failure.

### `config/upstash.js`

-   **`ratelimit`**: An instance of `Ratelimit` from `@upstash/ratelimit`. It is configured to allow a maximum of **10 requests every 10 seconds** from a single IP address.

### `controllers/notesControllers.js`

This file contains the core logic for handling the note-related operations.

-   **`getAllNotes(req, res)`**: Fetches all notes from the database, sorted by creation date in descending order.
-   **`getNoteById(req, res)`**: Fetches a single note by its `_id`.
-   **`createNote(req, res)`**: Creates a new note using the `title` and `content` from the request body.
-   **`updateNote(req, res)`**: Updates an existing note's `title` and `content` by its `_id`.
-   **`deleteNote(req, res)`**: Deletes a note by its `_id`.

### `middleware/rateLimiter.js`

-   This middleware uses the `ratelimit` instance from `upstash.js` to check if the incoming request is within the allowed limit. If the limit is exceeded, it sends a `429 Too Many Requests` response.

### `models/Note.js`

-   Defines the Mongoose schema for a `Note`. A note consists of:
    -   `title`: A required `String`.
    -   `content`: A required `String`.
    -   `timestamps`: Automatically adds `createdAt` and `updatedAt` fields.

### `routes/notesRoutes.js`

-   Defines the API routes for the notes resource and maps them to the corresponding controller functions.

| Method | Endpoint      | Controller Function | Description            |
| :----- | :------------ | :------------------ | :--------------------- |
| `GET`  | `/`           | `getAllNotes`       | Get all notes          |
| `GET`  | `/:id`        | `getNoteById`       | Get a single note      |
| `POST` | `/`           | `createNote`        | Create a new note      |
| `PUT`  | `/:id`        | `updateNote`        | Update an existing note|
| `DELETE`| `/:id`       | `deleteNote`        | Delete a note          |

## Setup and Running

1.  Navigate to the `backend` directory:
    `cd backend`
2.  Install dependencies:
    `npm install`
3.  Create a `.env` file in the `backend` directory and add your MongoDB and Upstash credentials:
    ```
    MONGO_URI=your_mongodb_connection_string
    UPSTASH_REDIS_REST_URL=your_upstash_redis_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
    ```
4.  Start the development server:
    `npm run dev`

The server will start on port 5001 by default.
