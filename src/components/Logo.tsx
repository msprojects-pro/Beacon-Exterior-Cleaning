import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-10 w-10", showText = true, light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex items-center justify-center rounded-full p-0.5 bg-gradient-to-tr from-brand-coral to-brand-orange shadow-lg shadow-brand-orange/20 ${className}`}>
        {/* Inner Circle container */}
        <div className="relative w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
          {/* Bold B text logo */}
          <span className="font-display font-black text-base text-white transform hover:scale-110 transition-transform duration-300">
            B
          </span>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold text-xl tracking-tight leading-none ${light ? "text-white" : "text-slate-900"}`}>
            BEACON
          </span>
          <span className={`font-sans font-bold text-[9px] tracking-[0.2em] leading-none mt-1 ${light ? "text-brand-orange" : "text-brand-coral"}`}>
            EXTERIOR CLEANING
          </span>
        </div>
      )}
    </div>
  );
}
