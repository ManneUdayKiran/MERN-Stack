import "./kpp.css";
import React, { useState, useEffect } from "react";

function Note({ index, title, description, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  useEffect(() => {
    setNewTitle(title);
    setNewDescription(description);
  }, [title, description]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(index, { title: newTitle, description: newDescription });
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button id="savebutton" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="note-buttons">
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
