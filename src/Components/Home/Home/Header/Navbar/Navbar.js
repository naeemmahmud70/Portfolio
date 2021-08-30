import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEject, faTasks, faMarker, faCode, faInbox } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light sticky-top t-0 nav-bg navbar-bg">
                <div class="container-fluid">
                    <h3 className="text-color fw-bold"><FontAwesomeIcon className="text-color" icon={faCode} /> Naeem</h3>
                    <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-4 fw-bold nav-hover ">
                                <Link class="nav-link text-white" to="/home"><FontAwesomeIcon className="text-white" icon={faHome} /> Home</Link>
                            </li>
                            <li class="nav-item mx-4  fw-bold nav-hover">
                                <a class="nav-link text-white" href="#about"><FontAwesomeIcon className="text-white" icon={faEject} /> About</a>
                            </li>
                            <li class="nav-item mx-4  fw-bold nav-hover">
                                <a class="nav-link text-white" href="#skills"><FontAwesomeIcon className="text-white" icon={faCode} /> Skills</a>
                            </li>
                            <li class="nav-item mx-4  fw-bold nav-hover">
                                <a class="nav-link text-white" href="#projects"><FontAwesomeIcon className="text-white" icon={faTasks} /> Projects</a>
                            </li>
                            <li class="nav-item mx-4  fw-bold nav-hover">
                                <a class="nav-link text-white" href="#reviews"><FontAwesomeIcon className="text-white" icon={faMarker} /> Reviews</a>
                            </li>
                            <li class="nav-item mx-4  fw-bold nav-hover">
                                <a class="nav-link text-white" href="#contact"><FontAwesomeIcon className="text-white" icon={faInbox} /> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;