import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const {
      username, email, password, confirmPassword,
    } = state;
    if (username.length === 0 || email.length || password.length === 0
       || confirmPassword.length === 0) {
      setError('Please enter valid username and password');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  return (
    <section className="container">
      <div className="signup">
        <h1>Sign Up</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="username">
              Username:
              <input type="text" name="username" className="form-control" id="username" placeholder="Enter username" onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email:
              <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password:
              <input type="password" name="password" className="form-control" id="password" placeholder="Enter password" onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password:
              <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm password" onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="btn" onClick={handleSignin}>Sign Up</button>
        </form>
        <div>
          <p>
            Already have an account?
            <Link to="/signin">Sign In</Link>
          </p>
          {error === false && <p>Please enter valid username and password</p>}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
