import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 shadow-inner shadow-white/20 mt-10">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col items-center gap-6 px-4">
        
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
            Connect With Me!
          </h2>
          <p className="text-sm text-gray-400 mt-1">Below are my links</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 flex-wrap justify-center">
          {/* GitHub */}
          <a
            href="https://github.com/Hadia-naveed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hadia-naveed-013947320"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Email with Tooltip */}
          <div className="relative group">
            <a
              href="mailto:hadianaveed208@gmail.com"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-10">
              hadianaveed208@gmail.com
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923295560338"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} Hadia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
