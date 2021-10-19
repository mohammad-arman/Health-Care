import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const service = (props) => {
    const {id, name, description, img} = props.service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="service-thumb"/>
            <div className="card-body">
                <h5 className="card-title service-title fs-3 text">{name}</h5>
                <p className="card-text">{description.slice(0,240)}</p>
                <Link to={`/serviceDetails/${id}`}>
                    <button className="btn service-btn text-white">Read More</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default service;
