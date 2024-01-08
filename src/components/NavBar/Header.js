import React, { useState } from 'react'
import logo from '../../assets/logo1.png'
import menu from '../../assets/menubar1.png'
import './Header.css'
import {Link} from 'react-scroll'


function Header() {
   const[showMenu, setShowMenu]=useState(false);
  return (
   <nav className='navbar'>
    <img src={logo} className='logo'></img>
    <div className='desktopMenu'>
       <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItems">Home</Link>
       <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItems">About</Link>
       <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItems">Portfolio</Link>
       <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItems">Clients</Link>
    </div>
    <button className='desktopMenubtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
        Contact Me
    </button>

    <img src={menu} className='mobMenu' onClick={()=>setShowMenu(!showMenu)} ></img>
    <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
       <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
       <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
       <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
       <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
       <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>

   </nav>

  )
}

export default Header