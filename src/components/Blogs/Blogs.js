import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id="blog" className='container my-5' data-aos="fade-up" data-aos-duration="3000">
            <h1 data-aos="zoom-in-right" style={{ fontWeight: "800", fontFamily: 'Roboto Condensed sans-serif', color: 'white' }}>Blogs</h1>
            <div>
                <h1 className='my-5' style={{ textAlign: 'center', fontWeight: "800", fontFamily: 'Roboto Condensed sans-serif', color: 'crimson' }}>Blogs Comming Soon</h1>
            </div>
        </div>
    );
};

export default Blogs;