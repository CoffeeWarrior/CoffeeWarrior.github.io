import React from 'react';
import DannyEssay from "./DannyEssay/DannyEssay";
import classes from "./Home.css"

const home = () => {
    return(
        <section className={classes.Section}>
            <DannyEssay/>    
        </section>
    );
}

export default home;