
import React from "react";
import { Note } from "../types/note";

type NotexContextType = {
  notes: Note[];
  addNote: (text: string) => void;
}

const NotexContext = React.createContext<NotexContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Math.random().toString(),
      text,
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  // You can add more functions like removeNote, updateNote, etc. as needed

  return (
    <NotexContext.Provider value={{ notes, addNote }}>
      {children}
    </NotexContext.Provider>
  );

}

export const useNotes = () => {
  const context = React.useContext(NotexContext);
  if (!context) {
    throw new Error("useNotex must be used within a NotexProvider");
  }
  return context;
}