import React from "react";

const SearchForm = props => {
    return (
        <form onSubmit={props.newItemSubmitHandler2} className = "todoinput">
            <input
                className = "input"
                type = "text"
                onChange = {props.handleItemInput2x}
                value = {props.pendingItem2x}
                placeholder = "x"
            />

            <input
                className = "input"
                type = "number"
                onChange = {props.handleItemInput2y}
                value = {props.pendingItem2y}
                placeholder = "y"
            />

            <input
                className = "inputz"
                type = "number"
                onChange = {props.handleItemInput2z}
                value = {props.pendingItem2z}
                placeholder = "z"
            />
            <button type = "submit" name = "submit" value = "submit" >
                Search
            </button>
        </form>
    );
};


export default SearchForm;