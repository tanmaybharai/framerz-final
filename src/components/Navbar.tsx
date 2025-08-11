"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { color } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${scrolled ? "py-2" : "py-3"}`} > 
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 ">
        <nav className="bg-black/10 backdrop-blur-md rounded-2xl py-1 px-4 sm:px-8 border border-white/20 flex items-center justify-between shadow-lg w-full">
          {/* Brand Name */}
          <a href="/" className="flex items-center space-x-2 min-w-0 group transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0070F3]">
            <img 
              src="/icons/framerzwhitelogo.png"
              alt="Framerz Logo"
              className="w-20 h-20 object-contain mr-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/icons/logo.png";
              }}
            />
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a 
              href="#services" 
              className="nav-link-enhanced"
            >
              Short-form
            </a>
            <a 
              href="#services" 
              className="nav-link-enhanced"
            >
              Long-form
            </a>
            <a 
              href="#faqs" 
              className="nav-link-enhanced"
            >
              FAQs
            </a>
          </div>
          {/* Book a call Button - Hidden on mobile */}
          <a
            href="#contact"
            className="hidden md:block ml-2 sm:ml-6 bg-[#0070F3] hover:bg-[#0056D8] text-white px-4 sm:px-6 py-2 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-md border border-[#0070F3]/30 focus:outline-none focus:ring-2 focus:ring-[#0070F3] whitespace-nowrap"
            style={{ boxShadow: '0 0 0 2px #0070F322' }}
          >
            Book a call
          </a>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0070F3]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center transition-all duration-500 transform ${
            isOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-full"
          } md:hidden z-50`}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0070F3]"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center space-y-8 w-full px-8">
            <a 
              href="#services" 
              className="text-white text-xl font-medium hover:text-blue-400 transition-colors duration-300 w-full text-center py-3 rounded"
              onClick={() => setIsOpen(false)}
            >
              Short-form
            </a>
            <a 
              href="#services" 
              className="text-white text-xl font-medium hover:text-blue-400 transition-colors duration-300 w-full text-center py-3 rounded"
              onClick={() => setIsOpen(false)}
            >
              Long-form
            </a>
            <a 
              href="#faqs" 
              className="text-white text-xl font-medium hover:text-blue-400 transition-colors duration-300 w-full text-center py-3 rounded"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              className="bg-[#0070F3] hover:bg-[#0056D8] text-white text-xl font-medium transition-all duration-300 w-full text-center py-4 rounded-xl border border-[#0070F3]/30"
              onClick={() => setIsOpen(false)}
              style={{ boxShadow: '0 0 0 2px #0070F322' }}
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
