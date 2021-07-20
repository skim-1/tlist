import React from "react";

const ListItem = props => {
  //props.highlight
    return (
      <li style={{backgroundColor: ( props.highlight ) ? "yellow":"white"}}>

          <button onClick={() => {props.handleEditClick(props.itemIndex)}}>
              {props.item} --- X: {props.x} | Y: {props.y} | Z: {props.z}
          </button>

          <input className="input" type="checkbox" checked={props.check} className="input" value={props.itemIndex} onChange={() => {props.handleCheck(props.itemIndex)}}/>
          <button className="action" onClick={
            () => {props.handleRemove(props.itemIndex)}
          }>
          x
        </button>

      </li>
    );
};

export default ListItem;