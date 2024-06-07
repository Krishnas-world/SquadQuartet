import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/server/auth/signup', formData);
        const token = response.data.token;
        localStorage.setItem('accessToken', token);

        // Store user details excluding the password
        const userDetails = {
            username: formData.username,
            email: formData.email,
            role: formData.role,
            name: formData.name
        };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        updateRole(decodedToken.role);
        alert('Registration successful!');
        navigate('/dashboard');
    } catch (error) {
        console.error('There was an error registering!', error);
    }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('../../public/loginbg.webp')" }}>
      <div className="bg-transparent p-8 rounded-lg  max-w-md w-full">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleRoleChange('student')}
            className={`py-2 px-4 rounded shadow-md ${formData.role === 'student' ? 'bg-purple-300' : 'bg-zinc-200'} text-zinc-800`}
          >
            Student
          </button>
          <button
            onClick={() => handleRoleChange('teacher')}
            className={`py-2 px-4 rounded shadow-md ${formData.role === 'teacher' ? 'bg-purple-300' : 'bg-zinc-200'} text-zinc-800`}
          >
            Teacher
          </button>
          
          <button
            onClick={() => handleRoleChange('admin')}
            className={`py-2 px-4 rounded shadow-md ${formData.role === 'admin' ? 'bg-purple-300' : 'bg-zinc-200'} text-zinc-800`}
          >
            Admin
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-2">Create an account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-3 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <button type="submit" className="w-full bg-purple-800 text-white py-3 rounded">Register</button>
        </form>
        <p className="text-center text-zinc-600 text-sm mt-6">
          Have an account already? <Link to='/login' className="text-purple-800 underline">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
