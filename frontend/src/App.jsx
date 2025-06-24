import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
//import toast from 'react-hot-toast'

function App() {
  return (
    <div className="relative h-full w-full">
      {/* from https://bg.ibelick.com/ */}
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
