// Imports

import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, vmlogo, logo1, vmtintslogo, menu, close} from '../assets';


const Navbar = () => {

// Configure useStates
const [active, setActive] = useState("") 
const [toggle, setToggle] = useState(false)

useEffect(() => {
  // Add an event listener to scroll and remove it on component unmount
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Function to handle the scroll event
const handleScroll = () => {
  // Add the CSS class 'fixed' to the navbar when scrolling down, otherwise remove it
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  }
}


  return (

    // Navbar has class name which refers to the X-padding from styles file
    <nav className= {`${styles.paddingX}`} py-16 w-full flex items-center fixed top-0 z-20 bg-black>

      
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto"> 

      {/* Logo and title */}
        <Link to = '/' className="flex items-center gap-2" onClick={() => {setActive("") // If click on logo and name it sets active variable to empty string and scrolls to top of page
          window.scrollTo(0, 0)
          }}>
          <img src= {vmtintslogo} alt = "logo" className="w-12 h-12 object-contain rounded-full"></img>
          {/* if screen is too small then set the content in span tag to hidden */}
          <p className="text-white text-[18px] font-bold cursor-pointer"></p> 
        </Link>

        {/* Navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer`
              }
              // If click on any of the navigation links set the active variable equal to the link.title of that specific link
              onClick={() => setActive(link.title)}>
              <a href= {`#${link.id}`}>{link.title}</a>
            </li>
              ))}

        </ul>

        {/* When screen size small do NOT display navigation links but add them under a hamburger menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
        // If toggle variable is false, show menu icon. If true, show the close icon 
        src={toggle ? close : menu} 
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        // When click on the menu/close icon, change the value of the toggle variable to the opposite of what it was, which will show a different icon
        onClick={() => setToggle(!toggle)}/>
        </div>
        
        {/* // If toggle variable is false, keep navigation links hidden. If true, show the navigation links */}
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
        z-10 rounded-xl`}>

        {/* Navigation links */}
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title
              ? "text-white"
              : "text-secondary"
              }
              font-poppins font-medium cursor-pointer text-[16px]`
              }
              onClick={() => {
              setToggle(!toggle);
              setActive(link.title);
              }}>
              <a href= {`#${link.id}`}>{link.title}</a>
          </li>
          ))}
        </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
