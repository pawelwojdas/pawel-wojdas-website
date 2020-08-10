import React from 'react';
import './MainPage.css';
import NavBar from './NavBar/NavBar';
import Landing from './Landing'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const MainPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default MainPage;