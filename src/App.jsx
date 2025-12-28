import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);


  function addNote(newNote) {
    const noteWithId = {
      ...newNote,
      id: Date.now(), 
    };
    setNotes((prevNotes) => [...prevNotes, noteWithId]);
  }

  
  function editNote(id, updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...updatedNote, id: id } : note
      )
    );
  }

 
  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <CreateNote onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
      <Footer />
    </div>
  );
}

export default App;
