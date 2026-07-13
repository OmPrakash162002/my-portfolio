import React, { useEffect, useRef, useState } from "react";
import { ProjectInfo } from "../info";

const dotPalette = ["bg-cyan-400", "bg-[#8245ec]", "bg-orange-400"];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Projects"
      className="relative bg-gradient-to-t from to-blue-950 w-full overflow-hidden py-16 md:py-20"
    >
      <style>{`
        @keyframes projects-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -30px) scale(1.07); }
        }
        @keyframes projects-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(35px, 40px) scale(1.05); }
        }
        .projects-glow-1 { animation: projects-drift-1 21s ease-in-out infinite; }
        .projects-glow-2 { animation: projects-drift-2 25s ease-in-out infinite; }
        .projects-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }
        .projects-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .projects-glow-1, .projects-glow-2 { animation: none; }
          .projects-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      {/* ambient glow, own placement/timing consistent with the rest of the site */}
      <div
        className="projects-glow-1 absolute top-[0%] left-[10%] size-[26rem] rounded-full bg-orange-500 opacity-[0.12] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="projects-glow-2 absolute bottom-[-5%] right-[10%] size-[24rem] rounded-full bg-cyan-500 opacity-[0.13] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col gap-10 md:gap-12">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl text-center text-white">
            PROJECTS
          </h1>
          <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-center text-base sm:text-lg md:text-xl p-3 text-gray-400">
            A few things I've built, end-to-end and shipped to production
          </p>
        </div>

        <div
          ref={gridRef}
          className="mx-auto w-full grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        >
          {ProjectInfo.map((item, i) => (
            <div
              key={i}
              className={`projects-reveal ${
                visible ? "is-visible" : ""
              } group relative flex flex-col w-full rounded-3xl bg-white/5 backdrop-blur-sm border ${
                i === 0
                  ? "border-[#8245ec]/40 hover:border-[#8245ec]/70"
                  : "border-white/10 hover:border-white/20"
              } p-5 gap-5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07]`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              {i === 0 && (
                <span className="absolute -top-3 left-5 bg-gradient-to-r from-orange-500 via-[#8245ec] to-cyan-400 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-md">
                  Flagship Project
                </span>
              )}

              <div className="overflow-hidden rounded-2xl">
                <img
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-xl sm:text-2xl font-bold text-white break-words">
                  {item.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-300">
                  {item.caption}
                </p>

                <div className="flex flex-row flex-wrap gap-2">
                  {item.stack.map((techstack, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs font-medium text-gray-300 whitespace-nowrap"
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          dotPalette[j % dotPalette.length]
                        }`}
                      ></span>
                      {techstack}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row flex-wrap gap-3 mt-1">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.web}
                    className="flex items-center font-semibold justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[110px]"
                  >
                    Web view
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.github}
                    className="flex items-center font-semibold justify-center px-5 py-2.5 rounded-full bg-white/5 border border-white/20 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 min-w-[110px]"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;