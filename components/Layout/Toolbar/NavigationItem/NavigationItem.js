import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.css"

const navigationItem = (props) => {
    return(
        <li className={classes.li}>
        <NavLink className = {classes.NavItem}
        to={"/" + props.link}>{props.children}</NavLink>
        </li>
    );
}

export default navigationItem;