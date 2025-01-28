import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      title: "Enterprise Document Management",
      description:
        "Centralize, organize, and optimize document workflows for greater efficiency and control.",
      color: "bg-blue-100",
      icon: "📁",
    },
    {
      title: "Intelligent Document Processing",
      description:
        "Leverage AI to automate document classification, data extraction, and processing with unmatched accuracy.",
      color: "bg-green-100",
      icon: "🤖",
    },
    {
      title: "Multi-Module LLM Capabilities",
      description:
        "Harness the power of advanced AI to analyze, interpret, and process diverse document types, driving smarter insights and faster decision-making.",
      color: "bg-purple-100",
      icon: "🔍",
    },
    {
      title: "Advanced OCR Technology",
      description:
        "Extract and digitize critical information from scanned documents with industry-leading precision.",
      color: "bg-yellow-100",
      icon: "🖨️",
    },
    {
      title: "Content Archiving and Compliance",
      description:
        "Safeguard and manage data with robust archiving solutions tailored for regulatory compliance.",
      color: "bg-red-100",
      icon: "🗄️",
    },
    {
      title: "Seamless Systems Integration",
      description:
        "Integrate effortlessly with your existing platforms to maximize efficiency and minimize disruption.",
      color: "bg-teal-100",
      icon: "🔗",
    },
  ];

  return (
    <div className="what-we-do-container py-12 px-4 mx-auto md:w-[90%]  ">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card bg-[#131316] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105`}
          >
            <div className="icon text-5xl mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-white">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-end mt-8">
        <button className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-white px-6 py-3 rounded-lg text-lg transition duration-300 hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-700">
          Learn more...
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
