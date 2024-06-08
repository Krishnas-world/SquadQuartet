import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = ({ setRole }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/server/auth/signin', formData);
      const { data } = response;
      if (!data.token) {
        throw new Error('Invalid token');
      }
      localStorage.setItem('accessToken', data.token);
      setRole(data.role); // Trigger role update in context
      window.location = '/dashboard'; // Redirect to dashboard on successful login
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password'); // Set error message for invalid login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Don't have an account? <Link to='/register'>Register here</Link></p>
    </div>
  );
};

export default Login;
