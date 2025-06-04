import React from 'react'
import { skillLogos } from '../info'

const Skills = () => {
  return (
    <section id='Skills'>
    <div className='h-screen p-20 flex flex-col justify-between gap-5'>
       <div>
        <h1 className="text-bold text-4xl text-center ">SKILLS</h1>
        <div className="w-25 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </div>
       
       {skillLogos.map((logo)=>(

<div>
{/* skills */}
<div className='flex flex-col gap-10 justify-baseline p-5 bg-gray-700 rounded-4xl  border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] '>
       <h1 className='text-3xl text-amber-700'>{logo.title}</h1>
       <div className='flex flex-row justify-baseline gap-11'>
       {logo.skills.map((logos)=>(
        <img className='h-20 w-auto' src={logos.logo} alt="" />
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
