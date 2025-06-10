import React from "react";
import { ProjectInfo } from "../info";

const Projects = () => {
  return (
    <section id="Projects"
    className=" md:mb-20 bg-gradient-to-t from to-blue-950 md:py-10 ">
      <div className=" md:px-20 py-20 flex flex-col justify-baseline gap-13   ">
        <div>
          <h1 className="text-bold text-4xl text-center ">PROJECTS</h1>
          <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-center text-2xl text-bold p-3 text-gray-400">
            This are the projects that showcass my skills in React js
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          {ProjectInfo.map((item,i) => (
            <div key={i} className="flex flex-col justify-around  md:w-100 w-70 rounded-4xl bg-gray-600 p-5 gap-5 border border-white transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
              <img className="w-100 rounded-4xl" src={item.image} alt="" />
              <h1 className="text-3xl text-amber-500 ">{item.title}</h1>
              <p>{item.caption}</p>
              <div className="flex flex-row justify-baseline gap-5">
                {item.stack.map((tackstack,i) => (
                  <p key={i} className="flex flex-row bg-purple-950 rounded-2xl p-1.5 text-xs font-bold text-purple-400">{tackstack}</p>
                ))}
              </div>
              <div className="flex flex-row gap-5">
                <a
                  className=" flex items-center font-bold justify-center w-25 h-10 rounded-3xl bg-blue-300 text-center text-blue-950"
                  href=""
                >
                  Web view
                </a>
                <a
                  className=" flex items-center font-bold justify-center w-25 h-10 rounded-3xl bg-blue-600 text-center text-blue-200"
                  href=""
                >code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
