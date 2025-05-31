import React, { useState } from "react";
import Note from "./note";
import "./kpp.css";
import Footer from "./footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    const [title, description] = noteText.split("\n");
    if (title.trim() !== "" && description.trim() !== "") {
      setNotes((prevNotes) => [...prevNotes, { title, description }]);
      setNoteText("");
    } else {
      alert("Please enter a note");
    }
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  // const editNote = (index, newText) => {
  //   const updatedNotes = [...notes];
  //   updatedNotes[index] = newText;
  //   setNotes(updatedNotes);
  // };

  return (
    <div className="App">
      <h1 id="title2">Keeper App</h1>
      <div className="note-input">
        <textarea
          placeholder="Title&#13;&#10;Description"
          className="textarea1"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          style={{
            fontSize: "30px",
            color: "black",
            marginLeft: "5px",
            marginTop: "0px",
            marginBottom: "0",
            padding: "10px 30px",
            borderTop: "1px solid transparent",
            textAlign: "left",
            borderRadius: "5px",
            border: "1px solid #ccc",
            minHeight: "150px",
            resize: "none",
          }}
        />
        <br />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            title={note.title}
            description={note.description}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
