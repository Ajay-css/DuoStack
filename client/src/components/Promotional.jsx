import React from 'react'

const Promotional = () => {
    return (
        <>
            <header className='flex flex-col mt-10 items-center'>
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
                    Meet <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-3">Zara</span>
                </h2>
                <p className='text-center mb-8'>A Powerful AI Automation Tool For Every Business , Powered by Duo Stack</p>
            </header>
            <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 mt-5 mb-5 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-2.png')] bg-cover bg-center bg-no-repeat">
                <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Empower Your Sales & Marketing with a Next-Gen AI Workforce</h1>
                <div className="h-[3px] w-32 m-1 bg-gradient-to-l from-transparent to-white mb-6"></div>
                <p className="text-sm md:text-base text-white max-w-xl">
                    Zara AI Agent Handles real-time calling and unified multi-channel engagement, optimizing customer interactions at scale.
                </p>
                <button className="px-10 py-3 mt-4 text-sm bg-white hover:scale-105 transition duration-300 rounded-full">
                    Enroll Now
                </button>
            </section>
        </>
    );
}

export default Promotional