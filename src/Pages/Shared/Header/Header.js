import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/site-logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light custom-nav">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                    <img src={logo} alt="site-logo" width="50"/>
                    <span className="ps-2 fw-bold logo-text">HealtCare</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link active fw-bold text-primary" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-bold text-primary" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-bold text-primary" to="/ourdoctor">Doctors</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-bold text-primary" to="/contact">Contact Us</Link>
                        </li>
                        <li className="mt-2 me-2">
                            <span>{user?.displayName}</span>
                        </li>
                        {
                            user.email ? 
                            <button onClick={logOut} className="btn btn-primary">Logout</button>
                            :
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-primary" to="/login">Login</Link>
                            </li>
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;