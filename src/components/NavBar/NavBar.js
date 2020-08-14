import React, { useState, useEffect } from 'react';
import NavBarItem from './NavBarItem';
import NavBarToggle from './NavBarToggle'
import { navBarContainer, navBarInvisible, navBarLogo, navBarItems, active } from '../../stylesheets/NavBar.module.scss';
import logo from '../../data/images/logo/smallLogo.png'

const navigationBarContent = require("../../data/navbar")

const NavBar = () => {
    const [mobileNavBarOpened, setMobileNavBarOpened] = useState(false)
    const [navBarVisible, setNavbarVisible] = useState(true)
    const [yOffset, setYOffset] = useState(0)
    const [prevYOffset, setPrevYOffset] = useState(yOffset)



    const scrollHandler = () => {
        setYOffset(window.pageYOffset)
        if (window.pageYOffset < 50) {
            setNavbarVisible(true)
        } else if (yOffset > prevYOffset) {
            setNavbarVisible(false)
            setMobileNavBarOpened(false)
        } else if (yOffset < prevYOffset) {
            setNavbarVisible(true)
        }
        setPrevYOffset(yOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler)
    })

    return (
        <nav className={`${navBarContainer} ${navBarVisible ? null : navBarInvisible}`}>
            <div className={navBarLogo}>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className={mobileNavBarOpened ? `${navBarItems} ${active}` : navBarItems}>
                {navigationBarContent.items.map(item => (
                    <NavBarItem
                        title={item.title}
                        reference={item.reference}
                        key={item.title}
                        hideNavBar={() => setMobileNavBarOpened(false)}
                    />
                ))}
            </div>
            <NavBarToggle mobileNavBarOpened={mobileNavBarOpened} onClickMethod={() => setMobileNavBarOpened(!mobileNavBarOpened)} />

        </nav>
    );
}

export default NavBar;