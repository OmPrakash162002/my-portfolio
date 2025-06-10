import React from 'react'
import { skillLogos } from '../info'

const Skills = () => {
  return (
    <section id='Skills'
    className=' bg-gradient-to-b from to-blue-950   '
  >
    <div className=' pt-20  md:px-20  px-8 flex flex-col justify-between  gap-5   '>
       <div>
        <h1 className="text-bold text-4xl text-center ">SKILLS</h1>
        <div className="w-25 h-1 bg-[#8245ec] mx-auto mt-2 "></div>
        <p className="text-center md:text-2xl text-bold p-3 text-gray-400 ">
            This are the skills that I learn through my development journey
          </p>
      </div>
       
       {skillLogos.map((logo,index)=>(

<div key={index}>
{/* skills */}
<div className='flex flex-col gap-10 justify-baseline p-5 bg-gray-700 rounded-4xl  border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-102 duration-300 '>
       <h1 className='md:text-3xl text-2xl text-amber-700'>{logo.title}</h1>
       <div className='flex flex-row justify-center md:justify-baseline gap-11 flex-wrap '>
       {logo.skills.map((logos,index)=>(
        <img key={index} className='md:h-20 md:w-auto h-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 ' src={logos.logo} alt="" />
       ))}
     </div>  
</div>
</div>

       ))}
    </div>
    </section>
  )
}

export default Skills
