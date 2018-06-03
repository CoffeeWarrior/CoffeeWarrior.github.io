import React from 'react';
import DannyEssay from "./DannyEssay/DannyEssay";
import classes from "./Home.css";
import DannyVideo from "./DannyVideo/DannyVideo";
import Aux from "../../hoc/Auxiliary";

const home = () => {
    return(
        <Aux>
            <DannyEssay/>
            <DannyVideo/>
        </Aux>
    );
}

export default home;