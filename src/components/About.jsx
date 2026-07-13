import React, { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/about.jpg";

const techCategories = [
  {
    label: "Frontend",
    dot: "bg-cyan-400",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    dot: "bg-[#8245ec]",
    items: ["Node.js", "Prisma", "PostgreSQL", "Inngest"],
  },
  {
    label: "AI & Data",
    dot: "bg-orange-400",
    items: ["Gemini AI", "Pinecone", "RAG Pipelines"],
  },
  {
    label: "Tools",
    dot: "bg-cyan-400",
    items: ["GitHub", "Better Auth", "Polar", "Vercel"],
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const stackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (stackRef.current) observer.observe(stackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="About"
      className="relative bg-gradient-to-t from to-blue-950 w-full overflow-hidden"
    >
      <style>{`
        @keyframes about-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes about-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.08); }
        }
        @keyframes about-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.05); }
        }
        .about-glow-1 { animation: about-drift-1 20s ease-in-out infinite; }
        .about-glow-2 { animation: about-drift-2 24s ease-in-out infinite; }
        .about-reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .about-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .about-glow-1, .about-glow-2 { animation: none; }
          .about-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      {/* ambient glow, distinct placement/timing from Home so it reads as its own section */}
      <div
        className="about-glow-1 absolute top-[-5%] right-[10%] size-[26rem] rounded-full bg-[#8245ec] opacity-[0.15] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="about-glow-2 absolute bottom-[0%] left-[5%] size-[24rem] rounded-full bg-cyan-500 opacity-[0.12] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-20 md:py-24 flex flex-col gap-14 md:gap-16">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl text-center text-white">
            ABOUT ME
          </h1>
          <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-12 md:gap-14 items-center">
          <div className="relative shrink-0 group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 via-[#8245ec] to-cyan-400 opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-500"></div>
            <img
              className="relative w-48 sm:w-56 md:w-64 aspect-square object-cover rounded-2xl border-2 border-[#050414] transition-transform duration-500 group-hover:scale-[1.03]"
              src={aboutImg}
              alt="Om Prakash Vishwakarma"
            />
          </div>

          <div className="md:w-1/2 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:leading-relaxed text-gray-300">
              I'm Om Prakash, an MCA graduate from Guru Ghasidas
              Vishwavidyalaya, Bilaspur, and a full-stack developer who cares
              more about shipping real, working products than polished demos.
            </p>
            <p className="text-base sm:text-lg md:leading-relaxed text-gray-300">
              My flagship project,{" "}
              <span className="text-cyan-400 font-semibold">
                AI Code Review
              </span>
              , is a live SaaS platform that uses Google's Gemini AI and a RAG
              pipeline to automatically review GitHub pull requests — built
              end-to-end and deployed on Vercel.
            </p>
            <p className="text-base sm:text-lg md:leading-relaxed text-gray-300">
              I work mainly with Next.js, TypeScript, and PostgreSQL, and I'm
              especially drawn to where everyday web development meets AI:
              background jobs, vector search, and language models woven into
              tools developers actually use.
            </p>
          </div>
        </div>

        {/* categorized tech stack, grounded in real project work, scroll-revealed */}
        <div ref={stackRef} className="flex flex-col gap-6">
          <h2
            className={`about-reveal text-center text-gray-400 text-sm sm:text-base uppercase tracking-widest ${
              visible ? "is-visible" : ""
            }`}
          >
            What I build with
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {techCategories.map((cat, i) => (
              <div
                key={cat.label}
                className={`about-reveal ${visible ? "is-visible" : ""} bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-white/20 hover:bg-white/[0.07] transition-colors duration-300`}
                style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${cat.dot}`}></span>
                  <span className="text-white font-semibold text-sm">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="text-gray-300 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;