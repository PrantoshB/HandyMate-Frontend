import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
