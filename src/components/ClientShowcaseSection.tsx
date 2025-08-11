import { motion } from "framer-motion"

const testimonials = [
	{
		videoId: "PR2ZF8bHdlE",
		quote: "Working with Tanmay has been a game-changer. He just gets it, the pacing, the animations, the edits. I’ve never had so many people DM me about how ‘clean’ my videos look.",
		clientName: "Harper Carroll",
		clientTitle: "Top 10 Global AI Pro on LinkedIn",
		clientImage: "/image/client2.jpg",
	},
	{
		videoId: "tuv_fsFR-FI",
		quote: "As a Entrepreneur, I don’t have time to think about content. Tanmay just takes over and delivers clean, scroll-stopping edits. Zero stress.",
		clientName: "Tal Navarro",
		clientTitle: "Founder @ Social lady",
		clientImage: "/image/client6.jpg",
	},
	{
		videoId: "1fxeV2IZAig",
		quote: "Tanmay and his team at Framerz Media are absolute pros. I used to stress over content every week. Now? It’s hands-off, high quality, and actually gets results.",
		clientName: "Anubrota Biswas",
		clientTitle: "Founder @ Vision Studios AI",
		clientImage: "/image/client1.jpg",
	},
]

const ClientShowcaseSection = () => {
	return (
		<section className="py-24 bg-black/50 text-white relative -mt-10">
			<div className="container mx-auto px-4 sm:px-8 relative z-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
						Our Clients
					</span>
					<h2 className="font-bold text-4xl md:text-6xl font-helvetica mb-4">
						<span className="font-bold font-helvetica">Hear it directly from </span>
						<span className="font-display-italic gradient-text-blue-heading text-glow">
							our clients.
						</span>
					</h2>
					<p className="text-lg text-gray-400 max-w-2xl mx-auto">
						See what our clients have to say about the{" "}
						<span className="gradient-text-blue font-semibold">
							experience
						</span>
						{" "}of working with us.
					</p>
				</motion.div>

				<div className="max-w-3xl mx-auto flex flex-col gap-8">
					{/* First row: single large card, video left, text right */}
					<div className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:gap-x-4 overflow-hidden">
						<div className="md:w-1/2 w-full aspect-video flex items-center justify-center relative p-4">
							<iframe
								src={`https://www.youtube.com/embed/${testimonials[0].videoId}`}
								title={`Testimonial Video 0`}
								className="w-full h-full min-h-[200px] rounded-2xl md:rounded-l-2xl"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								referrerPolicy="strict-origin-when-cross-origin"
							/>
						</div>
						<div className="flex flex-col justify-between p-6 md:p-8 md:w-1/2">
							<blockquote className="font-bold text-lg md:text-2xl font-medium leading-relaxed mb-4 font-helvetica">
								{testimonials[0].quote}
							</blockquote>
							<div className="flex items-center gap-3 mt-4">
								<img
									src={testimonials[0].clientImage}
									alt={testimonials[0].clientName}
									className="w-10 h-10 rounded-full border-2 border-[#0070F3]/30 object-cover"
								/>
								<div>
									<div className="text-white font-semibold text-base">
										{testimonials[0].clientName}
									</div>
									<div className="text-gray-400 text-xs">
										{testimonials[0].clientTitle}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Second row: single large card, video right, text left */}
					<div className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row-reverse md:gap-x-4 overflow-hidden">
						<div className="md:w-1/2 w-full aspect-video flex items-center justify-center relative p-4">
							<iframe
								src={`https://www.youtube.com/embed/${testimonials[1].videoId}`}
								title={`Testimonial Video 1`}
								className="w-full h-full min-h-[200px] rounded-2xl md:rounded-r-2xl"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								referrerPolicy="strict-origin-when-cross-origin"
							/>
						</div>
						<div className="flex flex-col justify-between p-6 md:p-8 md:w-1/2">
							<blockquote className="text-lg md:text-2xl font-medium leading-relaxed mb-4">
								{testimonials[1].quote}
							</blockquote>
							<div className="flex items-center gap-3 mt-4">
								<img
									src={testimonials[1].clientImage}
									alt={testimonials[1].clientName}
									className="w-10 h-10 rounded-full border-2 border-[#0070F3]/30 object-cover"
								/>
								<div>
									<div className="text-white font-semibold text-base">
										{testimonials[1].clientName}
									</div>
									<div className="text-gray-400 text-xs">
										{testimonials[1].clientTitle}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Third row: single large card, video left, text right */}
					<div className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:gap-x-4 overflow-hidden">
						<div className="md:w-1/2 w-full aspect-video flex items-center justify-center relative p-4">
							<iframe
								src={`https://www.youtube.com/embed/${testimonials[2].videoId}`}
								title={`Testimonial Video 2`}
								className="w-full h-full min-h-[200px] rounded-2xl md:rounded-l-2xl"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								referrerPolicy="strict-origin-when-cross-origin"
							/>
						</div>
						<div className="flex flex-col justify-between p-6 md:p-8 md:w-1/2">
							<blockquote className="text-lg md:text-2xl font-medium leading-relaxed mb-4">
								{testimonials[2].quote}
							</blockquote>
							<div className="flex items-center gap-3 mt-4">
								<img
									src={testimonials[2].clientImage}
									alt={testimonials[2].clientName}
									className="w-10 h-10 rounded-full border-2 border-[#0070F3]/30 object-cover"
								/>
								<div>
									<div className="text-white font-semibold text-base">
										{testimonials[2].clientName}
									</div>
									<div className="text-gray-400 text-xs">
										{testimonials[2].clientTitle}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ClientShowcaseSection
