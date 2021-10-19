import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn, handleRegistation, handdleEmailChange, handlePasswordChange,error, toggleLogin, isLogIn, handleNameChange} = useAuth()
    return (
        <div className="py-5">
            <div className="login-part mx-auto">
                <h2>Please {isLogIn ? 'LogIn' : 'Register'}</h2>
                <form onSubmit={handleRegistation}>
                   {
                    !isLogIn &&
                       <input onBlur={handleNameChange} className="d-block w-100" type="text" placeholder="Your Name"/>  
                   }
                    <input onBlur={handdleEmailChange} required className="d-block w-100" type="email" placeholder="Your Email"/>
                    <input onBlur={handlePasswordChange} required className="d-block w-100" type="password" placeholder="Your Password"/>
                    <div>
                        <p className="text-danger">{error}</p>
                    </div>
                    <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" htmlFor="gridCheck1">
                        Already Registered?
                        </label>
                    </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">{isLogIn ? 'Login' : 'Register'}</button>
                </form>
                <div className="text-center">
                    <p>or use of this option</p>
                    <button onClick={googleSignIn} className="btn btn-primary">Google SignIn</button>
                </div>
            </div>  
        </div>
    );
};

export default Login;
