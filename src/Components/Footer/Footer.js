import React from 'react';
import linkedIn from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row">
            <div className="text-center">
                <div className="footer-icon-style pt-5">
                    <a target="_blank" href="https://www.linkedin.com/in/naeem70/"><img src={linkedIn} alt="" /></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100014514373434"><img src={facebook} alt="" /></a>
                    <a target="_blank" href="https://github.com/naeemmahmud70"> <img src={github} alt="" /> </a>
                    <a target="_blank" href="https://twitter.com/NaeemMa74195742"><img src={twitter} alt="" /></a>
                </div>
            </div>
            <div className="text-center">

                <small className="text-secondary p-3 ">naeem@2021, All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;