import { motion } from "framer-motion";
import React from 'react';

const clientComments = [
	{
		quote: "Tanmay and his team are phenomenal. Their unmatched work rate, dedication, and creativity have made them invaluable partners for producing content.",
		clientName: "Anubrota Biswas",
		clientTitle: "Founder @ Vision Studios AI",
		clientImage: "/image/client1.jpg",
	},
	{
		quote: "Working with Tanmay was seamless. The quality was incredible, with versatile video and animation. It's a one-stop shop. Excited for a long-term partnership.",
		clientName: "Ross Fledderjohn",
		clientTitle: "Founder @ Stammer AI",
		clientImage: "/image/client5.jpg",
	},
	{
		quote: "Awesome work! Never once left the loop for any revisions, and made sure end video was exactly what we were looking for.",
		clientName: "Rohit Vijayakar",
		clientTitle: "Founder @ Vision Studios AI",
		clientImage: "/image/client4.jpg",
	},
	{
		quote: "Tanmay is the best. He delivers elite videos without hand-holding. I'm thrilled with his short-form work and will use him for YouTube next. Hire him; he's elite.",
		clientName: "Doctor Pretesh",
		clientTitle: "Doctor & Content Creator",
		clientImage: "/image/client3.jpg",
	},
	{
		quote: "Tanmay transformed our video content overnight. From rushed deadlines to outstanding quality, his work exceeded our expectations and elevated our brand.",
		clientName: "Harper Carroll",
		clientTitle: "No.1 Tech & AI Creator",
		clientImage: "/image/client2.jpg",
	},
	{
		quote: "Tanmay and his team at Framerz set a new standard for video editing with exceptional quality and efficiency. 10000/10.",
		clientName: "Tal Navarro",
		clientTitle: "Founder @ Social Lady",
		clientImage: "/image/client6.jpg",
	},
	// {
	// 	quote: "What sets Diwas apart is not just the quality, but the ability to deeply understand our vision. Every project has been smooth, fast, and on point.",
	// 	clientName: "Ross Flderjohn",
	// 	clientTitle: "Creative Director @ SparkLab",
	// 	clientImage: "/image/client5.jpg",
	// },
	// {
	// 	quote: "The results speak for themselves. We’ve seen higher engagement and better branding since we started working with Diwas.",
	// 	clientName: "Harper Carroll",
	// 	clientTitle: "Marketing Head @ Drift Media",
	// 	clientImage: "/image/client2.jpg",
	// }
];


