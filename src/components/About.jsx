import React from 'react'
import aboutImg from "../assets/about.jpg"

const About = () => {
  return (
    <section id='About'
    className='bg-gradient-to-t from to-blue-950 h-screen'
    >
    <div  className="p-20 flex flex-col justify-baseline gap-20 md:gap-25 align-center  ">
      <div>
        <h1 className="text-bold text-4xl text-center ">ABOUT ME</h1>
        <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        
      </div>
      <div className='flex md:flex-row flex-col justify-between md:overflow-visible overflow-auto gap-15 items-center'>
        <div >
        <p className="text-lg leading-relaxed w-150 text-gray-300">
          I'm a dedicated Frontend Developer specializing in React.js, with a
          strong command of modern JavaScript (ES6+), JSX, and component-based
          architecture. I love building dynamic, high-performance web
          applications with reusable components, efficient state management
          (using hooks or libraries like Redux), and clean, modular code. I'm
          experienced in using tools like Vite, Tailwind CSS, Axios, and React
          Router to craft seamless and responsive user interfaces. I'm
          constantly exploring the React ecosystem and enjoy working on
          challenging projects that help me grow and stay current in the
          fast-paced world of web development. </p>
        </div>
        <div className='bg-white w-0.5 h-80 hidden md:block'></div>
        <div>
          <img className='h-50 rounded-2xl' src={aboutImg} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
}

export default About
