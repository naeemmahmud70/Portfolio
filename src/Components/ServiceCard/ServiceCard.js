import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card rounded px-2">
            <div className="bg-white">
                <img className="project-img rounded" src={service.image} alt="" />
            </div>
            <h2 className="text-color text-center fw-bold mt-2">{service.name}</h2>
            <div className="txt-justify">
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;