import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/duostack_logo.jpg"
import LeadModel from "./LeadModel"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", path: "#" },
        { name: "Services", path: "#services" },
        { name: "Projects", path: "#projects" },
        { name: "Pricing", path: "#pricing" },
        { name: "Contact", path: "#contact" },
    ]

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                    ? "backdrop-blur-md bg-white/70 border-b border-gray-200"
                    : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-[80px] grid grid-cols-[auto_1fr_auto] items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center h-[80px] overflow-hidden">
                    <img src={logo} alt="logo" className="h-[130px] w-auto object-contain" />
                </Link>

                {/* Center Menu */}
                <div className="hidden md:flex justify-center items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-gray-700 hover:text-black transition font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Button */}
                <div className="hidden md:flex justify-end">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
                    >
                        Get Started
                    </button>

                    {openModal && (
                        <LeadModel close={() => setOpenModal(false)} />
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden justify-self-end"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-6 pt-2 bg-white border-t border-gray-200">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-gray-700 hover:text-black"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}