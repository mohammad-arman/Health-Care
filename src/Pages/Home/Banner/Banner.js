import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                    <div className="banner-text">
                        <h1 className="banner-title">Providing Best Health Care</h1>
                        <p className="banner-details mt-3">The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
                        <button className="btn-primary banner-btn fw-bold mt-3"><span>Know More</span></button>  
                    </div>
            </div>
        </div>
    );
};

export default Banner;