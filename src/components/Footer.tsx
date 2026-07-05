import React from "react";
import Logo from "./Logo";
import { Phone, Mail, Clock, ShieldCheck, MapPin, ArrowUp } from "lucide-react";
import { BUSINESS_INFO, SERVICES_DATA } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Logo showText={true} light={true} className="h-11 w-11" />
            
            <p className="font-sans text-sm text-slate-400 leading-relaxed">
              Professional exterior cleaning services in Worcestershire &amp; the West Midlands. Fully insured specialists cleaning clay tiles, renders, sandstone patios, and block-paving driveways with guaranteed satisfaction.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/10 w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Full Public Liability Insurance</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans text-sm font-semibold">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Before & After", href: "#gallery" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "#services")}
                    className="hover:text-brand-orange transition-colors duration-200 block text-slate-400 font-medium"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact info block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white">
              Contact Beacon
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Call or WhatsApp</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-brand-orange transition-colors duration-200 font-bold block">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4.5 h-4.5 text-brand-coral shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Email</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-brand-orange transition-colors duration-200 font-semibold break-all block">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4.5 h-4.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Hours</span>
                  <span className="text-slate-300 font-medium">{BUSINESS_INFO.workingHours}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-sans text-xs text-slate-500">
              &copy; {currentYear} Beacon Exterior Cleaning Services. All rights reserved. Registered in the United Kingdom.
            </p>
            <p className="font-sans text-[10px] text-slate-600">
              Proudly delivering professional property restoration services across Worcester, Bromsgrove, Solihull, Redditch, Stourbridge, and the West Midlands.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="bg-slate-900 hover:bg-brand-coral hover:text-white text-slate-400 p-3 rounded-xl transition-all duration-300 shadow-md group"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
}
