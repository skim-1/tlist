import React from "react";

const DeleteSearch = props => {
    return (
        <form onSubmit={props.DeleteSearchHandler} className = "todoinput">
        <button type = "submit" name = "submit" value = 'clear'>
            Clear Search
        </button>
        </form>
    );
};


export default DeleteSearch;