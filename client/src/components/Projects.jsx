import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import axios from "../services/api"

const API = import.meta.env.VITE_API_URL || "http://localhost:5000"

// Scroll reveal hook
function useRevealOnScroll(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.2 }
    )

    const elements = ref.current.querySelectorAll(".reveal")

    elements.forEach(el => {
      el.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700",
        "ease-out"
      )
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ref])
}

// Timeline animation hook
function useTimelineAnimation(timelineRef, containerRef) {
  useEffect(() => {
    const container = containerRef.current
    const timeline = timelineRef.current
    if (!container || !timeline) return

    function handleScroll() {
      const containerRect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      let progress = Math.min(
        Math.max(
          (windowHeight - containerRect.top) /
            (containerRect.height + windowHeight),
          0
        ),
        1
      )

      timeline.style.height = `${progress * 100}%`
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [timelineRef, containerRef])
}

export default function Projects() {

  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  const [projects, setProjects] = useState([])

  useRevealOnScroll(containerRef)
  useTimelineAnimation(timelineRef, containerRef)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/projects")
        setProjects(res.data)
      } catch (err) {
        console.error("Failed to load projects", err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section
      className="relative py-28 px-6 max-w-7xl mx-auto"
      ref={containerRef}
      id="projects"
      aria-label="Duo Stack Projects Timeline"
    >

      <header className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Projects by{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Duo Stack
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Explore projects built with MERN stack in a modern SaaS-style timeline layout.
        </p>
      </header>

      <div className="relative">

        {/* Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300">
          <div
            ref={timelineRef}
            className="w-1 bg-indigo-500 origin-top transition-all duration-300"
          />
        </div>

        {projects.map((project, index) => {

          const isEven = index % 2 === 0

          return (

            <article
              key={project._id}
              className="reveal relative w-full flex flex-col md:flex-row items-center justify-between mb-20"
            >

              {/* Details */}

              <div
                className={`md:w-5/12 ${
                  isEven ? "md:order-1 md:pl-8" : "md:order-2 md:pl-8"
                } text-center md:text-left`}
              >

                <h3 className="text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>

              </div>

              {/* Browser Mockup */}

              <div
                className={`md:w-5/12 mt-6 md:mt-0 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >

                <div className="border-2 border-gray-300 rounded-xl shadow-lg overflow-hidden">

                  {/* Browser bar */}

                  <div className="bg-gray-200 h-8 flex items-center px-3 gap-3">

                    <div className="flex gap-1">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <div className="flex-1 text-xs bg-white px-2 py-1 rounded text-gray-600 truncate">
                      {project.link}
                    </div>

                  </div>

                  <img
                    src={`${import.meta.env.VITE_PRIMARY_API}${project.img}`}
                    alt={`${project.title} preview`}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />

                </div>

              </div>

            </article>

          )
        })}

      </div>
    </section>
  )
}