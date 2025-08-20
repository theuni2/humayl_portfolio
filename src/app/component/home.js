
import Navbar from "./nav";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/image/cricket/cricket1.JPG')", // Place image in public folder
      }}
    >
      <Navbar />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-6xl font-extrabold">
         Humayl Fazal {/* LEAPS <span className="text-orange-400">&amp;</span> BOUNDS */}
        </h1>
        <p className="mt-4 text-lg tracking-widest font-bold  text-blue-100">
          Aspiring Engineer | Innovator | STEM Leader

        </p>
      </div>
    </div>
  );
}
