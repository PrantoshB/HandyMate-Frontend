import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [error] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        user: {
          full_name: formData.fullName,
          email: formData.email,
          password: formData.password,
        },
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="signup col-md-12">
      <div className="row">
        <div className="side-image" />
        <div className="sign__right">
          <div className="input-box">
            <div className="intro">
              <span className="line" />
              <h4 className="intro__title">Welcome to HandyMate</h4>
              <p className="intro__text">Available For Home Services</p>
              <p className="intro__text">Signup to get started!</p>
            </div>
            <form onSubmit={handleSignup} className="sign-form">
              <div className="input-field">
                <input
                  className="sign-form__input"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  className="sign-form__input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  className="sign-form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary rounded-pill px-4 py-2">Signup</button>
            </form>
            <div className="sign-in">
              <p>
                Already have an account?
                <Link to="/signin" className="btn btn-primary rounded-pill px-4 py-2"> Sign In</Link>
              </p>
              {error === false && <p>Please enter valid username and password</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
