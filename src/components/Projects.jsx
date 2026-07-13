import React from "react";
import { ProjectInfo } from "../info";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="md:mb-20 bg-gradient-to-t from to-blue-950 py-10 md:py-16"
    >
      <div className="px-4 sm:px-8 md:px-20 flex flex-col gap-10 md:gap-13">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl text-center">
            PROJECTS
          </h1>
          <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-center text-lg sm:text-2xl font-bold p-3 text-gray-400">
            These are the projects that showcase my skills in React js
          </p>
        </div>

        <div className="mx-auto w-full grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {ProjectInfo.map((item, i) => (
            <div
              key={i}
              className="flex flex-col w-full rounded-2xl bg-gray-600 p-5 gap-5 border border-white transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <img
                className="w-full aspect-video object-cover rounded-2xl"
                src={item.image}
                alt={item.title}
              />

              <div className="flex flex-col gap-4">
                <h1 className="text-2xl sm:text-3xl text-amber-500 break-words">
                  {item.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-100">
                  {item.caption}
                </p>

                <div className="flex flex-row flex-wrap gap-2">
                  {item.stack.map((techstack, j) => (
                    <p
                      key={j}
                      className="bg-gradient-to-b from-purple-950/80 to-purple-700 rounded-2xl px-2.5 py-1.5 text-xs font-bold text-purple-300 whitespace-nowrap"
                    >
                      {techstack}
                    </p>
                  ))}
                </div>

                <div className="flex flex-row flex-wrap gap-4 mt-1">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center font-bold justify-center px-5 h-10 rounded-3xl bg-blue-300 text-blue-950 min-w-[100px]"
                    href={item.web}
                  >
                    Web view
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center font-bold justify-center px-5 h-10 rounded-3xl bg-blue-600 text-blue-200 min-w-[100px]"
                    href={item.github}
                  >
                    code
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