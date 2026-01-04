import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navLink = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      {" "}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}

        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2"></div>
        </div>

        {/* Desktop Nav itom */}
        <div className="hidden md:flex items-center gap-10">
          {navLink.map((link, index) => (
            <a
              onClick={() => setActiveLink(link.href)}
              key={index}
              href={link.href}
              className={`text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-500 ${
                activeLink == link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get in tourch Button */}

        <button>
          <a
            href="#newsletter"
            className="hidden md:block
          bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-200"
          >
            Get in touch
          </a>
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>
      </div>
      {/* mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-4">
          {navLink.map((link, index) => (
              <a
                onClick={() =>{ setActiveLink(link.href);setIsMenuOpen(false);}}
                className={`block text-sm font-medium py-2 ${
                  activeLink == link.href ? "text-blue-600" : "text-gray-600"
                }`}
                href={link.href}
                index={index}
              >
                {link.label}
              </a>
          ))}
          <button
            className=" w-full
          bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-200"
          >
            <a href="#newsletter">Get in touch</a>
          </button>
          </div>
           
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
