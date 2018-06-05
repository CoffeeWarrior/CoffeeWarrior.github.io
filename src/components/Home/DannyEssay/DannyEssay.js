import React from "react";
import classes from "./DannyEssay.css";
import {NavLink} from "react-router-dom";

const DannyEssay = () => {
    return(
        <section className={classes.Section}>
            <h1 className={classes.h1}>
            No seriously I do!
            </h1>
            <div className={classes.MyDannyEssaySection}>
                <p className={classes.MyDannyEssay}>   
                do I love Danny DeVito? Short answer, yes I do. Danny DeVito is an excellent commedian, and has such dedication to his craft. I am a huge fan of his work on Its Always Sunny in Philadelphia that I decided to make an entire website dedicated to him. More about me <NavLink to={"/About"}>here.</NavLink> But seriously his work on the show is great. His portrayal of Frank Reynolds is truly great. Behind the scenes and on twitter it appears to me that he is an all around good guy so I thought he deserved this fanpage made for him. The hours of laughter and joy he has brought into my dismal life (no seriously, I spend all day coding) is immeasurable so if you're out there somewhere reading this Danny, I thank you for the work you've done. To all other fans of Danny DeVito this is a place for all your Danny DeVito based needs.<blockquote>“I've been to the Leaning Tower of Pisa. It's a tower, and it's leaning. You look at it, but nothing happens, so then you look for someplace to get a sandwich.” 
</blockquote> -Danny DeVito 
                </p>
            </div>
        </section>
    );
}

export default DannyEssay;