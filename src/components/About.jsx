import React from 'react'

const About = () => {
  return (
    <section id='About'>
    <div  className="p-20 flex flex-col justify-baseline gap-20 align-center h-screen ">
      <div>
        <h1 className="text-bold text-4xl text-center ">ABOUT ME</h1>
        <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        
      </div>
      <div className='flex flex-row justify-between align-center'>
        <div>
        <p className="text-2xl leading-relaxed">
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
       
          <div>
                 
          </div>
       
      </div>
    </div>
    </section>
  );
}

export default About
