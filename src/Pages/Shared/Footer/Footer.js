import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <h2 className="text-white text-uppercase">About us</h2>
                        <p className="text-white my-3">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
                    </div>
                    <div className="col company-part">
                        <h2 className="text-white">Company</h2>
                        <a href="/">About us</a>
                        <a href="/">Leadership</a>
                        <a href="/">Careers</a>
                        <a href="/">News and Article</a>
                        <a href="/">Legal Notice</a>
                    </div>
                    <div className="col support-part">
                        <h2 className="text-white">Support</h2>
                        <a href="/">Help center</a>
                        <a href="/">FAQ</a>
                        <a href="/">Contact Us</a>
                    </div>
                    <div className="col contact-part">
                        <h2 className="text-white">Contact Us</h2>
                        <a href="/" className="text-white text-decoration-none d-blcok">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="ms-2"> 10004, Battery Park, New York</span>
                        </a>
                        <a href="/" className="text-white text-decoration-none d-block mt-3">
                        <i className="fas fa-envelope"></i>
                        <span className="ms-2">info@yoursite.com</span>
                        </a>
                        <a href="/" className="text-white text-decoration-none d-block mt-3">
                        <i className="fas fa-phone-alt"></i>
                        <span className="ms-2">+0 123-456-7890</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright-part">
                    <p className="m-0 py-3 text-white text-center">Copyright &copy; 2021 Mohammad Arman | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;