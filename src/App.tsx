/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import { BUSINESS_INFO } from "./data";
import { Phone, MessageCircle } from "lucide-react";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenQuote = (serviceName: string = "") => {
    setPreselectedService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreselectedService("");
  };

  return (
    <div className="font-sans text-slate-800 antialiased bg-white selection:bg-brand-coral/10 selection:text-brand-coral">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Hero Header Section */}
      <Hero onOpenQuote={() => handleOpenQuote()} />

      {/* Trust & About Info Section */}
      <About />

      {/* Services Grid Section */}
      <Services onOpenQuote={(serviceName) => handleOpenQuote(serviceName)} />

      {/* Interactive Before & After Showcase Gallery */}
      <Gallery />

      {/* Testimonials Review Feed */}
      <Testimonials />

      {/* Functional Contact Query Form */}
      <Contact />

      {/* Footer Details */}
      <Footer />

      {/* Interactive Estimate Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={preselectedService}
      />

      {/* Floating Action Button (Vibrant Call/WhatsApp Widget) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[\s+]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] active:scale-95 hover:scale-105 transition-all duration-300 group"
          title="Chat with Beacon on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 ease-out font-sans font-bold text-xs uppercase tracking-wider whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>

        {/* Call Button (Vibrant Brand Orange Accent) */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center gap-2 bg-gradient-to-tr from-brand-coral to-brand-orange text-white p-3.5 rounded-full shadow-2xl hover:shadow-brand-coral/40 active:scale-95 hover:scale-105 transition-all duration-300 group relative"
          title="Call Beacon Office"
        >
          {/* Subtle radar pulse effect */}
          <span className="absolute inset-0 rounded-full bg-brand-orange/40 -z-10 animate-ping opacity-75"></span>
          
          <Phone className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 ease-out font-sans font-bold text-xs uppercase tracking-wider whitespace-nowrap">
            Call Office
          </span>
        </a>
      </div>
    </div>
  );
}
