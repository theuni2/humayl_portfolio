// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SportsSection() {
//   const sports = [
//     {
//       title: 'Varsity Cricket U19',
//       role: 'Captain & Starting All-Rounder',
//       details: 'Led team to multiple titles through strategic leadership and all-round performance.',
//     },
//     {
//       title: 'Varsity Water Polo U19',
//       role: 'Starting Center',
//       details: 'Contributed to undefeated seasons and championships with defensive and offensive plays.',
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     }),
//   };

//   return (
//     <section className="bg-gray-50 text-indigo-700 py-16" id="sports">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
//           Sports & Competitions
//         </h2>
//         <div className="grid gap-8 md:grid-cols-2">
//           {sports.map((sport, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gray-900"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index}
//             >
//               <h3 className="text-xl font-semibold text-white">{sport.title}</h3>
//               <p className="text-sm text-gray-400 mt-1 italic">{sport.role}</p>
//               <p className="mt-4 text-gray-300">{sport.details}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SportsSection() {
  const sports = [
    {
      title: 'Varsity Cricket U19',
      role: 'Captain & Starting All-Rounder',
      details:
        'Led team to multiple titles through strategic leadership and all-round performance.',
      images: [
        '/image/cricket/cricket1.JPG',
        // '/image/cricket/cricket2.png',
        // '/image/cricket/cricket3.JPEG',
        // '/image/cricket/cricket4.JPG',
        // '/image/cricket/cricket5.jpg',
        // '/image/cricket/cricket6.JPEG',
      ],
      type: 'cricket',
    },
    {
      title: 'Varsity Water Polo U19',
      role: 'Starting Center',
      details:
        'Contributed to undefeated seasons and championships with strong defensive and offensive plays.',
      images: ['/image/polo.JPEG'],
      type: 'polo',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className="bg-gray-50 text-indigo-700 py-16" id="sports">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
          Sports & Competitions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.title}
              className="border border-gray-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 bg-gray-900"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="text-2xl font-semibold text-white text-center">
                {sport.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1 italic text-center">{sport.role}</p>

              <div className="mt-6">
            
                  <div className="mt-3 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={sport.images[0]}
                      alt={sport.title}
                      width={800}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                  </div>
                )
              </div>

              <p className="mt-6 text-gray-300 text-center">{sport.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
