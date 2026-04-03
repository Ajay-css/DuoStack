import React from "react";

const Promotional = () => {
  return (
    <>
      <header className="flex flex-col mt-16 items-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 text-center">
          Meet
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-2">
            Zara
          </span>
        </h2>

        <p className="text-center mb-8 max-w-xl text-gray-600">
          A Powerful AI Automation Tool For Every Business, Powered by Duo Stack
        </p>
      </header>

      <section className="relative flex flex-col items-center justify-center mx-auto max-w-5xl w-full text-center rounded-2xl py-16 md:py-24 px-6 md:px-10 mt-6 mb-10 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-2.png')] bg-cover bg-center"></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10">

          <h1 className="text-xl md:text-3xl font-medium text-white max-w-2xl mx-auto">
            Empower Your Sales & Marketing with a Next-Gen AI Workforce
          </h1>

          <div className="h-[3px] w-24 md:w-32 mx-auto my-4 bg-gradient-to-l from-transparent to-white"></div>

          <p className="text-sm md:text-base text-white max-w-xl mx-auto">
            Zara AI Agent handles real-time calling and unified multi-channel engagement,
            optimizing customer interactions at scale.
          </p>

          <button className="px-8 md:px-10 py-3 mt-6 text-sm bg-white hover:scale-105 transition duration-300 rounded-full">
            Enroll Now
          </button>

        </div>

      </section>
    </>
  );
};

export default Promotional;