import React from "react";
import { motion } from "motion/react";
import { Phone, CheckCircle2, Star, ShieldCheck, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  // Let's use the actual generated hero image path:
  const heroBg = "/images/driveway_cleaning_hero_1783244587378.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Beacon Exterior Cleaning Service"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to merge into the dark background and accent the brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        <div className="absolute inset-0 bg-radial-at-t from-brand-orange/10 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 right-1/10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-sans text-xs sm:text-sm font-semibold tracking-wide border border-white/15 mb-6 w-fit"
            >
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Fully Insured &amp; Certified Exterior Cleaning Specialists</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            >
              Revitalise Your Home From <br />
              <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                Roof to Driveway &amp; Patio
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              All exterior cleaning services in one place. We combine safe low-pressure softwashing with industrial pressure washing to achieve pristine, long-lasting before/after transformations.
            </motion.p>

            {/* Key Trust Selling Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="grid sm:grid-cols-3 gap-4 mb-8 sm:mb-10 max-w-xl text-sm"
            >
              {[
                "100% Satisfaction Guarantee",
                "Eco-Friendly Biocides",
                "Free, Clear Fixed Pricing"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span className="font-semibold font-sans">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={onOpenQuote}
                className="font-display font-bold text-[15px] uppercase tracking-wider text-center text-white bg-gradient-to-r from-brand-coral to-brand-orange hover:from-brand-coral hover:to-brand-coral transition-all duration-300 px-8 py-4 rounded-xl shadow-lg shadow-brand-coral/25 hover:shadow-xl hover:shadow-brand-coral/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[\s+]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-[15px] uppercase tracking-wider text-center text-slate-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all duration-200 px-8 py-4 rounded-xl flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4.5 h-4.5 text-brand-orange shrink-0 animate-pulse" />
                <span>Call / WhatsApp Us</span>
              </a>
            </motion.div>

          </div>

          {/* TrustPilot Style Rating Card */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="w-full max-w-sm bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Highlight background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-coral/5 rounded-2xl pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center gap-1 mb-4 text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Top-Rated Service Provider
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;The difference in our roof is unbelievable. Moss is completely gone, and the gutters look clean. The Beacon team cleaned everything up. Excellent service.&rdquo;
                </p>

                <div className="flex items-center gap-3.5 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-display font-extrabold text-sm">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white leading-none">Sarah Jenkins</h4>
                    <span className="font-sans text-xs text-slate-400 mt-1 block">Bromsgrove, Worcestershire</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Hero Curve/Angle Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
    </section>
  );
}
