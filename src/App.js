import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
  // Variables
  const [todos, setToDos] = useState([
    "Finish Plus Project.",
    "Feed Peggy.",
    "Sleep.",
  ]);

  // Template
  return (
    <div>
      <h1>My To Do List</h1>
      {todos.map((todo, index) => (
        <ToDoItem todo={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
