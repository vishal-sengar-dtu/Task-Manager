import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <>
      <div className="task-bar">
        <span className="text">{props.item}</span>
        <IconButton
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ListItem;
