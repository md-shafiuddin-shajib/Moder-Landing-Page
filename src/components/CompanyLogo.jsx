import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import mundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import "../assets/app.css";
const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, mundies, sitepoint];
  return (
    <div className="w-full max-w-7xl mx-auto py-20 flex flex-col sm:flex-row sm:items-center items-start  overflow-hidden gap-2">
      <div className="w-75 shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left px-4 ">
        Proud Partment at <br />
        Hubspot & Segment
      </div>
      <div className="flex animate_marquee whitespace-nowrap ">
        {logos.map((logo, index) => (
          <img
            src={logo}
            key={index}
            alt="Companies Logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* duplicat logo */}
        {logos.map((logo, index) => (
          <img
            src={logo}
            key={index}
            alt="Companies Logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
