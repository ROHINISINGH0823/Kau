import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero bg-gray-800 p-6 md:p-10 lg:p-16">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-left">
        KAUSHIK CONSULTING
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 mx-auto max-w-3xl text-left">
        Our business is built on securing the most challenging
        <span className="highlight text-blue-300 font-semibold"> government contracts</span>, consistently surpassing our competitors' performance. With our expertise, ambition, and cutting-edge technology, we deliver outstanding results for our clients.
      </p>
    </div>
  );
};

export default Hero;
