import React from 'react';
import { ReactComponent as Logo } from '../../data/images/logo/smallLogo.svg';
import NavBarItem from './NavBarItem';
import styles from '../../stylesheets/NavBar.module.scss';

const navigationBarContent = require("../../data/navbar")

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <a href="http://localhost:3000">
                    <Logo />
                </a>
            </div>
            <div className={styles.items}>
                <ul>
                    {navigationBarContent.items.map(item => (
                        <NavBarItem
                            title={item.title}
                            reference={item.reference}
                            key={item.title}
                        />
                    ))}
                </ul>
            </div>


        </nav>
    );
}

export default NavBar;