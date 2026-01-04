import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // footer section
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <section className="bg-gray-50 my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* brand column */}
          <div className="lg:col-span-4">
            <div className="flex gap-1 items-center">
              {/* Logo */}

              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2"></div>
              </div>
              <span className="lg:text-xl text-lg font-medium ml-1">
                The Next Design
              </span>
            </div>
            <p className="text-gray-600 mb-6 md:w-3/4 mt-3">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="size-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-blue-600 transition-all"
              >
                <FaFacebookF className="size-5 " />
              </a>
              <a
                href="#"
                className="size-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-blue-600 transition-all"
              >
                <FaTwitter className="size-5 " />
              </a>
              <a
                href="#"
                className="size-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-blue-600 transition-all"
              >
                <FaLinkedin className="size-5 " />
              </a>
            </div>
          </div>
          {/* footer navigation */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([sectionTitle, links], index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium mb-4 uppercase">
                      {sectionTitle}
                    </h3>
                    <ul className="space-y-2">{links.map((link, iIndex)=>(
                        <li key={iIndex}><a className="text-gray-600 hover:text-gray-900" href="#">{link.name}</a></li>
                    ))}</ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* footer bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-5">
          <div className="flex justify-between flex-col gap-3 sm:flex-row"><p className="text-sm text-gray-600">Copyright © {new Date().getFullYear()} <a href="http://shajib.live">shajib.live</a></p>
          
          <p className="text-sm text-gray-600">Created by Md Shafiuddin Shajib</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
