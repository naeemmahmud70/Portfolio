import React from 'react';
import responsive from '../../images/responsive-icon.png';
import frontend from '../../images/frontend.png';
import mern from '../../images/mern.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const MyService = () => {
    const services = [{
        id: 1,
        name: "Responsive Design",
        description: "Responsive web design is about creating web pages that look good on all devices. A responsive web design will automatically adjust for different screen sizes and viewports.",
        image: responsive
    }, {
        id: 2,
        name: "Frontend Development",
        description: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.",
        image: frontend
    }, {
        id: 3,
        name: "Full Stack",
        description: "Full stack web development refers to the process of developing both client- and server-side software. That means full stack included in  expertise in several front- and backend languages and frameworks. ",
        image: mern
    },]
    return (
        <div className="row">
            <div className="d-flex justify-content-center">
                <div className="text-center ">
                    <h2 className="text-color fw-bold">MY SERVICES</h2>
                    <span className="animate-border"></span>
                </div>
            </div>

            <div className="projects">
                {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default MyService;