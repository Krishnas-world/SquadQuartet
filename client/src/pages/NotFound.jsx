import React from 'react';
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <div>
      <nav className="shelf">
        <a className="book home-page text-black font-medium">Home page</a>
        <a className="book about-us text-black font-medium">About us</a>
        <a className="book contact text-black font-medium">Contact</a>
        <a className="book faq text-black font-medium">F.A.Q.</a>
        
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
