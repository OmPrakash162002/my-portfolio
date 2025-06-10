import React from 'react'
import { EducationInfo } from '../info'

const Education = () => {
  return (

    <section id='Education'
    className='bg-gradient-to-b from to-blue-950'
    >
      <div className='md:p-20 py-20 flex flex-col justify-between gap-15'>
      <div>
        <h1 className="text-bold text-4xl text-center ">EDUCATION</h1>
        <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-center text-2xl text-bold p-3 text-gray-400">
            My all Education Infomation till now 
          </p>
      </div>
      
      <div className='relative flex flex-col md:gap-20 gap-10 justify-between items-center '>
      <div className="absolute sm:left-1/2 left-15 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-purple-700 h-460"></div>
          {EducationInfo.map((info,index)=>(
            //education container
            
            <div key={index} className={` flex flex-col justify-around rounded-2xl align-center md:w-140 w-85 md:h-full h-100  bg-gray-600 p-5 gap-5 border border-white  mb-10 ml-6 hover:scale-105 duration-300 transform transition-transform   ${index %2===0 ? "md:ml-50 md:mr-auto ":"md:ml-auto md:mr-50 "} relative`}>
              
              <div className='flex flex-col gap-4 overflow-auto'>
                <div className='flex flex-row  gap-4'>
                <img className='h-20 w-auto rounded-2xl' src={info.collageLogo} alt="" />
                <div>
                  <h1 className='text-2xl font-bold '>{info.degree}</h1>
                  <p className='text-red-400 font-semibold'>{info.collageName}</p>
                  <p className='text-orange-200'>{info.date}</p>
                </div>
                </div>
                <p className='font-bold text-orange-300'>{info.cgpa}</p>
                <p className=''>{info.descereption}</p>
              </div>
              
            </div>
            
          ))}
          </div>
      </div>
    </section>
  )
}

export default Education
