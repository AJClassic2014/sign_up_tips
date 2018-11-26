import React from 'react';
import styles from './SignInForm.module.css';
import signIn from '../../apis/signIn';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange(value) {
    this.setState({
      email: value,
    });
  }

  onPasswordChange(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <form 
          className={styles.signInForm}
          onSubmit={(event) => {
            event.preventDefault();

            if (!email) {
              return;
            }

            if (!password) {
              return;
            }

            signIn(email, password)
              .then(({ data }) => alert(JSON.stringify(data)));
          }}
        >
          <div>
            <h1>Sign In</h1>
            <p>Please fill in this form to create an account</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.control}>
            <label className={styles.label}>Email</label>
            <input 
              className={styles.input} 
              value={email}
              onChange={({ target: { value } }) => this.onEmailChange(value)}
            />
          </div>
          <div className={styles.control}>
            <label className={styles.label}>Password</label>
            <input 
              type="password" 
              className={styles.input} 
              value={password}
              onChange={({ target: { value } }) => this.onPasswordChange(value)}
            />
          </div>
          <div className={styles.control}>
            <button type="submit" className={styles.button}>Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
