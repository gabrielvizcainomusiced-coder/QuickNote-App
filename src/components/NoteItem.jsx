import React, { useState, useRef } from "react";
import EditNote from "./EditNote";

function NoteItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [lockedHeight, setLockedHeight] = useState(null);
  const noteRef = useRef(null);

  function startEditing() {
    if (noteRef.current) {
      setLockedHeight(noteRef.current.offsetHeight);
    }
    setIsEditing(true);
  }

  function stopEditing() {
    setIsEditing(false);
    setLockedHeight(null);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleSave(updatedNote) {
    props.onEdit(props.id, updatedNote);
    stopEditing();
  }

  return (
    <div
  className="note"
  ref={noteRef}
  style={lockedHeight ? { height: lockedHeight } : {}}
>
  <div className="note-body">
    {isEditing ? (
      <EditNote
        title={props.title}
        content={props.content}
        onSave={handleSave}
        onCancel={stopEditing}
      />
    ) : (
      <>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </>
    )}
  </div>

  {!isEditing && (
    <>
      <button className="edit-btn" onClick={startEditing}>Edit</button>
      <button className="delete-btn" onClick={handleDelete}>X</button>
    </>
  )}
</div>
  );
}

export default NoteItem;

