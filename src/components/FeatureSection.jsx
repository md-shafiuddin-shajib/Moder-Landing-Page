import React from "react";

const FeatureSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* heading texts */}

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          How can we help your business?
        </h1>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </div>

      {/*features boxs */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {features.map((feature, index) => (
         <div key={index} className="flex flex-col items-center text-center">
           <div
            className="text-3xl size-24 rounded-full mb-6 flex items-center justify-center "
            style={{
              backgroundColor:
                index == 0 ? "#F1EFF0" : index == 1 ? "#FEE7D7" : "#EBE1D1",
            }}
            
          >
            {feature.icon}
          </div>
          <h3 className="text-xl font-medium text-gray-700">{feature.title}</h3>
          <p className="text-base">{feature.description}</p>
         </div>
        ))}

      </div>

      {/* button */}
      <div className="mt-12 flex justify-center ">
        <button className="whitespace-normal bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors relative ">
          
          Become A Partener
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/40 blur-xl top-0 left-0 "></div>
        </button>
        
      </div>
    </section>
  );
};

export default FeatureSection;
