import React from "react";
import { ProjectInfo } from "../info";

const Projects = () => {
  return (
    <section id="Projects"
    className=" md:mb-20 bg-gradient-to-t from to-blue-950 md:py-10 ">
      <div className=" md:px-20 py-20 flex flex-col justify-baseline gap-13">
        <div>
          <h1 className="text-bold text-4xl text-center ">PROJECTS</h1>
          <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-center text-2xl text-bold p-3 text-gray-400">
            This are the projects that showcass my skills in React js
          </p>
        </div>
        <div className=" mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {ProjectInfo.map((item,i) => (
            <div key={i} className="flex flex-col justify-around items-center w-full rounded-2xl bg-gray-600 p-5 gap-5 border border-white transition-transform duration-300 ease-in-out hover:-translate-y-2  ">
              <img className="w-full rounded-2xl" src={item.image} alt="" />
              <div className="flex flex-col justify-around gap-4">
              <h1 className="text-3xl text-amber-500 ">{item.title}</h1>
              <p>{item.caption}</p>
              <div className="flex flex-row justify-baseline gap-5">
                {item.stack.map((tackstack,i) => (
                  <p key={i} className="flex flex-row bg-gradient-to-b from-purple-950/80 to-purple-700 rounded-2xl p-1.5 text-xs font-bold text-purple-400 ">{tackstack}</p>
                ))}
              </div>
              
              <div className="flex flex-row gap-5">
                <a target="_blank"
                  className=" flex items-center font-bold justify-center w-25 h-10 rounded-3xl bg-blue-300 text-center text-blue-950"
                  href={item.web}
                >
                  Web view
                </a>
                <a target="_blank"
                  className=" flex items-center font-bold justify-center w-25 h-10 rounded-3xl bg-blue-600 text-center text-blue-200"
                  href={item.github}
                >code</a>
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
