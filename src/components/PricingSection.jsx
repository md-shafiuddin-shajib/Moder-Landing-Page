import React, { useState } from "react";

const PricingSection = () => {
  const [pCount, setPCount] = useState(1);
  // Calculate price based on pCount if needed

  const staterPrice = Math.round(4000 * (pCount / 50));
  const businessPrice = Math.round(7500 * (pCount / 50));

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-bold md:text-4xl mb-16">
          Pricing
        </h2>

        <div className="flex justify-between gap-8 flex-col md:flex-row mb-12">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 ">
            <h3 className="text-xl text-gray-600 mb-4 font-medium">Starter</h3>
            <p className="text-3xl font-bold mb-3">
              ${staterPrice}/<sub>mo</sub>
            </p>
          </div>

          {/* Business Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl text-gray-600 mb-4 font-medium">Business</h3>
            <p className="text-3xl font-bold mb-3">
              ${businessPrice}/<sub>mo</sub>
            </p>
          </div>
        </div>
        <div>
          <p className="text-center text-gray-600 mb-4 text-lg font-medium">
            {pCount} products
          </p>
          <div className="relative px-4 max-w-xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm">1</span>
              <input
                className="flex-1 h-2 appearance-none cursor-pointer bg-blue-100 "
                type="range"
                min="1"
                max="50"
                value={pCount}
                onChange={(e) => setPCount(parseInt(e.target.value))}
              />{" "}
              <span className="text-xs md:text-sm">50</span>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-4">Ready to get started.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
