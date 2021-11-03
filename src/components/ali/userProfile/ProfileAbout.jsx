import React, { useState } from 'react'

export default function ProfileAbout() {

    let aboutTxt = ' Always fascinated by Computers and the magic that it can do.   So I ended up being a Software Engineer From GIFT engineering college in 2015. But learning is not something which can be completed, Its a process like never-ending Loop.   So I wanted to enhance my skill and no place is better than Masai to Learn.    And this reason is why I am Learning Full Stack Web Development at Masai School.  So far I have learned many things like JavaScript, Node js, Mongo db, Express, React js , Redux, Webpack,  and of course HTML 5  &amp; CSS 3 :)    I have worked with many web app development projects given by Masai. Check my GitHub at https://github.com/hello-snsa .  These projects helped in polishing my skills for developing pixel perfect website.    Feel free to connect with me anytime.  hello.shahanshah@gmail.com';


    const [initialTxt, setInitialTxt] = useState(aboutTxt.slice(0, 200));
    const [seemore, setSeemore] = useState("...see more");


    const handleClick = () => {
        setSeemore('')

        setInitialTxt(aboutTxt);
    }

    return (
        <div className="profileAboutMainDiv PMD">
            {/* <h1>Testing profileAbout.jsx</h1> */}

            <div className="PAMD-Header flex-sb editButton">

                <h2>About</h2>
                <img src="icons/editButton.svg" alt="editButton" />

            </div>

            <div className="aboutMePre">
                <p>
                    {initialTxt}
                </p>
                <div className="aboutSeeMore flex-rowR">

                    <span onClick={handleClick}>{seemore}</span>
                </div>
            </div>








        </div> // profileAboutMainDiv
    )
}
