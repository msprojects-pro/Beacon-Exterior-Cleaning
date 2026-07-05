import React from "react";
import * as Icons from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  
  // Dynamic icon component helper
  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Sparkles className={className} />;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-sm text-brand-coral uppercase tracking-widest bg-brand-coral/10 px-4 py-1.5 rounded-full inline-block">
            OUR PROFESSIONAL SERVICES
          </span>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mt-6 mb-4">
            Professional Exterior Cleans <br />
            For All Domestic &amp; Commercial Properties
          </h2>
          
          <p className="font-sans text-slate-500 text-sm sm:text-base lg:text-lg">
            We use specialized cleaning methods tailored for each individual material. Check out our detailed services below and get in touch for a completely free site visit and estimate.
          </p>
        </div>

        {/* Services Bento-style/Clean Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: Service, idx: number) => {
            const isFeatured = service.id === "full-transformation";
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl border p-8 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-gradient-to-br from-slate-950 to-slate-900 text-white border-slate-800 md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 lg:gap-8 items-center"
                    : "bg-white border-slate-100 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5"
                }`}
              >
                {/* Visual Accent Corner on regular cards */}
                {!isFeatured && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-orange/5 to-transparent rounded-tr-3xl rounded-bl-full pointer-events-none"></div>
                )}

                {/* For Featured Transformation layout */}
                {isFeatured ? (
                  <>
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-coral to-brand-orange text-white flex items-center justify-center shadow-md">
                          {renderIcon(service.iconName, "w-6 h-6")}
                        </div>
                        <span className="bg-brand-coral font-sans text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white">
                          RECOMMENDED VALUE
                        </span>
                      </div>

                      <h3 className="font-display font-black text-2xl text-white">
                        {service.title}
                      </h3>
                      
                      <p className="font-sans text-slate-300 text-sm sm:text-base max-w-2xl">
                        {service.description}
                      </p>

                      {/* Benefits & pricing */}
                      <div className="grid sm:grid-cols-2 gap-4 py-2">
                        <div>
                          <h4 className="font-sans font-bold text-xs text-brand-orange tracking-wider uppercase mb-2">Package Benefits</h4>
                          <ul className="space-y-1.5">
                            {service.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                                <Icons.CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-xs text-brand-orange tracking-wider uppercase mb-2">Services Included</h4>
                          <ul className="space-y-1.5">
                            {service.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                                <Icons.Sparkles className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 mt-6 lg:mt-0 w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-center text-center">
                      <span className="font-sans font-bold text-slate-400 text-xs uppercase tracking-wider">TRANSFORM YOUR WHOLE PROPERTY</span>
                      <span className="font-display font-black text-2xl text-brand-orange mt-3 mb-2">Tailored Service Pack</span>
                      <span className="font-sans text-xs text-slate-400 mb-6">Fully customisable package with coordinated professional attention.</span>
                      <button
                        onClick={() => onOpenQuote(service.title)}
                        className="w-full font-display font-extrabold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral to-brand-orange hover:from-brand-coral hover:to-brand-coral transition-colors duration-200 py-4 rounded-xl shadow-lg shadow-brand-coral/10 hover:shadow-xl"
                      >
                        Enquire About Package
                      </button>
                    </div>
                  </>
                ) : (
                  // Regular Service Card Layout
                  <>
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-coral flex items-center justify-center mb-6">
                        {renderIcon(service.iconName, "w-6 h-6")}
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features Bullet List */}
                      <ul className="space-y-2 pt-2 border-t border-slate-50 mt-4">
                        {service.features.slice(0, 3).map((feat, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-slate-600">
                            <Icons.Check className="w-3.5 h-3.5 text-brand-orange font-bold shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Info and Trigger */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">GET EXPERT SERVICE</span>
                        <span className="block font-sans text-xs text-slate-500 mt-0.5">Free custom assessment</span>
                      </div>
                      
                      <button
                        onClick={() => onOpenQuote(service.title)}
                        className="font-sans font-bold text-xs uppercase tracking-wider text-brand-coral hover:text-brand-orange transition-colors duration-200 flex items-center gap-1 group"
                      >
                        <span>Enquire Now</span>
                        <Icons.ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
