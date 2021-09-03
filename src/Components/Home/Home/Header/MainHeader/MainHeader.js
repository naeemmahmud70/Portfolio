import React from 'react';
import './MainHeader.css'
import headerImg from '../../../../../images/header-image.png'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring'

const MainHeader = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { y: 0 },
        to: { y: 15 },
        delay: 400,
    });
    return (
        <div className="row header mt-5">
            <div className="col-md-7 d-flex justify-content-center align-items-center p-5">
                <div className="text-white">
                    <h3 className="text-white"><span><i>HI THERE</i></span></h3>
                    <h2 className="text-white">I'M <span id="name-style">NAEEM MAHMUD</span></h2>
                    <div className="type-writer">
                        <Typewriter
                            options={{
                                strings: ['I am a Frontend Developer', 'React Developer', 'MERN-Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <a href="https://drive.google.com/file/d/13Ky3nsUPtlDc6naSlSldO9_7RiVNEvTp/view?usp=drivesdk" target="_blank"><button className="download-btn fw-bold">Download Resume <FontAwesomeIcon icon={faFileDownload} /> </button></a>
                </div>
            </div>
            <div className="col-md-5 p-5">
                <animated.div style={styles}>
                    <img className="img-fluid" src={headerImg} alt="" />
                </animated.div>

            </div>
        </div>
    );
};

export default MainHeader;