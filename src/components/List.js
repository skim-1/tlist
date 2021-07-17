import React from "react";
import ListItem from "./ListItem";

const List = props => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <ListItem
            handleCheck = {props.handleCheck}
            key={index}
            itemIndex={index}
            handleRemove={props.handleRemove}
            check = {item.check}
            highlight = {item.highlight}
            item = {item.name}
          />
        ))}
      </ul>
    );
  };

export default List;