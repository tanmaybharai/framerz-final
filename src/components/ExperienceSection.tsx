// import { motion } from "framer-motion"
// import { Users, Video, Eye, TrendingUp } from "lucide-react"

// const ExperienceSection = () => {
//   return (
//     <motion.section
//       id="experience"
//       className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black/50 via-gray-900/30 to-black/50 text-white text-center relative"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl relative z-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
//           <span className="font-bold font-helvetica">Proven track record in </span>
//           <span className="font-display-italic gradient-text-blue-heading bg-clip-text text-transparent">
//             video excellence
//           </span>
//         </h2>
//         <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
//           Years of experience have shaped us into the leading video editing agency trusted by creators worldwide.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <motion.div
//             className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-lg backdrop-blur-md relative overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.1 }}  // ✅ scale up on hover
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

//             <div className="flex items-center justify-center mb-4">
//               <Users className="w-12 h-12 text-[#0070F3]" />
//             </div>

//             <h3 className="text-5xl sm:text-6xl font-bold gradient-text-blue mb-2">15+</h3>
//             <p className="text-white text-lg">Happy Clients</p>
//             <p className="text-gray-400 text-sm">satisfied customers worldwide</p>
//           </motion.div>


//           <motion.div className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-lg backdrop-blur-md relative overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//              whileHover={{ scale: 1.1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//             <div className="flex items-center justify-center mb-4">
//               <Video className="w-12 h-12 text-[#0070F3]" />
//             </div>
//             <h3 className="text-5xl sm:text-6xl font-bold gradient-text-blue mb-2">550+</h3>
//             <p className="text-white text-lg">Videos Edited</p>
//             <p className="text-gray-400 text-sm">high-quality content delivered</p>
//           </motion.div>

//           <motion.div className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-lg backdrop-blur-md relative overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//              whileHover={{ scale: 1.1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//             <div className="flex items-center justify-center mb-4">
//               <Eye className="w-12 h-12 text-[#0070F3]" />
//             </div>
//             <h3 className="text-5xl sm:text-6xl font-bold gradient-text-blue mb-2">3M+</h3>
//             <p className="text-white text-lg">Views Generated</p>
//             <p className="text-gray-400 text-sm">massive audience reach</p>
//           </motion.div>

//           <motion.div className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-lg backdrop-blur-md relative overflow-hidden group"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//              whileHover={{ scale: 1.1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//             <div className="flex items-center justify-center mb-4">
//               <TrendingUp className="w-12 h-12 text-[#0070F3]" />
//             </div>
//             <h3 className="text-5xl sm:text-6xl font-bold gradient-text-blue mb-2">100%</h3>
//             <p className="text-white text-lg">Success Rate</p>
//             <p className="text-gray-400 text-sm">client satisfaction guaranteed</p>
//           </motion.div>
//         </div>

//         <motion.div
//           className="flex flex-col items-center justify-center mx-auto max-w-3xl"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Ready to become our next success story?</h3>
//           <motion.a
//             href="#contact"
//             className="group relative bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,112,243,0.6)] hover:scale-105 transform active:scale-95 w-full sm:w-auto btn-smooth"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">Start your project</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-[#3E92FF] to-[#0070F3] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//           </motion.a>
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

// export default ExperienceSection

import { motion } from "framer-motion"
import { Users, Video, Eye, TrendingUp } from "lucide-react"

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      className="py-10 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black/50 via-gray-900/30 to-black/50 text-white text-center relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          <span className="font-bold font-helvetica">Proven track record in </span>
          <span className="font-display-italic gradient-text-blue-heading bg-clip-text text-transparent">
            video excellence
          </span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2 sm:px-0">
          Years of experience have shaped us into the leading video editing agency trusted by creators worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {[{
            icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#0070F3]" />,
            value: "25+",
            label: "Happy Clients",
            sub: "satisfied customers worldwide"
          }, {
            icon: <Video className="w-10 h-10 sm:w-12 sm:h-12 text-[#0070F3]" />,
            value: "350+",
            label: "Videos Edited",
            sub: "high-quality content delivered"
          }, {
            icon: <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-[#0070F3]" />,
            value: "30M+",
            label: "Views Generated",
            sub: "massive audience reach"
          }, {
            icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-[#0070F3]" />,
            value: "100%",
            label: "Success Rate",
            sub: "client satisfaction guaranteed"
          }].map((card, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900 rounded-xl border border-white/10 p-6 sm:p-8 shadow-lg backdrop-blur-md relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">{card.icon}</div>
              <h3 className="text-4xl sm:text-5xl font-bold gradient-text-blue mb-1">{card.value}</h3>
              <p className="text-white text-base sm:text-lg">{card.label}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{card.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center justify-center mx-auto max-w-md sm:max-w-3xl px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-3xl font-bold mb-5 text-white text-center">
            Ready to become our next success story?
          </h3>
          <motion.a
            href="#contact"
            className="group relative bg-gradient-to-r from-[#0070F3] to-[#0056D8] hover:from-[#0060E0] hover:to-[#004AAB] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,112,243,0.6)] hover:scale-105 transform active:scale-95 w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start your project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E92FF] to-[#0070F3] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ExperienceSection
