import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className="container py-5">
            <div className="section-title pb-5">
                <h2 className="text-center">Meet Our Doctors</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctors.map(doctor=> <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;