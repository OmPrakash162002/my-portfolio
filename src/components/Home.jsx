import React from "react";
import myphoto from "../assets/mypic.jpg";

const Home = () => {
  return (
    <section id="Home">
    <div className="flex flex-col justify-center items-center p-15 h-screen gap-6">
      <div className="size-70 ">
        <img
          className="rounded-full size-70"
          src={myphoto}
          alt="my profile photo"
        />
      </div>

      <div className="h-100px flex flex-col justify-center align-center gap-1.5">
        <h1 className="text-4xl text-center">
          Hi, I am Om Prakash Vishwakarma
        </h1>
        <p className="text-center text-6xl">
          I am a{" "}
          <b className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Forntend developer
          </b>
        </p>
      </div>

      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        My Resume
      </button>
    </div>
    </section>
  );
};

export default Home;
