import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-18">
        {/* header*/}
        <div className="w-full md:w-1/2">
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
          <button className="mt-8 bg-indigo-600 px-8 py-3 rounded-xl text-white font-semibold hover:bg-indigo-700">Get Started</button>
        </div>
        {/* service section */}
      </div>
    </section>
  );
};

export default ServicesSection;
