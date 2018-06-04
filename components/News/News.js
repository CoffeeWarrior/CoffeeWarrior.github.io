import React, {Component} from "react";
import classes from "./News.css"
import axios from "axios";

class News extends Component{
    state = {
        top10Stories: null
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=Danny%20Devito&sortBy=relavency&apiKey=274fe959006242d88f7293d202131201').
        then(
            response=>{
                console.log(response);
            }
        )
    }

    render(){
        return(
            <div>
                {this.state.top10Stories}
            </div>
        )
    }
}

export default News;