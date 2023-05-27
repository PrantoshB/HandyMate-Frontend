import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/hanymate-logo.png'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <section
    class="signin-bg-image">
    <form onSubmit={handleLogin} class='sign-form'>
      <img src={logo} alt="logo" class="logo logos"/>
      <input
        class='sign-form__input'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        class='sign-form__input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      type="submit"
      class='btn'>
        Login
      </button>
    </form>
    </section>
  );
};

export default SignIn;
