import React from "react";
import { Star, Quote, ShieldAlert, CheckCircle } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-sm text-brand-coral uppercase tracking-widest bg-brand-coral/10 px-4 py-1.5 rounded-full inline-block">
            CUSTOMER REVIEWS &amp; RATING
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mt-6 mb-4">
            Loved By Homeowners Across The Midlands
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base lg:text-lg">
            Our highest priority is absolute client satisfaction. Read through verified 5-star feedback from local homeowners who experienced our friendly exterior transformations.
          </p>
        </div>

        {/* Testimonials Bento/Google Style Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl relative flex flex-col justify-between group hover:bg-white hover:border-brand-orange/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative quotation icon */}
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-brand-orange/10 transition-colors duration-300">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange shrink-0" />
                  ))}
                  <span className="font-mono text-xs font-bold text-slate-400 ml-2">5.0 Rating</span>
                </div>

                {/* Review Text */}
                <blockquote className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200/60 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center font-display font-extrabold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900 leading-none">
                      {testimonial.name}
                    </h4>
                    <span className="font-sans text-xs text-slate-500 mt-1 block">
                      {testimonial.location}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    <CheckCircle className="w-3 h-3 shrink-0" />
                    <span>Verified Clean</span>
                  </span>
                  <span className="block font-sans text-[10px] text-slate-400 mt-1.5 font-medium">
                    Service: {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* trust indicators footer */}
        <div className="mt-16 bg-gradient-to-tr from-slate-900 to-slate-950 text-white rounded-3xl p-8 text-center border border-slate-800">
          <div className="grid sm:grid-cols-3 gap-8 items-center justify-center">
            <div>
              <span className="block font-display font-black text-3xl text-brand-orange">5.0 / 5</span>
              <span className="block font-sans text-xs text-slate-400 mt-1">Average Google Rating</span>
            </div>
            <div className="sm:border-x sm:border-slate-800 py-2">
              <span className="block font-display font-black text-3xl text-white">100%</span>
              <span className="block font-sans text-xs text-slate-400 mt-1">Satisfaction Guarantee Refund policy</span>
            </div>
            <div>
              <span className="block font-display font-black text-3xl text-brand-coral">No Deposit</span>
              <span className="block font-sans text-xs text-slate-400 mt-1">Pay only when you are 100% happy</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
