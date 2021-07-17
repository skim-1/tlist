import React from "react";

const CheckedDelete = props => {
    return (
        <form onSubmit={props.newItemSubmitHandler2} className = "todoinput">
        <button type = "submit" id = "box" name = "box" value = 'checked'>
            Clear Selected
        </button>
        </form>
    );
};


export default CheckedDelete;