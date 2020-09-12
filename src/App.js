import React from "react";
import ToDoItem from "./components/ToDoItem";


function App() {
  return(
    <div>
      <h1>My To Do List</h1>
      <ToDoItem todo="Finish Plus project." />
      <ToDoItem todo="Feed Peggy." />
      <ToDoItem todo="Sleep" />
    </div>
  ) 
  
}

export default App;
