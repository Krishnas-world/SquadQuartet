import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <div>
      <nav className="shelf">
        <Link to='/' className="book home-page text-black font-medium">Home page</Link>
        <Link to='/about' className="book about-us text-black font-medium">About us</Link>
        <Link to='/register' className="book contact text-black font-medium">Login/Register</Link>
        <Link to='/forum' className="book faq text-black">F.A.Q.</Link>
        
        <span className="book not-found"></span>
        <span className="door left"></span>
        <span className="door right"></span>
      </nav><br /><br />
      <h1 className='text-black font-semibold'>Error 404</h1>
      <p className='text-black font-semibold'>The page you're looking for can't be found</p>
    </div>
    </div>
  );
};

export default NotFound;
