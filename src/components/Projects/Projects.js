import React, { useEffect } from 'react';
import './Projects.css'
import bike from '../../images/bike-project.png'
import tourism from '../../images/tourism-project.png'
import ideacare from '../../images/ideacare-project.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const data = [
        {
            id: 1,
            name: "Bike",
            img1: "https://i.ibb.co/Zffn87T/bike1.png",
            img2: "https://i.ibb.co/1rWNtkP/bike2.png",
            img3: "https://i.ibb.co/7Sc1Rhs/bike3.png",
            link: "https://bike-project-9c073.web.app/",
            client: "https://github.com/tariqulp/bike",
            server: "https://github.com/tariqulp/bike-server-code",
            details: "This is a Bike selling project, here people can find branded bikes/motorcycle. They can place order. If people want to buy bike they have to login or register first.",
            feature: "You can buy bikes/motorcycle.First you need to login or register.If you don't logged in, you can't order or other feature can see.there is two type user, one login and other one is admin, there feature are different.Admin can add product."
        },
        {
            id: 2,
            name: "Traveler",
            img1: "https://i.ibb.co/2WHZMW5/traveler1.png",
            img2: "https://i.ibb.co/sK9cRZQ/traveler2.png",
            img3: "https://i.ibb.co/LRb0nWg/traveler3.png",
            link: "https://tourism-website-1b7f3.web.app/",
            client: "https://github.com/tariqulp/tourism-website",
            server: "https://github.com/tariqulp/tourism-website-server",
            details: "People Love to visit interesting places. Personally I Love traveling, inspiring from this, i made a website where people can see many destination and they book for a tour, they can see our tourist guide. They can easily traveling anywhere with a group of people,that's why they can save their money also.",
            feature: "You can easily sign in with google.If you want to add service for recommandation,you can do it.You can see your order,add service,manage all order only when you are logged in.You can delete your booking.Admin can delete or approve the booking."
        },
        {
            id: 3,
            name: "ideaCare",
            img1: "https://i.ibb.co/02WHdYx/idea1.png",
            img2: "https://i.ibb.co/sW7q5St/idea2.png",
            img3: "https://i.ibb.co/wgTSgDn/idea3.png",
            link: "https://healthcare-assignment.web.app/",
            client: "https://github.com/tariqulp/healthcare-assignment",
            server: "",
            details: "This is a health Care website. here people knows about our services.",
            feature: "People can choose their preferable service.First you need to login or register.If you don't logged in, you can't appoint doctor or other feature can't see."
        },
    ]
    console.log(data[0].id)
    return (
        <div className='container my-5' id="project">
            <h1 data-aos="fade-up"
                data-aos-duration="3000" style={{ fontWeight: "800", fontFamily: 'Roboto Condensed sans-serif', color: 'white' }}>Recent Works</h1>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="row row-cols-1 row-cols-md-3 g-4 my-5 ">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="col h-100">
                    <div data-aos="zoom-in" className="card h-100">
                        <img src={bike} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Bike</h3>
                            <p className="card-text" style={{ textAlign: 'left' }}>What you can do in this site: <br />

                                - You can buy bikes/motorcycle.<br />
                                - First you need to login or register.<br />
                                - If you don't logged in, you can't order or other feature can see.<br />
                                - there is two type user, one login and other one is admin, there feature are different.<br />
                                - Admin can add product# bike.</p>
                            <a href="https://bike-project-9c073.web.app/" target='_blank'
                                rel="noreferrer"><button type="button" className="btn btn-outline-danger mx-3"><FontAwesomeIcon icon={faLink} /> Live Site</button></a>
                            <NavLink
                                variant="outline-dark"
                                to={`/DetailProject/${data[0].id}`}
                                className="project__btn mt-3">
                                <button type="button" className="btn btn-outline-success"><FontAwesomeIcon icon={faInfoCircle} /> Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col h-100">
                    <div data-aos="zoom-in" className="card h-100">
                        <img src={tourism} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Traveler</h3>
                            <p className="card-text" style={{ textAlign: 'left' }}>Feature of this website:<br />

                                - You can easily sign in with google.<br />
                                - If you want to add service for recommandation,you can do it.<br />
                                - You can see your order,add service,manage all order only when you are logged in.<br />
                                - You can delete your booking.<br />
                                - Admin can delete or approve the booking.</p>
                            <a href="https://tourism-website-1b7f3.web.app/" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-danger mx-3"><FontAwesomeIcon icon={faLink} /> Live Site</button></a>

                            <NavLink
                                variant="outline-dark"
                                to={`/DetailProject/${data[1].id}`}
                                className="project__btn mt-3">
                                <button type="button" className="btn btn-outline-success"><FontAwesomeIcon icon={faInfoCircle} /> Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className="col h-100">
                    <div data-aos="zoom-in" className="card h-100">
                        <img src={ideacare} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ideaCare</h5>
                            <p style={{ textAlign: 'left' }} className="card-text">What you can do in this site:<br />

                                - People can choose their preferable service.<br />
                                - First you need to login or register.<br />
                                - If you don't logged in, you can't appoint <br />doctor or other feature can't see.
                                - Also people can buy health related machines.<br />
                                - People can appointed a doctor</p>
                            <a href="https://healthcare-assignment.web.app/" target='_blank' rel="noreferrer"><button type="button" className="btn btn-outline-danger mx-3"><FontAwesomeIcon icon={faLink} /> Live Site</button></a>
                            <NavLink
                                variant="outline-dark"
                                to={`/DetailProject/${data[2].id}`}
                                className="project__btn mt-3">
                                <button type="button" className="btn btn-outline-success"><FontAwesomeIcon icon={faInfoCircle} /> Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;