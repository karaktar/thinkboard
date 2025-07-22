import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * @file This file contains the NotesNotFound component, which is displayed when no notes are available.
 * It encourages the user to create their first note.
 */

/**
 * A component that is displayed when the user has no notes.
 * It includes a message and a link to the note creation page.
 * @returns {JSX.Element}
 */
const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;
