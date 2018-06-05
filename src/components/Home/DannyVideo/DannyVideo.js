import React from "react";
import classes from "./DannyVideo.css";
const dannyVideo = () => {
    const embedArray = [
        "https://www.youtube.com/embed/GRYuYdlR3iQ",
        "https://www.youtube.com/embed/DKb7Hyus5-Y",
        "https://www.youtube.com/embed/xzlVvhbrx7k", 
        "https://www.youtube.com/embed/_HlFKfSS410"
    ];

    const fulldate = new Date();
    const today = fulldate.getDate();



    return(
        <section>
            <h1 className={classes.h1}>
                Danny Video of the Day!
            </h1>   
            <iframe title="7" className = {classes.DannyVideo} src={embedArray[today%4]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </section>
    )
}

export default dannyVideo