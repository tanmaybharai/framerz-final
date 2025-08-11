import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
	{
		question: "What services do you offer?",
		answer: "We offer a comprehensive range of video editing services including YouTube videos, short-form content, podcast editing, ad creatives, explainer videos, and LinkedIn videos."
	},
	{
		question: "How long does it take to complete a project?",
		answer: "Turnaround time varies by project type and complexity. Typically, we deliver within 2-3 business days for standard projects. Rush delivery options are available."
	},
	{
		question: "What's your pricing structure?",
		answer: "Our pricing is based on project type, length, and complexity. We offer competitive rates and custom packages to meet your specific needs. Contact us for a detailed quote."
	},
	{
		question: "Do you offer revisions?",
		answer: "Yes, we include two rounds of revisions in our standard service to ensure you're completely satisfied with the final product."
	},
	{
		question: "How do I get started?",
		answer: "Getting started is easy! Simply book a call through our website, and we'll discuss your project requirements and provide a custom quote."
	}
]

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className="py-24 bg-black/50 text-white relative overflow-x-hidden">
			<div className="container mx-auto px-4 sm:px-6 relative z-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
						FAQ
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						<span className="font-display">Frequently Asked </span>
						<span className="font-display-italic gradient-text-rainbow text-glow">
							Questions
						</span>
					</h2>
					<p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
						Got questions? We've got answers. Here are some common questions about our services.
					</p>
				</motion.div>

				<div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden"
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none"
								>
									<span className="text-base sm:text-lg font-medium">{faq.question}</span>
									<span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
										▼
									</span>
								</button>
								<div
									className={`px-4 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
										openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
									}`}
								>
									<p className="text-gray-400 text-sm sm:text-base">{faq.answer}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQSection
