import React from 'react';
import { Link } from 'react-scroll';
import styles from '../../stylesheets/NavBarItem.module.scss';


const NavBarItem = ({ title, reference, hideNavBar }) => {
    return (
        <Link
            className={styles.item}
            to={reference}
            smooth
            duration={500}
            onClick={hideNavBar}>
            {title}
        </Link>
    );
}

export default NavBarItem;