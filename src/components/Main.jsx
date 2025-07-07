import React from 'react'
import bannerBg from '../assets/banner-bg.png';
import Navbar from './Navbar';


const Main = () => {
  return (
    <div id='home' className="w-full h-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="max-w-screen-xl mx-auto w-full px-4">
                <Navbar/>
                <div className='flex justify-center items-center text-center h-[80vh] text-gray-200 '>
                    <div className='w-full max-w-[420px] md:max-w-[750px] '>
                        <h1 className='text-white text-4xl sm:text-6xl font-bold'>Hi,I'm{' '}
                            <span className='text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'>Hadia</span>{' '}Naveed</h1>
                        <p className='mt-6 font-medium tracking-normal leading-[24px] text-[17px]'>I'm a Frontend Developer with strong passion for creating strong, responsive and interactive user interfaces with focus on React.js. I'm always eager to learn, grow, and build amazing digital experiences!
               </p>
               <p className='mt-10 text-2xl text-transparent bg-gradient-to-r from-purple-300 to bg-purple-900 bg-clip-text'>Let's build something amazing together!</p>
               <div className='flex justify-center items-center mt-8 '>
                <button className='text-center font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-2 text-gray-100 transform hover:scale-107 transition duration-200'>
    <a href="#projects">View My Work</a></button></div>

                    </div>
                    
                </div>
                

            </div>
            
      
    </div>
  )
}

export default Main
