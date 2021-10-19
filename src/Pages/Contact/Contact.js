import React from 'react';

const Contact = () => {
    return (
        <div className="container">
        <div className="contact-heading text-center my-5">
            <h2 className="heading fw-bold">Get In Touch</h2>
        </div>
        <div className="row">
            <div className="col-md-7">
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Your Subject</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Subject Name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
               <div className="mb-3">
                    <button type="button" className="btn btn-primary btn-lg">Send Message</button>
               </div>
            </div>
            <div className="col-md-5 p-5">
                <p className="fw-bold"><i className="fas fa-map-marker-alt"></i> 10004, Battery Park, New York</p>

                <p className="fw-bold"><i className="fas fa-envelope"></i> info@yoursite.com</p>

                <p className="fw-bold"><i className="fas fa-phone-alt"></i> +0 123-456-7890</p>
            </div>
        </div>
    </div>
    );
};

export default Contact;