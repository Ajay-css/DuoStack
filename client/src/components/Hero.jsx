import DotWave from "./DotWave"

export default function Hero() {
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

            {/* Hero Content */}
            <header className="relative text-center max-w-3xl px-6">

                {/* Trust Badge */}
                <div className="hidden md:inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-sm shadow-md border border-gray-200">

                    {/* Animated Status Dot */}
                    <div className="relative flex size-3 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-600"></span>
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 font-medium tracking-wide">
                        Modern MERN Development Studio
                    </p>

                </div>

                {/* Main Heading */}
                <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-gray-900">
                    Building Modern Saas High Performance Web Apps
                    <br />
                    with
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-4">
                        Duo Stack
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Duo Stack helps startups and businesses build scalable
                    MERN stack applications, powerful SaaS platforms,
                    and high-performance web experiences.
                </p>

                {/* CTA */}
                <div className="mt-10 flex justify-center gap-4 flex-wrap">

                    <button className="px-7 py-3 bg-black text-white rounded-full hover:scale-105 transition duration-300 shadow-lg">
                        View Our Work
                    </button>

                    <button className="px-7 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300">
                        Start Your Project
                    </button>

                </div>

            </header>

        </section>
    )
}