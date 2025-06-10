import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='h-50 w-full P-10 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from to-gray-500 '>
       <h1 className='text-2xl bg-gradient-to-r from-blue-600 to bg-orange-600 bg-clip-text text-transparent '>OM PRAKASH VISHWAKARMA</h1>
      <div className='flex flex-row justify-between md:gap-10 gap-5  text-2xl '>
         <a className='hover:scale-120 transition-transform duration-200 hover:text-blue-600' href="https://www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9" target='_blank'><IoLogoLinkedin></IoLogoLinkedin></a>
         <a className='hover:scale-120 transition-transform duration-200 hover:text-blue-600' href="https://github.com/OmPrakash162002" target='_blank'><VscGithub></VscGithub></a>
      </div>
      <p className='text-white/80 '>&copy; 2025 Om Prakash Vishwakarma. All Rights Reserved.</p>
    </div>
  
  )
}

export default Footer
