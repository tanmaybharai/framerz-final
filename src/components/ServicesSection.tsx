"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,

    },
  },
}


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

// Real YouTube videos for demonstration
const youtubeVideos = [
  "uEHPPU2k_OM",
  "q91jV01gZRU",
  "079ecv8tc7k",//https://www.youtube.com/watch?v=079ecv8tc7k
  "DGYZ04X5pk4",
];

const youtubeShorts = [
  "WJIikEGyvZY",
  "YAnIL4JSUSA",
  "aTwsBhBOevI",//https://youtube.com/shorts/aTwsBhBOevI?feature=share
  "47voAbmoYHE",//https://youtube.com/shorts/47voAbmoYHE?feature=share
  "mIrkyfiVqGA",//https://youtube.com/shorts/mIrkyfiVqGA?feature=share
  "mOz-UhVIyBw",//https://youtube.com/shorts/mOz-UhVIyBw?feature=share
];

const ServicesSection = () => {
  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black/50 via-gray-900/30 to-black/50 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      { /* <Background /> */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span className="font-bold font-helvetica">How can we help </span>
            <span className="font-display-italic gradient-text-blue-heading bg-clip-text text-transparent">
              you?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From short-form videos, to long-form videos, to ad creatives, and VSLs, we've got you covered on every front.
          </p>
        </motion.div>

        {/* Short Form Videos Section */}
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 shadow-2xl mb-12 overflow-hidden relative backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="p-6 sm:p-8 pb-4 text-center">
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl font-helvetica mb-2 text-white">
              Short Form Videos
            </h3>
            <p className="text-sm sm:text-base text-blue-200 mb-4 max-w-2xl mx-auto">
              Short, punchy videos for TikTok, Reels, and YouTube Shorts that grab attention and drive engagement.
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg border border-[#0070F3]/30 focus:outline-none focus:ring-2 focus:ring-[#0070F3] mb-6"
            >
              Explore pricing →
            </button>
          </div>

          <div className="px-6 sm:px-8 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {youtubeShorts.slice(0, 6).map((id, index) => (
                <div key={index} className="rounded-xl overflow-hidden aspect-[9/16] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube Short ${index + 1}`}
                    className="w-full h-full min-h-[300px]"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>




        {/* YouTube Videos Section */}
        <motion.div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 shadow-2xl mb-12 overflow-hidden relative backdrop-blur-sm" variants={itemVariants}>
          <div className="p-6 sm:p-8 pb-4 text-center">
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl font-helvetica mb-2 text-white">YouTube Videos</h3>
            <p className="text-sm sm:text-base text-blue-200 mb-4 max-w-2xl mx-auto">
              YouTube videos made more engaging than ever for longer watch time and more subscribers.
            </p>
            <button onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg border border-[#0070F3]/30 focus:outline-none focus:ring-2 focus:ring-[#0070F3] mb-6">
              Explore pricing →
            </button>
          </div>
          <div className="px-6 sm:px-8 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {youtubeVideos.slice(0, 2).map((id, index) => (
                <div key={index} className="rounded-xl overflow-hidden aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube Video ${index + 1}`}
                    className="w-full h-full min-h-[200px]"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {youtubeVideos.slice(2, 4).map((id, index) => (
                <div key={index + 2} className="rounded-xl overflow-hidden aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube Video ${index + 3}`}
                    className="w-full h-full min-h-[200px]"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-6">
          {/* Left Large Box - Podcast Editing */}
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col">
            <div className="text-center">
              <h3 className="font-bold text-3xl sm:text-4xl text-white mb-3">Thumbnails</h3>
              <p className="text-sm sm:text-base text-blue-200 mb-5 max-w-2xl mx-auto">
                Professional thumbnails that make your content stand out and get more views.
              </p>
              <button onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className=" px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg border focus:outline-none focus:ring-2  mb-8 bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white">
                Explore pricing →
              </button>
            </div>

            {/* Video Thumbnails */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img
                  src="/cast/secondcast (2).png"
                  alt="cast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-video">
                <img
                  src="/cast/secondcast (1).png"
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - 3 Small Cards */}
          <div className="grid gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1d1f20] to-[#050a10] border border-white/10 shadow-xl p-6 text-center">
              <h3 className="font-bold text-2xl text-white mb-2">Ad Creatives & VSLs</h3>
              <p className="text-sm text-blue-200 mb-4">
                High-converting ad creatives and VSLs crafted to grab attention, drive action, and boost sales.
              </p>
              <button onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className=" px-5 py-2.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg border bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white">
                Explore pricing →
              </button>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1d1f20] to-[#050a10] border border-white/10 shadow-xl p-6 text-center">
              <h3 className="font-bold text-2xl text-white mb-2">Explainers</h3>
              <p className="text-sm text-blue-200 mb-4">
                Engaging explainer videos tailored for SaaS/AI turning complex features into compelling stories that convert.
              </p>
              <button onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className=" px-5 py-2.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg border bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white">
                Explore pricing →
              </button>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1d1f20] to-[#050a10] border border-white/10 shadow-xl p-6 text-center">
              <h3 className="font-bold text-2xl text-white mb-2">LinkedIn Videos</h3>
              <p className="text-sm text-blue-200 mb-4">
                We interview you once and turn it into 12 punchy LinkedIn videos that build trust, authority, and inbound leads.
              </p>
              <button onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} className="  px-5 py-2.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg border bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white ">
                Explore pricing →
              </button>
            </div>
          </div>
        </motion.div>


      </div>
    </motion.section>
  )
}

export default ServicesSection