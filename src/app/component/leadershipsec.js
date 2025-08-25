"use client";

import React from "react";
import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function LeadershipIdentities() {
  const identities = [
    {
      title: "Collaborator",
      text: "I thrive when working with others towards a common goal. My experiences in international competitions, society leadership, and team-based engineering projects have shown me the power of diverse ideas and shared commitment.",
    },
    {
      title: "Mentor",
      text: "Supporting others is at the heart of my leadership style. As Lower School Liaison and society head, I’ve guided younger students through academic challenges, helping them discover their own confidence and potential.",
    },
    {
      title: "Problem Solver",
      text: "I see problems as opportunities to apply logic, creativity, and persistence. From diagnosing engineering issues in internships to tackling abstract math challenges, I approach every obstacle with curiosity and determination.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#d6d6d6]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl text-blue-950 font-bold tracking-wide mb-4 ${ptSerif.className} `}>
          Leadership Identities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {identities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#011e35] p-8 flex flex-col justify-start rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className={`text-xl font-bold text-[#d6d6d6] mb-4 mx-auto  ${ptSerif.className} `}>{item.title}</h3>
            <p className={`text-[#d6d6d6] leading-relaxed text-center ${ptSerif.className} `}>{item.text}</p>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
