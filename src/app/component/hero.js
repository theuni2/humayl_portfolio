import React from 'react'

export default function Hero() {
  return (
    <div>
        <section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
I’m a passionate STEM student with a strong background in mathematics, physics, engineering, and computer science. My journey blends academic excellence with real-world experience—ranging from fintech and aerospace internships to AI research and hands-on engineering projects. I’ve built innovative solutions like mobility rovers and AI-powered detection models, while also leading STEM clubs, organizing competitions, and publishing creative work.

Recognized at international competitions in mathematics and science, I thrive on solving complex problems and turning ideas into impactful outcomes. Beyond academics, I’m an active varsity athlete and committed community contributor, believing in a balanced approach to growth—both in and out of the lab.


      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/image/him.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}
