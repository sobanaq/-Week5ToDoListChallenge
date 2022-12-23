import React, { useState } from "react";
import "./App.css";
import notepad from "./images/notepad.png";

function App() {
  // State the Hook - `useState`, ie set of 'definitions word, setWord always in this format
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  /* Adds a new item to the list*/
  function addItem() {
    // If the enter box is empty, a popup will say enter something!
    if (!newItem) {
      alert("Please enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset the Item box back to blank
    setNewItem("");
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  //----------------------------------------------------------------------------

  return (
    <div className="app">
      {/* This is the title  */}
      <h1 id="title">My Todo List</h1>

      {/* Add new item in the box*/}
      <input
        type="text"
        id="inputBox"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      {/* Add a 'ADD' button next to the box */}
      <div id="addBtn">
        <button onClick={() => addItem()}>Add</button>
      </div>

      {/* Add a 'tick' button next to each item */}
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => setShowEdit(item.id)}>
            {item.value}
            <button className="tickBtn" onClick={() => deleteItem(item.id)}>
              ✓
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
