import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Toolbar.css";

const toolbar = (props) => {
    const listElements = [];

    for(var i in props.listed){
        listElements.push(<NavigationItem link = {props.listed[i]}>{props.listed[i]}</NavigationItem>);
    }

    return(
        <ul className={classes.ul}>
            {listElements}
        </ul>
    );
}

export default toolbar;