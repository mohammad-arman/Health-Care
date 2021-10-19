import React from 'react';
import { Link } from 'react-router-dom';
import './Consult.css'

const Consult = () => {
    return (
        <div className="consult-part text-center">
          <div className="container">
            <div className="consult-text">
                    <h3>We Are Available For Health Care Consultation</h3>
                    <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
                    <Link to="/contact">
                        <button className="btn btn-consult text-white mt-3">Contact Us</button>
                    </Link>
            </div>
          </div>
        </div>
    );
};

export default Consult;