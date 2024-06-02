import React from 'react';
import { FlipWordsDemo } from '../components/FlipWordsDemo';
import {Link, NavLink} from 'react-router-dom'

const NAV_LINKS = [
  { text: 'Home', href: '#' },
  { text: 'Courses', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Login', href: '#' }
];

const NavLinks = () => (
  <nav className='flex space-x-6 text-lg font-semibold'>
    {NAV_LINKS.map((link, index) => (
      <a key={index} href={link.href} className='hover:text-white'>{link.text}</a>
    ))}
  </nav>
);

const ImageContainer = () => (
  <div className="relative">
    <div className='w-72 h-72 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 text-xl'>
      Image Here
    </div>
  </div>
);

const Home = () => {
  return (
    <div className='min-h-screen bg-purple-100 text-black flex flex-col items-center' style={{ backgroundImage: "url('../../public/bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-full flex justify-center py-4 border-b-2 border-purple-300'>
        <NavLinks />
      </div>
      <div className='flex flex-1 w-full p-8'>
        <div className='flex-1 flex flex-col justify-center items-center space-y-8'>
          <div className="text-left space-y-4">
            <h1 className="text-5xl font-bold">
              <FlipWordsDemo />
            </h1>
          </div>
          <div className="relative w-full max-w-lg">
            <input type="text" placeholder='What do you want to learn?' className='w-full p-4 rounded-full bg-zinc-800 text-zinc-400 text-lg focus:outline-none focus:ring-2 focus:ring-zinc-600' />
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <ImageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
