import React, { useState } from 'react';
import { projects } from '../Contriants/index.jsx';
import { ArrowRight, X } from "lucide-react";

const Projects = () => {
  const [selectedProject, setselectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openprojectinfo = (project) => {
    setselectedProject(project);
    setTimeout(() => setIsVisible(true), 10);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    setTimeout(() => setselectedProject(null), 300);
  };

  return (
    <section id='projects' className='bg-gray-950 mt-10 flex flex-col w-full mx-auto max-w-screen-xl'>
      <div>
        <h1 className='text-white text-4xl sm:text-5xl font-bold text-center'>
          Featured <span className='text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'>Projects</span>
        </h1>
        <p className='mt-6 font-medium tracking-normal leading-[24px] text-[17px] text-center text-gray-200'>
          I've worked on several impressive projects that showcase my skills,<br />
          and I'm excited to share them with you here.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 px-10 mx-auto items-stretch'>
        {
          projects.map((project, key) => {
            const isLast = key === projects.length - 1;
            const isSecondLast = key === projects.length - 2;
            const total = projects.length;

            // Logic to center last 1 or 2 cards
            let cardClasses = '';
            if (total % 3 === 1 && isLast) {
              cardClasses = 'lg:col-start-2';
            } else if (total % 3 === 2 && (isLast || isSecondLast)) {
              cardClasses = 'lg:col-span-1 lg:mx-auto';
            }

            return (
              <div
                key={key}
                className={`group bg-[#1a1717] rounded-lg overflow-hidden shadow-xs flex flex-col transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] h-[420px] ${cardClasses}`}
              >
                <div className='h-40 overflow-hidden'>
                  <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                </div>

                <div className='p-5'>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tag.map((tags, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium border rounded-md bg-[#1a1717] text-gray-100">
                        {tags}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='text-center text-gray-200 lg:px-12 px-4 mb-5 flex-grow'>
                  <h1 className='font-bold text-[20px] text-gray-300 mb-1'>{project.title}</h1>
                  <p className='text-sm line-clamp-3'>{project.description}</p>
                </div>

                <div className='flex justify-center items-center'>
                  <button
                    onClick={() => openprojectinfo(project)}
                    className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-2 text-gray-100 transform hover:scale-107 transition duration-200 mb-6'
                  >
                    View Project
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>

      <div className='flex justify-center items-center mt-10'>
        <button className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-4 py-2 text-gray-100 transform hover:scale-107 transition duration-200'>
          <a
            href="https://github.com/Hadia-naveed"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </button>
      </div>

      {/* Modal Info */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-neutral-900 w-full max-w-md rounded-xl shadow-lg p-6 relative transform transition-all duration-300">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-5 text-gray-300 hover:text-purple-500 transform hover:scale-110 transition duration-200"
            >
              <X size={25} />
            </button>
            <div className="flex flex-col mt-5">
              <div className="w-full flex justify-center bg-gray-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[97%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-200 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tag.map((tags, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-600 rounded-full px-2 py-1"
                    >
                      {tags}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-600 hover:text-white text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
