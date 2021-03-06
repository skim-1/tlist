import React from "react";

const EditItem = props => {
    if (props.showEdit)
    return (
        <form onSubmit={props.editHandler} className = "todoinput">
            <input
                className = "input"
                type = "text"
                onChange = {props.handleItemEdit}
                value = {props.pendingEdit.x}
                placeholder = "x"
            />

            <input
                className = "input"
                type = "number"
                onChange = {props.handleItemEdit}
                value = {props.pendingEdit.y}
                placeholder = "y"
            />

            <input
                className = "inputz"
                type = "number"
                onChange = {props.handleItemEdit}
                value = {props.pendingEdit.z}
                placeholder = "z"
            />
            <button type = "submit" name = "submit" value = "submit">
                Edit
            </button>
        </form>
    );

    return null;
};


export default EditItem;
