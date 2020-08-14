import React from 'react';
import { toggle, line, active1, active2, innactive } from '../../stylesheets/NavBarToggle.module.scss'

const NavBarToggle = ({ onClickMethod, mobileNavBarOpened }) => {


    return (
        <div onClick={onClickMethod} className={toggle}>
            <div
                className={mobileNavBarOpened ? `${line} ${active1}` : line}
            >
            </div>
            <div
                className={mobileNavBarOpened ? `${line} ${innactive}` : line}
            >
            </div>
            <div
                className={mobileNavBarOpened ? `${line} ${active2}` : line}
            >
            </div>
        </div>
    );
}

export default NavBarToggle;