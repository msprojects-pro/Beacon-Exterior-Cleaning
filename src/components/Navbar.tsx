import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS_INFO } from "../data";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Before & After", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer behavior based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of fixed header
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-slate-100"
          : "bg-gradient-to-b from-slate-950/50 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex-shrink-0">
            <Logo light={!scrolled} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-sans text-[14px] font-semibold tracking-wide uppercase transition-colors duration-200 relative py-1.5 ${
                    scrolled
                      ? isActive
                        ? "text-brand-coral"
                        : "text-slate-600 hover:text-brand-coral"
                      : isActive
                      ? "text-brand-orange"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        scrolled ? "bg-brand-coral" : "bg-brand-orange"
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`flex items-center gap-2 font-sans font-bold text-sm transition-all duration-200 py-2 px-3.5 rounded-full ${
                scrolled
                  ? "text-brand-coral hover:bg-brand-coral/5"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            
            <button
              onClick={onOpenQuote}
              className="font-display font-bold text-sm tracking-wide uppercase bg-gradient-to-r from-brand-coral to-brand-orange text-white hover:from-brand-coral hover:to-brand-coral transition-all duration-300 px-5 py-2.5 rounded-full shadow-md shadow-brand-coral/20 hover:shadow-lg hover:shadow-brand-coral/30 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`p-2 rounded-full transition-colors duration-200 ${
                scrolled ? "text-slate-700 bg-slate-100 hover:bg-slate-200" : "text-white bg-white/10 hover:bg-white/20"
              }`}
              title="Call Beacon"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] md:top-[68px] z-40 bg-white shadow-xl transition-all duration-300 transform border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-80px)] ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-xl font-sans text-[15px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-brand-coral/10 text-brand-coral font-extrabold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-coral"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="pt-4 border-t border-slate-100 mt-4 space-y-3 px-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>CALL / WHATSAPP:</span>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="font-sans font-bold text-slate-950 text-sm">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
            
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full font-display font-bold text-center text-sm tracking-wider uppercase bg-gradient-to-r from-brand-coral to-brand-orange text-white py-3 rounded-xl shadow-md shadow-brand-coral/10 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
