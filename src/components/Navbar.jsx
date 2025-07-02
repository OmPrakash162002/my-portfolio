import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";


const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const [isActive, setIsActive] = useState("");
  const [isScrolle, setIsScrolle] = useState(false);

  //for smooth scrolling

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolle(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelOnMenuClick = (itemId) => {
    setIsActive(itemId);
    setMenu(true)

    const section = document.getElementById(itemId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Education", label: "Education" },
    { id: "Contact me", label: "Contact me" },
  ];

  return (
    <nav
      className={`
 fixed z-50 px-4 md:px-[7vw] w-full bg-transparent flex flex-row  justify-between  items-center py-4 shadow-lg  bg-linear-to-t from-black-500 to-indigo-500 ${
   isScrolle
     ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
     : "bg-transparent"
 }`}
    >
      <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-cyan-400 bg-clip-text text-transparent  ... transition-transform hover:scale-110 duration-300">
        OM
      </span>

      <div>
        <ul className=" hidden md:flex flex-row justify-between gap-10.5 cursor-pointer ">
          {menuItems.map((item) => (
            <li
              onClick={() => handelOnMenuClick(item.id)}
              key={item.id}
              className={`${
                isActive === item.id
                  ? " text-red-500 transition-all font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* importaint links -Linkedin github */}

      <div className=" hidden md:flex flex-row md:gap-3 gap-2 text-lg  ">
        <a className="hover:scale-110 hover:text-red-400 duration-300" href="https://www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9" target="_blank"><IoLogoLinkedin></IoLogoLinkedin></a>
        <a className="hover:scale-110 hover:text-red-400 duration-300" href="https://github.com/OmPrakash162002" target="_blank"><VscGithub></VscGithub></a>
      </div>
      {menu ? 
        <IoMenu className="md:hidden size-6" onClick={() => setMenu(false)} />
       : 
        <RxCross2 className="size-6" onClick={() => setMenu(true)} />
        
       
}

{!menu && <ul className="fixed top-20 flex flex-col justify-center items-center w-95 gap-2 bg-blue-950/30 rounded-3xl p-3 bg-opacity-70 backdrop-blur-lg shadow-lg md:hidden">
  {menuItems.map((item)=>(
      <li
        onClick={() => handelOnMenuClick(item.id)}
        key={item.id}
        className={`${
          isActive === item.id
            ? " text-red-500 transition-all font-semibold"
            : ""
        }`}
      >
        {item.label}
      </li>
  ))}
  <div className="flex flex-row gap-3 text-lg  ">
        <a className=" text-blue-400 " href="https://www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9" target="_blank"><IoLogoLinkedin></IoLogoLinkedin></a>
        <a className=" text-blue-400 " href="https://github.com/OmPrakash162002" target="_blank"><VscGithub></VscGithub></a>
      </div>
</ul> }

    </nav>
  );
};

export default Navbar;
