import React from 'react';
import Hero from '../asset/hero.jpg';

const HomePage = () => {
  return (
    <div
      className="flex-1 bg-cover bg-center h-screen text-white flex flex-col justify-center items-center relative"
    >
      <img 
        src={Hero} 
        alt="Profile" 
        className="h-full w-full object-cover absolute inset-0" 
      />

      {/* Text inside the image */}
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center px-4 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          DAMAYANTI EPILI
        </h1>
        <p className="mt-4 text-base sm:text-lg font-semibold">
          Hello, I am a Software Developer
        </p>
      </div>
    </div>
  );
};

export default HomePage;

