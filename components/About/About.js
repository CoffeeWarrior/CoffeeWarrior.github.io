import React from 'react';
import classes from "./About.css"

const about = () => {
    return(
        <div className={classes.aboutContainer}>
            <p className={classes.about}>
                Hi, my name is Lucas. I'm 18 years old, a Bronx Science graduate and currently enrolled at Hunter College. I have been learning web development for about one year and love it. I currently live in NYC and made this webpage because I'm a big fan of Danny DeVito. I also wanted to create a sample project to demonstrate my web development capabilities. I made this using React.js and npm. I am currently looking for an internship where I can grow my web development skill and improve as a coder overall. If you would like to hire me or if you are a coder who would like to give advice, please contact me at my <a href ="https://github.com/CoffeeWarrior">github.</a> I am also accessible via email at lionlikelucas@gmail.com.
            </p>
        </div>
    )

}

export default about;