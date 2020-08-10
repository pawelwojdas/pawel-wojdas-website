import React from 'react';
import { Link } from 'react-scroll';


const NavBarItem = ({ title, reference }) => {
    return (
        <Link
            to={reference}
            smooth
            duration={500}>
            {title}
        </Link>
    );
}

export default NavBarItem;