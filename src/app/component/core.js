import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function CoreValues() {
  const values = [
    {
      title: "Innovation",
      description:
        "I believe every challenge holds an opportunity to create something better. From designing a rover to deliver vital supplies to remote communities, to leading STEM projects at school, I aim to bring fresh ideas into reality through creativity, technical skills, and persistence.",
    },
    {
      title: "Resilience",
      description:
        "Complex problems don’t come with easy answers. Competing in rigorous academic tournaments, managing demanding leadership roles, and balancing sports with academics have taught me the value of pushing forward — even when the path is uncertain.",
    },
    {
      title: "Leadership",
      description:
        "To me, leadership is about inspiring others to grow alongside you. Whether running physics workshops, mentoring younger students, or organizing competitions, I strive to guide teams with empathy, vision, and a focus on collective success.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* text-3xl md:text-4xl font-bold mb-6 text-blue-950 */}
        <h2 className={`text-3xl md:text-4xl text-blue-950 font-bold tracking-wide mb-4 ${ptSerif.className} `}>
          Core Values
        </h2>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {values.map((value, index) => (
    <div
      key={index}
      className="bg-[#011e35] p-8 flex flex-col justify-start rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className={`text-xl font-bold text-[#d6d6d6] mb-4 mx-auto ${ptSerif.className}`}>{value.title}</h3>
      <p className={`text-[#d6d6d6] leading-relaxed text-center ${ptSerif.className}`}>{value.description}</p>
    </div>
  ))}
</div>

    </section>
  );
}
