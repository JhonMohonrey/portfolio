import React from 'react';
import linkedin from './assets/LWhite.png'
import githubIcon from './assets/GWhite.png'

function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footerContainer'>
            <div className="container">
                <div className="leftSide">
                   <h2>
                    Copyright &copy; {currentYear} All Reserved
                   </h2>
                </div>
                <div className="rightSide">
                    <a href="https://www.linkedin.com/in/jhon-mohonrey-ramos-439014213/" target='_blank'>
                        <img src={linkedin} />
                    </a>

                    <a href="https://github.com/JhonMohonrey" target='_blank'>
                        <img src={githubIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;