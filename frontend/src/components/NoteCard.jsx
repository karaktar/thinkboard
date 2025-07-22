import { Link } from "react-router-dom";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

/**
 * @file This file contains the NoteCard component, which displays a single note summary.
 * It provides options to view the full note or delete it.
 */

/**
 * A card component that displays a preview of a note.
 * @param {object} props - The component props.
 * @param {object} props.note - The note object to display.
 * @param {function} props.setNotes - The state setter function to update the list of notes after deletion.
 * @returns {JSX.Element}
 */
const NoteCard = ({ note, setNotes }) => {
  /**
   * Handles the deletion of a note.
   * It prevents the default link navigation, asks for confirmation, and then sends a delete request to the API.
   * On success, it updates the notes state to remove the deleted note.
   * @param {object} e - The event object.
   * @param {string} id - The ID of the note to delete.
   */
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent the Link from navigating
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note was deleted successfully!");
    } catch (error) {
      toast.error("Failed deleting the note!");
      console.error(error);
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
