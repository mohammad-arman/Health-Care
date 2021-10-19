import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    
    const exactData = data.filter(singleData=> singleData.id == serviceId);
   
    return (
       <div className="py-5">
            <div className="card w-50 mx-auto">
                <img src={exactData[0]?.img} className="card-img-top" alt="single-service"/>
                <div className="card-body">
                    <h5 className="card-title">{exactData[0]?.name}</h5>
                    <p className="card-text">{exactData[0]?.description}</p>
                    <Link to="/home">
                        <button className="btn btn-primary">Go Home</button>
                    </Link>
                </div>
            </div>
       </div>
    );
};

export default ServiceDetails;