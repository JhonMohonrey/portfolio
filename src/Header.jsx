import React, { useRef } from 'react';
import menuIcon from './assets/menu.png'
import exitIcon from './assets/log-out.png'

function Header(props) {

    let [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    let [menu, setMenu] = React.useState(false)
    let menuClass = menu ? "mobileLeftContainer active" : "mobileLeftContainer"
    
    return (
        <div className='headerContainer'>
            <div className="container">
                <div className='titleContainer'>
                    <h3>JRamos<span>.Dev</span></h3>
                </div>

                {
                    screenWidth <= 767 ? 
                    <div className='menu'>
                        <img onClick={() => setMenu(prev => !prev)} src={menuIcon} />
                    </div> : null
                }

                <div className={screenWidth <= 767 ? menuClass : 'leftContainer'}>
                    {
                        screenWidth <= 767 ? 
                        <img onClick={() => setMenu(prev => !prev) } className='exitIcon' src={exitIcon} /> : null
                    }

                    <p onClick={() => setMenu(prev => !prev)}>Home</p>
                    <p onClick={() => {
                        setMenu(prev => !prev)
                        props.handleClick()
                    }} >About</p>
                    <p onClick={() => {
                        setMenu(prev => !prev)
                        props.projectClick()
                    }} >Projects</p>
                    <p onClick={() => {
                        setMenu(prev => !prev)
                        props.contactClick()
                    }}>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Header;