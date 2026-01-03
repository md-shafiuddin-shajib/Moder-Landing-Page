import React from "react";
import monitorImage from "../assets/monitor-card.webp";
import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mt-4 mb-6">
            Introducing best mobile <br />
            carousels
          </h2>
          <p className="text-gray-600 mb-8">
            Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
          </p>
          <a
            href="#"
            className="whitespace-nowrap text-blue-600 font-semibold flex items-center gap-3 hover:gap-5 transition-all"
          >
            Learn more about monitoring{" "}
            <FaArrowRight className="inline size-5" />
          </a>
        </div>
        {/* Right Seciton */}

        <div className="md:w-1/2 w-full">
          <img
            src={monitorImage}
            alt="schedule image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
