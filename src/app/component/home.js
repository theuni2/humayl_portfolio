'use client'

import React from 'react'

export default function Home_comp() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-24">
          
          {/* Text Section */}
          <div className="lg:flex-grow lg:w-1/2 mr-2 w-full flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 text-center animate-fadeIn">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-indigo-700">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-700">
              I’m a passionate <b> STEM student </b>with a strong background in <strong>mathematics, physics, engineering, and computer science</strong>. My journey blends academic excellence with real-world experience ranging from fintech and aerospace internships to AI research and hands-on engineering projects.
              <br /><br />
              I’ve built innovative solutions like mobility rovers and AI-powered detection models, while also leading STEM clubs, organizing competitions, and publishing creative work.
              <br /><br />
              Recognized at international competitions in mathematics and science, I thrive on solving complex problems and turning ideas into impactful outcomes. Beyond academics, I’m an active varsity athlete and committed community contributor, believing in a balanced approach to growth both in and out of the lab.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-1/2 w-full mb-10 lg:mb-0 flex justify-center animate-fadeInUp">
            <img
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="hero"
              src="/image/him.jpg"
            />
          </div>
        </div>
      </section>

      {/* Simple Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
