import React, { useEffect, useRef, useState } from "react";
import { EducationInfo } from "../info";

const Education = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="Education"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-950 py-20 lg:py-28 text-white"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] animate-[edu-drift-1_22s_infinite_ease-in-out]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] animate-[edu-drift-2_18s_infinite_ease-in-out]" />
      </div>

      <style>{`
        @keyframes edu-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.15); }
        }
        @keyframes edu-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(0.9); }
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 z-10 flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
            EDUCATION
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium">
            My academic foundation and qualifications
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl mx-auto mt-4 flex flex-col gap-12 sm:gap-16">
          
          {/* Animated Center Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent -translate-x-1/2 origin-top transition-transform duration-[1500ms] ease-out"
               style={{ transform: isVisible ? "scaleY(1)" : "scaleY(0)" }} 
          />

          {EducationInfo.map((info, index) => {
            // Alternating color accent accents for nodes and highlights
            const dotColors = ["bg-purple-500 shadow-purple-500/50", "bg-cyan-500 shadow-cyan-500/50", "bg-orange-500 shadow-orange-500/50"];
            const currentColorClass = dotColors[index % dotColors.length];

            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row w-full items-center ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Pulse Node */}
                <div 
                  className={`absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 w-4 h-4 rounded-full ${currentColorClass} shadow-[0_0_12px_3px_rgba(255,255,255,0.1)] transition-all duration-700 ease-out`}
                  style={{
                    transform: `translateX(-50%) scale(${isVisible ? 1 : 0})`,
                    transitionDelay: `${index * 300 + 400}ms`
                  }}
                >
                  <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${currentColorClass}`} />
                </div>

                {/* Content Side Card */}
                <div 
                  className={`w-full sm:w-[45%] ml-14 sm:ml-0 transition-all duration-1000 ease-out ${
                    index % 2 === 0 
                      ? "sm:mr-auto text-left" 
                      : "sm:ml-auto text-left"
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? "translateX(0)" 
                      : `translateX(${index % 2 === 0 ? "40px" : "-40px"})`,
                    transitionDelay: `${index * 250}ms`
                  }}
                >
                  <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 shadow-xl shadow-black/10">
                    
                    {/* Inner Content Layout */}
                    <div className="flex flex-col gap-4">
                      
                      <div className="flex items-start gap-4">
                        {info.collageLogo && (
                          <img
                            className="h-14 w-14 object-contain rounded-xl bg-white/5 p-1 border border-white/10 shrink-0 group-hover:scale-105 transition-transform duration-300"
                            src={info.collageLogo}
                            alt={info.collageName}
                          />
                        )}
                        <div className="flex flex-col min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white line-clamp-2">
                            {info.degree}
                          </h3>
                          <p className="text-gray-300 font-medium text-sm sm:text-base mt-0.5 line-clamp-1">
                            {info.collageName}
                          </p>
                          <span className="inline-block text-xs font-semibold text-cyan-400 mt-1">
                            {info.date}
                          </span>
                        </div>
                      </div>

                      {/* Performance / Grades Badge */}
                      {info.cgpa && (
                        <div className="inline-flex items-center self-start px-2.5 py-1 rounded-md text-xs font-bold bg-white/5 border border-white/10 text-amber-400 tracking-wide">
                          {info.cgpa}
                        </div>
                      )}

                      {/* Description */}
                      {info.descereption && (
                        <div className="text-sm text-gray-400 leading-relaxed font-normal">
                          {info.descereption}
                          
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacing element for structural balancing on wide screens */}
                <div className="hidden sm:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;