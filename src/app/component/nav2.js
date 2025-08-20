"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projects & Research", href: "/projectnresearch" },
    { label: "Publications", href: "/publication" },
    { label: "Leadership", href: "/leadership" },
    { label: "Sports", href: "/sports" },
    { label: "Work Experience", href: "/work_ex" },
    { label: "Awards & Achievements", href: "/awards" },
  ];

  return (
    <nav className="w-full bg-white shadow-md  top-0 left-0 ">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Brand */}
        <div className="font-bold text-lg text-blue-950">Humayl Fazal</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm font-medium tracking-wide text-black hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium tracking-wide text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
