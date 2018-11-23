import React from 'react';
import logo from '../../images/logo.svg';
import signUp from '../../apis/signUp';
import './SignUpForm.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessages: [],
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
  }

  onEmailChange(value) {
    this.setState({
      email: value,
    })
  }

  onPasswordChange(value) {
    this.setState({
      password: value,
    })
  } 
  
  onConfirmPasswordChange(value) {
    this.setState({
      confirmPassword: value,
    })
  }

  setErrorMessages(value) {
    this.setState({
      errorMessages: value,
    });
  }

  onSubmit() {
    
  }

  render() {
    const { email, password, confirmPassword, errorMessages } = this.state;

    return (
      <React.Fragment>
        <div className="signUpFormContainer">
          <form 
            className="signUpForm" 
            onSubmit={(event) => {
              event.preventDefault();
              this.setErrorMessages([]);

              let errors = [];

              if (!email) {
                errors = [...errors, {
                  className: 'email',
                  text: 'Please input your email',
                }];
              }

              if (!password) {
                errors = [...errors, {
                  className: 'password',
                  text: 'Please input your password',
                }];
              }

              if (!confirmPassword) {
                errors = [...errors, {
                  className: 'confirmPassword',
                  text: 'Please input your confirm password',
                }];
              }

              if (password !== confirmPassword) {
                errors = [...errors, {
                  className: 'differentPasswordError',
                  text: 'Please input the same password',
                }];
              }

              if (errors.length > 0) {
                this.setErrorMessages(errors);
                return;
              }

              signUp();
            }}
          >
            <div className="imageContainer">
              <img className="signUpLogo" src={logo} alt="SIGN UP" />
            </div>
            <div className="inputsContainer">
              <input 
                className="email"
                type="text" 
                placeholder="Email" 
                value={email}
                onChange={({ target: { value } }) => this.onEmailChange(value)}
              />
              <input 
                className="password"
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={({ target: { value } }) => this.onPasswordChange(value)}
              />
              <input 
                className="confirmPassword"
                type="password" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={({ target: { value } }) => this.onConfirmPasswordChange(value)}
              />
            </div>
           {errorMessages.length > 0 && (
              <div className="error">
                {errorMessages.map(({ className, text }) => (
                  <p key={className} className={className}>{text}</p>
                ))}
              </div>
            )}
            <div className="submitContainer">
              <button type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
