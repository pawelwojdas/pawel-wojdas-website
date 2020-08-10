import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../data/images/logo/logo.svg';
import '../stylesheets/logo.scss';




const StartingLogo = () => {


    // console.log(Logo)
    // console.log(styles.logo)
    useEffect(() => {
        const logo = document.querySelectorAll('svg path');
        const logoElements = [...logo]

        setTimeout(() => {
            for (let i = 0; i < logoElements.length; i++) {
                setTimeout(() => {
                    logoElements[i].classList.add('active');
                }, i * 5);
            }
        }, 500);

    }, [])


    return (
        < Logo />
    );
}

export default StartingLogo;