import React, {Component} from "react";
import classes from "./News.css";
import axios from "axios";
import NewsListElement from "./NewsListElement/NewsListElement";


class News extends Component{
    state = {
        articleArray: null,
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=Danny%20Devito&pagesize=100&language=en&sortBy=relavency&apiKey=274fe959006242d88f7293d202131201')
        .then(
            response => {
                const articles = response.data.articles;
                this.setState({articleArray: articles});
            }
        )
    }

    NewsList = () => {
        if(this.state.articleArray){
            return this.state.articleArray.map(
                (articleObject) => {
                    if(articleObject.author){
                        return(<NewsListElement url={articleObject.url} title={articleObject.title} content={articleObject.description}/>)
                    }
                }
            )
        } else {
            return null;
        }
    }

    render(){
        return(
            <ul className={classes.newsUl}>
                <p className={classes.newsApi}>Thanks to newsapi.org for making this listing of Danny DeVito content possible!</p>
                {this.NewsList()}
            </ul>
        )
    }
}

export default News;