import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {

  
const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_yybn8dm","template_ege8ei8",form.current, "CEEi8pH8xCiZTCDr3").then(()=>{
      alert("Message send succesfully!")
      form.current.reset();
    },()=>{
      alert("error, please try again")
    })
};

  const form = useRef();
  return (
    <section id='Contact me'
    className='bg-gradient-to-t from to-blue-950'
    >
       <div className='h-screen md:mb-20 md:py-20 py-40 flex flex-col gap-15  items-center'>
       <div>
        <h1 className="text-bold text-4xl text-center ">Contact me</h1>
        <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-center text-2xl text-bold p-3  text-gray-400">
            Want to connect with me 
          </p>
      </div>

      {/* contect form container */}
      <div className='flex flex-col justify-around gap-10 p-8  bg-gray-800 rounded-2xl w-85 md:w-150'>
        <h1 className='text-2xl font-semibold flex items-center justify-center'>Connect with me</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-around gap-5' action="">
          <input type="email" 
          name='email'
          id='email'
          placeholder='Your Email'
          required
          className='bg-gray-500 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 ' />

          <input type="text"
          name='name'
          id='name'
          placeholder='Full Name' 
          required
          className='bg-gray-500 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500'/>

          <input type="text"
          name='subject'
          id='subject'
          placeholder='Subject'
          required 
          className='bg-gray-500 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500'/>

          <textarea name="message"
           id="message"
           rows={4}
           placeholder='Message'
           required
           className='bg-gray-500 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500'></textarea>
           <button type='submit' className='bg-blue-700 text-2xl text-white font-bold rounded-2xl h-10 cursor-pointer '>Send</button>
        </form>
      </div>
       </div>
    </section>
  )
}

export default Contact
