import React, { useEffect } from 'react';
import './Header.css'
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className='header-wraper'>

            <div data-aos="fade-up" data-aos-duration="3000" className="main-info">
                <h1><span style={{ color: "maroon" }}>Hi,</span> Md Tariqul Islam</h1>
                <h1>A Junior MERN STACK <Typed
                    className="typed-text"
                    strings={["Web Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                /></h1>

                <a data-aos="fade-up" data-aos-duration="3000" href="#contact" className="btn-main-offer"><FontAwesomeIcon icon={faUser} /> Contact me</a>
            </div>
        </div>
    );
};

export default Header;