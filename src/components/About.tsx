import React from "react";
import { Check, Shield, Star, Award, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function About() {
  const coreStats = [
    { label: "Client Satisfaction", value: "100%", description: "Guaranteed satisfaction score" },
    { label: "Areas Covered", value: "7+", description: "Worcestershire & West Midlands" },
    { label: "Fully Insured", value: "Covered", description: "Comprehensive insurance" },
    { label: "Completed Transforms", value: "500+", description: "Properties made like-new" }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative vector background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Image / Graphics Layout */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Stacked decorative colored border backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-coral to-brand-orange rounded-3xl transform translate-x-4 translate-y-4 shadow-lg opacity-10"></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl">
                <div className="absolute -top-6 -right-6 bg-gradient-to-tr from-brand-coral to-brand-orange text-white p-4 rounded-2xl shadow-lg shadow-brand-coral/25">
                  <Award className="w-8 h-8" />
                </div>

                <span className="font-mono text-xs font-bold text-brand-coral uppercase tracking-wider mb-2 block">
                  Why Choose Beacon?
                </span>
                
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  Guaranteed Quality &amp; Trust
                </h3>

                <ul className="space-y-4">
                  {[
                    {
                      title: "Fully Insured Specialists",
                      desc: "Complete comprehensive public liability insurance for your absolute peace of mind and security."
                    },
                    {
                      title: "Eco-Friendly Safe Cleaners",
                      desc: "We use organic-safe biodegradable biocides that safely dissolve moss, algae, and lichens."
                    },
                    {
                      title: "Tailored Multi-Surface Care",
                      desc: "Each material—whether slate tiles, K-Rend, block paving, or delicate sandstone—is cleaned with specialized low or high-pressure systems."
                    },
                    {
                      title: "No Hidden Costs",
                      desc: "Our quote assessments are fully comprehensive and transparent. The price we quote is the price you pay."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-4 h-4 text-brand-coral font-bold" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-slate-900 leading-snug">{item.title}</h4>
                        <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Block - Brand Story & Details */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-2xl">
              <span className="font-sans font-extrabold text-sm text-brand-coral uppercase tracking-widest bg-brand-coral/10 px-4 py-1.5 rounded-full w-fit">
                ABOUT US
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-6 mb-6">
                Premium Exterior Cleaning Services Across Worcestershire &amp; West Midlands
              </h2>

              <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                At <strong>Beacon Exterior Cleaning Services</strong>, we pride ourselves on delivering outstanding transformations for homeowners and businesses alike. Our mission is to restore the pride and protection of your property using the safest, most advanced deep-cleansing techniques available in the UK.
              </p>

              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                Whether moss has taken over your roof, weeds have disrupted your driveway, or unsightly organic algae is staining your render walls, our expert team uses high-grade rotary washers, pure water filtration poles, and temperature-controlled steam solutions to safely eliminate the grime and treat the roots so they do not return.
              </p>

              {/* Service Locations list */}
              <div className="mb-10 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-coral shrink-0" />
                  <h4 className="font-display font-extrabold text-sm text-slate-800 uppercase tracking-wider">
                    Our Local Service Coverage Areas
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS_INFO.areasServed.map((area, index) => (
                    <span
                      key={index}
                      className="font-sans font-medium text-xs text-slate-600 bg-slate-100 hover:bg-brand-orange/10 hover:text-brand-coral transition-colors duration-200 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {coreStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-100 p-4 rounded-xl text-center shadow-sm"
                  >
                    <span className="block font-display font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="block font-sans font-bold text-xs text-slate-800 mt-1">
                      {stat.label}
                    </span>
                    <span className="block font-sans text-[10px] text-slate-400 mt-0.5">
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
