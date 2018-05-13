import React from "react";
import ListElement from "./ListElement/ListElement";
import "./Toolbar.css";
const toolbar = (props) => {
    const listElements = [];

    for(var i in props.listed){
        listElements.push(<ListElement inputValue={props.listed[i]}></ListElement>);
    }

    return(
        <ul>
            {listElements}
        </ul>
    );
}

export default toolbar;