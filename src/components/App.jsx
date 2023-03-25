import React, { useState } from "react";
import TodoList from "./TodoList.jsx";
import InputArea from "./InputArea.jsx";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputIndex) {
    setItems((prevItems) => {
      return [...prevItems, inputIndex];
    });
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd = {addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoList 
              key = {index}
              id = {index}
              text = {todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
