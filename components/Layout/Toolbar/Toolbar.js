import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./Toolbar.css";
const toolbar = (props) => {
    const listElements = [];

    for(var i in props.listed){
        listElements.push(<NavigationItem link = {props.listed[i]}>{props.listed[i]}</NavigationItem>);
    }

    return(
        <ul>
            {listElements}
        </ul>
    );
}

export default toolbar;