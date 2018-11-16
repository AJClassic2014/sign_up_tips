import React from 'react';
import logo from '../../images/logo.svg';
import './SignUpForm.css';

const SignUpForm = () => (
  <div className="signUpFormContainer">
    <form className="signUpForm">
      <div className="imageContainer">
        <img className="signUpLogo" src={logo} alt="SIGN UP" />
      </div>
      <div className="inputsContainer">
        <input className="email" type="text" placeholder="Email" />
        <input className="password" type="password" placeholder="Password" />
        <input className="confirmPassword" type="password" placeholder="Confirm password" />
      </div>
      <div className="submitContainer">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </div>
);

export default SignUpForm;
