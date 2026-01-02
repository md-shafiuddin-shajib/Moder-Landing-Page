import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-125 h-125 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl z-20"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <PurposeSection/>
        <FeatureSection/>
      </div>
    </main>
  );
};

export default App;
