import React, { useEffect, useRef, useState } from "react";
import { ProjectInfo } from "../info";

const dotPalette = ["bg-cyan-400", "bg-purple-500", "bg-orange-400"];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Projects"
      className="relative w-full overflow-hidden bg-slate-950 py-20 lg:py-28 text-white"
    >
      <style>{`
        @keyframes projects-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -25px) scale(1.08); }
        }
        @keyframes projects-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 35px) scale(0.95); }
        }
        .projects-glow-1 { animation: projects-drift-1 22s ease-in-out infinite; }
        .projects-glow-2 { animation: projects-drift-2 26s ease-in-out infinite; }
        
        .projects-section-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .projects-section-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Dynamic Cosmic Background Halos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="projects-glow-1 absolute top-[5%] left-[12%] w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[130px]" />
        <div className="projects-glow-2 absolute bottom-[5%] right-[12%] w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[130px]" />
      </div>

      <div
        ref={sectionRef}
        className={`relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 z-10 flex flex-col gap-16 projects-section-reveal ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Section Header */}
        <div className="text-center">
          <h1 className="font-black text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            PROJECTS
          </h1>
          <div className="w-20 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            A curated stack of production-ready web architectures built end-to-end.
          </p>
        </div>

        {/* Premium Sticky Cascading Card Deck Container */}
        <div className="flex flex-col gap-16 sm:gap-24 pb-12">
          {ProjectInfo.map((item, i) => {
            const isFlagship = i === 0;
            
            return (
              <div
                key={i}
                // Dynamic top offset calculation gives the deck its organic stacking layers during scroll
                style={{ top: `${90 + i * 24}px` }}
                className={`sticky w-full rounded-3xl bg-slate-900/60 border backdrop-blur-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 transition-all duration-500 group origin-top shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                  isFlagship
                    ? "border-purple-500/30 hover:border-purple-500/50 shadow-purple-950/10"
                    : "border-white/10 hover:border-white/20"
                } hover:bg-slate-900/80 hover:-translate-y-1`}
              >
                {/* Premium Flagship Status Ribbon */}
                {isFlagship && (
                  <span className="absolute -top-3 left-6 z-20 bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-400 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-[0_4px_12px_rgba(168,85,247,0.3)] border border-white/10">
                    Flagship Project
                  </span>
                )}

                {/* Left Side: Modern Image Frame with Interactive Zoom Hover */}
                <div className="w-full lg:w-[45%] aspect-video lg:aspect-auto lg:h-auto overflow-hidden rounded-2xl border border-white/5 shrink-0 relative">
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                {/* Right Side: High-Density Technical Typography Context */}
                <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight break-words group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                      {item.caption}
                    </p>
                  </div>

                  {/* Clean Technical Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((techstack, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-300 transition-colors duration-300 hover:bg-white/[0.06]"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${dotPalette[j % dotPalette.length]} shadow-[0_0_6px_rgba(255,255,255,0.1)]`} />
                        {techstack}
                      </span>
                    ))}
                  </div>

                  {/* Clean Action Navigation Row */}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={item.web}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] active:scale-[0.98]"
                    >
                      <span>Web view</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                    
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={item.github}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold text-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.03] active:scale-[0.98]"
                    >
                      <span>Code</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;