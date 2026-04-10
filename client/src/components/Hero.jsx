import { useEffect, useState } from "react"
import DotWave from "./DotWave"

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs
} from "react-icons/fa"

import { SiJavascript } from "react-icons/si"

import {
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiVercel,
    SiNetlify,
    SiRender,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"
import LeadModel from "./LeadModel"


const techIcons = [
    { icon: <FaHtml5 className="text-[26px] md:text-[36px]" size={28} />, color: "text-orange-500" },
    { icon: <FaCss3Alt className="text-[26px] md:text-[36px]" size={28} />, color: "text-blue-500" },
    { icon: <SiJavascript className="text-[26px] md:text-[36px]" size={28} />, color: "text-yellow-400 fill-black" },
    { icon: <FaReact className="text-[26px] md:text-[36px]" size={28} />, color: "text-cyan-400" },
    { icon: <FaNodeJs className="text-[26px] md:text-[36px]" size={28} />, color: "text-green-500" },
    { icon: <SiExpress className="text-[26px] md:text-[36px]" size={28} />, color: "text-gray-700" },
    { icon: <SiMongodb className="text-[26px] md:text-[36px]" size={28} />, color: "text-green-600" },
    { icon: <SiPostgresql className="text-[26px] md:text-[36px]" size={28} />, color: "text-indigo-500" },
    { icon: <VscVscode className="text-[26px] md:text-[36px]" size={28} />, color: "text-blue-600" },
    { icon: <SiVercel className="text-[26px] md:text-[36px]" size={28} />, color: "text-black" },
    { icon: <SiNetlify className="text-[26px] md:text-[36px]" size={28} />, color: "text-teal-500" },
    { icon: <SiRender className="text-[26px] md:text-[36px]" size={28} />, color: "text-purple-500" },
]


export default function Hero() {

    const [startIndex, setStartIndex] = useState(0)
    const [visible, setVisible] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {

        const interval = setInterval(() => {

            setVisible(false)

            setTimeout(() => {
                setStartIndex((prev) => (prev + 6) % techIcons.length)
                setVisible(true)
            }, 1000)

        }, 5000)

        return () => clearInterval(interval)

    }, [])


    const visibleIcons = [
        techIcons[startIndex % techIcons.length],
        techIcons[(startIndex + 1) % techIcons.length],
        techIcons[(startIndex + 2) % techIcons.length],
        techIcons[(startIndex + 3) % techIcons.length],
        techIcons[(startIndex + 4) % techIcons.length],
        techIcons[(startIndex + 5) % techIcons.length],
    ]


    const iconStyle =
        "bg-white border border-gray-200 p-3 md:p-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:scale-110 transition"


    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Duo Stack Hero Section"
        >

            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <DotWave />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">

                {/* LEFT SIDE */}

                <div className={`absolute left-36 top-28 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} animate-floatSlow`}>
                    <div className={`${iconStyle} ${visibleIcons[0].color}`}>
                        {visibleIcons[0].icon}
                    </div>
                </div>

                <div className={`absolute left-14 top-[45%] transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} animate-floatMedium`}>
                    <div className={`${iconStyle} ${visibleIcons[1].color}`}>
                        {visibleIcons[1].icon}
                    </div>
                </div>

                <div className={`absolute left-36 bottom-24 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} animate-floatFast`}>
                    <div className={`${iconStyle} ${visibleIcons[2].color}`}>
                        {visibleIcons[2].icon}
                    </div>
                </div>


                {/* RIGHT SIDE */}

                <div className={`absolute right-36 top-28 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} animate-floatMedium`}>
                    <div className={`${iconStyle} ${visibleIcons[3].color}`}>
                        {visibleIcons[3].icon}
                    </div>
                </div>

                <div className={`absolute right-14 top-[45%] transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} animate-floatSlow`}>
                    <div className={`${iconStyle} ${visibleIcons[4].color}`}>
                        {visibleIcons[4].icon}
                    </div>
                </div>

                <div className={`absolute right-36 bottom-24 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} animate-floatFast`}>
                    <div className={`${iconStyle} ${visibleIcons[5].color}`}>
                        {visibleIcons[5].icon}
                    </div>
                </div>

            </div>


            {/* Hero Content */}
            <header className="relative text-center max-w-3xl px-6">

                <div className="hidden md:inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-sm shadow-md border border-gray-200">

                    <div className="relative flex size-3 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-600"></span>
                    </div>

                    <p className="text-gray-700 font-medium tracking-wide">
                        Modern MERN Development Studio
                    </p>

                </div>

                <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-gray-900">
                    Building Modern Saas High Performance Web Apps
                    <br />
                    with
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-4">
                        Duo Stack
                    </span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Duo Stack helps startups and businesses build scalable
                    MERN stack applications, powerful SaaS platforms,
                    and high-performance web experiences.
                </p>

                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <a href="#projects">
                        <button className="px-7 py-3 bg-black text-white rounded-full hover:scale-105 transition duration-300 shadow-lg">
                            View Our Work
                        </button>
                    </a>
                    
                    <button
                        onClick={() => setOpenModal(true)}
                        className="px-7 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300">
                        Start Your Project
                    </button>
                    {openModal && (
                        <LeadModel close={() => setOpenModal(false)} />
                    )}

                </div>

            </header>

        </section>
    )
}