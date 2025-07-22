# ThinkBoard Documentation

## Introduction

ThinkBoard is a simple and intuitive note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, update, and delete notes. The application features a clean, modern interface and a straightforward API.

## Project Structure

The project is divided into two main directories: `frontend` and `backend`.

-   `frontend/`: Contains the React application.
-   `backend/`: Contains the Express server and API logic.

```
/Users/guru/workspace/mern-dev/note-app/
├───.gitignore
├───package.json
├───README.md
├───.git/...
├───.vscode/
├───backend/
│   ├───package-lock.json
│   ├───package.json
│   └───src/
│       ├───server.js
│       ├───config/
│       │   ├───config.js
│       │   └───upstash.js
│       ├───controllers/
│       │   └───notesControllers.js
│       ├───middleware/
│       │   └───rateLimiter.js
│       ├───models/
│       │   └───Note.js
│       └───routes/
│           └───notesRoutes.js
└───frontend/
    ├───eslint.config.js
    ├───index.html
    ├───package-lock.json
    ├───package.json
    ├───postcss.config.js
    ├───README.md
    ├───tailwind.config.js
    ├───vite.config.js
    ├───dist/...
    ├───node_modules/...
    ├───public/
    │   └───vite.svg
    └───src/
        ├───App.jsx
        ├───index.css
        ├───main.jsx
        ├───assets/
        ├───components/
        │   ├───Navbar.jsx
        │   ├───NoteCard.jsx
        │   ├───NoteNotFound.jsx
        │   └───RateLimitedUI.jsx
        ├───lib/
        │   ├───axios.js
        │   └───utils.js
        └───pages/
            ├───CreatePage.jsx
            ├───HomePage.jsx
            └───NoteDetailsPage.jsx
```

## Backend

The backend is a Node.js application using Express.js and MongoDB.

### Setup and Running

1.  Navigate to the `backend` directory:
    `cd backend`
2.  Install dependencies:
    `npm install`
3.  Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    `MONGO_URI=your_mongodb_connection_string`
4.  Start the development server:
    `npm run dev`

The server will start on port 5001.

### API Endpoints

-   `GET /api/notes`: Fetches all notes.
-   `GET /api/notes/:id`: Fetches a single note by its ID.
-   `POST /api/notes`: Creates a new note.
-   `PUT /api/notes/:id`: Updates an existing note.
-   `DELETE /api/notes/:id`: Deletes a note.

## Frontend

The frontend is a React application built with Vite.

### Setup and Running

1.  Navigate to the `frontend` directory:
    `cd frontend`
2.  Install dependencies:
    `npm install`
3.  Start the development server:
    `npm run dev`

The application will be available at `http://localhost:5173`.

### Components and Pages

-   **Components**: Reusable UI elements like `Navbar`, `NoteCard`, and `RateLimitedUI`.
-   **Pages**: Represent the different views of the application, such as `HomePage`, `CreatePage`, and `NoteDetailsPage`.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Create a pull request to the main repository.
