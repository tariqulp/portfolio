import React from 'react';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
            <div className="container">
                <NavLink as={Link} className="navbar-brand text-white fw-bold" to="/">Tariqul</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink as={HashLink} className="nav-link" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink as={HashLink} className="nav-link" aria-current="page" to="/home#about">About Me</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink as={HashLink} className="nav-link" aria-current="page" to="/home#project">Projects</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink as={HashLink} className="nav-link" aria-current="page" to="/home#blog">Blogs</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink as={HashLink} className="nav-link" aria-current="page" to="/home#contact">Contact me</NavLink>


                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;