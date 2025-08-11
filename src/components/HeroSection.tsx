"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const clientImages = [
  // "https://randomuser.me/api/portraits/women/68.jpg",
  // "https://randomuser.me/api/portraits/men/32.jpg",
  // "https://randomuser.me/api/portraits/men/85.jpg",
  // "https://randomuser.me/api/portraits/women/65.jpg",
  // "https://randomuser.me/api/portraits/men/44.jpg",
  // "/image/client1.jpg",
  "/image/client2.jpg",
  "/image/client3.jpg",
   "/image/client1.jpg",
  "/image/client5.jpg",
  "/image/client6.jpg",
]

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Trusted Section - Refined Layout */}
        <motion.div className="flex flex-col sm:flex-row justify-center items-center mt-6 mb-2 gap-2 sm:gap-4" variants={itemVariants}>
          <div className="flex flex-row items-center group">
            {/* Client Avatars */}
            <div className="flex -space-x-3">
              {clientImages.map((src, i) => (
                <img
                  key={i}
                  src={src || "/placeholder.svg"}
                  alt={`Client ${i + 1}`}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-black object-cover shadow max-w-full"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-col items-start ml-px gap-px -mt-1.5 ">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-4 sm:h-4 fill-yellow-400 stroke-transparent drop-shadow-[0_0_8px_rgba(250,204,21,1)]"

                  />
                ))}
              </div>

              {/* Text */}
              <span className="text-gray-400 text-xs sm:text-sm font-normal whitespace-nowrap">
                Trusted by 20+ brands & creators
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}

        <motion.h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2 mb-4 sm:mb-6 font-helvetica text-white"
          variants={itemVariants}
        >
          <motion.div
            className="mb-1 sm:mb-2 font-helvetica font-bold text-white text-[1.5rem] sm:text-[1rem] md:text-[2.5rem] lg:text-[2.75rem]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            #1 Content Engine Behind the
          </motion.div>

          <motion.div
            className="gradient-text-blue-heading text-glow font-display-italic text-[1.25rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Internet&apos;s Top Creators and Brands
          </motion.div>
        </motion.h1>


        {/* Description */}
        <div className="relative">

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4  relative "
            variants={itemVariants}
          >
            We handle everything from <span className="gradient-text-blue font-semibold font-display-italic">strategy</span> to <span className="gradient-text-blue font-semibold font-display-italic">editing</span> to <span className="gradient-text-blue font-semibold font-display-italic">distribution</span> so your content works harder, grows faster, and
            never runs dry.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4" variants={itemVariants}>
          {/* Primary CTA Button */}
          <motion.button
            className="group relative bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,112,243,0.6)] hover:scale-105 transform active:scale-95 w-full sm:w-auto btn-smooth"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Book a call</span>

          </motion.button>

          {/* Secondary Button */}
          <motion.button
            className="group relative bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A] hover:from-[#2A2A2A] hover:to-[#3A3A3A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform active:scale-95 w-full sm:w-auto btn-smooth"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>


      </motion.div>
    </section>
  )
}

export default HeroSection
