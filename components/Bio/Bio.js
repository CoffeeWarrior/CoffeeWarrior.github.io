import React, {Component} from "react";
import classes from "./Bio.css";
import axios from "axios";
import Aux from "../../hoc/Auxiliary";

class Bio extends Component{
    state = {
        dannyWiki: null
    }
    componentDidMount(){
        axios.get("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Danny_DeVito&origin=*")
        .then(
            response => {
               console.log(response)
               const textAsCode = (response.data.query.pages["104940"].extract.replace(/<(?:.|\n)*?>/gm, ''));
                this.setState({dannyWiki: textAsCode})
            }
        )
    }

    render(){
        return(
            <Aux>
                
                <div className={classes.utility}>
                    
                    <p className={classes.DannyBio}><br/><h1 className={classes.h1}>Danny Bio Courtesy of Wikipedia</h1><br/>{this.state.dannyWiki}</p>
                </div>
            </Aux>
        );
    }
    
}

export default Bio;