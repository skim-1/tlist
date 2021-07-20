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
            onChange = {props.handleItemInputx}
            value = {props.pendingItemx}
            placeholder = "x"
            />

            <input
                className = "input"
                type = "number"
                onChange = {props.handleItemInputy}
                value = {props.pendingItemy}
                placeholder = "y"
            />

            <input
                className = "inputz"
                type = "number"
                onChange = {props.handleItemInputz}
                value = {props.pendingItemz}
                placeholder = "z"
            />

            <button type = "submit" name = "submit" value = "submit" onSubmit={props.newItemSubmitHandler}>
                Submit
            </button>
        </form>
    );
};

export default InputForm;