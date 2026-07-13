import React, { useEffect, useRef, useState } from "react";
import { skillLogos } from "../info";

const dotPalette = ["bg-cyan-400", "bg-[#8245ec]", "bg-orange-400"];

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Skills"
      className="relative bg-gradient-to-b from to-blue-950 w-full overflow-hidden"
    >
      <style>{`
        @keyframes skills-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(45px, -35px) scale(1.06); }
        }
        @keyframes skills-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 35px) scale(1.08); }
        }
        .skills-glow-1 { animation: skills-drift-1 22s ease-in-out infinite; }
        .skills-glow-2 { animation: skills-drift-2 18s ease-in-out infinite; }
        .skills-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }
        .skills-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-glow-1, .skills-glow-2 { animation: none; }
          .skills-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      {/* ambient glow, own placement/timing distinct from Home and About */}
      <div
        className="skills-glow-1 absolute top-[5%] left-[8%] size-[24rem] rounded-full bg-cyan-500 opacity-[0.13] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="skills-glow-2 absolute bottom-[-5%] right-[8%] size-[26rem] rounded-full bg-[#8245ec] opacity-[0.15] blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={sectionRef}
        className="relative max-w-6xl mx-auto pt-16 md:pt-20 pb-20 px-4 sm:px-8 md:px-16 flex flex-col gap-10 md:gap-12"
      >
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl text-center text-white">
            SKILLS
          </h1>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-center text-base sm:text-lg md:text-xl p-3 text-gray-400">
            Technologies I've learned and used throughout my development journey
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {skillLogos.map((logo, index) => (
            <div
              key={index}
              className={`skills-reveal ${
                visible ? "is-visible" : ""
              } flex flex-col gap-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-colors duration-300`}
              style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`size-2.5 rounded-full ${
                    dotPalette[index % dotPalette.length]
                  }`}
                ></span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  {logo.title}
                </h2>
              </div>

              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
                {logo.skills.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <img
                      className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                      src={item.logo}
                      alt={item.name || ""}
                    />
                    {item.name && (
                      <span className="text-[11px] sm:text-xs text-gray-400 text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;