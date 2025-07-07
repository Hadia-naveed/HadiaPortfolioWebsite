import React from 'react'
import Contactimg from '../assets/Contactimg.svg'

const Contact = () => {
  return (
    <section id="contact" className='bg-gradient-to-r from-purple-600 to-pink-600 max-w-screen-xl mx-auto w-full px-4 h-full mt-18 p-20'>
      <div className='flex flex-col lg:flex-row '>
        <div className='lg:w-1/2 flex justify-center items-center'><img src={Contactimg} alt="img" className='h-fill' /></div>
        <div className="lg:w-1/2 mt-12">
          <h1 className='text-center text-gray-200 font-bold text-4xl'>Get In Touch</h1>
          <form className="max-w-sm mx-auto" name='contact' method='POST' data-netlify="true">
            {/*Required hidden input for Netlify */}
  <input type="hidden" name="form-name" value="contact" />
            {/* Name Field */}
            <label htmlFor="username" className="block mb-[3px] text-[20px] font-medium text-gray-200 dark:text-white">
              Name
            </label>
            <div className="relative mb-2">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {/* User Icon SVG */}
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <label htmlFor="email-address-icon" className="block mb-[3px] text-[20px] font-medium text-gray-200 dark:text-white">
              Email
            </label>
            <div className="relative mb-2">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {/* Email Icon SVG */}
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
              />
            </div>

            {/* Message Field */}
            <label htmlFor="message" className="block mb-[3px] text-[20px] font-medium text-gray-200 dark:text-white">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment..."
            ></textarea>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </form>











        </div>
      </div>

    </section>
  )
}

export default Contact