const ClientCommentsSection = () => {
	const cardHeight = 250; // Fixed height for each comment box
	const gapHeight = 32; // Adjusted to gap-8 for spacing
	const scrollSpeed = 30; // pixels per second

	// Distribute comments into columns and duplicate for seamless looping
	const getColumnContent = (startIndex: number) => {
		const columnData = clientComments.filter((_, i) => i % 3 === startIndex);
		return [...columnData, ...columnData, ...columnData]; // Duplicate for seamless scroll
	};

	const column1Comments = getColumnContent(0);
	const column2Comments = getColumnContent(1);
	const column3Comments = getColumnContent(2);

	const calculateAnimationProps = (numItemsInOriginalColumn: number) => {
		if (numItemsInOriginalColumn === 0) return { totalHeight: 0, duration: 0 };
		const totalHeight = numItemsInOriginalColumn * cardHeight + (numItemsInOriginalColumn - 1) * gapHeight;
		const duration = totalHeight / scrollSpeed;
		return { totalHeight, duration };
	};

	const { totalHeight: totalHeight1, duration: duration1 } = calculateAnimationProps(clientComments.filter((_, i) => i % 3 === 0).length);
	const { totalHeight: totalHeight2, duration: duration2 } = calculateAnimationProps(clientComments.filter((_, i) => i % 3 === 1).length);
	const { totalHeight: totalHeight3, duration: duration3 } = calculateAnimationProps(clientComments.filter((_, i) => i % 3 === 2).length);

	return (
		<section className="py-24 bg-black/50 text-white overflow-hidden relative">
			<div className="container mx-auto px-4 sm:px-8 relative z-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-6xl mb-4  font-helvetica">
						<span className="font-helvetica ">What our </span>
						<span className="font-display-italic bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
							clients say.
						</span>
					</h2>
					<p className="text-lg text-gray-400 max-w-2xl mx-auto font-helvetica ">
						Hear directly from those who have experienced our dedication to quality.
					</p>
				</motion.div>

				<style>{`
          @keyframes scroll-down {
            0% { transform: translateY(0); }
            100% { transform: translateY(-${totalHeight1}px); }
          }
          @keyframes scroll-up {
            0% { transform: translateY(-${totalHeight2}px); }
            100% { transform: translateY(0); }
          }
          @keyframes scroll-down-3 {
            0% { transform: translateY(0); }
            100% { transform: translateY(-${totalHeight3}px); }
          }

          .animate-scroll-down {
            animation: scroll-down var(--scroll-duration) linear infinite;
          }
          .animate-scroll-up {
            animation: scroll-up var(--scroll-duration) linear infinite;
          }
          .animate-scroll-down-3 {
            animation: scroll-down-3 var(--scroll-duration) linear infinite;
          }

          .column-container {
            position: relative;
          }

          .column-container::before,
          .column-container::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 100px; /* Height of the blur fade */
            z-index: 10;
            pointer-events: none; /* Allows interaction with content underneath */
          }

          .column-container::before {
            top: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
          }

          .column-container::after {
            bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
          }

          .column-container:hover .animate-scroll-down,
          .column-container:hover .animate-scroll-up {
            animation-play-state: paused;
          }
        `}</style>

				<div className="flex justify-center gap-8 relative overflow-hidden h-[800px]">
					{/* Column 1: Scroll Down */}
					<div className="flex flex-col gap-12 column-container overflow-hidden w-[300px]">
						<div className="animate-scroll-down" style={{ '--scroll-duration': `${duration1}s` } as React.CSSProperties}>
							{column1Comments.map((comment, index) => (
								<div
									key={index}
									className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col p-6 my-6"
									style={{ flexShrink: 0, height: `${cardHeight}px` }}
								>
									<blockquote className="text-base leading-relaxed mb-4 font-helvetica  flex-grow overflow-hidden">
										{comment.quote}
									</blockquote>
									<div className="flex items-center gap-3 mt-4">
										<img src={comment.clientImage} alt={comment.clientName} className="w-10 h-10 rounded-full border-2 border-blue-500/30 object-cover" />
										<div>
											<div className="text-white font-semibold text-base">{comment.clientName}</div>
											<div className="text-gray-400 text-xs">{comment.clientTitle}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Column 2: Scroll Up */}
					<div className="flex-col gap-12 column-container overflow-hidden w-[300px] hidden md:flex">
						<div className="animate-scroll-up" style={{ '--scroll-duration': `${duration2}s` } as React.CSSProperties}>
							{column2Comments.map((comment, index) => (
								<div
									key={index}
									className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col p-6 my-6"
									style={{ flexShrink: 0, height: `${cardHeight}px` }}
								>
									<blockquote className="text-base leading-relaxed mb-4  flex-grow overflow-hidden">
										"{comment.quote}"
									</blockquote>
									<div className="flex items-center gap-3 mt-4">
										<img src={comment.clientImage} alt={comment.clientName} className="w-10 h-10 rounded-full border-2 border-blue-500/30 object-cover" />
										<div>
											<div className="text-white font-semibold text-base">{comment.clientName}</div>
											<div className="text-gray-400 text-xs">{comment.clientTitle}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Column 3: Scroll Down */}
					<div className="flex-col gap-12 column-container overflow-hidden w-[300px] hidden lg:flex">
						<div className="animate-scroll-down-3" style={{ '--scroll-duration': `${duration3}s` } as React.CSSProperties}>
							{column3Comments.map((comment, index) => (
								<div
									key={index}
									className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col p-6 my-6"
									style={{ flexShrink: 0, height: `${cardHeight}px` }}
								>
									<blockquote className="text-base leading-relaxed mb-4  flex-grow overflow-hidden">
										"{comment.quote}"
									</blockquote>
									<div className="flex items-center gap-3 mt-4">
										<img src={comment.clientImage} alt={comment.clientName} className="w-10 h-10 rounded-full border-2 border-blue-500/30 object-cover" />
										<div>
											<div className="text-white font-semibold text-base">{comment.clientName}</div>
											<div className="text-gray-400 text-xs">{comment.clientTitle}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClientCommentsSection;