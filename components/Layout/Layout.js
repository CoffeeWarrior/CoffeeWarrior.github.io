import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "./Toolbar/Toolbar";
const layout = ( props ) => {
    const toolText = ["Home", "Danny Me" , "Bio", "News"];
    
    return(
        <Aux>
            <div className={classes.DevitoPhoto}>
                <h1 className={classes.header1}>I love you Danny</h1>
                <Toolbar listed={toolText}/>
                {/*toolbar accepts an object and will print out the keys
                need to add css to make toolbar not just a ul*/}
                <main>
                    {props.children}
                </main>
            </div>
        </Aux>
    );
}

export default layout;