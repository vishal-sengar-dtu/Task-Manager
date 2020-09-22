import React, { useState } from "react";
import ListItem from "./ListItem";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function inputEvent(e) {
    const value = e.target.value;
    setTask(value);
  }

  function addTask() {
    setList((preItems) => {
      return [...preItems, task];
    });
    setTask("");
  }

  function deleteItem(id) {
    setList((preItems) => {
      return preItems.filter((arrElements, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="container">
        <div className="task-manager">
          <h1>Task Manager</h1>
          <input
            type="text"
            placeholder="Add a Task"
            name="task"
            value={task}
            onChange={inputEvent}
          ></input>
          <button onClick={addTask}>+</button>
          <ol>
            {list.map((Item, i) => {
              return (
                <ListItem id={i} key={i} item={Item} onSelect={deleteItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
