import { useState } from "react"
import { close, logo3, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="rounded-full bg-blue-gradient w-[60px] h-[60px]">
        <img src={logo3} alt="" className="w-[60px] h-[60px]" />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {
          navLinks.map((link, index) => (
            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${ index === navLinks.links -1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
              <a href={link.id} >{link.title}</a>
            </li>
          ))
        }
      </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
           <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

           <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
        {
          navLinks.map((link, index) => (
            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${ index === navLinks.links -1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
              <a href={link.id} >{link.title}</a>
            </li>
          ))
        }
      </ul>
           </div>
        </div>
    </nav>
  )
}

export default Navbar