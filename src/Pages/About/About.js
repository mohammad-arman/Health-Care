import React from 'react';
import './About.css';
import aboutImg from '../../images/about-img.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container py-5 about-part">
            <h2 className="about-section-title">Improving The Quality Of Your Life Through Better Health.</h2>
            <div className="row mt-5">
                <div className="col-md-6">
                    <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</p>
                    <p>We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.</p>
                    <Link to="/ourdoctor">
                        <button className="btn banner-btn text-white my-3"><span>Meet Our Doctors</span></button>
                    </Link>
                </div>
                <div className="col-md-6">
                   <img className="img-fluid" src={aboutImg} alt="aboutImg" />
                </div>
            </div>
        </div>
    );
};

export default About;