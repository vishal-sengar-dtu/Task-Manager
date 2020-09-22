import React from "react";

const ListItem = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        x
      </button>
      <li>{props.item}</li>
    </>
  );
};

export default ListItem;
