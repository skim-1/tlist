import React from "react";

const ListItem = props => {
  //props.highlight
    return (
      <li style={{backgroundColor: ( props.item.highlight ) ? "yellow":"white"}}>

          <button onClick={() => {props.handleEditClick(props.itemIndex)}}>
              {props.item.name} --- X: {props.item.coords.x} | Y: {props.item.coords.y} | Z: {props.item.coords.z}
          </button>

          <input className="input" type="checkbox" checked={props.item.check} className="input" value={props.itemIndex} onChange={() => {props.handleCheck(props.itemIndex)}}/>
          <button className="action" onClick={
            () => {props.handleRemove(props.itemIndex)}
          }>
          x
        </button>

      </li>
    );
};

export default ListItem;