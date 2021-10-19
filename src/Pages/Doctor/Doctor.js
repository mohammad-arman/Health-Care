import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {name, speciality, description, img } =props.doctor;
    return (
        <div>
            <div className="col">
                <div className="card h-100 border-0 custom-card">
                    <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Specialist: {speciality}</h6>
                    <p className="card-text">{description}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;