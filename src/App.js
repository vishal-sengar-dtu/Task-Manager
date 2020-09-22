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
            {list.map((Item) => {
              return <ListItem item={Item} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
