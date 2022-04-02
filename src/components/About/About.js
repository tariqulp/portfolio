import React, { useEffect } from 'react';
import dp from '../../images/dp.png'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id="about" className='container my-5'>
            <h1 style={{ fontWeight: "800", fontFamily: 'Roboto Condensed sans-serif', color: 'white' }}>About Me</h1>
            <Row className='my-5'>
                <Col data-aos="fade-right">
                    <img style={{ width: '70%' }} src={dp} alt="dp" />
                </Col>
                <Col data-aos="fade-left" className='text-white my-auto' style={{ textAlign: 'left', fontWeight: '600', fontSize: "25px" }}>
                    <strong>HI, THERE I'M</strong>
                    <h3><span style={{ color: 'orange' }}>Md Tariqul</span> Islam</h3>
                    <p>A <span style={{ color: 'orange' }}>Front-End Web Developer</span> passionate about <br /> creating interactive application and experince on the <br /> web.</p>
                    <a href="https://drive.google.com/uc?export=download&id=1Ku5PSa_FDvvvgIWWUPYx2GzAAjC_SVUf"><button data-aos="fade-up" data-aos-duration="3000" type="button" className="btn btn-outline-danger">Download RESUME <FontAwesomeIcon icon={faArrowCircleDown} /></button></a>
                    <p className="my-1">
                        <a href="https://www.facebook.com/thericky.psm" target="_blank" rel="noreferrer"><button data-aos="fade-up" data-aos-duration="3000" type="button" className="btn btn-outline-danger border-0"><i class="fab fa-facebook"></i></button></a>

                        <a href="https://github.com/tariqulp" target="_blank" rel="noreferrer"><button data-aos="fade-up" data-aos-duration="3000" type="button" className="btn btn-outline-danger border-0"><i class="fab fa-github"></i></button></a>

                        <a href="https://www.linkedin.com/in/md-tariqul-islam-089a391a6/" target="_blank" rel="noreferrer"><button data-aos="fade-up" data-aos-duration="3000" type="button" className="btn btn-outline-danger border-0"><i class="fab fa-linkedin"></i></button></a>
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default About;