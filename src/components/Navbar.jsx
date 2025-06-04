import React, { useState,useEffect } from 'react'


const Navbar = () => {

  const [isActive, setIsActive ] = useState('');
  const [isScrolle, setIsScrolle] = useState(false);

  //for smooth scrolling

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolle(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelOnMenuClick =(itemId)=>{
    setIsActive(itemId);

    const section = document.getElementById(itemId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

  }

  const menuItems = [
    {id : "Home", label : "Home" },
    {id : "About", label : "About" },
    {id: "Skills", label : "Skills"},
    {id : "Projects", label : "Projets"  },
    {id : "Education", label : "Education"},
    {id: "Contact me", label : "Contact me"}
  ]

  return (
    <div className={`fixed w-full bg-transparent flex flex-row  justify-around gap-4 items-center p-10 shadow-lg h-14 bg-linear-to-t from-black-500 to-indigo-500 ${isScrolle ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-cyan-400 bg-clip-text text-transparent  ... transition-transform hover:scale-110 duration-300">
      OM
    </span>

        <div>
             <ul className='flex flex-row justify-between gap-10.5 cursor-pointer '>
              {menuItems.map((item)=>(
                <li onClick={()=> handelOnMenuClick(item.id)} key={item.id} className={`${isActive === item.id ? " text-red-500 transition-all font-semibold" : ""}`}>{item.label}</li>
              )
              )}
             </ul>
        </div> 
  </div> 
  )  
}

export default Navbar
