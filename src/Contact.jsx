import React from 'react';
import mapIcon from './assets/map.png'
import MailIcon from './assets/gmail.png'

function Contact(props) {
    return (
        <div ref={props.contact} className='contactContainer'>
            <div className="container">
                <h1 className='contactTxt'>Contact</h1>
                <h1>I'd be happy to hear from you. 👇</h1>
                <div className="mainContainerX">
                    <div className="Main">
                        <div className="iconSection">
                            <img src={mapIcon} />
                        </div>
                        <div className="info">
                            <p>Location</p>
                            <p className="gray">
                                Batangas, Philippines
                            </p>
                        </div>
                    </div>
                    <div className="Main">
                    <div className="iconSection">
                            <img src={MailIcon} />
                        </div>
                        <div className="info">
                            <p>Mail</p>
                            <p className="gray">
                                <a href="" target='_blank'>
                                    mohonrey45@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;