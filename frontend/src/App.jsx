import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";

/**
 * @file This is the root component of the application.
 * It sets up the main layout and defines the client-side routes for the different pages.
 */

/**
 * The main application component.
 * It renders the background, and uses `react-router-dom` to handle the navigation between pages.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="relative h-full w-full">
      {/* Background pattern from https://bg.ibelick.com/ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
