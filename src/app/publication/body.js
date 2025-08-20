"use client";

import { motion } from "framer-motion";

export default function Publications() {
  const publications = [
    {
      title: "Research Paper – Mobility Rover for Remote Communities (In Progress)",
      description:
        "Currently preparing a research paper on the design and development of a mobility rover aimed at delivering medical support and essential supplies to remote areas. Developed under guidance from an MIT PhD graduate, it will be submitted to academic journals upon completion. The paper covers engineering design principles, materials selection, terrain adaptability, and prototype testing, as well as the humanitarian applications of the rover.",
      link: null,
      image: "/image/rover.png", // Replace with actual path
    },
    {
      title: "Grimrush – Fiction Novel",
      description:
        "Author of Grimrush, available on Amazon in multiple regions. All proceeds go to The Little Wings Foundation, supporting children with musculoskeletal deformities across the Middle East, Asia, and Africa. Inspired by Dr. Marc Sinclair’s work, this novel turned a creative project into a meaningful fundraising effort.",
      links: [
        { label: "US: View on Amazon", url: "https://amzn.to/2U6ZAdH" },
        { label: "UK: View on Amazon", url: "https://amzn.to/3jbUNSm" },
        { label: "UAE: View on Amazon", url: "https://amzn.to/3eDlizo" },
      ],
      image: "/image/2.png", // Replace with actual path
    },    {
      title: "DC Hydraulics – Dubai College Engineering Magazine",
      description:
        "Chief Editor, Co-Founder, and contributor to DC Hydraulics, the Dubai College student-run engineering magazine. Responsibilities include setting editorial direction, coordinating with writers, and contributing articles. Since launch, the magazine has grown into a valued resource for the STEM community.",
      links: [
        { label: "Volume 1 (PDF)", url: "https://drive.google.com/file/d/1a7HMMr-_P0pqopKeR7DAOCwuvUlgXCa3/view?usp=drive_link" },
        { label: "Volume 2 (PDF)", url: "https://drive.google.com/file/d/1UlQfRW0oqtXw4BRz12g6B5TA3YORJ03Q/view?usp=drive_link" },
      ],
      image: "/image/dchydraulics.png", // Replace with actual path
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-blue-950"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Publications
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/3">
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 text-black">
                {pub.title}
              </h3>
              <p className="text-gray-700 mb-4">{pub.description}</p>

              {pub.links && (
                <div className="flex flex-wrap gap-3">
                  {pub.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
