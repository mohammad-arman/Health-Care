import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container py-5">
            <div className="section-heading text-center py-5">
                <h4>Our Services</h4>
                <h2>What Service We Offer</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;