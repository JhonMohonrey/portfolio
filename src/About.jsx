import React, { useRef } from 'react';
import aboutImg from './assets/about me.png'

function About(props) {

    return (
        <div ref={props.aboutRef} className='aboutContainer'>
            <div className="container">
                <div className="imgContainer">
                    <img src={aboutImg} alt="about me image" />
                </div>
                <div className="AboutContainer">
                    <p className='about'>ABOUT ME</p>
                    <h1>
                        Front-End Developer 🖥️
                    </h1>
                    <p>
                    Hi my name is Jhon Mohonrey Ramos and I am a front-end developer with a passion for crafting user-centric web experiences. I leverage my expertise in HTML, CSS, SASS, JavaScript, and React.js to build dynamic and visually appealing web applications.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;