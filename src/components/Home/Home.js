import React from 'react';
import DannyEssay from "./DannyEssay/DannyEssay";
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