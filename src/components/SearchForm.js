import React from "react";

const SearchForm = props => {
    return (
        <form onSubmit={props.newItemSubmitHandler2} className = "todoinput">
            <input
            className = "input"
            type = "text"
            onChange = {props.handleItemInput2}
            value = {props.pendingItem2}
            placeholder = "Search"
        />
        <button type = "submit" name = "submit" value = "submit">
            Submit
        </button>
        </form>
    );
};


export default SearchForm;