import React from 'react';
import bannerBg from '../assets/banner-bg.png';
import Navbar from './Navbar'

const Hero = () => {
  
  
  return (
    <section
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Centered container for content */}
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <Navbar />
        <div className="flex items-center justify-center text-center h-[80vh] text-white">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Hi,I'm <span>Hadia</span> Naveed</h1>
            <p className="mt-4 text-base md:text-lg max-w-[420px] text-center ">
              I'm a Frontend Developer with a strong passion for creating clean and interactive user interfaces with focus on React.js.I love turning creative ideas into functional, high-quality web applications.
              I've worked on several impressive projects that showcase my skills, and I'm excited to share them with you here.
              I'm always eager to learn, grow, and build amazing digital experiences!
              Let's build something amazing together!


            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
