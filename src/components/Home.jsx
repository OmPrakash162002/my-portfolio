import React from "react";
import myphoto from "../assets/mypic.jpg";
import { Typewriter } from 'react-simple-typewriter';
import { RxDoubleArrowDown } from 'react-icons/rx';


const Home = () => {
  return (
    <section id="Home"
   className="bg-gradient-to-b from to-blue-950"
  >

    <div className="flex flex-col md:justify-between justify-end items-center py-30 h-screen w-full md:gap-8 gap-10">
      <div className="size-50 md:size-70 flex flex-col items-center ">
        <img
          className="rounded-full md:size-70 sm:size-50 size-50"
          src={myphoto}
          alt="my profile photo"
        />
      </div>

      <div className="h-100px flex flex-col justify-center items-center align-center gap-1.5">
        <h1 className="md:text-4xl text-2xl text-center">
          Hi, I am Om Prakash Vishwakarma  
        </h1>
           <h1 className="w-auto font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent flex md:flex-row flex-col gap-2 text-3xl md:text-5xl items-center"> 

            <span className="text-white font-semibold">I am a</span>
             <Typewriter
             words={['MERN Stack Developer']}
             loop={0} 
             cursor
             typeSpeed={100}
             deleteSpeed={50}
             delaySpeed={2000}
          />
        </h1>
        
      </div>

      <a href="https://drive.google.com/file/d/1N5HF6IWtZqazFjwcLoQlliFuWd9BKT-S/view?usp=drive_link" target="_blank" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        My Resume
      </a>
      <div className="flex justify-center mt-10 animate-bounce">
      <RxDoubleArrowDown className="text-3xl text-gray-500" />
    </div>
    </div>
    </section>
  );
};

export default Home;
