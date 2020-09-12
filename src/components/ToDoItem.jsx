import React from "react";

function ToDoItem({ todo , ...props}) {
    
    return <div>{todo}</div>;
}

export default ToDoItem;
