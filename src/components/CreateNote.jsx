import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote((previousNote) =>( {
      ...previousNote,
      [name]:value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <form  onSubmit={submitNote}>
      <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
      <textarea
        name="content"
        placeholder="Write your note here..."
        value={note.content}
        onChange={handleChange}
      />
      <button type="button" onClick={submitNote}>+</button>
    </form>
  );
}

export default CreateNote;
