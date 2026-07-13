import React, { useEffect, useRef, useState } from "react";
import { skillLogos } from "../info";

// Glowing accent halos for each category type
const glowPalette = [
  "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] group-hover:border-cyan-400/40",
  "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] group-hover:border-purple-500/40",
  "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.25)] group-hover:border-orange-400/40",
];

const indicatorDots = ["bg-cyan-400", "bg-purple-500", "bg-orange-400"];

const Skills = () => {
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
      id="Skills"
      className="relative w-full overflow-hidden bg-slate-950 py-20 lg:py-28 text-white"
    >
      {/* High-Performance Custom Floating Physics Engine */}
      <style>{`
        @keyframes float-orb-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-12px) translateX(6px) rotate(3deg); }
        }
        @keyframes float-orb-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(10px) translateX(-8px) rotate(-4deg); }
        }
        @keyframes float-orb-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-8px) translateX(-10px) rotate(-2deg); }
        }
        @keyframes float-orb-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(12px) translateX(8px) rotate(4deg); }
        }

        .animate-float-1 { animation: float-orb-1 7s ease-in-out infinite; }
        .animate-float-2 { animation: float-orb-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-orb-3 6.5s ease-in-out infinite; }
        .animate-float-4 { animation: float-orb-4 8.5s ease-in-out infinite; }

        /* Pause drifting smoothly on hover so user can easily click/interact */
        .hover-pause-float:hover {
          animation-play-state: paused !important;
        }

        .skills-section-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skills-section-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float-1, .animate-float-2, .animate-float-3, .animate-float-4 { animation: none; }
          .skills-section-reveal { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Deep Space Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[140px]" />
      </div>

      <div
        ref={sectionRef}
        className={`relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 z-10 flex flex-col gap-16 skills-section-reveal ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Modern Section Header */}
        <div className="text-center">
          <h1 className="font-black text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            SKILLS
          </h1>
          <div className="w-20 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            An interactive galaxy of technologies and frameworks I use to build seamless digital ecosystems.
          </p>
        </div>

        {/* Vertical Stack of Category Galaxies */}
        <div className="flex flex-col gap-12">
          {skillLogos.map((category, index) => {
            const currentGlowClass = glowPalette[index % glowPalette.length];
            const currentDotColor = indicatorDots[index % indicatorDots.length];

            return (
              <div key={index} className="flex flex-col gap-6">
                
                {/* Minimalist Sub-Header Label */}
                <div className="flex items-center gap-3 px-2">
                  <span className={`w-2 h-2 rounded-full ${currentDotColor} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
                  <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-gray-300">
                    {category.title}
                  </h2>
                </div>

                {/* Self-Balancing Fluid Cluster Field (Eliminates Empty Grid Spaces) */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-inner">
                  {category.skills.map((item, i) => {
                    // Assign alternate mathematical floating tracks based on list array indexing
                    const floatId = (i % 4) + 1;
                    const floatAnimationClass = `animate-float-${floatId}`;

                    return (
                      <div
                        key={i}
                        className={`${floatAnimationClass} hover-pause-float group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center p-3 bg-slate-900/40 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 cursor-pointer select-none z-10 ${currentGlowClass}`}
                      >
                        {/* Internal Neon Accent Ring Background */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                        
                        {/* Scaled Tech Logo Vector */}
                        <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                          <img
                            className="max-h-full max-w-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                            src={item.logo}
                            alt={item.name || "Skill logo"}
                            loading="lazy"
                          />
                        </div>

                        {/* Centered Precision Typography Text Label */}
                        {item.name && (
                          <span className="text-[10px] sm:text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 mt-2 text-center px-1 truncate max-w-full tracking-wide">
                            {item.name}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;