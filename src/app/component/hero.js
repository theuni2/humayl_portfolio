import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function AboutMe() {
  return (
    <section className={`py-16 px-6 md:px-20 bg-gray-300 ${ptSerif.className}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-950">About Me</h2>
          <p className={`text-[#1a334c] leading-relaxed mb-4 ${ptSerif.className}`}>
            I’m Humayl Fazal, an A-Level student at Dubai College, pursuing Mathematics, Further Mathematics, Physics, and Chemistry. My passion lies at the intersection of engineering, mathematics, and innovation — areas where curiosity meets practical problem-solving.
          </p>
          <p className="text-[#1a334c] leading-relaxed mb-4">
            From a young age, I’ve been fascinated by how mechanical systems work, whether it’s the precision of an aircraft engine or the efficiency of a rover navigating challenging terrain. That curiosity has grown into hands-on experience: designing prototypes for remote healthcare delivery, exploring aerospace engineering during industry internships, and leading STEM-focused clubs and competitions.
          </p>
          <p className="text-[#1a334c] leading-relaxed mb-4">
            As Head of the Physics & Engineering Society and Co-Founder of the Physics in Motion Club, I lead workshops, mentor peers, and organize events that inspire others to explore STEM. My participation in competitions such as the British Mathematics Olympiad, ISMTF Senior Olympiad, and Stanford Math Challenge has sharpened my problem-solving skills under pressure.
          </p>
          <p className="text-[#1a334c] leading-relaxed">
            Whether it’s showcasing projects at Expo 2020, representing my school’s U19 cricket team, or developing innovative engineering solutions, I’m driven by the same goal: to make an impact through innovation, collaboration, and perseverance.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/him.jpg" // Place your image in public/ folder
            alt="Humayl Fazal"
            className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}


