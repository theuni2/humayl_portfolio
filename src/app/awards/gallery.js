// import React from 'react'

// export default function Gallery() {
//   return (
//     <div>

//     </div>
//   )
// }


'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: '/image/ismtf/img1.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img2.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img3.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img4.JPG',  alt: 'ISMTF' },
    { src: '/image/ismtf/img5.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img6.JPEG', alt: 'ISMTF' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const rover = [
    { src: '/image/sea_rover/img1.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img2.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img3.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img4.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img5.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img6.JPG', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const kenken = [
    { src: '/image/kenken/img1.JPG', alt: 'Rover' },
    { src: '/image/kenken/img2.JPG', alt: 'Rover' },
    { src: '/image/kenken/img3.JPG', alt: 'Rover' },
    { src: '/image/kenken/img4.JPG', alt: 'Rover' },
    { src: '/image/kenken/img5.JPG', alt: 'Rover' },
    { src: '/image/kenken/img6.JPG', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const doe = [
    { src: '/image/doe/img1.JPEG', alt: 'doe' },
    { src: '/image/doe/img2.jpg', alt: 'doe' },
    { src: '/image/doe/img3.jpeg', alt: 'doe' },
    { src: '/image/doe/img4.JPG', alt: 'doe' },
    { src: '/image/doe/img5.JPG', alt: 'doe' },
    { src: '/image/doe/img6.jpg', alt: 'doe' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const rubric = [
    { src: '/image/rubric/img1.jpg', alt: 'Rover' },
    { src: '/image/rubric/img2.jpg', alt: 'Rover' },
    { src: '/image/rubric/img3.jpg', alt: 'Rover' },
  //  { src: '/image/rubric/img4.jpg', alt: 'Rover' },
    { src: '/image/rubric/img5.jpg', alt: 'Rover' },
    { src: '/image/rubric/img6.jpg', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];


  const imgVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <>
    <section className="bg-gray-900 py-16" id="ismtf-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 border-b border-gray-700 pb-4">
    ISMTF Vienna Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-900 py-16" id="sports-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 border-b border-gray-700 pb-4">
      
                    Expo 2020 Innovator Competition Gallery

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rover.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-900 py-16" id="sports-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 border-b border-gray-700 pb-4">
      
                    Rubik’s Cube Solver Gallery 

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rubric.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-900 py-16" id="sports-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 border-b border-gray-700 pb-4">
      
                   KenKen Competitions Gallery

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kenken.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-900 py-16" id="sports-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 border-b border-gray-700 pb-4">
      
                   Duke of Edinburgh Awards (Bronze, Silver & Gold)


        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doe.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
    
    </>
  );
}
