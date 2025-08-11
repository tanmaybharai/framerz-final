import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ClientShowcaseSection from "./ClientShowcaseSection";
import ServicesSection from "./ServicesSection";
import MouseFollower from "./MouseFollower";
import Footer from "./Footer";
import ExperienceSection from "./ExperienceSection";
import ClientCommentsSection from "./ClientCommentsSection";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";
import React from "react";
import ParticlesBackground from "./ParticlesBackground"


// Add the new section component
const YouAreInGoodHands = () => (
  <section className="relative flex flex-col items-center justify-center py-16">
    {/* Stronger Glow effect */}
    <div className="relative z-10 flex flex-col items-center w-full sm:static -top-20 sm:top-0">
      <span className="text-gray-200 text-3xl font-semibold mb-6 tracking-wide">You're in good hands</span>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full max-w-4xl ">
        <img src="/logo/Meta-Logo.png" alt="Meta" className="h-14" />
        <img src="/logo/Atlassian.png" alt="Atlassian" className="h-7" />
        <img src="/logo/NVIDIA_logo.png" alt="NVIDIA" className="h-10" />
        <img src="/logo/OnePlus-Logo.png" alt="OnePlus" className="h-20" />
        <img src="/logo/social lady.png" alt="Social_lady" className="h-10" />
        <img src="/logo/stammer ai.png" alt="stammer_ai" className="h-10" />
        
      </div>
    </div>
  </section>
);

// CalendlySection is temporarily commented due to external asset redirect issues.
// The Calendly embed may cause net::ERR_TOO_MANY_REDIRECTS due to a server-side problem with Calendly's asset delivery.
// See: https://assets.calendly.com/assets/booking/js/booking-0c5ad9aa.js
// Once Calendly resolves the issue, you can safely re-enable this section.
const CalendlySection = () => (
  <section
    id="contact"
    className="py-16 max-sm:py-10 bg-black/50 flex flex-col items-center justify-center relative max-sm:px-4"
  >
    <h2 className="text-3xl max-sm:text-2xl sm:text-4xl font-bold text-white mb-6 relative z-10">
      Book a Call
    </h2>
    <div className="w-full max-w-2xl max-sm:max-w-sm rounded-xl overflow-hidden shadow-xl border border-white/10 bg-zinc-900 relative z-10">
      <iframe
        src="https://calendly.com/tanmaybharai/discovery-call-for-video-editing"
        width="100%"
        height="600"
        frameBorder="0"
        className="w-full h-[600px] max-sm:h-[450px] min-h-[400px] bg-black"
        title="Book a call with us"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);


/** Add the new FAQ section */
const FAQSection = () => {
  const faqs = [
    { q: "How fast will I receive my videos?", a: "Most videos are delivered within 2-3 business days, depending on complexity and queue." },
    { q: "How do I request videos?", a: "You can request videos via our dashboard or by email. We'll guide you through the process!" },
    { q: "Why wouldn't I just hire my own editor?", a: "We offer flexibility, speed, and a team of experts—no hiring, training, or management required." },
    { q: "What if I'm not happy with my video?", a: "We offer unlimited revisions until you're satisfied with the result." },
    { q: "Do you offer trials or make example videos?", a: "Yes! We can create a sample video or offer a trial depending on your needs." },
    { q: "Are there any refunds if I don't like the service?", a: "We have a satisfaction guarantee. If you're not happy, we'll work with you to make it right or offer a refund." },
  ];
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <section id="faqs" className="py-16 bg-black/50 flex flex-col items-center justify-center px-4 relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 relative z-10">FAQs</h2>
      <div className="w-full max-w-2xl flex flex-col gap-4 mb-8 relative z-10">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-zinc-900 px-6 py-5 text-left shadow-lg transition-all duration-300 cursor-pointer hover:border-blue-400"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-medium">{faq.q}</span>
              <span className="text-2xl text-gray-400 font-bold">{open === idx ? '-' : '+'}</span>
            </div>
            {open === idx && (
              <div className="mt-3 text-gray-300 text-base animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className="inline-flex items-center justify-center bg-[#0070F3] hover:bg-[#0056D8] text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-md border border-[#0070F3]/30 focus:outline-none focus:ring-2 focus:ring-[#0070F3] relative z-10"
      >
        Book a 30-min call
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </section>
  );
};

const HomePage = () => {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-black smooth-scroll relative">
      <>
        <Navbar />
        <MouseFollower />
        <section id="hero" className="relative">
          <ParticlesBackground />
          <HeroSection />
        </section>
        <div className="bg-black">
          <YouAreInGoodHands />
          <section id="experience" className="relative z-10">
            <ExperienceSection />
          </section>
          <section id="services" className="relative z-10">
            <ServicesSection />
          </section>
          <section id="testimonials" className="relative z-10">
            <ClientShowcaseSection />
          </section>
          <section className="relative z-10">
            <ClientCommentsSection />
          </section>
          <section id="contact" className="relative z-10">
            <CalendlySection />
          </section>
          <section id="faqs" className="relative z-10">
            <FAQSection />
          </section>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </>
    </div>
  );
};

export default HomePage;
