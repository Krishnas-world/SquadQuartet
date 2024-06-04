import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RoleContext } from '../context/RoleContext';

const Register = () => {
  const navigate = useNavigate();
  const { updateRole } = useContext(RoleContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'student',
    firstName: '',
    lastName: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/server/auth/signup', formData);
      const token = response.data.token;
      localStorage.setItem('accessToken', token);
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      updateRole(decodedToken.role);
      alert('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <select name="role" onChange={handleChange}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="parent">Parent</option>
        <option value="admin">Admin</option>
      </select>
      <input name="firstName" onChange={handleChange} placeholder="First Name" />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" />
      <input name="age" onChange={handleChange} placeholder="Age" />
      <input name="gender" onChange={handleChange} placeholder="Gender" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
