import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";

function App() {
  // Variables
  const [todos, setToDos] = useState([
    "Finish Plus Project.",
    "Feed Peggy.",
    "Sleep.",
  ]);

  // Methods
  const addToDo = (text) => {
    const newToDos = [...todos, text];
    setToDos(newToDos);
  }

  // Template
  return (
    <div>
      <h1>My To Do List</h1>
      {todos.map((todo, index) => (
        <ToDoItem todo={todo} key={index} />
      ))}
      <ToDoForm addToDo={addToDo} />
    </div>
  );
}

export default App;
