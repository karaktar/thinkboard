# ThinkBoard

ThinkBoard is a modern and intuitive note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless and responsive user experience for creating, managing, and organizing your notes.

![ThinkBoard Screenshot](https://via.placeholder.com/800x400.png?text=ThinkBoard+Application+Screenshot)

## Features

-   **Create, Read, Update, Delete (CRUD)**: Full functionality for managing your notes.
-   **Responsive Design**: A clean and modern interface that works on all devices.
-   **Rate Limiting**: To prevent abuse, the API has a rate limit of 10 requests per 10 seconds.
-   **User-Friendly Notifications**: Get instant feedback on your actions with toast notifications.

## Tech Stack

-   **Frontend**: React, Vite, Tailwind CSS, daisyUI
-   **Backend**: Node.js, Express.js, MongoDB, Mongoose
-   **Deployment**: The application is configured for easy deployment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v14 or later)
-   npm
-   MongoDB (local or a cloud-based instance like MongoDB Atlas)
-   Upstash (for Redis-based rate limiting)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/karaktar/thinkboard.git
    cd thinkboard
    ```

2.  **Set up the backend:**

    -   Navigate to the `backend` directory:
        `cd backend`
    -   Install dependencies:
        `npm install`
    -   Create a `.env` file and add your configuration:

        ```
        MONGO_URI=your_mongodb_connection_string
        UPSTASH_REDIS_REST_URL=your_upstash_redis_url
        UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
        PORT=5001
        ```

3.  **Set up the frontend:**

    -   Navigate to the `frontend` directory:
        `cd ../frontend`
    -   Install dependencies:
        `npm install`

### Running the Application

1.  **Start the backend server:**

    -   In the `backend` directory, run:
        `npm run dev`

2.  **Start the frontend development server:**

    -   In the `frontend` directory, run:
        `npm run dev`

    The application will be available at `http://localhost:5173`.

## Screenshots

*Placeholder for the Home Page*
![Home Page](https://via.placeholder.com/400x250.png?text=Home+Page)

*Placeholder for Creating a Note*
![Create Note](https://via.placeholder.com/400x250.png?text=Create+Note)

*Placeholder for Viewing a Note*
![View Note](https://via.placeholder.com/400x250.png?text=View+Note)

## Contributing

Contributions are welcome! Please see the `CONTRIBUTING.md` file for details on how to contribute to the project.
