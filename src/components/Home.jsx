import React from "react";
import myphoto from "../assets/mypic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { RxDoubleArrowDown } from "react-icons/rx";

const techStack = [
  { name: "Next.js", dot: "bg-cyan-400" },
  { name: "TypeScript", dot: "bg-[#8245ec]" },
  { name: "Node.js", dot: "bg-orange-400" },
  { name: "PostgreSQL", dot: "bg-cyan-400" },
  { name: "Prisma", dot: "bg-[#8245ec]" },
  { name: "Gemini AI", dot: "bg-orange-400" },
];

const scrollToId = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  return (
    <section
      id="Home"
      className="relative bg-gradient-to-b from to-blue-950 min-h-screen w-full overflow-hidden"
    >
      <style>{`
        @keyframes blob-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 50px) scale(1.05); }
        }
        @keyframes drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -50px) scale(1.1); }
        }
        @keyframes drift-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -30px) scale(1.05); }
        }
        .hero-blob {
          animation: blob-morph 9s ease-in-out infinite;
        }
        .hero-fade {
          opacity: 0;
          animation: fade-up 0.6s ease-out forwards;
        }
        .glow-1 { animation: drift-1 16s ease-in-out infinite; }
        .glow-2 { animation: drift-2 20s ease-in-out infinite; }
        .glow-3 { animation: drift-3 18s ease-in-out infinite; }
        .glow-4 { animation: drift-4 22s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-blob, .glow-1, .glow-2, .glow-3, .glow-4 { animation: none; }
          .hero-fade { opacity: 1; animation: none; }
        }
      `}</style>

      {/* ambient glow spread across the whole background, not tied to the photo */}
      <div
        className="glow-1 absolute top-[-10%] left-[5%] size-[30rem] rounded-full bg-[#8245ec] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="glow-2 absolute top-[10%] right-[10%] size-[26rem] rounded-full bg-cyan-500 opacity-[0.15] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="glow-3 absolute bottom-[5%] left-[20%] size-[24rem] rounded-full bg-orange-500 opacity-[0.12] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="glow-4 absolute bottom-[-10%] right-[5%] size-[28rem] rounded-full bg-[#8245ec] opacity-[0.15] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 px-4 sm:px-6 md:px-16 py-24 md:py-20 max-w-7xl mx-auto">
        {/* text column */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left gap-5 md:w-1/2">
          <div
            className="hero-fade flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400">
              Open to work
            </span>
          </div>

          <h1
            className="hero-fade text-lg sm:text-xl md:text-2xl text-gray-300"
            style={{ animationDelay: "80ms" }}
          >
            Hi, I'm Om Prakash Vishwakarma
          </h1>

          <h1
            className="hero-fade font-bold flex flex-col gap-1 text-3xl sm:text-4xl md:text-5xl"
            style={{ animationDelay: "160ms" }}
          >
            <span className="text-white font-semibold">I build</span>
            <span className="bg-gradient-to-r from-orange-500 via-[#8245ec] to-cyan-400 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Full Stack Web Apps",
                  "with React & Next.js",
                  "with AI Integrations",
                ]}
                loop={0}
                cursor
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <div
            className="hero-fade flex flex-row flex-wrap justify-center md:justify-start gap-2 max-w-md"
            style={{ animationDelay: "240ms" }}
          >
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-200"
              >
                <span className={`size-1.5 rounded-full ${tech.dot}`}></span>
                {tech.name}
              </span>
            ))}
          </div>

          <div
            className="hero-fade flex flex-row flex-wrap justify-center md:justify-start gap-4 mt-2"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="https://drive.google.com/file/d/1SlLzpHMyWj9-H9ep2WIi4HVLHhgX2URI/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              My Resume
            </a>
            <button
              onClick={() => scrollToId("Projects")}
              className="bg-white/5 border border-white/20 text-white font-semibold py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-pointer"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* photo column with blob shape (no separate localized halo now) */}
        <div
          className="hero-fade order-1 md:order-2 md:w-1/2 flex justify-center"
          style={{ animationDelay: "120ms" }}
        >
          <img
            src={myphoto}
            alt="Om Prakash Vishwakarma"
            className="hero-blob relative size-64 sm:size-80 md:size-96 object-cover border-4 border-[#050414] shadow-2xl"
          />
        </div>
      </div>

      {/* scroll cue pinned to bottom so it's always visible regardless of content height */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 justify-center animate-bounce">
        <RxDoubleArrowDown className="text-3xl text-gray-500" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Home;