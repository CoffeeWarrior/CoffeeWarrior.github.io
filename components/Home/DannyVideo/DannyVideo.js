import React from "react";
import classes from "./DannyVideo.css";
const dannyVideo = () => {
    return(
        <section>
            <h1 className={classes.h1}>
                Danny Video of the Day!
            </h1>   
            <iframe className = {classes.DannyVideo} src="https://www.youtube.com/embed/_HlFKfSS410" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </section>
    )
}

export default dannyVideo