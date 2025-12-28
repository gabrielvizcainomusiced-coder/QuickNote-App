import React, { useState, useEffect, useRef } from "react";

function EditNote(props) {
  const [tempNote, setTempNote] = useState({
    title: props.title,
    content: props.content,
  });

  const textareaRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setTempNote((prev) => ({ ...prev, [name]: value }));
  }

  // Auto-grow textarea when I'm editing notes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [tempNote.content]);

  return (
    <div className="edit-state">
      <input
        name="title"
        value={tempNote.title}
        onChange={handleChange}
        className="edit-title"
      />
      <textarea
        className="edit-content"
        name="content"
        value={tempNote.content}
        onChange={handleChange}
      />
      <div className="edit-actions">
        <button className="save-btn" onClick={() => props.onSave(tempNote)}>
          ✓
        </button>
        <button className="cancel-btn" onClick={props.onCancel}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default EditNote;
