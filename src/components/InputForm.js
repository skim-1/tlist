import React from "react";

const InputForm = props => {
    return (
        <form onSubmit={props.newItemSubmitHandler} className = "todoinput">
            <input
            className = "itemin"
            type = "text"
            onChange = {props.handleItemInput}
            value = {props.pendingItem}
            placeholder = "Item"
            />

            <input
            className = "input"
            type = "number"
            onChange = {props.handleItemInput}
            value = {props.pendingItemc.x}
            placeholder = "x"
            />

            <input
                className = "input"
                type = "number"
                onChange = {props.handleItemInput}
                value = {props.pendingItemc.y}
                placeholder = "y"
            />

            <input
                className = "input"
                type = "number"
                onChange = {props.handleItemInput}
                value = {props.pendingItemc.z}
                placeholder = "z"
            />
            <button className = "buttonsubmit" type = "submit" name = "submit" value = "submit" onSubmit={props.newItemSubmitHandler}>
                Add
            </button>
        </form>
    );
};

export default InputForm;