import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/hanymate-logo.png'

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'user',
  });

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
          role: formData.role,
        },
      });
      // Handle successful signup
      console.log(response.data);
      navigate('/');
    } catch (error) {
      // Handle signup error
      console.error(error);
    }
  };

  return (
    <section class="signup-bg-image">
    <form onSubmit={handleSignup} class='sign-form'>
      <img src={logo} alt="logo" class="logo"/>
      <input
        class='sign-form__input'
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        class='sign-form__input'
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        class='sign-form__input'
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        class='sign-form__input'
        type="text"
        placeholder="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <button 
      type="submit"
      class='btn submit-btn'>
        Sign Up
      </button>
    </form>
    </section>
  );
};

export default SignUp;
