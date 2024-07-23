import React from 'react';
import profile from './assets/myPic.jpg'
import github from './assets/github (1).png'
import Linkedin from './assets/linkedin.png'

import htmlIcon from './assets/Stack/html-5.png'
import cssIcon from './assets/Stack/css-3.png'
import sassIcon from './assets/Stack/sass.png'
import jsIcon from './assets/Stack/js (1).png'
import ReactIcon from './assets/Stack/React.png'
import gitIcon from './assets/Stack/Git.png'

function MainContent(props) {

    return (
        <div className='mainContainer'>
            <div className="container">
                <div className="topContainer">
                    <div className="leftSide">
                        <img src={profile} alt="profile picture" />
                    </div>
                    <div className="rightSide">
                        <h1>Front-End <span>React</span></h1>
                        <h1 className='devTxt'>Developer 💻</h1>
                        <p>
                            Hi I'm Jhon Ramos, A passionate Frontend Developer based in the philippines 🗺️
                        </p>

                        <div className='linkIcon'>
                            <a href="https://github.com/JhonMohonrey" target='_blank'>
                                <img src={github} alt="Github Icon" />
                            </a>
                            
                            <a href="https://www.linkedin.com/in/jhon-mohonrey-ramos-439014213/" target='_blank'>
                                <img src={Linkedin} alt="Linked in Icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bottomContainer">
                    <div className="techStack">
                        <p>Tech Stack |</p>
                        <div>
                            <img src={htmlIcon} alt="Html" />
                            <img src={cssIcon} alt="Css" />
                            <img src={sassIcon} alt="Sass" />
                            <img src={jsIcon} alt="JavaScript" />
                            <img src={ReactIcon} alt="React JS" />
                            <img src={gitIcon} alt="Git Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//💻 🗺️

export default MainContent;