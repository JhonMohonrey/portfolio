import React, { useRef } from 'react';
import ProjectData from './ProjectData';
import visitIcon from './Image/external-link.png'
import githubIcon from './assets/github (1).png'

function PContainer(props) {

    let [size, setSize] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', setSize)
    }, [])
    console.log("xm", size)
    console.log("test", props.data.isFlip)

    return (
        <div ref={props.projects} className='MainProjectContainer'>
            {
                props.data.isFlip === true && size > 767 ?
                <div>
                    <div className="rightSide">
                        <h1 className="projectTitle">
                            {props.data.title}
                        </h1>
                        <p>{props.data.description}</p>

                        <div className="link">
                            <a href={props.data.CodeLink} target='_blank'>Code
                                <img src={githubIcon} />
                            </a>

                            <a href={props.data.link} target='_blank'>
                                Live Demo
                                <img src={visitIcon} alt="visit page" />
                            </a>
                        </div>
                    </div>

                    <div className="leftSide">
                        <img src={props.data.image} alt="" />
                    </div>
                </div> :
                 <div>
                    <div className="leftSide">
                        <img src={props.data.image} alt="" />
                    </div>

                    <div className="rightSide">
                        <h1 className="projectTitle">
                            {props.data.title}
                        </h1>
                        <p>{props.data.description}</p>

                        <div className="link">
                            <a href={props.data.CodeLink} target='_blank'>Code
                                <img src={githubIcon} />
                            </a>

                            <a href={props.data.link} target='_blank'>
                                Live Demo
                                <img src={visitIcon} alt="visit page" />
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default PContainer;