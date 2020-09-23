import React, { useState } from "react";
import ListItem from "./ListItem";
import IconButton from "@material-ui/core/IconButton";
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
      <div className="task-manager">
        <div className="options">
          <input
            type="text"
            placeholder="Add a Task"
            name="task"
            value={task}
            onChange={inputEvent}
            className="input-field"
          ></input>
          <IconButton onClick={addTask}>Add</IconButton>
        </div>
        {list.map((Item, i) => {
          return <ListItem id={i} key={i} item={Item} onSelect={deleteItem} />;
        })}
      </div>
    </>
  );
};

export default App;
