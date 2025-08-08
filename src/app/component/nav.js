// components/Navbar.jsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8 text-indigo-600"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-lg font-semibold text-indigo-600">Humayl Fazal</span>
        </Link>


        <nav className="md:ml-auto flex flex-wrap items-center text-sm md:text-base text-indigo-700">
          <Link href="/" className="mr-5 hover:text-black transition">
            Home
          </Link>
       
          <Link href="/leadership" className="mr-5 hover:text-black transition">
            Leadership
          </Link> 

  

   <Link href="/compound_activity#sports" className="mr-5 hover:text-black transition">
            Sports & Competitions
          </Link>

          <Link href="/compound_activity#projects" className="mr-5 hover:text-black transition">
            Projects
          </Link>

          <Link href="/compound_activity#research" className="mr-5 hover:text-black transition">
            Writing
          </Link>

          <Link href="/compound_activity#workex" className="mr-5 hover:text-black transition">
            Work Experience
          </Link>
       
            <Link href="/awards" className="mr-5 hover:text-black transition">
            Awards
          </Link>
        </nav>

   
      </div>
    </header>
  );
}
