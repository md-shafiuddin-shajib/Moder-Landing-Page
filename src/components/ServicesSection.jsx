import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const ServicesSection = () => {
  //   services section
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-18">
        {/* header*/}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg mb-10 md:w-4/5">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <div className="size-6 bg-indigo-200 flex items-center justify-center rounded-full">
                <div className="size-4 bg-blue-700 rounded-full  "></div>
              </div>
              <span className="text-gray-700">UX design content strategy</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="size-6 bg-indigo-200 flex items-center justify-center rounded-full">
                <div className="size-4 bg-blue-700 rounded-full  "></div>
              </div>
              <span className="text-gray-700">Development bring</span>
            </div>
          </div>
          <button className="mt-8 bg-indigo-600 px-8 py-3 rounded-xl text-white font-semibold hover:bg-indigo-700">
            Get Started
          </button>
        </div>
        {/* service section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">LEARN MORE</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
