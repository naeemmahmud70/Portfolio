import React from 'react';
import './About.css'
import aboutImg from '../../../images/pic3.png'
import js from "../../../images/index.png"
import node from '../../../images/919825.png'
import mongodb from '../../../images/images.png'
import react from '../../../images/664-6644509_icon-react-js-logo-hd-png-download.png'
import express from '../../../images/main-qimg-f406db5658b5d0dade4d70a989560439.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneAlt, faEnvelope, faHistory, faUserGraduate, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="row about">
            <div className="col-md-5 p-5">
                <img className="img-fluid p-5" src={aboutImg} alt="" />
            </div>
            <div className="col-md-7 text-white px-5">
                <h1 className="fw-bold text-color">ABOUT ME</h1>
                <hr />
                <h2>MERN-Stack Web Developer</h2>
                <p className="txt-justify">
                    I am a self-motivated, enthusiastic and passionate web developer with a deep interest in MERN. It’s been 1 year I am leaning web development. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. Amazing UI design, responsive websites, user authentication and crud operation using backend are the key features of the websites that I have created successfully.
                    I love spending time on new technology. My strength and interest include, I am a hard-working, self-motivated, and quick learner. I can adapt to new technologies easily.
                </p>
                <div className="row py-4 bio-data">
                    <div className="col-md-6">
                        <h5><FontAwesomeIcon className="f-bio" icon={faUser} /> Name:  Naeem Mahmud</h5>
                        <h5><FontAwesomeIcon className="f-bio" icon={faPhoneAlt} /> Phone: +8801866194595</h5>
                        <h5><FontAwesomeIcon className="f-bio" icon={faEnvelope} /> Email: naeemmahmud370@gmail.com</h5>
                    </div>

                    <div className="col-md-6">
                        <h5><FontAwesomeIcon className="f-bio" icon={faHistory} /> Age: 20</h5>
                        <h5><FontAwesomeIcon className="f-bio" icon={faUserGraduate} /> Education: Honours at Political Science</h5>
                        <h5><FontAwesomeIcon className="f-bio" icon={faMapMarker} /> Address: Brahmanbaria, Bangladesh</h5>
                    </div>
                </div>

                <div className="">
                    <img className="stack-img" src={js} alt="" />
                    <img className="stack-img" src={react} alt="" />
                    <img className="stack-img" src={node} alt="" />
                    <img className="stack-img" src={express} alt="" />
                    <img className="stack-img" src={mongodb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;