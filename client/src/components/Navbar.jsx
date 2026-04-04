import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

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
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-semibold tracking-tight text-gray-900 logo"
                >
                    Duo Stack
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="relative text-gray-700 hover:text-black transition"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#pricing"
                        className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
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

                        <Link
                            to="/signup"
                            className="mt-2 px-4 py-2 rounded-full bg-black text-white text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}