import React from "react";
import ListItem from "./ListItem";

const List = props => {
    return (
        <div className = "mainlist">
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
                        x = {item.x}
                        y = {item.y}
                        z = {item.z}
                        handleEditClick = {props.handleEditClick}
                    />
                ))}
            </ul>
        </div>

    );
  };

export default List;