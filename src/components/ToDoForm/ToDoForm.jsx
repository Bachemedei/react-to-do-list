import React, { useState } from "react";
import "./ToDoForm.css"

function ToDoForm({ addToDo }) {
  // Variables
  const [value, setValue] = useState("");

  // Methods
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    addToDo(value);
    setValue("");
  };

  // Template
  return (
    <form
        onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add ToDo..."
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </form>
  );
}

export default ToDoForm;
