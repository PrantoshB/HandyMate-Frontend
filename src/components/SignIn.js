import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/login', {
        user: {
          email,
          password,
        },
      })
      .then((response) => {
        console.log(response.headers.authorization);
        localStorage.setItem('token', response.headers.authorization);
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="signin">
      <div className="row">
        <div className="side-image2" />
        <div className="sign__right">
          <div className="input-box">
            <div className="intro">
              <span className="line" />
              <h4 className="intro__title">Welcome to HandyMate</h4>
              <p className="intro__text">Login to get started!</p>
            </div>
            <form onSubmit={handleLogin} className="sign-form">
              <div className="input-field">
                <input
                  className="sign-form__input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <input
                  className="sign-form__input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn"
              >
                Login
              </button>
            </form>
            <div className="sign-in">
              <p>
                Do not have an account?
                <Link to="/signup">Sign Up</Link>
              </p>
              {error === false && <p>Please enter valid username and password</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
