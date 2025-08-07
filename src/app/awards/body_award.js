'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Achievements() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const achievements = [
    {
      title: "Expo 2020 Innovator",
      description: "Ocean clean-up rover showcased at Expo 2020 Sustainability Pavilion.",
    },
    {
      title: "ISMTF Senior Olympiad Finalist",
      description: "Ranked top 30 globally at international math competition in Vienna.",
    },
    {
      title: "Stanford Math Challenge",
      description: "Ranked in top 10% globally in the team round.",
    },
    {
      title: "British Mathematics Olympiad Qualifier",
      description: "Qualified based on exceptional UKMT performance.",
    },
    {
      title: "High Achievers Award",
      description: "Recognized for GCSE academic excellence.",
    },
    {
      title: "Mathematics Competition Distinctions",
      description: "High scores in multiple international math contests.",
    },
    {
      title: "Science & Math School Awards",
      description: "Multiple school-level wins in physics and mathematics.",
    },
    {
      title: "Duke of Edinburgh Awards",
      description: "Completed Bronze, Silver, and Gold levels.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="bg-white py-14 px-6 md:px-20 flex flex-col md:flex-row items-start gap-10">
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h2 className="text-4xl font-bold mx-auto italic text-blue-900 mb-6">
          Achievements
        </h2>

     

        <Image
          src="/image/him.png"
          alt="Profile Image"
          width={250}
          height={250}
          className="rounded-md mx-auto my-2"
        />

   <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 bg-orange-500 mx-auto hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-center md:w-auto"
        >
          Visit LinkedIn For More Information
        </a>

        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 bg-orange-500 mx-auto hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-center md:w-auto"
        >
          Visit Instagram For More Information
        </a>

      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2">
        {achievements.map((item, index) => (
          <div key={index} className="border-t border-gray-300 py-3">
            <button
              className="w-full text-left font-semibold text-blue-800 focus:outline-none flex justify-between items-center"
              onClick={() => toggleExpand(index)}
            >
              <span className="italic">{item.title}</span>
              <span className="text-xl font-bold">
                {expandedIndex === index ? '–' : '+'}
              </span>
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-sm text-gray-700">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

