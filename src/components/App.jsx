import React, { useState } from "react";

function App() {
  const [inputIndex, setInputIndex] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setInputIndex(e.target.value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputIndex];
    });
    setInputIndex("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputIndex} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
