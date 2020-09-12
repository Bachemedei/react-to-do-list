import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import "./App.css";

function App() {
  // Variables
  const [todos, setToDos] = useState([
    {
      text: "Pat the dogs",
      isCompleted: false,
    },
    {
      text: "Pat the cat",
      isCompleted: false,
    },
    {
      text: "Sleep",
      isCompleted: false,
    },
  ]);

  // Methods
  const addToDo = (text) => {
    const newToDos = [...todos, { text }];
    setToDos(newToDos);
  }

  const completeToDo = (index) => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setToDos(newToDos);
  };

  const removeToDo = (toDoIndex) => {
    setToDos(todos.filter((todo, index) => toDoIndex !== index))
  };

  // Template
  return (
    <div className="app">
      <div className="to-do-list">
        <h1>My To Do List</h1>
        {todos.map((todo, index) => (
          <ToDoItem 
          todo={todo} 
          key={index}
          index={index}
          completeToDo={completeToDo}
          removeToDo={removeToDo}
           />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
