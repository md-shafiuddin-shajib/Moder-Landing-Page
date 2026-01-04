import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeatureSection from "./components/FeatureSection";
import ScheduleSection from "./components/ScheduleSection";
import MonitorSection from "./components/MonitorSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-125 h-125 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl z-20"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSection />
        <ScheduleSection />
        <MonitorSection/>
        <PricingSection/>
        <ServicesSection/>
        <TestimonialSection/>
         <NewsletterSection/>
         <Footer/>
       
      </div>
    </main>
  );
};

export default App;
