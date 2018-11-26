import React from "react";
import signUp from "../../apis/signUp";
import { withRouter } from 'react-router-dom';
import "./SignUpForm.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errorMessages: []
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
  }

  onEmailChange(value) {
    this.setState({
      email: value
    });
  }

  onPasswordChange(value) {
    this.setState({
      password: value
    });
  }

  onConfirmPasswordChange(value) {
    this.setState({
      confirmPassword: value
    });
  }

  setErrorMessages(value) {
    this.setState({
      errorMessages: value
    });
  }

  render() {
    const { email, password, confirmPassword, errorMessages } = this.state;

    return (
      <React.Fragment>
        <div className="signUpFormContainer">
          <form
            className="signUpForm"
            onSubmit={event => {
              event.preventDefault();
              this.setErrorMessages([]);

              let errors = [];

              if (!email) {
                errors = [
                  ...errors,
                  {
                    className: "email",
                    text: "Please input your email"
                  }
                ];
              }

              if (!password) {
                errors = [
                  ...errors,
                  {
                    className: "password",
                    text: "Please input your password"
                  }
                ];
              }

              if (!confirmPassword) {
                errors = [
                  ...errors,
                  {
                    className: "confirmPassword",
                    text: "Please input your confirm password"
                  }
                ];
              }

              if (password !== confirmPassword) {
                errors = [
                  ...errors,
                  {
                    className: "differentPasswordError",
                    text: "Please input the same password"
                  }
                ];
              }

              if (errors.length > 0) {
                this.setErrorMessages(errors);
                return;
              }

              const { history } = this.props;

              signUp(email, password)
                .then(() => history.push('/'))
                .catch(({ response: { data: { error: { message, details } } } }) => alert(message));
            }}
          >
            <div className="inputsContainer">
              <div className="info">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
              </div>
              <label htmlFor="email" className="email">
                <b>Email:</b>
              </label>
              <input
                className="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={({ target: { value } }) => this.onEmailChange(value)}
              />
              <label htmlFor="password" className="password">
                <b>Password:</b>
              </label>
              <input
                className="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={({ target: { value } }) =>
                  this.onPasswordChange(value)
                }
              />
              <label htmlFor="confirmPassword">
                <b>Confirm Password:</b>
              </label>
              <input
                className="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={({ target: { value } }) =>
                  this.onConfirmPasswordChange(value)
                }
              />
              <span className="rememberMe">
                <input type="checkbox" />
                Remember me
              </span>
              <p>
                By creating an account you agree to our <a href="">Terms & Privacy.</a>
              </p>
              <div className="submitContainer">
                <button type="submit" className="sign-up">
                  Sign Up
                </button>
              </div>
            </div>
            {errorMessages.length > 0 && (
              <div className="error">
                {errorMessages.map(({ className, text }) => (
                  <p key={className} className={className}>
                    {text}
                  </p>
                ))}
              </div>
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SignUpForm);
