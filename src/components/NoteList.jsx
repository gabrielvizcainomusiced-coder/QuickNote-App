import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
  return (
    <div className="notes-container">
      {props.notes.map((noteItem) => (
        <NoteItem
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;