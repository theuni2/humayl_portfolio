"use client";

import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function LeadershipSection() {
  const intro =
    "Leadership for me is about taking responsibility, guiding others, and helping teams work toward a shared goal. Whether in academic settings, extracurricular activities, or community initiatives, I’ve taken on roles that require planning, coordination, and decision-making. These experiences have taught me how to communicate clearly, stay organized under pressure, and create an environment where others can contribute their best work.";

  const roles = [
    {
      title: "Head – Physics & Engineering Society",
      description:
        "Oversaw the operation of the school’s main STEM society. Planned and delivered workshops, coordinated guest lectures, and managed collaborative group projects. Focused on creating sessions that encouraged practical application of concepts and inspired interest in STEM innovation.",
    },
    {
      title: "Co-Founder – Physics in Motion Club",
      description:
        "Launched a student-led club dedicated to exploring motion systems through hands-on learning. Designed and delivered sessions on topics such as aerodynamics and combustion engines. Guided members in building small-scale engineering projects including rubber band cars and perfume rockets. Managed the planning of activities, sourced materials, and encouraged participation across different year groups.",
    },
    {
      title: "Co-Organizer – DC Physics Olympiad",
      description:
        "Handled logistics and participant engagement for an inter-school physics competition. Coordinated event schedules, managed registrations, and introduced a tiered certification system to acknowledge varying levels of achievement among participants.",
    },
    {
      title: "Chief Editor – School Engineering Magazine",
      description:
        "Directed the editorial strategy for DC Hydraulics, a student-run magazine focused on scientific and engineering breakthroughs. Managed the process from topic selection to final publication. Reviewed all articles for clarity and accuracy, and contributed original pieces to each issue.",
    },
    {
      title: "Lower School Liaison",
      description:
        "Led initiatives to provide academic and extracurricular support for younger students. Developed a peer tutoring system to help with challenging subjects. Organized engagement activities to connect lower school students with senior year clubs and competitions. Acted as a bridge between year groups to make academic help more accessible.",
    },
    {
      title: "Student Wellbeing Ambassador",
      description:
        "Advocated for mental health and academic support within the school community. Promoted a culture of empathy and inclusion by supporting wellbeing initiatives and student-led awareness campaigns. Acted as a point of contact for peers seeking guidance.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="leadership" className={`bg-[#d6d6d6] py-10 px-6 md:px-8 ${ptSerif.className} `}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-blue-950">Leadership</h2>
        <p className="mt-4 text-[#1a334c] leading-relaxed">{intro}</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {roles.map((role, idx) => (
          <motion.article
            key={role.title}
            variants={item}
            className="group relative overflow-hidden rounded-2xl bg-[#011e35] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
          >
            {/* Animated accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            <div className="p-6">
              <h3 className={`text-lg md:text-xl font-semibold text-[#d6d6d6] ${ptSerif.className} `}>
                {role.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#d6d6d6]">
                {role.description}
              </p>
            </div>

            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5" />
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="sr-only">No photos for this page.</div>
    </section>
  );
}
