import React, { useState } from "react";
import { GALLERY_DATA } from "../data";
import { Sparkles, Eye, Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Keep track of toggle states for the simpler before/after cards
  const [toggledBeforeAfter, setToggledBeforeAfter] = useState<Record<string, boolean>>({});

  const categories = ["All", "Driveway & Patio", "Roof Cleaning", "Render Cleaning", "Gutter Cleaning"];

  const filteredItems = activeFilter === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const toggleImage = (id: string) => {
    setToggledBeforeAfter(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans font-extrabold text-sm text-brand-coral uppercase tracking-widest bg-brand-coral/10 px-4 py-1.5 rounded-full inline-block">
            BEFORE &amp; AFTER PORTFOLIO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mt-6 mb-4">
            See the Beacon Difference
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base lg:text-lg">
            A picture is worth a thousand words. Browse real, unaltered before-and-after projects of residential and commercial properties completed by our specialist UK crew.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl border transition-all duration-200 ${
                activeFilter === category
                  ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white border-slate-200 text-slate-600 hover:border-brand-coral hover:text-brand-coral"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Interactive Click-to-Compare feature */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => {
            const showBefore = toggledBeforeAfter[project.id] || false;
            
            return (
              <div
                key={project.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Slider Toggle */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 group select-none">
                  {/* Before Image */}
                  <img
                    src={project.beforeUrl}
                    alt={`${project.title} - Before`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                      showBefore ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* After Image */}
                  <img
                    src={project.afterUrl}
                    alt={`${project.title} - After`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                      !showBefore ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="font-sans font-extrabold text-[10px] tracking-wider uppercase text-white bg-slate-950/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <span className={`font-display font-extrabold text-[10px] tracking-widest uppercase text-white px-3 py-1.5 rounded-lg shadow-md ${
                      showBefore ? "bg-red-600 animate-pulse" : "bg-emerald-600"
                    }`}>
                      {showBefore ? "BEFORE" : "AFTER CLEAN"}
                    </span>
                  </div>

                  {/* Dynamic Action Trigger Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <button
                      onClick={() => toggleImage(project.id)}
                      className="bg-white hover:bg-brand-coral hover:text-white text-slate-900 font-display font-extrabold text-xs uppercase tracking-widest px-5 py-3 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <Eye className="w-4.5 h-4.5" />
                      <span>{showBefore ? "Show Clean (After)" : "Show Dirty (Before)"}</span>
                    </button>
                  </div>

                  {/* Small Floating Control Ribbon */}
                  <div className="absolute bottom-4 left-0 right-0 mx-auto w-fit z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleImage(project.id);
                      }}
                      className="bg-slate-950/80 backdrop-blur-sm hover:bg-slate-950 text-white font-sans font-bold text-[11px] tracking-wide py-2 px-4 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Tap to Compare</span>
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 border-t border-slate-50 pt-4 text-xs font-mono text-brand-coral font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Incredible UK Transformation</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
