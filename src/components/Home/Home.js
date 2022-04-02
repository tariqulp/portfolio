import React from 'react';
import Header from '../Header/Header'
import Contact from '../Contact/Contact';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>

            <Header />
            <Projects />
            <About />
            <Blogs />
            <Contact />

        </div>
    );
};

export default Home;