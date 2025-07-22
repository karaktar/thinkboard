# Frontend Documentation

This document provides a detailed overview of the frontend for the ThinkBoard application.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A fast build tool and development server for modern web projects.
-   **React Router**: For handling client-side routing.
-   **Axios**: A promise-based HTTP client for making API requests.
-   **Tailwind CSS**: A utility-first CSS framework for styling.
-   **daisyUI**: A component library for Tailwind CSS.
-   **Lucide React**: A library of simply designed icons.
-   **React Hot Toast**: For displaying notifications.

## Project Structure

```
frontend/
└───src/
    ├───App.jsx                 # Main application component with routing setup
    ├───main.jsx                # Entry point of the React application
    ├───index.css               # Global styles and Tailwind CSS imports
    ├───components/             # Reusable UI components
    │   ├───Navbar.jsx
    │   ├───NoteCard.jsx
    │   ├───NoteNotFound.jsx
    │   └───RateLimitedUI.jsx
    ├───lib/                    # Utility functions and API configuration
    │   ├───axios.js            # Axios instance configuration
    │   └───utils.js            # Utility functions (e.g., date formatting)
    └───pages/                  # Application pages
        ├───CreatePage.jsx
        ├───HomePage.jsx
        └───NoteDetailsPage.jsx
```

## Key Files and Components

### `App.jsx`

This is the root component of the application. It sets up the main layout and defines the routes for the different pages using `react-router`.

### `main.jsx`

The entry point for the React application. It renders the `App` component within a `BrowserRouter` and includes the `Toaster` component for notifications.

### `components/`

-   **`Navbar.jsx`**: The top navigation bar, which includes the application title and a link to create a new note.
-   **`NoteCard.jsx`**: A card component that displays a summary of a note (title and content). It includes actions to view the full note or delete it.
-   **`NoteNotFound.jsx`**: A component displayed on the `HomePage` when there are no notes to show.
-   **`RateLimitedUI.jsx`**: A component that is displayed when the API rate limit has been exceeded.

### `lib/`

-   **`axios.js`**: Configures and exports a global Axios instance with a `baseURL` that dynamically switches between the development and production API endpoints.
-   **`utils.js`**: Contains utility functions. Currently, it has a `formatDate` function for formatting dates.

### `pages/`

-   **`HomePage.jsx`**: The main page of the application. It fetches and displays a list of all notes. It also handles loading and rate-limiting states.
-   **`CreatePage.jsx`**: A page with a form for creating a new note. It handles form submission, API requests, and user feedback.
-   **`NoteDetailsPage.jsx`**: A page for viewing and editing a single note. It fetches the note data by its ID and allows the user to update the title and content or delete the note.

## Setup and Running

1.  Navigate to the `frontend` directory:
    `cd frontend`
2.  Install dependencies:
    `npm install`
3.  Start the development server:
    `npm run dev`

The application will be available at `http://localhost:5173`.