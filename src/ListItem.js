import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <>
      <div className="task-bar">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteIcon />
        </button>
        <span className="text">{props.item}</span>
      </div>
    </>
  );
};

export default ListItem;
