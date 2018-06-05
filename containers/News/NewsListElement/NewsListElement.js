import React from "react";
import classes from "./NewsListElement.css"


const newsListElement = (props) =>{
    return(
        <li className = {classes.newsLi}>
            <a className={classes.newsLink} href={props.url}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.content}>{props.content}</p>
            </a>
        </li>
        
    );
}

export default newsListElement;