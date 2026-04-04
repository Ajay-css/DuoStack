const row1 = [
    "html", "css", "js", "react", "nodejs", "express", "mongodb",
    "postgresql", "aws", "docker", "tailwind", "vercel", "netlify",
    "html", "css", "js", "react", "nodejs", "express", "mongodb"
]

const row2 = [
    "react", "nodejs", "threejs", "docker", "googlecloud",
    "postman", "aws", "mongodb", "tailwind", "vercel",
    "react", "nodejs", "threejs", "react", "docker", "googlecloud",

]

const row3 = [
    "postgresql", "express", "nodejs", "react", "aws", "docker",
    "tailwind", "html", "threejs", "netlify", "vercel", "postman",
    "postgresql", "express", "nodejs", "react", "aws", "docker",
]

const MarqueeRow = ({ logos, reverse }) => {

    return (
        <div className="overflow-hidden relative group">

            <div
                className={`flex w-max gap-10 py-6 
        ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
            >

                {[...logos, ...logos].map((tech, i) => (
                    <img
                        key={i}
                        src={`https://skillicons.dev/icons?i=${tech}`}
                        className="h-9 opacity-80 hover:opacity-100 transition"
                        draggable={false}
                    />
                ))}

            </div>

        </div>
    )
}

export default function TechStack() {

    return (
        <section className="py-28 bg-white overflow-hidden">

            {/* Header */}

            <div className="max-w-3xl mx-auto text-center px-6">

                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                    Technologies We Work With
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                    Modern tools we use to build fast, scalable and reliable applications.
                </p>

            </div>


            {/* Marquee */}

            <div className="mt-16 space-y-4 relative">

                {/* gradient fade */}

                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <MarqueeRow logos={row1} />
                <MarqueeRow logos={row2} reverse />
                <MarqueeRow logos={row3} />

            </div>


            <style>{`

      .animate-marquee{
        animation: marquee 22s linear infinite;
      }

      .animate-marquee-reverse{
        animation: marqueeReverse 22s linear infinite;
      }

      .group:hover .animate-marquee,
      .group:hover .animate-marquee-reverse{
        animation-play-state: paused;
      }

      @keyframes marquee{
        0%{
          transform: translateX(0);
        }
        100%{
          transform: translateX(-50%);
        }
      }

      @keyframes marqueeReverse{
        0%{
          transform: translateX(-50%);
        }
        100%{
          transform: translateX(0);
        }
      }

      `}</style>

        </section>
    )
}