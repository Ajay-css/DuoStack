import { Code, Layers, Rocket, ShieldCheck } from "lucide-react";

const trusted = [
  "St.Xaviers Higher Secondary School",
  "Ajay Technologies",
  "Green Trendz",
  "JAQPOTZ",
  "RSK I Tech",
  "Vels Studios",
  "Xaviers Writer"
];

const services = [
  {
    icon: Code,
    title: "MERN Web Development",
    desc: "Production-ready web applications built using MongoDB, Express, React and Node.js."
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    desc: "Scalable SaaS architecture with authentication, dashboards and subscription systems."
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    desc: "Launch your startup idea faster with modern and scalable MVP builds."
  },
  {
    icon: ShieldCheck,
    title: "Performance & Security",
    desc: "Optimized performance, SEO friendly code and secure backend architecture."
  }
];

export default function Services() {
  return (
    <section className="relative py-20 overflow-hidden" id="services">
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Trusted By Marquee */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-500">
            Trusted By
          </h2>
          <div className="mt-6 overflow-hidden relative">
            <div className="flex gap-10 md:gap-12 animate-marquee whitespace-nowrap">
              {[...trusted, ...trusted].map((name, i) => (
                <span key={i} className="text-lg font-medium text-gray-700">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Heading */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            What
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Duo Stack
            </span>
            {" "}Builds ?
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We craft scalable digital products and modern web experiences
            using the MERN stack and cutting edge development practices.
          </p>
        </header>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-12 gap-6 auto-rows-fr">

          {/* Card 1 - Large */}
          <article className="relative col-span-12 sm:col-span-6 lg:col-span-7 bg-white/70 backdrop-blur border border-slate-400 p-8 rounded-2xl overflow-hidden group hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <Code className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[0].title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{services[0].desc}</p>
          </article>

          {/* Card 2 - Medium */}
          <article className="relative col-span-12 sm:col-span-6 lg:col-span-5 bg-white/70 backdrop-blur border border-slate-400 p-8 rounded-2xl overflow-hidden group hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <Layers className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[1].title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{services[1].desc}</p>
          </article>

          {/* Card 3 - Small */}
          <article className="relative col-span-12 sm:col-span-6 lg:col-span-4 bg-white/70 backdrop-blur border border-slate-400 p-6 rounded-2xl overflow-hidden group hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <Rocket className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{services[2].title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{services[2].desc}</p>
          </article>

          {/* Card 4 - Medium-Large */}
          <article className="relative col-span-12 sm:col-span-6 lg:col-span-8 bg-white/70 backdrop-blur border border-slate-400 p-8 rounded-2xl overflow-hidden group hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{services[3].title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{services[3].desc}</p>
          </article>

        </div>
      </div>
    </section>
  );
}