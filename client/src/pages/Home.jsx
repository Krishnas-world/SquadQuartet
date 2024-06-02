import React from 'react';
import { FlipWordsDemo } from '../components/FlipWordsDemo';


const ImageContainer = () => (
  <div className="relative">
    <div className='w-72 h-72 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 text-xl'>
      Image Here
    </div>
  </div>
);

const Home = () => {
  return (
    <div className='min-h-screen bg-purple-100 text-black flex flex-col items-center justify-center space-y-8 p-8'>
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold"><FlipWordsDemo /></h1>
      </div>
      <div className="relative w-full max-w-lg">
        <input type="text" placeholder='What do you want to learn?' className='w-full p-4 rounded-full bg-zinc-800 text-zinc-400 text-lg focus:outline-none focus:ring-2 focus:ring-zinc-600' />
      </div>
      <ImageContainer />
    </div>
  );
};

export default Home;
